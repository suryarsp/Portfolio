"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, className, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === href;
  const handleClick = () => {
    router.push(href); // Navigate to the specified href
  };

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={`${className ? className : ""} ${isActive ? "active" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
