import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function QuoteBand() {
  return (
    <section aria-labelledby="quote-band-title" className="bg-paper px-5 py-24 md:px-8 md:py-36">
      <Reveal className="mx-auto flex max-w-[1440px] flex-col items-center text-center">
        <h2
          id="quote-band-title"
          className="m-0 max-w-[22ch] text-balance font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-pine"
        >
          Small batches from 100 pieces, cut and sewn in Kathmandu.
        </h2>
        <Link
          href="/quote"
          className="btn-solid mt-9 inline-flex h-12 items-center whitespace-nowrap rounded-md px-8 font-body text-sm font-semibold uppercase tracking-[0.14em] text-bone hover:-translate-y-0.5 active:translate-y-0"
        >
          Get a quote
        </Link>
      </Reveal>
    </section>
  );
}
