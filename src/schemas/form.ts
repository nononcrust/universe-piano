import { FORM } from "@/constants/form";
import { z } from "zod";

export const titleSchema = z
  .string()
  .min(1)
  .max(100, { message: FORM.ERROR.MAX_LENGTH(100) });

export const contentSchema = z
  .string()
  .min(1)
  .max(1000, { message: FORM.ERROR.MAX_LENGTH(1000) });

// TODO: any 타입 수정
export const imagesSchema = z.any();

export const nicknameSchema = z
  .string()
  .min(2, { message: "최소 2글자 이상 입력해주세요." })
  .max(10)
  .refine(
    (value) => {
      return koreanEnglishNumberRegExp.test(value);
    },
    { message: "한글, 영문, 숫자만 입력해주세요." },
  );

export const emailSchema = z.string().email("올바른 이메일 형식을 입력해주세요.");

const koreanEnglishNumberRegExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9|\*]+$/;
