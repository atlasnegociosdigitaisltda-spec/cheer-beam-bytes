import { Button } from "@/components/ui/button";

const paymentMethods = [
  "American Express",
  "Apple Pay",
  "Diners Club",
  "Discover",
  "Google Pay",
  "Mastercard",
  "PayPal",
  "Visa",
] as const;

export function SiteFooter() {
  return (
    <footer className="overflow-hidden border-t border-border bg-muted/40 px-4 py-12">
      <div className="mx-auto grid w-full min-w-0 max-w-[1180px] gap-10 md:grid-cols-2">
        <div className="min-w-0">
          <h2 className="font-semibold text-foreground">Quick links</h2>
          <nav aria-label="Footer" className="mt-4 flex flex-col items-start gap-2">
          {["Contact us", "Privacy policy", "Returns and refunds", "Shipping policy", "Terms of service"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ),
          )}
          </nav>
        </div>
        <div className="min-w-0">
          <h2 className="font-semibold text-foreground">Subscribe to our emails</h2>
          <p className="mt-4 text-sm text-muted-foreground">Join our email list for exclusive offers and the latest news.</p>
          <form className="mt-4 flex max-w-md"><label htmlFor="footer-email" className="sr-only">Email</label><input id="footer-email" type="email" placeholder="Email" className="h-11 min-w-0 flex-1 border border-input bg-background px-3 text-sm" /><Button type="submit" className="h-11 rounded-none bg-foreground px-5 text-sm text-background hover:bg-foreground/90">Sign up</Button></form>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1180px] border-t border-border pt-6">
        <p className="mb-3 text-xs text-muted-foreground">Payment methods</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {paymentMethods.map((method) => (
            <li key={method} className="text-xs text-muted-foreground">
              {method}
            </li>
          ))}
        </ul>

        <p className="mt-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()}, Novara
        </p>
      </div>
    </footer>
  );
}
