import * as Switch from "@radix-ui/react-switch";
import { Moon, Sun } from "lucide-react";

interface CustomThemeSwitchProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function CustomThemeSwitch({ isDarkMode, toggleTheme }: CustomThemeSwitchProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="mr-2"></span>
      <Switch.Root
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full relative data-[state=checked]:bg-black transition-colors"
      >
        <Switch.Thumb
          className="absolute left-0.5 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white bg-white dark:bg-black transition-transform duration-300 data-[state=checked]:translate-x-6"
        >
          {isDarkMode ? (
            <Moon className="w-4 h-4 text-white" />
          ) : (
            <Sun className="w-4 h-4 text-black" />
          )}
        </Switch.Thumb>
      </Switch.Root>
    </div>
  );
}
