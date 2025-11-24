// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="bottom" className="bg-brand-accent">
            <div className="flex flex-col items-center text-center py-12">
                <a
                    href="mailto:spicylilo@gmail.com"
                    className="flex items-center gap-2 text-brand-light text-[1.5rem]  my-4"
                >
                    <i className="fas fa-envelope" />
                    <span>spicylilo@gmail.com</span>
                </a>

                <a
                    href="https://instagram.com/spicylilo"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-brand-light text-[1.5rem]  my-4"
                >
                    <i className="fab fa-instagram" />
                    <span>spicylilo</span>
                </a>

                <img src="/images/quinotos.jpeg" alt="huerta" className="footer-image" />

                <div className="h-px w-[250px] bg-[#ddd] my-8" />

                <ul className="flex justify-center list-none m-0 p-4 gap-4">
                    <li>
                        <Link href="/" className="text-brand-light text-sm">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/talleres" className="text-brand-light text-sm">
                            Talleres
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-brand-light text-sm">
                            Sobre mi
                        </Link>
                    </li>
                </ul>

                <p className="text-brand-light text-xs">© 2024 Spicy Lilo</p>
            </div>
        </footer>
    );
}
