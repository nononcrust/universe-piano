import Image from "next/image";
import { Icon } from "../icon";
import { Checkbox } from "../ui/checkbox";

export const CartItem = () => {
  return (
    <div className="flex gap-4 rounded-lg border p-4">
      <Checkbox />
      <Image
        width={80}
        height={80}
        src={"/images/logo.svg"}
        alt="장바구니 이미지"
        className="rounded-md border"
      />
      <div className="flex flex-1 flex-col gap-4">
        <p className="text-sm text-gray-700">
          [맞춤/5%추가인하][맞춤] 25mm 알루미늄 블라인드 거실 창문 39컬러
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">적림급: 200p</p>
          <p className="font-medium">52,800원</p>
        </div>
      </div>
      <Icon.X size={20} className="cursor-pointer" />
    </div>
  );
};
