import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { ModeToggle } from "./ThemeButton";
import { useTheme } from "next-themes";
import React from "react";
import { cn } from "@/lib/utils";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";

export default function Footer() {
  const { theme } = useTheme();
  const { isVisible, scrollY } = useScrollVisibility({
    threshold: 15,
    hideOnScrollDown: true,
    showOnScrollUp: true,
    alwaysShowAtTop: true,
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHeaderVisble, setIsHeaderVisble] = React.useState(false);
  React.useEffect(() => {
    setIsHeaderVisble(isVisible);
  }, [isVisible]);
  const handleOnMenuClick = () => {
    setIsOpen(false);
    setIsHeaderVisble(false);
  };
  return (
    <>
      <div className="h-24 w-full"></div>
      <div
        className={cn(
          "max-h-24 h-24 px-4 py-4 flex justify-between w-full fixed top-0 backdrop-blur-md z-50 transition-all duration-300  bg-white/30 dark:bg-gray-900/30",
          {
            "max-h-0 h-0 py-0 overflow-hidden": !isHeaderVisble && scrollY > 50,
          }
        )}
      >
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger className="size-14 dark:bg-gray-500 flex items-center justify-center bg-gray-100/20 rounded-lg p-1">
            <Image
              src={
                isOpen
                  ? theme === "light"
                    ? "/image/close.svg"
                    : "/image/close.svg"
                  : theme === "light"
                  ? "/image/hambar.svg"
                  : "/image/hambar.svg"
              }
              width={48}
              height={48}
              alt={"logo"}
              className="size-12 object-fit rounded-md mt-2 sm:mt-0 "
            />
          </DrawerTrigger>
          <DrawerContent className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
            <>
              <DrawerHeader className="border-b border-gray-300/50 mx-4">
                <DrawerTitle className="text-lg text-gray-600 dark:text-gray-400">
                  منو
                </DrawerTitle>
                <DrawerDescription>
                  منوی سایت را از اینجا مشاهده کنید
                </DrawerDescription>
              </DrawerHeader>
              <div className="flex flex-col gap-4 my-4 px-4 text-center">
                <a
                  onClick={handleOnMenuClick}
                  href="#products"
                  className="hover:no-underline hover:bg-gray-400/50 transition-colors duration-300 ease-in-out p-2 rounded-lg"
                >
                  محصولات
                </a>
                <a
                  href="#aboutus"
                  onClick={handleOnMenuClick}
                  className="hover:no-underline hover:bg-gray-400/50 transition-colors duration-300 ease-in-out p-2 rounded-lg"
                >
                  درباره ما
                </a>
                <a
                  onClick={handleOnMenuClick}
                  href="#contact"
                  className="hover:no-underline hover:bg-gray-400/50 transition-colors duration-300 ease-in-out p-2 rounded-lg"
                >
                  تماس با ما
                </a>
              </div>{" "}
            </>
          </DrawerContent>
        </Drawer>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Image
            src={theme !== "dark" ? "/image/logo.svg" : "/image/logo-dark.svg"}
            width={48}
            height={48}
            alt={"logo"}
            className="size-12 object-cover rounded-md mt-2 sm:mt-0 "
          />
        </div>
      </div>{" "}
    </>
  );
}
