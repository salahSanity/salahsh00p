import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            About Us
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Jobs
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Blog
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Parents
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Gift Cards
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Help
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Terms
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Accessibility
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Privacy
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Your Privacy Choices</span>
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-xs text-center text-muted-foreground">
          ©2023 Fashion Corporation. Fashion, the Fashion logo and Powering Imagination are among our registered and
          unregistered trademarks in the U.S. and other countries.
        </div>
      </div>
    </footer>
  )
}
