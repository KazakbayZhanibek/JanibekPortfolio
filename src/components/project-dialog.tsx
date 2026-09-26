import { useRef, type RefObject } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { ProjectScreenshots } from '@/components/project-exhibits'
import { copy, projects, type Language, type ProjectId } from '@/content'

type ProjectDialogProps = {
  selected: ProjectId | null
  language: Language
  onSelect: (id: ProjectId | null) => void
  returnFocus: RefObject<HTMLButtonElement | null>
}

export default function ProjectDialog({ selected, language, onSelect, returnFocus }: ProjectDialogProps) {
  const heading = useRef<HTMLHeadingElement>(null)
  const currentIndex = projects.findIndex(project => project.id === selected)
  const current = projects[currentIndex]
  const t = copy[language]
  const ru = language === 'ru'

  return (
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) onSelect(null) }}>
      {current ? (
        <DialogContent
          showCloseButton={false}
          data-project={current.id}
          className="project-dialog flex max-h-[92dvh] min-w-0 max-w-[calc(100%-1.5rem)] flex-col gap-0 overflow-hidden rounded-none border-border bg-background p-0 text-foreground shadow-none transition-none motion-reduce:animate-none sm:max-w-264"
          onOpenAutoFocus={event => {
            event.preventDefault()
            heading.current?.focus({ preventScroll: true })
          }}
          onCloseAutoFocus={event => {
            event.preventDefault()
            returnFocus.current?.focus({ preventScroll: true })
          }}
        >
          <header className="shrink-0 border-b border-border px-4 pt-5 pb-4 sm:px-8 sm:pt-7 sm:pb-6">
            <div className="flex min-w-0 items-start justify-between gap-3">
              <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
                <DialogTitle asChild className="font-[Unbounded] text-2xl leading-tight font-extrabold tracking-[-0.03em] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:text-4xl">
                  <h2 ref={heading} tabIndex={-1}>
                    {current.name}
                  </h2>
                </DialogTitle>
              </div>
              <DialogClose asChild>
                <Button type="button" variant="ghost" size="icon" aria-label={t.close} className="size-11 shrink-0 rounded-none transition-colors">
                  <X aria-hidden="true" className="size-5" />
                </Button>
              </DialogClose>
            </div>
            <DialogDescription className="mt-3 max-w-160 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {t[current.id].subtitle}
            </DialogDescription>
          </header>

          <div key={current.id} className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain px-4 py-7 [scrollbar-gutter:stable] sm:px-8 sm:py-9">
            <ProjectScreenshots key={current.id} project={current.id} name={current.name} language={language} />
            <section className="mt-8 grid min-w-0 gap-7 border-t border-border pt-7 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-10" aria-labelledby="project-story-heading">
              <div className="min-w-0">
                <h3 id="project-story-heading" className="max-w-100 text-2xl leading-snug font-medium tracking-[-0.03em] text-balance sm:text-3xl">{t[current.id].title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{t[current.id].idea}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {current.website && <Button asChild className="min-h-11"><a href={current.website} target="_blank" rel="noreferrer">{t.visit}<ArrowUpRight aria-hidden="true" /></a></Button>}
                  <Button asChild variant="outline" className="min-h-11"><a href={current.source} target="_blank" rel="noreferrer"><Github aria-hidden="true" />{t.source}</a></Button>
                </div>
              </div>
              <div className="min-w-0 space-y-6">
                <div>
                  <h4 className="text-sm font-medium">{t.technology}</h4>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{t[current.id].making}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">{t.capture}</h4>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{t[current.id].capture}</p>
                </div>
              </div>
            </section>
          </div>

          <footer className="flex shrink-0 items-center justify-between gap-2 border-t border-border px-3 py-3 sm:px-7 sm:py-4">
            <Button
              type="button"
              variant="ghost"
              className="min-h-11 gap-2 px-2 text-xs transition-colors sm:px-3 sm:text-sm"
              onClick={() => onSelect(projects[(currentIndex + projects.length - 1) % projects.length].id)}
            >
              <ArrowLeft aria-hidden="true" />
              <span className="sm:hidden">{ru ? 'Назад' : 'Previous'}</span>
              <span className="hidden sm:inline">{t.previous}</span>
            </Button>
            <span aria-live="polite" aria-atomic="true" className="shrink-0 whitespace-nowrap font-mono text-[11px] text-muted-foreground tabular-nums">
              <span className="sr-only">{current.name}, </span>{currentIndex + 1} / {projects.length}
            </span>
            <Button
              type="button"
              variant="ghost"
              className="min-h-11 gap-2 px-2 text-xs transition-colors sm:px-3 sm:text-sm"
              onClick={() => onSelect(projects[(currentIndex + 1) % projects.length].id)}
            >
              <span className="sm:hidden">{ru ? 'Далее' : 'Next'}</span>
              <span className="hidden sm:inline">{t.next}</span>
              <ArrowRight aria-hidden="true" />
            </Button>
          </footer>
        </DialogContent>
      ) : null}
    </Dialog>
  )
}
