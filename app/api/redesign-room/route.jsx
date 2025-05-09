import { AiGeneratedImage } from "@/config/schema";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN
});

export async function POST(req, res) {
  //const {user}=useUser();

  const { imageUrl, roomType, designType, userEmail } = await req.json();


  // Convert Image to AI Image

  try {
    const output = await replicate.run(
      "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
      {
        input: {
          image: imageUrl,
          prompt: 'A ' + designType + ' ' + roomType + ' design with a interior design style',
          guidance_scale: 15,
          negative_prompt: "lowres, watermark, banner, logo, watermark, contactinfo, text, deformed, blurry, blur, out of focus, out of frame, surreal, extra, ugly, upholstered walls, fabric walls, plush walls, mirror, mirrored, functional, realistic",
          prompt_strength: 0.8,
          num_inference_steps: 50
        }
      }
    );
    console.log(output);
    return NextResponse.json({ result: output });
    // Convert Output Url to BASE64 Image
    const base64Image=await ConvertImageToBase64 (output);
    // Save Base64 to Firebase
    const fileName = Date.now() + '.png';
    const storageRef = ref(storage, 'room-redesign/' + fileName);
    await uploadString(storageRef, base64Image, 'data_url');
    const downloadUrl = await getDownloadURL (storageRef);
    console.log(downloadUrl);
    

    // Save All to Database

    const dbResult=await db.insert(AiGeneratedImage).values({
      roomType: roomType,
      designType: designType,
      orgImage: imageUrl,
      aiImage: downloadUrl,
      userEmail:userEmail
    }).returning({id:AiGeneratedImage.id});
    console.log(dbResult);
    return NextResponse.json({ 'result':dbResult[0]});


  } catch (e) {
    return NextResponse.json({ error: e.message });

  }






}