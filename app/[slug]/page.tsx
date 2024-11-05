import { notFound } from "next/navigation";
import { pagesData } from "@/constant";
import {
  Button,
  GraphicsProjects,
  OurWork,
  Showcase,
  Title,
  WebApp,
} from "@/components";
import Image from "next/image";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return pagesData.map((page) => ({
    slug: page.slug,
  }));
}

const DynamicPage = ({ params }: PageProps) => {
  const pageContent = pagesData.find((page) => page.slug === params.slug);
  const pageSlug = pageContent?.slug;

  if (!pageContent) {
    notFound();
  }

  return (
    <>
      <div
        className={`${
          pageSlug === "websites"
            ? "bg-[url('/images/backgroundWebsite.svg')] bg-no-repeat bg-cover md:pt-10"
            : ""
        } px-6 `}
      >
        <div
          className={`lg:flex ${
            pageSlug === "our-work" ? "sm:flex-row-reverse" : ""
          } lg:justify-between pt-[50px] max-width mx-auto px-4 md:text-start mb-[38px]`}
        >
          <div className={`relative lg:w-[33%] w-[80%] h-60 lg:h-[488px] mt-3`}>
            <img
              src={`${
                pageSlug === "websites"
                  ? "/images/website.svg"
                  : pageContent.img
              } `}
              alt="Image of laptop"
              className="object-cover md:pt-14 "
            />
          </div>
          <div className="flex flex-col justify-center items-start mx-3 text-center gap-[11px] lg:w-[60%] w-full">
            <h1 className="text-[24px] sm:text-[27px] md:text-[30px] uppercase lg:text-[47.78px] text-left">
              {pageContent.title}
            </h1>
            <p className="secondaryFont text-sm sm:text-base md:text-lg text-left">
              {pageContent.text}
            </p>
            <Button color="bg-accent" textColor="text-black">
              Zobacz jak działamy!
            </Button>
          </div>
        </div>
      </div>
      {pageSlug === "websites" && (
        <>
          <div className="bg-[#f5f5f5] px-6">
            <div className="flex flex-col max-width gap-[40px] py-[22px]">
              {pageContent.body?.map((item) => (
                <div key={item.title} className="w-[70%] mx-3 even:self-end">
                  <h2 className="text-[24px] sm:text-[27px] md:text-[30px] font-bold z-0 mb-[20px]">
                    {item.title}
                  </h2>
                  <p className="secondaryFont">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            {pageContent.technologies?.map((item) => (
              <div className="max-width" key={item.title}>
                <div className="mx-3">
                  <h2 className="text-[24px] sm:text-[27px] md:text-[30px] font-bold my-[20px]">
                    {item.title}
                  </h2>
                  <p className="secondaryFont ">{item.text}</p>
                  <div
                    className="flex items-center flex-wrap justify-center lg:gap-24"
                    key={item.title}
                  >
                    {item.images.map((image, index) => (
                      <div
                        className="width-[86px] height-[86px] border border-black rounded-[20px] px-[21.93px] py-[19.11px] mt-[45px] mb-[105px] "
                        key={index}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={45}
                          height={45}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {pageSlug === "web-apps" && <WebApp />}
      {pageSlug === "graphics-projects" && <GraphicsProjects />}
      {pageSlug === "showcase" && <Showcase />}
      {pageSlug === "our-work" && <OurWork />}

      {(pageSlug === "graphics-projects" ||
        pageSlug === "websites" ||
        pageSlug === "web-apps") && (
        <>
          <div className="mx-5 mb-5">
            <Title>
              Nasze <span className="custom-stroke text-white">realizacje</span>
            </Title>
          </div>
          <div className="bg-black flex flex-col items-center justify-center gap-9 pt-20">
            <div className="perspective flex flex-wrap items-center justify-center max-width gap-7">
              {pageContent.images?.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  height={266}
                  width={460}
                  style={{ objectFit: "cover" }}
                  className={`h-[262px] w-[460px] rounded-[40px] ${
                    index === 2 ? "w-[351px] transform1" : ""
                  } ${index === 0 ? "w-[351px] transform2" : ""} `}
                />
              ))}
            </div>
            <Button color="bg-accent" textColor="text-black">
              Zobacz więcej
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default DynamicPage;
