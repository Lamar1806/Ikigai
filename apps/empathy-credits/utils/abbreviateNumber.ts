export function abbreviateNumber(num) {
  const suffixes = ["", "k", "M", "B", "T"];
  const tier = Math.log10(Math.abs(num)) / 3 | 0;
  if (tier === 0) return num;
  const suffix = suffixes[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = num / scale;
  return scaled.toFixed(1) + suffix;
}
