import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface SidebarLink {
  href: string;
  label: string;
  icon: string;
}

interface SidebarProps {
  links?: SidebarLink[];
}

const defaultLinks: SidebarLink[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/projects", label: "Projects", icon: "projects" },
  { href: "/skills", label: "Skills", icon: "skills" },
  { href: "/experience", label: "Experience", icon: "experience" },
  { href: "/contact", label: "Contact", icon: "contact" },
];

export default function Sidebar({ links = defaultLinks }: SidebarProps) {
  const [activeLink, setActiveLink] = useState<string>("");
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Get current path
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  return (
    <aside className="sticky left-0 hidden md:flex top-0 h-screen w-80 border-r flex-col gap-3 py-4 justify-end items-center border-border flex-shrink-0">
      {links.map((link, index) => (
        <a
          key={index}
          ref={(el) => { linkRefs.current[index] = el; }}
          href={link.href}
          className={`w-full px-8 py-2 hover:bg-accent/50 hover:border-y hover:border-border transition-colors flex text-sm items-center gap-3 ${
            activeLink === link.href
              ? "bg-accent/30 border-y border-border"
              : ""
          }`}
        >
          {link.label}
        </a>
      ))}
    </aside>
  );
}
