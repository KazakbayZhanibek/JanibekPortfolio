import { useState } from 'react'
import { Download, Monitor, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { copy, type Language, type ProjectId } from '@/content'
import { cn } from '@/lib/utils'

export function ProjectPreview({ project, compact = false }: { project: ProjectId; compact?: boolean }) {
  if (project === 'tenge' && !compact) {
    return <div className="aspect-[5/4] overflow-hidden bg-secondary">
      <img src={`${import.meta.env.BASE_URL}images/projects/tenge-mobile.webp`} alt="" width={390} height={844} loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
    </div>
  }
  return <img
    src={`${import.meta.env.BASE_URL}images/projects/${project}-desktop.webp`}
    alt=""
    width={1440}
    height={1000}
    loading={project === 'rano' ? 'eager' : 'lazy'}
    fetchPriority={project === 'rano' ? 'high' : 'auto'}
    decoding="async"
    className={cn('block w-full bg-secondary', compact ? 'h-full object-cover object-top' : 'h-auto')}
  />
}

export function ProjectScreenshots({ project, name, language }: { project: ProjectId; name: string; language: Language }) {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop')
  const t = copy[language]
  const mobile = device === 'mobile'
  const image = `${import.meta.env.BASE_URL}images/projects/${project}-${device}.webp`

  return <section aria-labelledby="project-screenshots-heading">
    <div className="mb-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
      <h3 id="project-screenshots-heading" className="text-base font-medium">{t.screenshots}</h3>
      <div role="group" aria-label={t.screenshotView} className="flex gap-1">
        <Button variant="ghost" aria-pressed={!mobile} onClick={() => setDevice('desktop')} className={cn('min-h-11 px-3 text-xs', !mobile && 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground')}><Monitor aria-hidden="true" />{t.desktop}</Button>
        <Button variant="ghost" aria-pressed={mobile} onClick={() => setDevice('mobile')} className={cn('min-h-11 px-3 text-xs', mobile && 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground')}><Smartphone aria-hidden="true" />{t.mobile}</Button>
      </div>
    </div>
    <figure>
      <img key={image} src={image} alt={`${name} — ${t[device]}`} width={mobile ? 390 : 1440} height={mobile ? 844 : 1000} className={cn('mx-auto block h-auto w-full rounded-xl bg-secondary', mobile && 'max-w-97.5')} />
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <span className="text-xs leading-6 text-muted-foreground">{t.screenshotHint}</span>
        <a href={image} download={`${project}-${device}.webp`} className="inline-flex min-h-11 items-center gap-2 text-xs text-primary hover:underline"><Download aria-hidden="true" className="size-4" />{t.download}</a>
      </figcaption>
    </figure>
  </section>
}
