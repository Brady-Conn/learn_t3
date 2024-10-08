import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav() {
    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
        <div>
          Front Range Gallery
        </div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }