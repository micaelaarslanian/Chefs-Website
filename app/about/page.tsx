import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

export default function AboutPage() {
    return (
        <>
            <section className="bg-brand-bg">
                <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
                    <div className="flex flex-col items-center gap-8">
                        <div className="text-center">
                            <img
                                src="/images/retrato.jpeg"
                                alt="Mi retrato"
                                className="w-[350px] max-w-full h-auto mx-auto mb-8"
                            />
                            <h1 className="text-center text-[2.5rem] md:text-[4rem]">
                                Sobre Spicy Lilo
                            </h1>
                        </div>

                        <div className="max-w-[600px] mx-auto text-lg text-center leading-relaxed">
                            <p>
                                Soy Lily, de origen armenio, y desde siempre la cocina ha sido una parte
                                esencial en mi vida. Crecí rodeada de aromas ,sabores y momentos únicos
                                compartidos junto a las mujeres de mi familia.
                                <br />
                                <br />
                                Con todas ellas aprendi que cocinar es mucho más que preparar alimentos: es
                                una manera de expresar amor y conectar con quienes mas queremos.
                                <br />
                                <br />
                                De chica tome clases junto a mi tía Betty, donde descubrí técnicas y
                                recetas tradicionales, y más tarde profundicé en la cocina armenia en la
                                UGAB.
                                <br />
                                <br />
                                Mi primer acercamiento a la cocina profesional fue gracias a mi padre, un
                                cocinero autodidacta que abrió su propio bistró. Esto despertó en mí el
                                deseo de profundizar en la gastronomía.
                                <br />
                                <br />
                                Con los años, amplié mi formación aprendiendo de referentes como Beatriz
                                Chomnalez, Juliana López May y Pedro Lambertini. En el IAG estudié la
                                carrera de Profesional Gastronómico, especializándome en pastelería, y
                                complementé mi preparación con talleres avanzados junto a Luciano García e
                                Iwao Komiyama, explorando la delicadeza del sushi y otras culturas
                                gastronómicas.
                                <br />
                                <br />
                                Actualmente, comparto mi pasión por la cocina con mi grupo de compañeras
                                cocineras con las que tomamos clases y organizamos actividades
                                periodicamente para mantenernos actualizadas, intercambiar ideas y
                                explorar nuevas tendencias.
                            </p>
                        </div>

                        <div className="text-center pb-6 pt-8">
                            <PrimaryButton href="#bottom">
                                Contactame
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-brand-yellow">
                <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
                    <div className="flex flex-col items-center gap-6">
                        <img
                            src="/images/IMG_5254.jpeg"
                            alt="Taller de cocina"
                            className="w-[300px] max-w-full h-auto mx-auto mb-2"
                        />
                        <div className="max-w-[600px] mx-auto text-lg leading-relaxed text-center">
                            <p>
                                Hoy, mi pasión es enseñar. A través de talleres grupales y personalizados,
                                acompaño a personas de todas las edades a descubrir el placer de cocinar,
                                preparando platos deliciosos, de distintas culturas, explorando sabores,
                                tradiciones , con la magia de las especias, asi como tambien recetas
                                cotidianas que alimentan tanto el cuerpo como el alma.
                                <br />
                                <br />
                                Creo profundamente en el poder de la cocina para conectar, evocar recuerdos
                                y crear nuevas experiencias. Cocinar juntos es un viaje que une y compartir
                                ese recorrido para mi es una fuente inagotable se alegria e inspiracion.
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-brand-yellow">
                <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
                    <div className="flex flex-col items-center gap-6">
                        <img
                            src="/images/figs.jpeg"
                            alt="Ingredientes frescos"
                            className="w-[300px] max-w-full h-auto  mx-auto mb-2"
                        />
                        <div className="max-w-[600px] mx-auto text-lg leading-relaxed text-center">
                            <p>
                                Mi cocina está basada en vegetales , frutas y sabores que evocan la
                                calidez de la cocina casera: sabrosa, sana y especiada. Amo amasar,
                                preparar pastas y platos con pescados, ingredientes frescos y postres
                                tentadores que siempre son recibidos con alegría para finalizar una rica
                                comida.
                                <br />
                                <br />
                                Para mí, cocinar es un acto de conexión, tanto con la comida como con
                                quienes comparten la mesa.
                                <br />
                                <br />
                                Mis platos también son un homenaje a los sabores de la infancia, esos
                                recuerdos que nos acompañan y nos llenan de nostalgia y amor.
                                <br />
                                <br />
                                Te invito a descubrir y compartir un mundo de sabores que generan
                                bienestar.
                            </p>
                        </div>

                        <div className="text-center pb-6 pt-8">
                            <SecondaryButton href="/talleres">
                                Ver talleres
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
