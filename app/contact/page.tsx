import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ContactForm } from '@/components/contact-form'
import { profile } from '@/lib/profile-data'

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description: `Get in touch with ${profile.name}.`,
}

const contactDetails = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
]

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        description="Have a question or a project in mind? Fill out the form or reach me directly using the details below."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        {/* Details */}
        <div className="space-y-6">
          <div className="space-y-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="mt-0.5 font-medium">{detail.value}</p>
                  </div>
                </div>
              )
              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="block transition-shadow hover:shadow-md"
                >
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              )
            })}
          </div>

          <div className="rounded-2xl border border-border bg-secondary/40 p-5">
            <p className="font-display text-sm font-semibold uppercase tracking-wide">
              Follow me
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </section>
  )
}
