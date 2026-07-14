import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '@/lib/profile-data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/40 print:hidden">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">{profile.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href={`mailto:${profile.email}`} className="hover:text-foreground">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href={`tel:${profile.phone}`} className="hover:text-foreground">
                {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide">
            Follow
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
          © {year} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
