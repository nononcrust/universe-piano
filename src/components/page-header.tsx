interface PageTitleProps {
  title: string;
  description: string;
}

export const PageHeader = ({ title, description }: PageTitleProps) => {
  return (
    <div className="flex h-28 items-center bg-stone-900">
      <div className="container flex flex-col gap-2">
        <h1 className="text-xl font-medium text-background">{title}</h1>
        <h2 className="text-background">{description}</h2>
      </div>
    </div>
  );
};
