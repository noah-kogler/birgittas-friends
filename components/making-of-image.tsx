import Image from "next/image";

export type MakingOfImageProps = {
  name: string,
  alt: string,
};

export default function MakingOfImage({name, alt}: MakingOfImageProps) {
  return (
    <div className="mt-8">
      <Image
        src={`/images/making-of/${name}`}
        alt={alt}
        width={800}
        height={533}
      />
    </div>
  );
}
