'use client'

import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export function ResumeActions() {
  return (
    <div className="mx-auto mb-6 flex max-w-3xl items-center justify-between gap-3 print:hidden">
      <Link
        href="/"
        className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to site
      </Link>
      <button
        type="button"
        onClick={() => window.print()}
        className={cn(buttonVariants({ size: 'sm' }))}
      >
        <Download className="h-4 w-4" />
        Download PDF
      </button>
    </div>
  )
}
