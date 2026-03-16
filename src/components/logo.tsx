import Image from "next/image";

export function Logo() {
  const logoUrl = "/logo.png";
  const LogoAltText = "Logo with bubles";
  return (
    <div className="w-10 h-10 md:w-12 md:h-12">
      <Image
        src={logoUrl}
        width={0}
        height={0}
        alt={LogoAltText}
        sizes="100vw"
        loading="eager"
        className="h-full w-auto"
      />
    </div>
  );
}
