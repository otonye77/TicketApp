import Ticket from "../(models)/ticket";
import { NextResponse } from "next/server";

export const Post = async (req) => {
  try {
    console.log("req body", req.body);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
