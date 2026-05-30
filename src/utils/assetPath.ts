/** Encode path segments so public assets with spaces load correctly. */
export function assetPath(path: string): string {
  return path
    .split("/")
    .map((segment, index) =>
      index === 0 ? segment : encodeURIComponent(segment),
    )
    .join("/");
}
