import dbConnect from "@/lib/dbConnect";
import TodoModel from "@/models/Todo.model";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import { getServerSession, User } from "next-auth";

export async function POST(request: Request) {
  await dbConnect();

  const session = await getServerSession(authOptions);
  const user: User = session?.user;

  if (!session || !session.user) {
    return Response.json(
      { success: false, message: "Not authenticated" },
      { status: 401 }
    );
  }

  const userId = user.id;

  const { todo } = await request.json();

  try {
    const todo = await TodoModel.create();

    return Response.json(
      { success: true, message: "Todo created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
