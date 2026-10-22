import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ children }) {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const firstCard = carousel.firstElementChild;

    if (!firstCard) return;

    const gap = parseFloat(
      window.getComputedStyle(carousel).columnGap
    ) || 0;

    const scrollAmount =
      firstCard.getBoundingClientRect().width + gap;

    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="mb-6 flex justify-end gap-3">
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous item"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-surface transition hover:border-accent hover:bg-accent hover:text-background"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => scroll(1)}
          aria-label="Next item"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-surface transition hover:border-accent hover:bg-accent hover:text-background"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Carousel Items */}
      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}