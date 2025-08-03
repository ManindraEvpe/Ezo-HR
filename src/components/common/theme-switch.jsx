import { useTheme } from "@/components/context/theme-provider";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "./icons";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    // If current theme is system, check what the actual theme is
    if (theme === "system") {
      const isSystemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(isSystemDark ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  // Determine which icon to show
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <Button
      size="icon"
      variant="secondary"
      onClick={toggleTheme}
      className="rounded-full"
      aria-label="Toggle theme"
    >
      {!isDark ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </Button>
  );
}
