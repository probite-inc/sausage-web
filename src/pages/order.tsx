import { FilloutStandardEmbed } from "@fillout/react";
import Image from "next/image";

export default function Order() {
  return (
    <div className="w-full min-h-[calc(100vh-96px)] flex items-center justify-between text-2xl">
      <div className="bg-orange-400 min-h-[calc(100vh-96px)] flex-1 flex items-center justify-center dark:bg-[url('/image/banner-background.svg')] bg-[url('/image/banner-background-dark.svg')] bg-no-repeat bg-center bg-cover">
        {/* <Image
          src="/image/banner-background.svg"
          alt="Order"
          width={300}
          height={300}
          className="mx-auto w-full h-full object-cover"
        /> */}
      </div>
      <style>
        {`
        .fillout-standard-embed {
          width: 100%;
          }
      `}
      </style>
      <div
        className="relative bg-black min-h-[calc(100vh-96px)] flex-1 items-center justify-end pt-16 pr-4 [&_.fillout-standard-embed]:h-screen"
        style={{ height: "calc(100vh-96px)" }}
      >
        <FilloutStandardEmbed filloutId="4uL7JTXkwGus" dynamicResize />
      </div>
    </div>
  );
}
