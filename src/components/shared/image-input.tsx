import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ACCEPT = ".jpg,.jpeg,.png";

interface ImageInputProps {
  onChange: (value: File[]) => void;
}

export const ImageInput = React.forwardRef<HTMLButtonElement, ImageInputProps>(
  ({ onChange }, ref) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const onAddImageButtonClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      event.preventDefault();

      fileInputRef.current?.click();
    };

    const onImageChange: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
      const fileList = event.target.files;

      if (!fileList) return;

      const file = fileList[0];

      onChange([file]);

      const imageObjectUrl = URL.createObjectURL(file);
      setImageUrls([imageObjectUrl]);

      event.target.value = "";
    };

    const onImageDelete = () => {
      onChange([]);
      setImageUrls([]);
    };

    useEffect(() => {
      return () => {
        imageUrls.forEach(URL.revokeObjectURL);
      };
    }, [imageUrls]);

    return (
      <div className="flex flex-col gap-4">
        <input
          className="hidden"
          type="file"
          onChange={onImageChange}
          ref={fileInputRef}
          accept={ACCEPT}
        />
        <Button className="h-10" variant="outlined" onClick={onAddImageButtonClick} ref={ref}>
          <Icon.Camera className="mr-2 h-5 w-5" />
          사진 업로드
        </Button>
        <div className="flex flex-col gap-4">
          {imageUrls.map((url, index) => (
            <ImagePreviewItem key={index} url={url} onDelete={onImageDelete} />
          ))}
        </div>
      </div>
    );
  },
);
ImageInput.displayName = "ImageInput";

interface ImagePreviewItemProps {
  url: string;
  onDelete: () => void;
}

const ImagePreviewItem = ({ url, onDelete }: ImagePreviewItemProps) => {
  return (
    <div className="relative bg-content-light">
      <Image
        width={400}
        height={240}
        src={url}
        className="h-56 w-full rounded-lg border object-contain"
        alt="이미지 미리보기"
      />
      <div className="absolute -right-1 -top-1 flex cursor-pointer rounded-full bg-black p-[2px] transition hover:bg-gray-700">
        <Icon.X className="h-4 w-4 text-white" onClick={onDelete} />
      </div>
    </div>
  );
};
