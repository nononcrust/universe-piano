import { useQueryParams } from "@/hooks/use-query-params";

export const usePagination = () => {
  const { value, setValue } = useQueryParams("page");

  const current = value ? Number(value) : 1;

  const onChange = (page: number) => {
    setValue(String(page));
  };

  return { current, onChange, setValue };
};
