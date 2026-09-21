import { Menu, Search, ShoppingCart, Store, User } from "lucide-react";
import { useState, type ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = ["Accueil", "Catalogue", "Contact"] as const;
const logo = "https://getnovara.site/cdn/shop/files/ChatGPT_Image_25_de_ago._de_2026_13_30_10.png?v=1787944077&width=500";

export interface SiteHeaderProps extends ComponentProps<"header"> {}

export function SiteHeader({ className, ...props }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={cn("z-40", className)} {...props}>
      <div className="flex h-[59px] items-center justify-center gap-2 bg-topbar px-4 text-topbar-foreground max-md:h-11">
        <Store className="h-4 w-4" aria-hidden="true" />
         <span className="text-sm font-semibold tracking-wide">Livraison gratuite</span>
      </div>

      <div className="border-b border-border bg-background">
        <div className="relative mx-auto flex h-[90px] max-w-[1180px] items-center justify-between px-4 max-md:h-[72px] lg:px-0">
          <Button
            type="button"
             aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            variant="ghost"
            size="icon"
            className="-ml-2 md:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </Button>

           <nav aria-label="Navigation principale" className="hidden md:flex md:items-center md:gap-7">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-foreground transition-colors hover:text-brand"
              >
                {link}
              </a>
            ))}
          </nav>

          <a
            href="#"
            className="flex items-center gap-1.5 md:absolute md:left-1/2 md:-translate-x-1/2"
             aria-label="Accueil Novara"
          >
            <img src={logo} alt="Novara" width={180} height={48} className="h-auto w-[140px] object-contain" />
          </a>

          <div className="flex items-center gap-1">
            <Button
              type="button"
               aria-label="Rechercher"
              variant="ghost"
              size="icon"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button
              type="button"
               aria-label="Compte"
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex"
            >
              <User className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button
              type="button"
               aria-label="Panier"
              variant="ghost"
              size="icon"
            >
              <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {menuOpen ? (
           <nav aria-label="Navigation mobile" className="border-t border-border px-4 py-2 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block py-2.5 text-sm font-medium text-foreground"
              >
                {link}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
