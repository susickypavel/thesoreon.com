export function getGoldenRatio(value: number, type: "A" | "B") {
  const goldenRatioConstant = 1.6180339887

  return type === "A" ? value / goldenRatioConstant : Math.abs(value / goldenRatioConstant - 100)
}
