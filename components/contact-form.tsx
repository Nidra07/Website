'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Status = 'idle' | 'submitting' | 'success'

const fieldClass =
  'w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    // Simulate sending — swap this for a real API route or form service.
    setTimeout(() => {
      setStatus('success')
    }, 900)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold">Message sent!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="Project inquiry"
          className={fieldClass}
        />
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me a bit about your project..."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
