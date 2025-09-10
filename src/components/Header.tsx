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

export default function Footer() {
  const { theme } = useTheme();
  console.log(theme);
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <div className="px-4 py-4 flex justify-between w-full">
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
                href="#products"
                className="hover:no-underline hover:bg-gray-400/50 p-2 rounded-lg"
              >
                محصولات
              </a>
              <a
                href="#aboutus"
                className="hover:no-underline hover:bg-gray-400/50 p-2 rounded-lg"
              >
                درباره ما
              </a>
              <a
                href="#contact"
                className="hover:no-underline hover:bg-gray-400/50 p-2 rounded-lg"
              >
                تماس با ما
              </a>
            </div>{" "}
          </>
        </DrawerContent>
      </Drawer>

      <div className="flex items-center gap-2">
        <ModeToggle />
        <span className="bg-white text-black p-4">{theme}</span>
        <Image
          src={theme !== "dark" ? "/image/logo.svg" : "/image/logo-dark.svg"}
          width={48}
          height={48}
          alt={"logo"}
          className="size-12 object-cover rounded-md mt-2 sm:mt-0 "
        />
      </div>
    </div>
  );
}
