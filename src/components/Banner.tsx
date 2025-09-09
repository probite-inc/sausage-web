import { Button } from "./ui/button";

function Banner() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 w-full min-h-[calc(50vh-100px)] sm:min-h-[calc(100vh-100px)] bg-[url(/image/banner-background.svg)] dark:bg-[url(/image/banner-background-dark.svg)] bg-cover bg-center bg-no-repeat">
      <h1 className="text-lg md:text-2xl lg:text-6xl bg-white/70 dark:bg-black/70 p-3 rounded-2xl">
        اصالت خانگی، کیفیت سالم
      </h1>
      <Button className="bg-orange-400 w-[70px] h-[36px] text-sm">سفارش</Button>
    </div>
  );
}
export default Banner;
