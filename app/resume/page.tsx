import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'
import {
  profile,
  about,
  skills,
  experience,
  education,
} from '@/lib/profile-data'
import { ResumeActions } from '@/components/resume-actions'

export const metadata: Metadata = {
  title: `Resume — ${profile.name}`,
  description: `Resume of ${profile.name}, ${profile.title}.`,
}

export default function ResumePage() {
  return (
    <div className="bg-muted/40 px-4 py-10 print:bg-white print:p-0">
      <ResumeActions />

      {/* Resume document */}
      <article className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none">
        {/* Header */}
        <header className="border-b border-border pb-6">
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-lg font-medium text-primary">
            {profile.title}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5"
            >
              <Mail className="h-4 w-4 text-primary" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5"
            >
              <Phone className="h-4 w-4 text-primary" />
              {profile.phone}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </span>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
            Profile
          </h2>
          <p className="mt-2 text-pretty leading-relaxed text-foreground/90">
            {about.paragraphs[0]}
          </p>
        </section>

        {/* Experience */}
        <section className="mt-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
            Experience
          </h2>
          <div className="mt-3 space-y-4">
            {experience.map((job) => (
              <div key={`${job.role}-${job.company}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-semibold">
                    {job.role}
                    <span className="font-normal text-muted-foreground">
                      {' '}
                      · {job.company}
                    </span>
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
            Skills
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold">{group.category}</h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
            Education
          </h2>
          <div className="mt-3 space-y-3">
            {education.map((item) => (
              <div
                key={item.credential}
                className="flex flex-wrap items-baseline justify-between gap-x-3"
              >
                <h3 className="font-semibold">
                  {item.credential}
                  <span className="font-normal text-muted-foreground">
                    {' '}
                    · {item.institution}
                  </span>
                </h3>
                <span className="text-sm text-muted-foreground">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
