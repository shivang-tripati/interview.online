"use client";
import { CodeIcon } from "lucide-react";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";
import DashboardButton from "./dashboard-btn";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <CodeIcon className="size-8 text-violet-500" />
          <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
            Interview.IO{" "}
          </span>
        </Link>

        {/* RIGHT SIDE - ACTIONS*/}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DashboardButton />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
