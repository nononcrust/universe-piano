import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { imageApi } from "@/features/image";
import Image from "next/image";
import { useRef, useState } from "react";

interface ImageInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  uploadFolder?: string;
}

export const ImageInput = ({ value, onChange, uploadFolder }: ImageInputProps) => {
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onAddImageButtonClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    fileInputRef.current?.click();
  };

  const onImageChange: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    const fileList = event.target.files;

    if (!fileList) return;

    setIsUploading(true);
    const response = await imageApi.uploadList(fileList);
    setIsUploading(false);

    if (response.urls.length === 0) return;

    onChange([...value, ...response.urls]);

    event.target.value = "";
  };

  const onImageDelete = (url: string) => {
    if (isUploading) return;

    onChange(value.filter((item) => item !== url));
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <input
          className="hidden"
          type="file"
          onChange={onImageChange}
          ref={fileInputRef}
          accept="image/*"
        />
        <Button variant="secondary" onClick={onAddImageButtonClick} disabled={isUploading}>
          {isUploading ? "업로드 중..." : "이미지 추가"}
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        {value.map((url, index) => (
          <ImagePreviewItem key={index} imageUrl={url} onDelete={onImageDelete} />
        ))}
      </div>
    </div>
  );
};

interface ImagePreviewItemProps {
  imageUrl: string;
  onDelete: (url: string) => void;
}

const ImagePreviewItem = ({ imageUrl, onDelete }: ImagePreviewItemProps) => {
  return (
    <div className="relative">
      <Image
        width={96}
        height={96}
        src={imageUrl}
        className="h-24 w-24 rounded-lg border"
        alt="이미지 미리보기"
      />
      <div className="absolute -right-1 -top-1 flex cursor-pointer rounded-full bg-black p-[2px] transition hover:bg-gray-700">
        <Icon.X className="h-4 w-4 text-white" onClick={() => onDelete(imageUrl)} />
      </div>
    </div>
  );
};
