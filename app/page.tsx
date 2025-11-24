import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

export default function HomePage() {
  return (
    <>
      {/* Main title section */}
      <section className="bg-brand-bg pb-10">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
          {/* GIF */}
          <div className="text-center py-2">
            <img
              src="/images/gifHome.gif"
              alt="Images of food creations"
              className="max-w-full h-auto md:w-[600px] mx-auto"
              loading="lazy"
            />
          </div>

          {/* Title + description + button */}
          <div className="my-8 mx-4 text-center">
            <h1 className="py-6 text-center text-[2.5rem] md:text-[4rem]">
              Cocino con amor y especias
            </h1>

            <div className="my-4 mx-4 text-center text-xl">
              <p>
                Talleres personalizados con ingredientes frescos de estación.
                <br />
                También endulzo momentos con dulces y tortas a pedido
              </p>

              <div className="pt-8 pb-10 text-center">
                <img
                  src="/images/chilli2.png"
                  alt="Icon of chilli"
                  className="max-w-full h-auto w-[100px] mx-auto"
                  loading="lazy"
                />
              </div>

              <div className="text-center pb-6">
                <PrimaryButton href="#bottom">
                  Contactame
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Small cards section */}
      <section className="bg-brand-yellow pb-10" >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-between gap-6 py-12">
            {/* Card 1 */}
            <div className="flex-1 basis-[calc(50%-0.75rem)] flex justify-center min-w-[260px]">
              <div className="bg-white shadow-md border-0 rounded-none m-12 p-12 max-w-md w-full">
                <div>
                  <p className="px-4">12.02.25</p>
                  <h5 className="px-4 text-[2rem] text-[#DB6D40]">TALLERES</h5>
                </div>
                <img
                  src="/images/pastas.jpg"
                  alt="Taller de comida italiana"
                  className="w-[70%] mx-auto my-4 block object-cover"
                />
                <div>
                  <p className="px-4">
                    Hablamos, planificamos el taller acorde a tus intereses. Cocinamos y
                    compartimos en grupo. Al finalizar, comemos lo que cocinamos.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 basis-[calc(50%-0.75rem)] flex justify-center min-w-[260px] ">
              <div className="bg-white shadow-md border-0 rounded-none m-12 p-12 max-w-md w-full">
                <div>
                  <p className="px-4">11.03.25</p>
                  <h5 className="px-4 text-[2rem] text-[#DB6D40]">PEDIDOS</h5>
                </div>
                <img
                  src="/images/dulces.jpeg"
                  alt="Dulces artesanales"
                  className="w-[70%] mx-auto my-4 block object-cover"
                />
                <div>
                  <p className="px-4">
                    Dulces y tortas artesanales por encargo, hechos con ingredientes
                    frescos según la estación. Sabores únicos para cada ocasión especial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center  py-8 ">
            <SecondaryButton href="/talleres">
              Ver talleres
            </SecondaryButton>
          </div>

        </div>
      </section>
    </>
  );
}
