import {
  AboutUs,
  Contact,
  Faq,
  Header,
  OurServices,
  Title,
} from "@/components";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/images/backgroundWebsite.svg')] bg-no-repeat bg-cover pb-10">
        <Header />
      </div>
      <Title>
        Nasze
        <span className="custom-stroke text-white">usługi</span>
      </Title>
      <div className="mt-6" />
      <main className="scroll-mt-44" id="Uslugi">
        <OurServices />
        <Title>
          O
          <span id="O-nas" className="scroll-mt-44 custom-stroke text-white">
            nas
          </span>
        </Title>
        <div className=" pt-2 md:pt-6" />
        <div className="bg-black">
          <AboutUs />
        </div>
        <div id="FAQ" className=" scroll-mt-44 md:mt-20 pt-4 md:py-10">
          <Title>faq</Title>
          <Faq />
        </div>
        <Contact />
      </main>
    </>
  );
}
