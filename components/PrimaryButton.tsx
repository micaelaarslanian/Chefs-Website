
type PrimaryButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export default function PrimaryButton({
    href,
    children,
    className,
}: PrimaryButtonProps) {
    return (
        <a
            href={href}
            className={`btn-primary ${className ?? ""}`.trim()}
        >
            {children}
        </a>
    );
}
