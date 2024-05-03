/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NVWaz2zoG5X
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export function Homepage() {
  return (
    <>
      <header className="bg-gray-100 dark:bg-gray-800 py-4 shadow">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link
            className="text-2xl font-bold text-gray-900 dark:text-gray-50"
            href="#"
          >
            Marketplace
          </Link>
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-5 w-5" />
            <Input
              className="pl-10 pr-4 py-2 rounded-md w-full bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              placeholder="Search for items..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            
            <Link
              className="text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-300"
              href="/login"
            >
              Account
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="py-12 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50">
              Featured Listings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow overflow-hidden">
                <img
                  alt="Item Image"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">
                    Vintage Camera
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    $99.99
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      className="text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      View Product
                    </Link>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow overflow-hidden">
                <img
                  alt="Item Image"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">
                    Handmade Pottery
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    $49.99
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      className="text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      View Product
                    </Link>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow overflow-hidden">
                <img
                  alt="Item Image"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">
                    Vintage Typewriter
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    $129.99
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      className="text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      View Product
                    </Link>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow overflow-hidden">
                <img
                  alt="Item Image"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">
                    Antique Vase
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    $79.99
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      className="text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      View Product
                    </Link>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50">
              Browse Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <Link
                className="bg-white dark:bg-gray-950 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-4 flex flex-col items-center"
                href="#"
              >
                <SofaIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 mb-2" />
                <span className="text-gray-900 dark:text-gray-50 text-sm font-medium">
                  Furniture
                </span>
              </Link>
              <Link
                className="bg-white dark:bg-gray-950 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-4 flex flex-col items-center"
                href="#"
              >
                <CircuitBoardIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 mb-2" />
                <span className="text-gray-900 dark:text-gray-50 text-sm font-medium">
                  Electronics
                </span>
              </Link>
              <Link
                className="bg-white dark:bg-gray-950 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-4 flex flex-col items-center"
                href="#"
              >
                <ShirtIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 mb-2" />
                <span className="text-gray-900 dark:text-gray-50 text-sm font-medium">
                  Clothing
                </span>
              </Link>
              <Link
                className="bg-white dark:bg-gray-950 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-4 flex flex-col items-center"
                href="#"
              >
                <ToyBrickIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 mb-2" />
                <span className="text-gray-900 dark:text-gray-50 text-sm font-medium">
                  Toys
                </span>
              </Link>
              <Link
                className="bg-white dark:bg-gray-950 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-4 flex flex-col items-center"
                href="#"
              >
                <PaintbrushIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 mb-2" />
                <span className="text-gray-900 dark:text-gray-50 text-sm font-medium">
                  Art
                </span>
              </Link>
              <Link
                className="bg-white dark:bg-gray-950 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-4 flex flex-col items-center"
                href="#"
              >
                <BookIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 mb-2" />
                <span className="text-gray-900 dark:text-gray-50 text-sm font-medium">
                  Books
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50">
              My Listings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow overflow-hidden">
                <img
                  alt="Item Image"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">
                    Vintage Camera
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    $99.99
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          alt="Seller Avatar"
                          src="/placeholder-avatar.jpg"
                        />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <Link
                        className="text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        John Doe
                      </Link>
                    </div>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow overflow-hidden">
                <img
                  alt="Item Image"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">
                    Handmade Pottery
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    $49.99
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          alt="Seller Avatar"
                          src="/placeholder-avatar.jpg"
                        />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <Link
                        className="text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        Jane Smith
                      </Link>
                    </div>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow overflow-hidden">
                <img
                  alt="Item Image"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">
                    Vintage Typewriter
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    $129.99
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          alt="Seller Avatar"
                          src="/placeholder-avatar.jpg"
                        />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <Link
                        className="text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        Bob Johnson
                      </Link>
                    </div>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow overflow-hidden">
                <img
                  alt="Item Image"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">
                    Antique Vase
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    $79.99
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          alt="Seller Avatar"
                          src="/placeholder-avatar.jpg"
                        />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <Link
                        className="text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        Sarah Lee
                      </Link>
                    </div>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-50 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p>© 2023 Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function CircuitBoardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </svg>
  );
}

function PaintbrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShirtIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

function SofaIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
      <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
      <path d="M4 18v2" />
      <path d="M20 18v2" />
      <path d="M12 4v9" />
    </svg>
  );
}

function ToyBrickIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="12" x="3" y="8" rx="1" />
      <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
      <path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
    </svg>
  );
}
