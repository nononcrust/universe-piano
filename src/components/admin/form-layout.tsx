import { cn } from "@/lib/utils";

interface FormLayoutProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export const FormLayout = ({ children, className, ...props }: FormLayoutProps) => {
  return (
    <form className={cn("flex flex-col gap-8 pt-8", className)} {...props}>
      {children}
    </form>
  );
};
