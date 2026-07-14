import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { profile, services } from '@/lib/profile-data'

export const metadata: Metadata = {
  title: `Services — ${profile.name}`,
  description: `Services offered by ${profile.name}.`,
}

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Services"
          title="How I can help you"
          description="Whether you're starting from scratch or improving an existing product, I offer end-to-end services tailored to your goals."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
            >
              <span className="font-display text-sm font-bold text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold">
                {service.title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-primary-foreground/90">
            Tell me about your project and I&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className={`${buttonVariants({ size: 'lg', variant: 'secondary' })} mt-8`}
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
