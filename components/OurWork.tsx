import { RealizationPhotos } from "@/constant";
import Button from "./Button";
import Image from "next/image";
import Title from "./Title";

const OurWork = () => {
  return (
    <>
      <div className="flex flex-wrap max-width px-6">
        <div className="flex flex-col gap-6 max-width bg-white">
          <Title>Strony internetowe</Title>
          <div className="flex">
            {RealizationPhotos.map((photo) =>
              photo.whitePhotos.slice(0, 2).map((whitePhoto) => (
                <div className="max-width mb-4">
                  <Image
                    className="rounded-3xl shadow-lg"
                    src={whitePhoto.src}
                    alt={whitePhoto.alt}
                    width={251}
                    height={203}
                  />
                </div>
              )),
            )}
          </div>
          <div className="flex">
            {RealizationPhotos.map((photo) =>
              photo.whitePhotos.slice(2, 4).map((whitePhoto) => (
                <div className="max-width mb-4">
                  <Image
                    className="rounded-3xl shadow-lg"
                    src={whitePhoto.src}
                    alt={whitePhoto.alt}
                    width={251}
                    height={203}
                  />
                </div>
              )),
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6 max-width">
          <h2 className="text-xl md:text-2xl lg:text-[39.81px] leading-tight uppercase text-black">
            Projekty graficzne
          </h2>
          <div className="flex">
            {RealizationPhotos.map((photo) =>
              photo.blackPhotos.slice(0, 2).map((blackPhoto) => (
                <div className="max-width mb-4">
                  <Image
                    className="rounded-3xl shadow-lg"
                    src={blackPhoto.src}
                    alt={blackPhoto.alt}
                    width={251}
                    height={203}
                  />
                </div>
              )),
            )}
          </div>
          <div className="flex">
            {RealizationPhotos.map((photo) =>
              photo.blackPhotos.slice(2, 4).map((blackPhoto) => (
                <div className="max-width mb-4">
                  <Image
                    className="rounded-3xl shadow-lg"
                    src={blackPhoto.src}
                    alt={blackPhoto.alt}
                    width={251}
                    height={203}
                  />
                </div>
              )),
            )}
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="text-white max-width">
          <h2 className="pt-6 text-xl md:text-2xl lg:text-4xl uppercase leading-tight">
            Mamy doświadczenie w pracy z klientem!
          </h2>
          <p className="py-6 secondaryFont text-sm sm:text-base md:text-lg">
            Podchodząc indywidualnie do każdego projektu, zawsze udaje nam się
            osiągnąć postawione cele oraz sprostać wyzwaniom i wymaganiom
            klienta. Każde zlecenie traktujemy jako nowe doświadczenie, które
            pozwala nam nieustannie się rozwijać. Mimo że nadal się uczymy,
            dzięki naszej pasji i zaangażowaniu jesteśmy w stanie realizować
            nawet większe i bardziej złożone projekty. Stawiamy na ciągły rozwój
            i nie boimy się nowych technologii, co pozwala nam dostarczać
            nowoczesne, funkcjonalne rozwiązania, spełniające oczekiwania
            naszych klientów.
          </p>
          <Button color="bg-accent" textColor="text-black">
            Poznaj naszą ofertę!
          </Button>
        </div>
      </div>
    </>
  );
};

export default OurWork;
