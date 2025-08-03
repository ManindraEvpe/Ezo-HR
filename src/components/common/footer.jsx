import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import translations from "@/lang/en.json";

export default function Footer() {
  return (
    <footer className="w-full border-t p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Section (Logo and Description) */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="h-full w-full p-2 flex justify-center items-center bg-primary/10 rounded mb-4 md:mb-0">
            <img
              src="/logo-png.png"
              alt="EzoHR"
              className="h-16 inline-block"
            />
          </div>
          <p className="text-muted-foreground text-center md:text-left">
            {translations.common.footer.description}
          </p>
        </div>

        {/* Right Section (Links and Copyright) */}
        <div className="text-center md:text-end">
          <div>
            <Link to="/privacy-policy">
              <Button variant="link">{translations.common.footer.privacyPolicy}</Button>
            </Link>
            <div className="text-muted-foreground mt-2">
{translations.common.footer.copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
