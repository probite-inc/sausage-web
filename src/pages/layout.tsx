import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { CSSProperties, useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const override: CSSProperties = {};
  if (!mounted) {
    return (
      <div className="flex bg-red items-center justify-center w-full h-screen ">
        <div className="size-56">
          <PacmanLoader
            color={"#f1d83c"}
            loading={!mounted}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  }
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <div className="w-full bg-white  dark:bg-black">
          <Header />
          <main>{children}</main>
        </div>{" "}
      </ThemeProvider>
    </>
  );
}
