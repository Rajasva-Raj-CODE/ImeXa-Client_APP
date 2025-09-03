"use client";

import { useState } from "react";
import {
  Navbar as ResizableNavbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "./ui/resizable-navbar";
import Image from "next/image";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Industries", link: "/industries" },
  { name: "About", link: "/about" },
  { name: "Case Studies", link: "/case-studies" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ResizableNavbar>
      {/* Desktop */}
      <NavBody className="card-glow bg-[hsl(var(--card))]/70 backdrop-blur-lg border border-[hsl(var(--border))]">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/imexa_Logo.png"
            alt="ImeXa Logo"
            width={100}
            height={40}
            className="object-contain drop-shadow-[0_0_12px_hsl(var(--primary-glow)/0.8)]"
          />
          <span className="text-neon font-semibold">By</span>
          <Image
            src="/guidona-logo.svg"
            alt="Guidona Logo"
            width={120}
            height={40}
            className="object-contain drop-shadow-[0_0_12px_hsl(var(--secondary-glow)/0.8)]"
          />
        </div>

        {/* Links */}
        <div className="flex gap-8 text-[hsl(var(--foreground))]/90 font-medium">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="relative transition hover:text-neon
                 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                 hover:after:w-full after:bg-[hsl(var(--primary))] 
                 after:transition-all after:duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <NavbarButton
          variant="gradient"
          href="/get-started"
          className="rounded-full px-6 py-2 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] 
             text-white font-semibold shadow-[0_0_20px_hsl(var(--primary-glow)/0.8)] 
             hover:shadow-[0_0_35px_hsl(var(--primary-glow)/1)] transition"
        >
          Get Started
        </NavbarButton>
      </NavBody>

      {/* Mobile */}
      <MobileNav className="card-glow bg-[hsl(var(--card))]/80 backdrop-blur-lg border border-[hsl(var(--border))] rounded-xl">
        <MobileNavHeader>
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-[hsl(var(--gradient-primary))] rounded-lg flex items-center justify-center shadow-[0_0_15px_hsl(var(--primary)/0.6)]">
              <span className="text-white font-bold">I</span>
            </div>
            <span className="text-glow font-semibold">ImeXa</span>
          </div>
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-[0_0_25px_hsl(var(--primary)/0.3)]"
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-2 text-lg rounded-lg text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] hover:text-neon transition"
            >
              {item.name}
            </a>
          ))}

          <NavbarButton
            variant="gradient"
            href="/get-started"
            className="w-full mt-4 rounded-lg shadow-[0_0_20px_hsl(var(--accent-glow)/0.6)]"
          >
            Get Started
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
