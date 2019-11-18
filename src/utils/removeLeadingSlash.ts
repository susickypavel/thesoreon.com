export function removeLeadingFlash(text: string) {
  return text.replace(/^\//g, "")
}
