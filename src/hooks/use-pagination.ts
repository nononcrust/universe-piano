import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const usePagination = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const current = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const onChange = (page: number) => {
    router.push(pathname + "?" + createQueryString("page", String(page)));
  };

  return { current, onChange };
};
