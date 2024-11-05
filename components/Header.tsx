import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={`flex flex-col-reverse lg:flex-row items-center justify-evenly pt-10 gap-10 lg:pt-36 max-width pb-10 md:pb-28 px-6  `}
    >
      <div className="flex flex-col justify-center items-center text-center gap-[11px] lg:w-1/2">
        <h1 className="text-[24px] sm:text-[27px] md:text-[30px] uppercase lg:text-[47.78px] font-bold">
          twoja strona nasz kod
        </h1>
        <h2 className="text-[18px] sm:text-2xl md:text-[24px] uppercase lg:text-[39.81px] text-center lg:text-left custom-stroke secondaryFont text-white">
          kodujemy sukces
        </h2>
        <p className="secondaryFont w-[90%] text-sm sm:text-base md:text-lg">
          Jesteśmy dwójką pasjonatów technologii, którzy łączą swoje siły, by
          dostarczać kompleksowe rozwiązania dla Twojego biznesu. Nasza wizja to
          połączenie estetyki z funkcjonalnością, by pomóc Ci wyróżnić się w
          sieci. Z nami Twój pomysł zamieni się w rzeczywistość — niezależnie,
          czy potrzebujesz strony wizytówki, sklepu internetowego czy
          dedykowanej aplikacji.
        </p>
      </div>
      <div className="">
        <Image
          src="/images/mobileHero.svg"
          width={450}
          height={388}
          alt="Ręka trzymająca tablet, symbolizująca kodowanie sukcesu"
        />
      </div>
    </header>
  );
};

export default Header;
