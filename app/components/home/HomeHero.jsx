import Image from "next/image";
import Link from "next/link";

// The photo is public/images/home/hero.webp, a 1920px WebP (~375 KB) made from a 2752x1536 JPG
// that is not kept in the repo. To change the picture, convert the new photo the same way:
//   ffmpeg -i new-photo.jpg -vf scale=1920:-2 -c:v libwebp -quality 72 public/images/home/hero.webp
export function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#0c4691] px-5 text-center"
    >
      {/* The page's LCP image, so it's an <img> in the document and fetched with high priority. */}
      <Image
        src="/images/home/hero.webp"
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="-z-20 object-cover object-[52%_30%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-black/15 to-black/45" />

      <h1
        id="home-hero-title"
        className="m-0 max-w-[14ch] text-balance font-display md:max-w-[20ch] text-[2.5rem] font-normal leading-[1.04] tracking-[-0.015em] text-white [text-shadow:0_2px_30px_rgba(2,18,50,0.5)] md:text-[clamp(2.5rem,4vw+1rem,5rem)]"
      >
        Your clothing label, made by hand in <em className="italic">Nepal</em>.
      </h1>

      <Link
        href="/quote"
        className="mt-9 inline-flex h-12 items-center whitespace-nowrap rounded-md border border-white/70 bg-white/10 px-8 font-body text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-pine"
      >
        Get a quote
      </Link>
    </section>
  );
}
