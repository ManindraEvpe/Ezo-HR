import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/context/theme-provider";
import { Button } from "@/components/ui/button";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="secondary"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
