import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [themeState, setThemeState] = React.useState("light");
  React.useEffect(() => {
    if (theme === "dark") {
      setThemeState(theme);
      setTheme("dark");
    } else {
      setThemeState("light");
      setTheme("light");
    }
  }, []);
  return (
    <Button
      variant="ghost"
      size="icon"
      className="bg-amber-100/30 hover:bg-amber-100/60 active:bg-amber-100/80 dark:bg-cyan-900/30 dark:active:bg-cyan-900/80 dark:hover:bg-cyan-900/60"
      onClick={() => {
        setTheme(themeState === "light" ? "dark" : "light");
        setThemeState(themeState === "light" ? "dark" : "light");
      }}
    >
      {themeState === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 text-amber-300 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] scale-0 text-cyan-700 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
