import { FORM } from "@/constants/form";
import { z } from "zod";

export const titleSchema = z
  .string()
  .max(100, { message: FORM.ERROR.MAX_LENGTH(100) })
  .nonempty(FORM.ERROR.REQUIRED);

export const contentSchema = z
  .string()
  .max(1000, { message: FORM.ERROR.MAX_LENGTH(1000) })
  .nonempty(FORM.ERROR.REQUIRED);

export const imagesSchema = z.array(z.string()).optional();

export const nicknameSchema = z
  .string()
  .min(2)
  .max(20, { message: FORM.ERROR.MAX_LENGTH(20) })
  .nonempty(FORM.ERROR.REQUIRED);

export const emailSchema = z.string().email().nonempty(FORM.ERROR.REQUIRED);
