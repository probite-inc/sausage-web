import { config } from "@/configs/config.mjs";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <div
      id="contact"
      className="bg-[#6E6E6E] text-white w-full flex flex-col items-center py-6 gap-4"
    >
      {/* phone */}
      <div
        className={cn("bg-[url(/image/Union.svg)] bg-no-repeat w-6 h-6", {
          "bg-[url(/image/Union.svg)]": config.basePath && config.isProd,
          "bg-[url(/sausage-web/image/Union.svg)]": !config.isProd,
        })}
      >
        <div className="text-sm mt-1">+989332930229</div>
      </div>

      {/* location*/}
      <div
        className={cn(" w-6 h-6", {
          "bg-[url(/image/Group.svg)]": config.basePath && config.isProd,
          "bg-[url(/sausage-web/image/Group.svg)]": !config.isProd,
        })}
      >
        <div className="text-sm mt-1">location</div>
      </div>

      {/* instag */}
      <div
        className={cn(" w-6 h-6", {
          "bg-[url(/image/icon8-instagram-1.svg)]":
            config.basePath && config.isProd,
          "bg-[url(/sausage-web/image/icon8-instagram-1.svg)]": !config.isProd,
        })}
      >
        instagram
      </div>
    </div>
  );
}
