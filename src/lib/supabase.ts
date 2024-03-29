import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const PROJECT_URL = process.env.SUPABASE_PROJECT_URL!;
const BUCKET_NAME = process.env.SUPABASE_BUCKET_NAME!;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY!;
const STORAGE_URL = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL!;

const supabase = createClient(PROJECT_URL, SERVICE_KEY);

export const uploadFile = async (file: File, folder?: string) => {
  const path = folder ? `${folder}/${uuidv4()}` : uuidv4();
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)

    .upload(path, file);

  if (error) {
    throw new Error(error.message);
  } else {
    return data;
  }
};

export const getFileUrl = (path: string) => {
  return `${STORAGE_URL}/${path}`;
};
