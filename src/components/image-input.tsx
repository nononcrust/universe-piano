import { Icon } from "./icon";
import { Button } from "./ui/button";

export const ImageInput = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button variant="secondary">이미지 추가</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        {/* <ImagePreview />
        <ImagePreview />
        <ImagePreview />
        <ImagePreview />
        <ImagePreview /> */}
      </div>
    </div>
  );
};

const ImagePreview = () => {
  return (
    <div className="relative">
      <div className="h-24 w-24 rounded-lg border"></div>
      <div className="absolute -right-1 -top-1 flex cursor-pointer rounded-full bg-black p-[2px] transition hover:bg-gray-700">
        <Icon.X className="h-4 w-4 text-white" />
      </div>
    </div>
  );
};
