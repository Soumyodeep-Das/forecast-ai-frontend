import { useState } from "react";
import ThemeTransition from "@/components/ThemeTransition";
import CustomThemeSwitch from "@/components/ui/customThemeSwitch";

export default function ThemeToggle() {
  const [transitioning, setTransitioning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [transitionColor, setTransitionColor] = useState<"black" | "white">("black");

  const toggleTheme = () => {
    const goingToDark = !isDarkMode;
    setTransitionColor(goingToDark ? "black" : "white");
    setTransitioning(true);

    // Delay the theme change to allow animation
    setTimeout(() => {
      document.documentElement.classList.toggle("dark");
      setIsDarkMode(goingToDark);
    }, 400);

    setTimeout(() => {
      setTransitioning(false);
    }, 1000); // match your motion exit duration
  };

  return (
    <div className="flex items-center gap-2">
      <CustomThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <ThemeTransition isActive={transitioning} color={transitionColor} />
    </div>
  );
}
