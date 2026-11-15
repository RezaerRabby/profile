
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
        {eyebrow}
      </span>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      <div className="mt-4 h-1 w-16 rounded-full bg-amber-500" />

      {description && (
        <p className="mt-5 leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
