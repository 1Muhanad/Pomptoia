import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
export const dynamic = "force-dynamic";
export const POST = async (req) => {
  const { userId, tag, prompt } = await req.json();

  try {
    await connectToDB();

    const newPrompt = await Prompt.create({
      creator: userId,
      prompt,
      tag,
    });

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
};
