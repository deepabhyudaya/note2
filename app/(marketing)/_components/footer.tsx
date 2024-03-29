import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#010101]">
      
      <div className="md:ml-auto w-full justify-center md:justify-end flex items-center gap-x-2 text-muted-foreground">
       
        <Button variant="ghost" size="sm">
          ©Abhyudaya 2023-24
        </Button>
      </div>
    </div>
  );
};
