import WorkshopCard from "@/components/WorkshopCard";
import SecondaryButton from "@/components/SecondaryButton";

const workshops = [
    {
        title: "FRANCESA",
        imageSrc: "/images/Francesa.jpeg",
        description:
            "Ratatouille, Pan Brioche, Quiche Lorraine, Tarte Tatin, Soupe à l'oignon.",
    },
    {
        title: "INDIA",
        imageSrc: "/images/indian.jpeg",
        description:
            "Te Chai, Butter Chicken, Tikka Masala, Dal, Biryani, Samosas, Nan y pan Roti.",
    },
    {
        title: "MEXICANA",
        imageSrc: "/images/mexico.jpeg",
        description:
            "Enchiladas, Tacos, Quesadillas, Tamales y Arroz con leche.",
    },
    {
        title: "PERUANA",
        imageSrc: "/images/peruana.jpeg",
        description:
            "Ceviche, Anticuchos, Aji de gallina, Causa limena, Suspiro limeno.",
    },
    {
        title: "JAPONESA",
        imageSrc: "/images/japonesa.jpeg",
        description:
            "Sushi: niguiri, sashimi, rolls. Tempura, Gyoza, Sopa miso.",
    },
    {
        title: "ITALIANA",
        imageSrc: "/images/italiana.jpeg",
        description:
            "Carbonara, Lasagna alla Bolognese, Pasta alla Norma, Parmigiana di Melanzane, Ensalada Caprese, Tiramisu.",
    },
    {
        title: "ARMENIA",
        imageSrc: "/images/armenia.jpeg",
        description:
            "Dolma, Sarma, Lesmeyun, Mante, Lavash, Matsun, Baklava.",
    },
    {
        title: "SOPAS",
        imageSrc: "/images/sopas.jpeg",
        description:
            "De calabaza, zanahoria, de verduras, de hongos, de espinaca.",
    },
    {
        title: "ENSALADAS",
        imageSrc: "/images/ensalada2.jpeg",
        description:
            "De todo tipo: de verano, otoñales, con frutas, verduras y proteinas.",
    },
    {
        title: "TARTAS",
        imageSrc: "/images/tarta.jpg",
        description:
            "De verduras de estacion: zapallito, hongos, espinaca, etc.",
    },
    {
        title: "PANES",
        imageSrc: "/images/panes.jpeg",
        description:
            "Kete, Focaccia, Bagette, Brioche, Roti/Chapati, Bagel, etc.",
    },
    {
        title: "POSTRES",
        imageSrc: "/images/postre.jpg",
        description:
            "Dulces, Frutales, Semiamargos. Desde los tradicionales como la isla flotante, a los innovadores como el arrollado de rosas.",
    },
    {
        title: "MARISCOS",
        imageSrc: "/images/mariscos.jpeg",
        description:
            "En la paella, en la pasta, a la plancha y a la parrilla.",
    },
    {
        title: "TORTAS",
        imageSrc: "/images/torta1.jpeg",
        description:
            "Torta havanette, de frutillas y dulce de leche, marquisse, lemon pie, cheesecake, de pistacchio y chocolate blanco, y muchas mas!",
    },
];

export default function TalleresPage() {
    return (
        <>
            {/* Intro section (bg-container) */}
            <section className="bg-brand-bg">
                <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
                    <h1 className="px-4 pt-4 pb-2 text-center text-[2.5rem] md:text-[4rem]">
                        Talleres de Cocina
                    </h1>

                    <p className="my-4 mx-4 text-center text-xl">
                        Preparamos talleres grupales de cocina: participativos, personalizados.
                        <br />
                        Una rica manera de conectarte con tu gente querida.
                        <br />
                        Aprendiendo juntos nuevas recetas y tecnicas.
                        <br />
                        Compartiendo lo preparado entre todos.
                    </p>

                    <div className="py-4 text-center">
                        <img
                            src="/images/chilli2.png"
                            alt="Icon of chilli"
                            className="max-w-full h-auto w-[100px] mx-auto"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex justify-center items-center p-4">
                        <h2 className="text-xl md:text-2xl">
                            EXPLORÁ ALGUNAS DE MIS PROPUESTAS
                        </h2>
                    </div>

                    <div className="flex justify-center items-center p-4 text-brand-text">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="46"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="animate-bounce"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 
                .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1
                .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                            />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Cards section */}
            <section className="bg-brand-yellow">
                <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
                    <div className="flex flex-wrap justify-between gap-6">
                        {workshops.map((workshop) => (
                            <div
                                key={workshop.title}
                                className="flex-1 basis-[calc(50%-0.75rem)] flex justify-center min-w-[260px]"
                            >
                                <WorkshopCard
                                    title={workshop.title}
                                    description={workshop.description}
                                    imageSrc={workshop.imageSrc}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center  py-8 ">
                        <SecondaryButton href="#bottom">
                            Contactame
                        </SecondaryButton>
                    </div>
                </div>
            </section>
        </>
    );
}
