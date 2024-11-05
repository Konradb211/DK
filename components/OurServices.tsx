import { services } from "@/constant";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const OurServices = () => {
  return (
    <div className="max-width px-6">
      {services.map((service, index) => (
        <div
          key={service.text}
          className="flex flex-col lg:flex-row lg:even:justify-between gap-[30px] items-center lg:even:flex-row-reverse mb-10 px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[371px]">
            <Image
              src={service.src}
              alt={service.alt}
              width={371}
              height={193}
              className="object-cover"
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[33px] uppercase leading-tight">
              {service.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg secondaryFont leading-relaxed lg:w-[80%]">
              {service.text}
            </p>
            <div className="mt-4 sm:mt-6">
              <Link href={service.links}>
                <Button>Dowiedz się więcej</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurServices;
