"use client"

import Image from "next/image"
import { useState } from "react"
import { toast } from "sonner"

type FormFields = {
  name: string
  phoneNumber: string
  organization: string
  industry: string
  message: string
}

type FieldErrors = Partial<Record<keyof FormFields, string>>

const INITIAL_FORM: FormFields = {
  name: "",
  phoneNumber: "+251",
  organization: "",
  industry: "",
  message: "",
}

const Supply = () => {
  const [form, setForm] = useState<FormFields>(INITIAL_FORM)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = (): FieldErrors => {
    const next: FieldErrors = {}
    if (!form.name.trim()) {
      next.name = "Please enter your name."
    }
    const phoneDigits = form.phoneNumber.replace(/\D/g, "")
    if (!form.phoneNumber.trim() || phoneDigits.length < 4) {
      next.phoneNumber = "Please enter a valid phone number."
    }
    return next
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const fieldErrors = validate()
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      toast.error("Please fix the highlighted fields and try again.")
      return
    }

    const accessKey = process.env.NEXT_PUBLIC_W3F_ACCESS_KEY
    if (!accessKey) {
      toast.error("Form is not configured. Please try again later.")
      return
    }

    // Honeypot anti-spam: real users never check this hidden box.
    const formEl = e.currentTarget
    const botcheck = (formEl.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked
    if (botcheck) return

    setSubmitting(true)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Supply request from ${form.name || "the website"}`,
          from_name: "Antachia Supply Form",
          name: form.name,
          phone_number: form.phoneNumber,
          organization: form.organization,
          industry: form.industry,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        toast.success("Thanks — we'll be in touch shortly.")
        setForm(INITIAL_FORM)
        setErrors({})
      } else {
        toast.error(data.message || "Something went wrong. Please try again.")
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="supply"
      className="relative flex min-h-dvh w-screen flex-col overflow-hidden bg-white md:flex-row"
    >
      {/* Left — Form on paper */}
      <div className="relative flex w-full items-center justify-center px-6 py-16 sm:px-10 md:w-1/2 md:py-20">
        <div className="relative w-full max-w-[620px]">
          {/* Corner brackets */}
          <span className="absolute -left-8 -top-8 select-none text-3xl leading-none text-neonGreen">
            &#x250C;
          </span>
          <span className="absolute -right-8 -top-8 select-none text-3xl leading-none text-neonGreen">
            &#x2510;
          </span>
          <span className="absolute -bottom-8 -left-8 select-none text-3xl leading-none text-neonGreen">
            &#x2514;
          </span>
          <span className="absolute -bottom-8 -right-8 select-none text-3xl leading-none text-neonGreen">
            &#x2518;
          </span>

          <div
          className=" bg-cover bg-top"
            // style={{ backgroundImage: "url(/images/landing/paper.png)" }}
            >
            <div
              className=" px-8 py-10 sm:px-12 sm:py-14 bg-brightGreen text-secondary"
            >
              {/* Heading */}
              <h2 className="mb-4 font-garamond-bd-narrow-ita text-[32px] italic leading-[1.1] text-secondary md:text-[56px] lg:text-[55px]">
                Reach Out For Supply!
              </h2>

              {/* Subtitle */}
              <p className="mb-10 max-w-md font-garamond-lt-narrow text-[11px] uppercase tracking-widest /90 sm:text-[12px]">
                Tell us what you need, we will be happy to listen to you &amp;
                cater to your needs.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-4">
                {/* Honeypot — hidden from users, bots will fill it */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                {/* Row 1: Name + Phone Number */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                  <div>
                    <label className="mb-2 block font-garamond-lt-narrow text-[11px] uppercase tracking-widest  sm:text-[12px]">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      className={`h-10 w-full bg-white px-3 font-garamond-lt-narrow text-sm text-accent outline-none ${
                        errors.name ? "ring-2 ring-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 font-garamond-lt-narrow text-[11px] uppercase tracking-widest text-red-300">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block font-garamond-lt-narrow text-[11px] uppercase tracking-widest  sm:text-[12px]">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      aria-invalid={!!errors.phoneNumber}
                      className={`h-10 w-full bg-white px-3 font-garamond-lt-narrow text-sm text-accent outline-none ${
                        errors.phoneNumber ? "ring-2 ring-red-500" : ""
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 font-garamond-lt-narrow text-[11px] uppercase tracking-widest text-red-300">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Organization + Industry */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                  <div>
                    <label className="mb-2 block font-garamond-lt-narrow text-[11px] uppercase tracking-widest  sm:text-[12px]">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      className="h-10 w-full bg-white px-3 font-garamond-lt-narrow text-sm text-accent outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-garamond-lt-narrow text-[11px] uppercase tracking-widest  sm:text-[12px]">
                      Industry
                    </label>
                    <div className="relative">
                      <select
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        className="h-10 w-full appearance-none bg-white px-3 pr-8 font-garamond-lt-narrow text-sm text-accent outline-none"
                      >
                        <option value="">Pick</option>
                        <option value="retail">Retail</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="distribution">Distribution</option>
                        <option value="other">Other</option>
                      </select>
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-accent/70">
                        &#9662;
                      </span>
                    </div>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div>
                  <label className="mb-2 block font-garamond-lt-narrow text-[11px] uppercase tracking-widest  sm:text-[12px]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="TELL US WHAT YOU NEED,"
                    className="w-full resize-none bg-white px-3 py-2 font-garamond-lt-narrow text-sm text-accent outline-none placeholder:uppercase placeholder:tracking-widest placeholder:text-accent/40"
                  />
                </div>

                {/* Submit — centered + compact */}
                <div className="mt-4 flex justify-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="cursor-pointer rounded-sm bg-neonGreen px-10 py-1.5 font-garamond-lt-narrow text-sm text-accent transition-colors duration-200 hover:bg-neonGreen/80 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Request"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right — Background image + logo stamp (hidden on mobile) */}
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
            width={240}
            height={240}
            className="h-40 w-40 opacity-90 sm:h-[200px] sm:w-[200px] lg:h-60 lg:w-60"
          />
        </div>
      </div>
    </section>
  )
}

export default Supply
