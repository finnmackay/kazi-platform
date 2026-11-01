// lib/products.js is explicitly a placeholder catalogue ("numerically fictional — … Don't quote
// these prices to a customer"). The homepage is the most-seen page on the site, so its product
// cards don't print those figures until the data is real. Once lib/products.js holds verified
// prices, flip this to true and every homepage card shows "From £x · MOQ n".
export const SHOW_PRICES = false;

const parsePrice = (product) => Number.parseFloat(product.price.replace(/[^\d.]/g, ""));

/** The short line under a card title for a group of products — minimum order, plus price when enabled. */
export function priceLine(items) {
  const moq = Math.min(...items.map((p) => p.moq ?? 50));
  if (!SHOW_PRICES) return `From ${moq} pieces`;
  const amounts = items.map(parsePrice).filter(Number.isFinite);
  return amounts.length ? `From £${Math.min(...amounts).toFixed(2)} · MOQ ${moq}` : `From ${moq} pieces`;
}
