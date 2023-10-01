import z from "zod";

export const signupRequestSchema = z.object({
  nickname: z.string().max(20).nonempty(),
  phone: z.string().min(10).max(13).nonempty(),
  kakaoId: z.string().nonempty(),
  profileImage: z.string().nonempty(),
});

export type SignupRequestSchema = z.infer<typeof signupRequestSchema>;

export type SignupApiBody = SignupRequestSchema;
