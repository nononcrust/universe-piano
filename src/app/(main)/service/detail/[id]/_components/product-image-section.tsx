"use client";

import { storage } from "@/lib/supabase";
import Image from "next/image";
import { usePageContext } from "../_context";

export const ProductImageSection = () => {
  const { product } = usePageContext();

  return (
    <div className="flex-1">
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border">
        <Image
          fill
          src={storage.getFileUrl(product.thumbnailUrl)}
          alt="썸네일 이미지"
          className="aspect-square"
        />
      </div>
    </div>
  );
};
