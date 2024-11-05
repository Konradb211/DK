import Image from "next/image";
import { className } from "postcss-selector-parser";

const Showcase = () => {
  return (
    <div className="max-width px-6 pb-10">
      <h2 className="pb-5 pt-5 text-xl md:text-2xl lg:text-[39.81px] leading-tight uppercase">
        Zadbaj o widoczność swojej firmy w Google!
      </h2>
      <div className="secondaryFont">
        <p className="pb-5 text-sm sm:text-base md:text-lg secondaryFont leading-relaxed">
          Oferujemy kompleksowe przygotowanie Twojej wizytówki Google, aby
          klienci mogli łatwo znaleźć wszystkie potrzebne informacje o Twojej
          działalności. Zajmiemy się wszystkim – od wypełnienia danych
          kontaktowych, przez godziny otwarcia, po dokładną lokalizację na
          mapach. Ale to nie wszystko!
        </p>
        <p className="text-sm sm:text-base md:text-lg secondaryFont leading-relaxed">
          W ramach usługi oferujemy również przygotowanie profesjonalnych grafik
          na Twoją wizytówkę – logotypy, zdjęcia wnętrza firmy, a nawet zdjęcia
          produktów czy zespołu. Dzięki temu Twoja wizytówka będzie wyglądała
          nie tylko profesjonalnie, ale też zachęci klientów do odwiedzenia
          właśnie Ciebie. Pamiętaj, że dobra wizytówka Google to nie tylko
          informacje, ale też pierwsze wrażenie, które zrobi Twoja firma w
          sieci. To prosty, ale skuteczny sposób na zwiększenie swojej
          widoczności i przyciągnięcie nowych klientów. Nie czekaj – zainwestuj
          w solidną wizytówkę Google już teraz!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between max-width overflow-hidden pt-10">
        <div className="flex flex-col items-start justify-center md:w-[44%]">
          <h2 className="pb-5 text-xl md:text-2xl text-left uppercase">
            Twój lokalny biznes może więcej!
          </h2>
          <p className="secondaryFont text-sm sm:text-base md:text-lg secondaryFont leading-relaxed">
            Dzięki naszej pomocy Twoja wizytówka będzie wyróżniała się wśród
            konkurencji. Dopracujemy każdy szczegół, aby przyciągać uwagę
            klientów – od atrakcyjnych zdjęć, przez czytelne informacje, aż po
            opinie klientów, które budują zaufanie. Profesjonalnie przygotowana
            wizytówka to więcej odwiedzin i większe zainteresowanie Twoją firmą.
            Pokaż się lokalnie z jak najlepszej strony i daj klientom powód,
            żeby wybrali właśnie Ciebie!
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image
            src="/images/showcaseBefore.svg"
            alt="showcaseBefore"
            width={340.24}
            height={289.25}
          />
          <div className="text-[39.81px] bg-accent px-4 my-1 md:mx-1 rounded-3xl md:-rotate-90">
            &darr;
          </div>
          <Image
            src="/images/showcaseAfter.svg"
            alt="showcaseAfter"
            width={340.24}
            height={438.29}
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
