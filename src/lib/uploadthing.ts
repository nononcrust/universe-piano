import { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateComponents } from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react/hooks";

export const { UploadButton } = generateComponents<OurFileRouter>();

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
