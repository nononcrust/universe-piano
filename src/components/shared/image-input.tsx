import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ImageInputProps {
  value: File[];
  onChange: (value: File[]) => void;
}

export const ImageInput = ({ value, onChange }: ImageInputProps) => {
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
    <div className="flex gap-4">
      <div>
        <input
          className="hidden"
          type="file"
          onChange={onImageChange}
          ref={fileInputRef}
          accept="image/*"
        />
        <Button className="h-24 flex-col" variant="secondary" onClick={onAddImageButtonClick}>
          <Icon.Camera />
          <p className="mt-2">사진 업로드</p>
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        {imageUrls.map((url, index) => (
          <ImagePreviewItem key={index} url={url} onDelete={onImageDelete} />
        ))}
      </div>
    </div>
  );
};

interface ImagePreviewItemProps {
  url: string;
  onDelete: () => void;
}

const ImagePreviewItem = ({ url, onDelete }: ImagePreviewItemProps) => {
  return (
    <div className="relative">
      <Image
        width={96}
        height={96}
        src={url}
        className="h-24 w-24 rounded-lg border"
        alt="이미지 미리보기"
      />
      <div className="absolute -right-1 -top-1 flex cursor-pointer rounded-full bg-black p-[2px] transition hover:bg-gray-700">
        <Icon.X className="h-4 w-4 text-white" onClick={onDelete} />
      </div>
    </div>
  );
};
