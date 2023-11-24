interface PageTitleProps {
  title: string;
}

export const AdminPageTitle = ({ title }: PageTitleProps) => {
  return <h1 className="my-8 mt-16 text-2xl font-medium md:mt-8">{title}</h1>;
};
