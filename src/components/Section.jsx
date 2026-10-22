import Carousel from "./Carousel";
import PortfolioCard from "./PortfolioCard";

export default function Section({
  id,
  number,
  title,
  subtitle,
  data,
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      {/* Section Heading */}
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[3px] text-accent">
          {number}
        </p>

        <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
          <span className="text-accent">.</span>
        </h2>

        <p className="mt-4 text-sm text-muted">
          {subtitle}
        </p>
      </div>

      {/* Carousel */}
      <Carousel>
        {data.map((item) => (
          <PortfolioCard
            key={item.id}
            item={item}
          />
        ))}
      </Carousel>
    </section>
  );
}