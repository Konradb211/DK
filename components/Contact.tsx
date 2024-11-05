"use client";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import Title from "./Title";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <div
      id="Kontakt"
      className="max-width flex flex-col md:flex-row items-center justify-center mb-36 px-6"
    >
      <div className="text-center w-full md:mr-12">
        <Title>Skontaktuj się z nami!</Title>
        <p className=" py-6 secondaryFont text-sm sm:text-base md:text-lg text-center">
          Masz pytania? Jesteśmy tu, żeby pomóc! Chętnie odpowiemy na wszystkie
          Twoje wątpliwości i wspólnie dobierzemy najlepsze rozwiązanie
          dopasowane do Twoich potrzeb. Oferujemy bezpłatne konsultacje, podczas
          których dowiesz się, jak możemy wspólnie zrealizować Twój projekt –
          bez względu na to, czy potrzebujesz strony internetowej, aplikacji
          webowej, czy grafik na social media. Nie zwlekaj, daj nam znać, a
          razem stworzymy coś wyjątkowego!
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full"
        noValidate={true}
      >
        <div className="flex flex-col gap-2">
          <div className="w-full flex flex-col sm:flex-row gap-2">
            <div className="w-full">
              <input
                className="border-[1.5px] border-mainGray rounded-3xl text-black p-4 secondaryFont w-full focus:outline-none focus:border-accent"
                type="text"
                id="name"
                placeholder="Imię"
                {...register("name", {
                  required: "Podaj imię.",
                })}
              />
              {errors.name && (
                <span className="text-red-600 text-sm pl-3 secondaryFont">
                  {String(errors.name.message)}
                </span>
              )}
            </div>
            <div className="w-full">
              <input
                className="border-[1.5px] border-mainGray rounded-3xl text-black p-4 secondaryFont w-full focus:outline-none focus:border-accent"
                type="text"
                id="surname"
                placeholder="Nazwisko"
                {...register("surname", {
                  required: "Podaj Nazwisko.",
                })}
              />
              {errors.surname && (
                <span className="text-red-600 text-sm pl-3 secondaryFont">
                  {String(errors.surname.message)}
                </span>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-2">
            <div className="w-full">
              <input
                className="border-[1.5px] border-mainGray rounded-3xl text-black p-4 secondaryFont w-full focus:outline-none focus:border-accent"
                type="email"
                id="email"
                placeholder="E-mail"
                {...register("email", {
                  required: "Podaj email.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Podaj poprawny adres mailowy.",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-600 text-sm pl-3 secondaryFont">
                  {String(errors.email.message)}
                </span>
              )}
            </div>
            <div className="w-full">
              <input
                className="border-[1.5px] border-mainGray rounded-3xl text-black p-4 secondaryFont w-full focus:outline-none focus:border-accent"
                type="tel"
                id="phone"
                placeholder="Numer telefonu"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Podaj numer telefonu.",
                  },
                  minLength: {
                    value: 9,
                    message: "Podaj poprawny numer telefonu.",
                  },
                  maxLength: {
                    value: 9,
                    message: "Podaj poprawny numer telefonu.",
                  },
                })}
              />
              {errors.phone && (
                <span className="text-red-600 text-sm pl-3 secondaryFont">
                  {String(errors.phone.message)}
                </span>
              )}
            </div>
          </div>
          <textarea
            id="message"
            className="resize-none	border-[1.5px] border-mainGray rounded-3xl text-black h-28 p-4 secondaryFont w-full focus:outline-none focus:border-accent"
            placeholder="Wiadomość"
            {...register("message", {
              required: "Pole z wiadomością nie moe być pustę.",
            })}
          />
          {errors.message && (
            <span className="text-red-600 text-sm pl-3 secondaryFont">
              {String(errors.message.message)}
            </span>
          )}
          <button className="bg-accent text-black py-4 rounded-3xl mt-4">
            Wyślij
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
