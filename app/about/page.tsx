import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Briefcase, Download, GraduationCap, MapPin } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import {
  profile,
  about,
  skills,
  experience,
  education,
} from '@/lib/profile-data'

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: about.headline,
}

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.3fr] md:py-20">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
              <Image
                src={profile.profileImage || '/placeholder.svg'}
                alt={`Portrait of ${profile.name}`}
                width={400}
                height={480}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="About Me" title={about.headline} />
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </div>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {about.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
                >
                  {interest}
                </span>
              ))}
            </div>
            <Link
              href={profile.resumeUrl}
              className={`${buttonVariants()} mt-8`}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies"
          description="The stack I reach for to bring ideas to life."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-display text-base font-bold text-primary">
                {group.category}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <SectionHeading
            eyebrow="Career"
            title="Work experience"
            description="A timeline of the roles that shaped my craft."
          />
          <div className="mt-10 space-y-4">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.period}`}
                className="rounded-2xl border border-border bg-card p-6 sm:flex sm:items-start sm:gap-5"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="mt-4 sm:mt-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="font-display text-lg font-bold">{job.role}</h3>
                    <span className="text-sm font-medium text-primary">
                      {job.company}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {job.period}
                  </p>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading eyebrow="Education" title="Learning & credentials" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.credential}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold">
                  {edu.credential}
                </h3>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {edu.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
