import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center space-x-6">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
          </div>
          <nav className="flex space-x-6">
            <Link href="#" className="font-medium">
              Charts
            </Link>
            <Link href="#" className="font-medium">
              Marketplace
            </Link>
            <Link href="#" className="font-medium">
              Create
            </Link>
            <Link href="#" className="font-medium">
              Robux
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
