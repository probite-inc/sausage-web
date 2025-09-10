import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { config } from "@/configs/config.mjs";

function Banner() {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-y-6 w-full min-h-[calc(50vh-100px)] sm:min-h-[calc(100vh-100px)]  bg-cover bg-center bg-no-repeat",
        {
          "bg-[url(/sausage-web/image/banner-background.svg)] dark:bg-[url(/sausage-wb/image/banner-background-dark.svg)]":
            config.basePath && config.isProd,
          "bg-[url(/image/banner-background.svg)] dark:bg-[url(/image/banner-background-dark.svg)]":
            !config.isProd,
        }
      )}
    >
      <h1 className="text-lg md:text-2xl lg:text-6xl bg-white/80 dark:bg-black/80 p-3 rounded-2xl text-gray-500 dark:text-gray-200 md:p-6 lg:p-12 backdrop-blur-xs">
        اصالت خانگی، کیفیت سالم
      </h1>
      <Button
        size={"lg"}
        className="bg-orange-400 w-[70px] h-[36px] md:w-32 md:h-12 md:text-2xl text-sm dark:text-gray-200"
      >
        سفارش
      </Button>
    </div>
  );
}
export default Banner;
