import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import {
  profile,
  about,
  services,
  projects,
  testimonials,
} from '@/lib/profile-data'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {profile.availability}
            </span>
            <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {"Hi, I'm "}
              <span className="text-primary">{profile.name}</span>. {profile.title}.
            </h1>
            <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className={buttonVariants({ size: 'lg' })}
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={profile.resumeUrl}
                className={buttonVariants({ size: 'lg', variant: 'outline' })}
              >
                <Download className="h-4 w-4" />
                Download CV
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-primary/20 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <Image
                src={profile.profileImage || '/placeholder.svg'}
                alt={`Portrait of ${profile.name}`}
                width={480}
                height={560}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading eyebrow="About Me" title={about.headline} />
        <div className="mt-6 max-w-3xl space-y-4 text-pretty leading-relaxed text-muted-foreground">
          <p>{about.paragraphs[0]}</p>
          <p>{about.paragraphs[1]}</p>
        </div>
        <Link
          href="/about"
          className={cn(
            buttonVariants({ variant: 'link' }),
            'mt-4 px-0 text-primary',
          )}
        >
          Read my full story
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Services preview */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <SectionHeading
            eyebrow="What I Do"
            title="Services I offer"
            description="From concept to launch, I help you build products that stand out."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: 'link' }),
              'mt-6 px-0 text-primary',
            )}
          >
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured projects"
          description="A selection of things I've designed and built recently."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  width={480}
                  height={360}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {project.category}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <SectionHeading
            eyebrow="Kind Words"
            title="What people say"
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.author}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <blockquote className="text-pretty leading-relaxed">
                  {'"'}
                  {t.quote}
                  {'"'}
                </blockquote>
                <figcaption className="mt-5">
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-primary-foreground/90">
            {"Let's build something great together. I'm always open to discussing new opportunities."}
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'secondary' }),
              'mt-8',
            )}
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
