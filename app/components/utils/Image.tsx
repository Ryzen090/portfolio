/* eslint-disable @next/next/no-img-element */

interface ImageProps {
  className?: string;
  src: string;
  alt?: string;
}

export default function Image({ className, src, alt }: ImageProps) {
  return <img className={className} src={src} alt={alt || "image"} />;
}
