
type WorkshopCardProps = {
    title: string;
    description: string;
    imageSrc: string;
    date?: string;
};

export default function WorkshopCard({
    title,
    description,
    imageSrc,
    date = "12.02.25",
}: WorkshopCardProps) {
    return (
        <article className="bg-white shadow-md border-0 rounded-none m-6 md:m-12 p-8 md:p-12 max-w-md w-full">
            <div>
                <p className="px-4">{date}</p>
                <h5 className="px-4 text-[2rem] text-[#DB6D40] uppercase">
                    {title}
                </h5>
            </div>
            <img
                src={imageSrc}
                alt={`Taller de comida ${title.toLowerCase()}`}
                className="w-[70%] mx-auto my-4 block object-cover"
            />
            <div>
                <p className="px-4">{description}</p>
            </div>
        </article>
    );
}
