import { Button } from "@/components/ui/button";

interface NavbarProps {
  logoText?: string;
  onLogout?: () => void;
}

export default function Navbar({
  logoText = "Portfolio",
  onLogout,
}: NavbarProps) {
  return (
    <nav className="sticky top-0 w-full border-b border-border px-4 md:px-20 flex justify-between h-14 bg-white z-10">
      {/* Logo */}
      <a
        href="#"
        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 160"
          className="size-8"
        >
          <path
            fill="currentColor"
            d="M 75.36,45.39 C 80.93,35.58 86.31,26.09 92.56,15.10 C 119.73,63.00 145.09,109.48 170.40,155.88 C 169.04,157.80 167.65,157.30 166.40,157.30 C 151.24,157.35 136.08,157.24 120.92,157.43 C 118.89,157.47 117.64,156.09 116.65,153.63 C 99.72,120.88 82.67,88.19 65.56,55.54 C 64.37,53.63 64.13,52.28 65.39,50.29 C 68.18,45.21 70.61,39.92 75.36,45.39 Z"
          />
          <path
            fill="currentColor"
            d="M 15.00,157.32 C 9.54,157.33 4.58,157.33 -1.22,157.33 C 9.28,138.97 19.04,121.87 29.59,103.42 C 40.12,121.82 50.84,138.85 62.40,157.32 C 49.61,157.32 38.56,157.32 15.00,157.32 Z"
          />
        </svg>
        {/* <span className="text-base font-semibold">{logoText}</span> */}
      </a>

      {/* Desktop Menu */}
      <div className="hidden border border-x border-border px-2 border-y-transparent md:flex items-center gap-6">
        <a
          className="hover:opacity-80 border-r h-full w-12 flex justify-center items-center transition-opacity"
          href=""
        >
          <svg
            className="size-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"
            />
          </svg>
        </a>
        <a className=" hover:underline underline-offset-1" href="">
          Contact Me
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-6">
        <a className="hover:opacity-80  transition-opacity" href="">
          <svg
            className="size-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"
            />
          </svg>
        </a>
        <a className="hover:opacity-80 border border-border rounded-full size-9 flex justify-center items-center transition-opacity">
          <svg
            className="size-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 5H4v2h16V5zm0 4H4v2h16V9zM4 13h16v2H4v-2zm16 4H4v2h16v-2z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
