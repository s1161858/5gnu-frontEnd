"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Specs", href: "#specs" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-12 max-w-[1200px] items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <a href="#" className="text-sm font-semibold tracking-wide text-foreground/90">
          BOOSTER ROBOTICS
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-normal text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right - Buy Button */}
        <div className="hidden items-center md:flex">
          <a
            href="#buy"
            className="rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground transition-colors hover:bg-accent/85"
          >
            Buy
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center text-muted-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#buy"
              className="mt-2 w-fit rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buy
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
