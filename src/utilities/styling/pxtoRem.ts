/**
 * Converts pixels to rem units.
 * @param px - The pixel value to convert.
 * @param base - The base font size in pixels (default is 16).
 * @returns The equivalent value in rem as a string.
 */
function pxToRem(px: number, base: number = 16): string {
  return `${px / base}rem`;
}

export default pxToRem;
