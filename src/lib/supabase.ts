import { createClient } from "@supabase/supabase-js";
import { nanoid } from "nanoid";

const PROJECT_URL = process.env.SUPABASE_PROJECT_URL!;
const BUCKET_NAME = process.env.SUPABASE_BUCKET_NAME!;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY!;
const STORAGE_URL = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL!;

export const UPLOAD_FOLDER = {
  AUDITION: "/audition",
  PROFILE: "/profile",
  REVIEW: "/review",
} as const;

const uploadFile = async (file: File, folder?: string) => {
  const supabase = createClient(PROJECT_URL, SERVICE_KEY);

  const path = folder ? `${folder}/${nanoid()}` : nanoid();
  const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(path, file);

  if (error) {
    throw new Error(error.message);
  } else {
    return data;
  }
};

const deleteFiles = async (paths: string[]) => {
  const supabase = createClient(PROJECT_URL, SERVICE_KEY);

  const { error } = await supabase.storage.from(BUCKET_NAME).remove(paths);

  if (error) {
    throw new Error(error.message);
  }
};

const getFileUrl = (path: string) => {
  return `${STORAGE_URL}${path}`;
};

export const storage = {
  uploadFile,
  deleteFiles,
  getFileUrl,
};
