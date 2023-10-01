interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <>
      <h1 className="mt-8 text-2xl font-bold text-foreground md:mt-24 md:text-3xl">{title}</h1>
      <h2 className="mt-2 text-muted-foreground md:text-lg">{subtitle}</h2>
    </>
  );
};
