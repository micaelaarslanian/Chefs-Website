
type SecondaryButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export default function SecondaryButton({
    href,
    children,
    className,
}: SecondaryButtonProps) {
    return (
        <a
            href={href}
            className={`btn-secondary ${className ?? ""}`.trim()}
        >
            {children}
        </a>
    );
}
