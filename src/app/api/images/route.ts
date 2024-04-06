import { storage } from "@/lib/supabase";
import { uploadRequestSchema } from "@/services/image";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const body = uploadRequestSchema.parse(Object.fromEntries(formData.entries()));

  const data = await storage.uploadFile(body.file, body.uploadFolder || "");

  return Response.json(data.path);
};
