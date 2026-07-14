import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { profile, projects } from '@/lib/profile-data'

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: `A portfolio of work by ${profile.name}.`,
}

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected projects"
        description="A collection of products, sites, and design work I'm proud of. Each project reflects my focus on quality, usability, and impact."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg"
          >
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                width={720}
                height={450}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                {project.category}
              </span>
              <h3 className="mt-1 font-display text-xl font-bold">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                View project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
