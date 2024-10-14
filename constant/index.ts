interface Links {
	href: string
	title: string
}

interface Pages {
	title: string
}
interface Services {
	title: string
	text: string
	src: string
	alt: string
}

interface Faq {
	title: string
	text: string
}

interface Sitemap {
	text: string
	href: string
}

export const navLinks: Links[] = [
	{ href: "/Uslugi", title: "Usługi" },
	{ href: "/O-nas", title: "O Nas" },
	{ href: "/Realizacje", title: "Realizacje" },
	{ href: "/Cennik", title: "Cennik" },
	{ href: "/Kontakt", title: "Kontakt" },
]

export const services: Services[] = [
	{
		title: "strony internetowe",
		text: "Tworzymy nowoczesne, responsywne strony internetowe, które nie tylko przyciągają uwagę, ale także spełniają najwyższe standardy technologiczne. Nasze strony są dostosowane do Twoich potrzeb biznesowych – od prostych stron wizytówek po rozbudowane platformy e-commerce. Każdy projekt realizujemy z myślą o wygodzie użytkownika, intuicyjnym interfejsie oraz szybkości działania. Z nami Twoja strona stanie się skutecznym narzędziem marketingowym.",
		src: "/images/headerLaptopMini.png",
		alt: "kolbasa",
	},
	{
		title: "grafika komputerowa",
		text: "Profesjonalna grafika to klucz do wyróżnienia się w sieci. Tworzymy unikalne projekty graficzne, które w pełni oddają charakter Twojej marki. Nasze usługi obejmują tworzenie identyfikacji wizualnej marki, banerów, materiałów reklamowych oraz grafik na potrzeby mediów społecznościowych. Stawiamy na kreatywność, nowoczesne podejście do designu oraz dbałość o szczegóły. Pomożemy Ci wyróżnić się z tłumu!",
		src: "/images/headerLaptopMini.png",
		alt: "kolbasa",
	},
	{
		title: "aplikacje webowe",
		text: "Tworzymy intuicyjne aplikacje webowe, które odpowiadają na potrzeby Twojego biznesu. Nasze rozwiązania są proste w obsłudze, a jednocześnie skuteczne i funkcjonalne. Specjalizujemy się w aplikacjach ułatwiających zarządzanie treściami, formularzami oraz integracjami z systemami zewnętrznymi. Każdy projekt dostosowujemy indywidualnie, aby zapewnić maksymalną użyteczność i wygodę zarówno Tobie, jak i Twoim klientom.",
		src: "/images/headerLaptopMini.png",
		alt: "kolbasa",
	},
	{
		title: "konfiguracja wizytówki google",
		text: "Wizytówka Google to niezwykle ważne narzędzie wykorzystywane przez małe i większe biznesy. Pomożemy Ci zadbać o to, by Twoja firma była łatwo odnajdywana przez klientów lokalnych. Oferujemy kompleksową konfigurację i optymalizację wizytówki Google, dzięki czemu zwiększysz swoje szanse na dotarcie do nowych klientów. Zadbaj o swój wizerunek w internecie z naszą pomocą.",
		src: "/images/headerLaptopMini.png",
		alt: "kolbasa",
	},
]

export const faq: Faq[] = [
	{
		title: "Ile kosztuje strona internetowa?",
		text: "Koszt stworzenia strony internetowej zależy od jej skomplikowania oraz liczby funkcji. Prosta strona wizytówka to wydatek rzędu 2000- 2500 zł, natomiast bardziej rozbudowane projekty z funkcjami e-commerce lub zaawansowaną grafiką mogą kosztować więcej. Każdy projekt wyceniamy indywidualnie po ustaleniu Twoich potrzeb.",
	},
	{
		title: "Ile trwa zrobienie strony internetowej?",
		text: "Czas realizacji strony internetowej zależy od jej złożoności. Prosta strona może być gotowa w ciągu 2-3 tygodni, natomiast bardziej zaawansowane projekty mogą zająć od 4 do 6 tygodni. Dokładny harmonogram ustalamy na początku współpracy, aby dostosować się do Twoich oczekiwań.",
	},
	{
		title: "Czy mogę edytować treści na mojej stronie po jej wykonaniu?",
		text: "Tak! Strony, które tworzymy, mogą opierać się na systemach CMS (np. WordPress), dzięki czemu możesz z łatwością edytować treści, dodawać nowe wpisy na bloga lub zmieniać zdjęcia bez znajomości kodowania.",
	},
	{
		title: "Jakie są koszty utrzymania strony internetowej?",
		text: "Koszty utrzymania strony zależą od wybranego hostingu, domeny i dodatkowych usług, takich jak aktualizacje czy wsparcie techniczne, aczkolwiek są to opłaty rzędu 400 zł rocznie przy wyborze bardziej podstawowego zestawu usług. Koszty mogą wzrosnąć do około 1000zł rocznie, gdy weźmiemy pod uwagę wsparcie techniczne oraz bardziej zaawansowany pakiet usług.",
	},
	{
		title: "Czym są CMS i do czego służą?",
		text: "CMS (Content Management System) to system zarządzania treścią, który umożliwia łatwe dodawanie, edytowanie i usuwanie treści na stronie internetowej bez potrzeby znajomości kodu. Przykłady popularnych CMS-ów to WordPress, Joomla i Drupal.",
	},
]

export const sitemap: Sitemap[] = [
	{ text: "Strony internetowe", href: "/" },
	{ text: "Projekty", href: "/" },
	{ text: "Aplikacje webowe", href: "/" },
	{ text: "Konfiguracja wizytówki Google", href: "/" },
	{ text: "Realizacje", href: "/" },
	{ text: "Współpraca", href: "/" },
	{ text: "Kontakt", href: "/" },
]

export const pagesData = [
	{
		slug: "Uslugi",
		title: "Strony internetowe",
		text: "Chcesz zdobyć nowych klientów i pokazać swoją firmę w najlepszym świetle? Dobrze trafiłeś! Tworzymy nowoczesne, responsywne strony internetowe, które przyciągają wzrok i sprawiają, że Twoi klienci czują się jak w domu. Każdy projekt dopasowujemy indywidualnie, bo Twoja strona ma być nie tylko ładna, ale też funkcjonalna i łatwa w obsłudze – jak dobrze zaprojektowane auto, które płynnie sunie po drogach internetu. Dajemy Ci pełen pakiet usług: projektowanie stron od zera, odświeżanie istniejących witryn, a nawet ich turbooptymalizację pod kątem SEO, żeby Twoja strona wyskakiwała na szczycie wyników wyszukiwania. Niezależnie od tego, czy prowadzisz małą firmę, czy spore przedsiębiorstwo, z nami Twoja strona stanie się narzędziem, które będzie przyciągać klientów jak magnes.",
		img: "/images/headerLaptopMini.png",
		alt: "kolbasa",
		body: [
			{
				title: "1. Poznajmy Twoje potrzeby!",
				text: "Zanim zaczniemy, musimy się dobrze poznać! Każdy projekt zaczynamy od rozmowy, podczas której dowiadujemy się, jaka jest Twoja wizja. Chcemy wiedzieć, co Twoja strona ma robić, kogo ma przyciągać i jakie cele chcesz osiągnąć. Na tym etapie rozmawiamy też o designie, funkcjach i technologiach, które chcesz wykorzystać – wszystko po to, żeby przygotować ofertę idealnie dopasowaną do Twoich potrzeb. A do tego ustalamy harmonogram, żeby wszystko szło jak po maśle.",
			},
			{
				title: "2. Projekt wizualny i poprawki projektu",
				text: "Teraz zaczyna się zabawa! Po zebraniu wszystkich informacji zabieramy się za tworzenie pierwszej wersji projektu graficznego Twojej strony. To etap, na którym magia spotyka się z funkcjonalnością – skupiamy się na tym, żeby strona była piękna, intuicyjna i łatwa w obsłudze. Przedstawimy Ci prototyp, który będziesz mógł ocenić, a my z przyjemnością wprowadzimy Twoje poprawki. Jesteśmy otwarci na wszelkie uwagi, bo ostateczny wygląd strony ma być efektem współpracy i dopracowania każdego szczegółu.",
			},
			{
				title: "3. Kodowanie Twojej strony!",
				text: "Kiedy projekt wizualny dostaje zielone światło, ruszamy z kodowaniem! Na tym etapie zamieniamy piękną grafikę w funkcjonalną stronę, która będzie działać szybko i sprawnie na każdym urządzeniu. Stawiamy na responsywność, więc nie musisz martwić się, jak strona wygląda na telefonie, tablecie czy komputerze – będzie świetna wszędzie. Dbamy o optymalizację pod kątem SEO, żeby Google pokochało Twoją stronę i wywindowało ją w wynikach wyszukiwania. Na koniec testujemy wszystko, żeby mieć pewność, że działa jak należy – płynnie, szybko i bezbłędnie.",
			},
		],
		technologies: [
			{
				title: "Z jakich technologi korzystamy?",
				text: "Wykorzystujemy nowoczesne technologie, które pozwalają nam tworzyć szybkie, bezpieczne i responsywne strony internetowe. Dzięki elastycznym narzędziom jesteśmy w stanie dostosować nasze projekty do różnych wymagań — od prostych stron wizytówek po bardziej zaawansowane aplikacje webowe. Stawiamy na technologie, które gwarantują skalowalność, łatwość w utrzymaniu oraz pełną zgodność z aktualnymi standardami sieciowymi. Dzięki temu nasze projekty są funkcjonalne, a ich obsługa jest intuicyjna zarówno dla użytkowników, jak i administratorów stron.",
				images: [
					{ src: "/images/html.svg", alt: "icon" },
					{ src: "/images/css.svg", alt: "icon" },
					{ src: "/images/js.svg", alt: "icon" },
					{ src: "/images/react.svg", alt: "icon" },
					{ src: "/images/tailwind.svg", alt: "icon" },
					{ src: "/images/wordpress.svg", alt: "icon" },
				],
			},
		],
		images: [
			{ src: "/images/headerLaptopMini.png", alt: "kolbasa" },
			{ src: "/images/headerLaptopMini.png", alt: "kolbasa" },
			{ src: "/images/headerLaptopMini.png", alt: "kolbasa" },
		],
	},
	{
		slug: "O-nas",
		title: "Projekty graficzne",
		text: "W dzisiejszym cyfrowym świecie grafika to must-have każdej marki. Od logotypów, przez banery reklamowe, po grafiki na social media – dobra oprawa wizualna to klucz do przyciągnięcia uwagi klientów i budowania pozytywnego wizerunku firmy. Nasze projekty graficzne to połączenie kreatywności z nowoczesną technologią, które pozwoli Twojej marce błyszczeć na tle konkurencji. Każde zadanie traktujemy na poważnie i z pełnym profesjonalizmem, a największe wyzwania? To dla nas codzienność!",
		img: "/images/headerLaptopMini.png",
		alt: "kolbasa",
		helpContainer: [
			{
				src: "/images/headerLaptopMini.png",
				alt: "kolbasa",
				text: "Identyfikacja wizualna firmy",
			},
			{
				src: "/images/headerLaptopMini.png",
				alt: "kolbasa",
				text: "Banery i materiały reklamowe",
			},
			{
				src: "/images/headerLaptopMini.png",
				alt: "kolbasa",
				text: "Grafiki na social media",
			},
			{
				src: "/images/headerLaptopMini.png",
				alt: "kolbasa",
				text: "Ilustracje i infografiki",
			},
			{
				src: "/images/headerLaptopMini.png",
				alt: "kolbasa",
				text: "Projekty graficzne do druku",
			},
		],
		technologies: [
			{
				title: "Z jakich technologi korzystamy?",
				text: "Wykorzystujemy nowoczesne technologie, które pozwalają nam tworzyć szybkie, bezpieczne i responsywne strony internetowe. Dzięki elastycznym narzędziom jesteśmy w stanie dostosować nasze projekty do różnych wymagań — od prostych stron wizytówek po bardziej zaawansowane aplikacje webowe. Stawiamy na technologie, które gwarantują skalowalność, łatwość w utrzymaniu oraz pełną zgodność z aktualnymi standardami sieciowymi. Dzięki temu nasze projekty są funkcjonalne, a ich obsługa jest intuicyjna zarówno dla użytkowników, jak i administratorów stron.",
				images: [
					{ src: "/images/html.svg", alt: "icon" },
					{ src: "/images/css.svg", alt: "icon" },
					{ src: "/images/js.svg", alt: "icon" },
					{ src: "/images/react.svg", alt: "icon" },
					{ src: "/images/tailwind.svg", alt: "icon" },
					{ src: "/images/wordpress.svg", alt: "icon" },
				],
			},
		],
		images: [
			{ src: "/images/headerLaptopMini.png", alt: "kolbasa" },
			{ src: "/images/headerLaptopMini.png", alt: "kolbasa" },
			{ src: "/images/headerLaptopMini.png", alt: "kolbasa" },
		],
		questionContainer: [
			{
				src: "/images/headerLaptopMini.png",
				alt: "kolbasa",
				text: "Zajmiemy się wszystkim, od logotypów po grafiki na social media – bo Twoja marka zasługuje na to, żeby wyglądać świetnie i przyciągać uwagę. Z nami nie ma miejsca na nudę, tylko kreatywne, skrojone na miarę projekty, które idealnie oddadzą charakter Twojej firmy!",
				title: "Co to jest identyfikacja wizualna firmy?",
			},
			{
				src: "/images/headerLaptopMini.png",
				alt: "kolbasa",
				text: "Zajmiemy się wszystkim, od logotypów po grafiki na social media – bo Twoja marka zasługuje na to, żeby wyglądać świetnie i przyciągać uwagę. Z nami nie ma miejsca na nudę, tylko kreatywne, skrojone na miarę projekty, które idealnie oddadzą charakter Twojej firmy!",
				title: "Co to jest identyfikacja wizualna firmy?",
			},
			{
				src: "/images/headerLaptopMini.png",
				alt: "kolbasa",
				text: "Zajmiemy się wszystkim, od logotypów po grafiki na social media – bo Twoja marka zasługuje na to, żeby wyglądać świetnie i przyciągać uwagę. Z nami nie ma miejsca na nudę, tylko kreatywne, skrojone na miarę projekty, które idealnie oddadzą charakter Twojej firmy!",
				title: "Co to jest identyfikacja wizualna firmy?",
			},
		],
	},
	{
		slug: "Realizacje",
		title: "Spójrz na nasze prace",
		text: "Poniżej znajdziesz przykłady projektów, które zrealizowaliśmy dla naszych klientów. Każdy z nich jest unikalny i dostosowany do specyficznych potrzeb biznesowych. Opisaliśmy wyzwania, z jakimi się spotkaliśmy oraz rozwiązania, które zastosowaliśmy, aby dostarczyć jak najlepszy produkt. Każdy projekt to dla nas nowe wyzwanie, które realizujemy z pełnym zaangażowaniem i pasją, dbając o detale oraz nowoczesne rozwiązania technologiczne.",
		img: "/images/headerLaptopMini.png",
		alt: "kolbasa",
	},
	{
		slug: "Cennik",
		title: "Aplikacje webowe",
		text: "Chcesz, żeby Twoja firma była tam, gdzie Twoi klienci? Aplikacja webowa to idealny sposób, by ułatwić im dostęp do Twoich usług online – prosto, szybko i bez zbędnych komplikacji. Nie zajmujemy się wielkimi, korporacyjnymi projektami – ale to, co robimy, robimy dobrze. Nasze aplikacje są przyjazne, funkcjonalne i sprawiają, że klienci chętnie do nich wracają.",
		img: "/images/headerLaptopMini.png",
		alt: "kolbasa",
		technologies: [
			{
				title: "Z jakich technologi korzystamy?",
				text: "Wykorzystujemy nowoczesne technologie, które pozwalają nam tworzyć szybkie, bezpieczne i responsywne strony internetowe. Dzięki elastycznym narzędziom jesteśmy w stanie dostosować nasze projekty do różnych wymagań — od prostych stron wizytówek po bardziej zaawansowane aplikacje webowe. Stawiamy na technologie, które gwarantują skalowalność, łatwość w utrzymaniu oraz pełną zgodność z aktualnymi standardami sieciowymi. Dzięki temu nasze projekty są funkcjonalne, a ich obsługa jest intuicyjna zarówno dla użytkowników, jak i administratorów stron.",
				images: [
					{ src: "/images/html.svg", alt: "icon" },
					{ src: "/images/css.svg", alt: "icon" },
					{ src: "/images/js.svg", alt: "icon" },
					{ src: "/images/react.svg", alt: "icon" },
					{ src: "/images/tailwind.svg", alt: "icon" },
					{ src: "/images/wordpress.svg", alt: "icon" },
				],
			},
		],
		images: [
			{ src: "/images/headerLaptopMini.png", alt: "kolbasa" },
			{ src: "/images/headerLaptopMini.png", alt: "kolbasa" },
			{ src: "/images/headerLaptopMini.png", alt: "kolbasa" },
		],
	},
	{
		slug: "Kontakt",
		title: "Konfiguracja wizytówki google",
		text: "Chcesz, żeby Twoja firma była widoczna w Google? a o to, by Twoja wizytówka Google była profesjonalnie skonfigurowana i przyciągała uwagę klientów. Dzięki temu łatwiej znajdą Cię w sieci, a Twoje dane kontaktowe, godziny otwarcia i lokalizacja będą zawsze pod ręką. To prosty sposób, żeby zwiększyć swoją widoczność i przyciągnąć więcej klientów!",
		img: "/images/headerLaptopMini.png",
		alt: "kolbasa",
	},
]
