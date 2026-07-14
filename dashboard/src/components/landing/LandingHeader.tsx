"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInDialog } from "@/components/SignInDialog";

function LogoMark() {
  return (
    <div className="flex size-9 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 font-mono text-[11px] font-semibold text-cyan-200">
      FDE
    </div>
  );
}

export function LandingHeader() {
  const pathname = usePathname();
  const [signInOpen, setSignInOpen] = useState(false);

  if (pathname !== "/") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/85 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="FDE-Toolkit home">
          <LogoMark />
          <div className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight">FDE-Toolkit</span>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500 sm:block">
              customer-to-code
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex" aria-label="Primary navigation">
          <a href="#product" className="transition hover:text-white">Product</a>
          <a href="#workflow" className="transition hover:text-white">Workflow</a>
          <a href="#use-cases" className="transition hover:text-white">Use cases</a>
          <a href="#security" className="transition hover:text-white">Governance</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden text-slate-300 hover:bg-white/10 hover:text-white sm:inline-flex"
            onClick={() => setSignInOpen(true)}
          >
            Sign in
          </Button>
          <a
            href="mailto:amitvik@gmail.com?subject=FDE-Toolkit%20design-partner%20pilot"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-3.5 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-200 sm:text-sm"
          >
            Book a pilot
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>

      <SignInDialog
        open={signInOpen}
        onOpenChange={setSignInOpen}
        callbackURL="/"
        dismissible
      />
    </header>
  );
}
