"use client";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { ChartNoAxesGantt } from "lucide-react";

function Header() {
  return (
    <nav className="w-full flex justify-between items-center py-2 px-10 max-md:px-2">
      <Link href="/" className="cursor-pointer text-xl">
        𝓟𝓵𝓪𝓷𝓲𝓼𝓽𝓻𝔂
      </Link>
      <div className="flex gap-4 items-center">
        <CustomButton varient="green" className="max-md:hidden">
          <Link href="/create">Create +</Link>
        </CustomButton>
        <SignedOut>
          <CustomButton varient="purple">
            <SignInButton forceRedirectUrl="/onboarding" />
          </CustomButton>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="My Organizations"
                labelIcon={<ChartNoAxesGantt size={15} />}
                href="/onboarding"
              />
              <UserButton.Action label="manageAccount" />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Header;
