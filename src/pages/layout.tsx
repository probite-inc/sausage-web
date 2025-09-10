import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <div>
        <p>Loading...</p>
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
