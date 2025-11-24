// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const navItem = (href: string, label: string) => {
        const isActive = pathname === href;
        return (
            <li>
                <Link
                    href={href}
                    className={`px-4 py-2 block font-body text-base md:text-lg transition-colors duration-200 ${isActive
                            ? "text-brand-text underline underline-offset-4"
                            : "text-brand-text hover:text-brand-navHover"
                        }`}
                >
                    {label}
                </Link>
            </li>
        );
    };

    return (
        <header className="bg-brand-bg">
            <div className="flex flex-direction flex-col items-center py-4 gap-3">
                <Link href="/" className="navbar-brand">
                    <img
                        src="/images/logo.png"
                        alt="Spicy Lilo Logo"
                        className="w-[100px] h-auto"
                    />
                </Link>
                <ul className="flex list-none m-0 p-0 gap-2 md:gap-4">
                    {navItem("/", "Home")}
                    {navItem("/talleres", "Talleres")}
                    {navItem("/about", "Sobre mi")}
                </ul>
            </div>
        </header>
    );
}
