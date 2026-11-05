import { HomeHero } from "@/components/home/HomeHero";
import { RangeGrid } from "@/components/home/RangeGrid";
import { QuoteBand } from "@/components/home/QuoteBand";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return pageMetadata("/");
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <RangeGrid />
      <QuoteBand />
    </>
  );
}
