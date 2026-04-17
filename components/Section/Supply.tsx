"use client"

import Image from "next/image"
import { useState } from "react"

const Supply = () => {
  const [form, setForm] = useState({
    name: "",
    telNumber: "",
    city: "",
    organization: "",
    requirement: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section
      id="supply"
      className="relative flex min-h-dvh w-screen flex-col overflow-hidden bg-white md:flex-row"
    >
      {/* Left — Form on old paper */}
      <div className="relative flex w-full items-center justify-center px-6 py-16 sm:px-10 md:w-1/2 md:py-20">
        {/* Paper background */}
        <div className="relative w-full max-w-[540px]">
          {/* Corner brackets */}
          <span className="absolute -left-3 -top-3 select-none text-3xl text-accent/30">
            &#x250C;
          </span>
          <span className="absolute -right-3 -top-3 select-none text-3xl text-accent/30">
            &#x2510;
          </span>
          <span className="absolute -bottom-3 -left-3 select-none text-3xl text-accent/30">
            &#x2514;
          </span>
          <span className="absolute -bottom-3 -right-3 select-none text-3xl text-accent/30">
            &#x2518;
          </span>

          <div
            className="rounded-lg bg-cover bg-center px-8 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14"
            style={{ backgroundImage: "url(/images/supply/Old-Paper.png)" }}
          >
            {/* Heading */}
            <h2 className="mb-3 font-garamond-bd-narrow-ita text-[28px] italic leading-[1.1] text-accent sm:text-[34px] md:text-[38px] lg:text-[42px]">
              Reach Out For Supply!
            </h2>

            {/* Subtitle */}
            <p className="mb-8 font-garamond-lt-narrow text-[11px] uppercase tracking-widest text-accent/50 sm:text-[12px]">
              Tell us what you need and we&apos;ll be happy to listen to you &amp;
              cater to your needs.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Row 1: Name + Tel Number */}
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-4">
                <div className="flex-1">
                  <label className="mb-1.5 block font-garamond-lt-narrow text-[10px] uppercase tracking-widest text-accent/40 sm:text-[11px]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border-b border-accent/15 bg-transparent py-2 font-garamond-lt-narrow text-[14px] text-accent outline-none transition-colors focus:border-accent/40"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1.5 block font-garamond-lt-narrow text-[10px] uppercase tracking-widest text-accent/40 sm:text-[11px]">
                    Tel Number
                  </label>
                  <input
                    type="tel"
                    name="telNumber"
                    value={form.telNumber}
                    onChange={handleChange}
                    className="w-full border-b border-accent/15 bg-transparent py-2 font-garamond-lt-narrow text-[14px] text-accent outline-none transition-colors focus:border-accent/40"
                  />
                </div>
              </div>

              {/* Row 2: City + Organization */}
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-4">
                <div className="flex-1">
                  <label className="mb-1.5 block font-garamond-lt-narrow text-[10px] uppercase tracking-widest text-accent/40 sm:text-[11px]">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full border-b border-accent/15 bg-transparent py-2 font-garamond-lt-narrow text-[14px] text-accent outline-none transition-colors focus:border-accent/40"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1.5 block font-garamond-lt-narrow text-[10px] uppercase tracking-widest text-accent/40 sm:text-[11px]">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    className="w-full border-b border-accent/15 bg-transparent py-2 font-garamond-lt-narrow text-[14px] text-accent outline-none transition-colors focus:border-accent/40"
                  />
                </div>
              </div>

              {/* Row 3: Requirement */}
              <div>
                <label className="mb-1.5 block font-garamond-lt-narrow text-[10px] uppercase tracking-widest text-accent/40 sm:text-[11px]">
                  Requirement
                </label>
                <input
                  type="text"
                  name="requirement"
                  value={form.requirement}
                  onChange={handleChange}
                  className="w-full border-b border-accent/15 bg-transparent py-2 font-garamond-lt-narrow text-[14px] text-accent outline-none transition-colors focus:border-accent/40"
                />
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="mb-1.5 block font-garamond-lt-narrow text-[10px] uppercase tracking-widest text-accent/40 sm:text-[11px]">
                  Tell us what you need
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full resize-none border-b border-accent/15 bg-transparent py-2 font-garamond-lt-narrow text-[14px] text-accent outline-none transition-colors focus:border-accent/40"
                />
              </div>

              {/* Submit */}
              <div className="mt-2">
                <button
                  type="submit"
                  className="cursor-pointer rounded-sm bg-neonGreen px-10 py-2.5 font-garamond-lt-narrow text-[13px] font-bold uppercase tracking-widest text-accent transition-colors duration-200 hover:bg-neonGreen/80 sm:text-[14px]"
                >
                  Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right — Background image + logo stamp */}
      <div className="relative hidden w-1/2 md:block">
        <Image
          src="/images/supply/Form-right-Image.jpg"
          alt="Olive grove"
          fill
          className="object-cover"
        />

        {/* Green logo stamp — centered */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Image
            src="/images/landing/SVG/greenLogo.svg"
            alt="Antachia stamp"
            width={180}
            height={180}
            className="h-[120px] w-[120px] opacity-90 sm:h-[140px] sm:w-[140px] lg:h-[180px] lg:w-[180px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Supply
