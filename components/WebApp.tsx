const WebApp = () => {
  return (
    <div className="max-width px-6">
      <h2 className="pb-5 text-[39.81px]">
        Dlaczego warto zainwestować w aplikację webową?
      </h2>
      <div className="secondaryFont">
        <p className="pb-5">
          Aplikacje webowe to świetny sposób, żeby przenieść swój biznes na
          wyższy poziom. Dzięki nim Twoi klienci mogą korzystać z Twoich usług
          bezpośrednio przez przeglądarkę, bez potrzeby instalowania dodatkowych
          programów. To idealne rozwiązanie dla firm, które chcą oferować swoim
          użytkownikom nowoczesne narzędzia dostępne w każdej chwili – na
          komputerze, tablecie czy smartfonie.
        </p>
        <p>Dlaczego warto? Bo aplikacje webowe są: </p>
        <ul className="pl-8">
          <li>
            {" "}
            Łatwo dostępne – Klienci mogą korzystać z nich z dowolnego
            urządzenia z dostępem do internetu.
          </li>
          <li>
            Szybkie w działaniu – Dzięki lekkiej strukturze działają płynnie i
            nie obciążają urządzeń.{" "}
          </li>
          <li>
            {" "}
            Skalowalne – Możemy je rozwijać razem z Twoim biznesem, dodając nowe
            funkcje w miarę wzrostu potrzeb.
          </li>
          <li>
            Wygodne – Nie trzeba instalować nic na urządzeniach, wystarczy
            dostęp do internetu.
          </li>
        </ul>
        <p className="pt-5">
          Aplikacja webowa to świetne narzędzie, które zwiększy wygodę
          korzystania z Twoich usług, ułatwi komunikację z klientami i pomoże Ci
          wyróżnić się na tle konkurencji. Jeśli chcesz usprawnić działanie
          swojej firmy i być tam, gdzie Twoi klienci – to usługa właśnie dla
          Ciebie!
        </p>
      </div>
      <div>
        <h2 className="py-5 text-[39.81px]">Technologie, której używamy</h2>
        <p className="secondaryFont pb-20">
          Nie zalewamy Cię listą technologii, ale korzystamy z nowoczesnych
          narzędzi, które gwarantują stabilność, wydajność i bezpieczeństwo
          Twojej aplikacji. Zazwyczaj pracujemy z HTML5, CSS3, JavaScript, React
          i kilkoma innymi fajnymi rozwiązaniami, które sprawiają, że Twoja
          aplikacja jest szybka, responsywna i gotowa na rozwój w przyszłości.
        </p>
      </div>
    </div>
  );
};

export default WebApp;
