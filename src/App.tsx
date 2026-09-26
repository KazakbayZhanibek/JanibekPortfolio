import { useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowUp, ArrowUpRight, Check, Github, LayoutGrid, List, Mail, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CardContainer } from '@/components/ui/3d-card'
import { ProjectPreview } from '@/components/project-exhibits'
import ProjectDialog from '@/components/project-dialog'
import { copy, profile, projects, type Category, type Language, type ProjectId } from '@/content'
import { cn } from '@/lib/utils'

type Sheet = 'about' | 'outside' | 'projects'
const sheetColors: Record<Sheet, string> = {
  about: 'bg-[#7a0f19] text-[#f3e6d2]',
  outside: 'bg-[#edb92f] text-[#7a0f19]',
  projects: 'bg-[#515b3d] text-[#f3e6d2]',
}
const inkFocus = 'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-[-6px]'

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'ru' } catch { return 'ru' }
  })
  const [sheet, setSheet] = useState<Sheet>('about')
  const [category, setCategory] = useState<Category>('all')
  const [layout, setLayout] = useState<'gallery' | 'list'>('list')
  const [selected, setSelected] = useState<ProjectId | null>(null)
  const returnFocus = useRef<HTMLButtonElement | null>(null)
  const t = copy[language]
  const ru = language === 'ru'
  const filtered = projects.filter(project => category === 'all' || project.category === category)
  const topics = [
    { id: 'about' as const, title: t.navAbout, description: ru ? 'Что мне интересно и как всё началось.' : 'What interests me and how it all started.' },
    { id: 'outside' as const, title: ru ? 'Вне экрана' : 'Outside code', description: ru ? 'Прогулки, горы и любимые сезоны.' : 'Walks, mountains and favourite seasons.' },
    { id: 'projects' as const, title: ru ? 'Мои проекты' : 'My projects', description: ru ? 'Сайты, приложения и исходный код.' : 'Websites, applications and source code.' },
  ]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description)
    try { localStorage.setItem('portfolio-language', language) } catch { /* Language switching works without storage. */ }
  }, [language, t.title, t.description])

  function showSheet(next: Sheet) {
    setSheet(next)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return <div id="top" className="min-h-dvh bg-[#223a42] p-2 text-[#f3e6d2] selection:bg-[#f3e6d2] selection:text-[#7a0f19] sm:p-3">
    <a href="#main" className="fixed top-3 left-3 z-100 -translate-y-24 bg-[#edb92f] px-5 py-3 text-sm font-semibold text-[#7a0f19] focus:translate-y-0">{t.skip}</a>
    <div className="mx-auto grid max-w-400 gap-2 lg:grid-cols-[minmax(0,1fr)_minmax(240px,0.36fr)] lg:gap-3">
      <header className="flex items-center justify-between gap-5 px-3 sm:px-6 lg:col-span-2">
        <a href={profile.github} target="_blank" rel="noreferrer" className={cn('inline-flex min-h-11 items-center gap-2 px-2 text-sm underline underline-offset-4', inkFocus)}><Github aria-hidden="true" className="size-4" />GitHub<ArrowUpRight aria-hidden="true" className="size-4" /></a>
        <div role="group" aria-label={t.language} className="flex items-center gap-1">
          {(['ru', 'en'] as const).map(lang => <button key={lang} type="button" aria-label={lang === 'ru' ? 'Русский язык' : 'English language'} aria-pressed={language === lang} onClick={() => setLanguage(lang)} className={cn('min-h-11 min-w-11 border-b-2 px-2 text-xs font-bold', inkFocus, language === lang ? 'border-[#edb92f] text-[#edb92f]' : 'border-transparent text-[#f3e6d2]')}>{lang.toUpperCase()}</button>)}
        </div>
      </header>

      <nav aria-label={ru ? 'Темы личного сайта' : 'Personal website topics'} className="grid grid-cols-3 gap-2 lg:sticky lg:top-3 lg:col-start-2 lg:row-start-2 lg:self-start lg:grid-cols-1 lg:gap-3">
        {topics.map(topic => <button
          key={topic.id}
          id={`select-${topic.id}`}
          type="button"
          aria-pressed={sheet === topic.id}
          aria-controls="main"
          onClick={() => showSheet(topic.id)}
          className={cn(sheetColors[topic.id], inkFocus, 'flex min-h-28 flex-col justify-between gap-5 p-3 text-left sm:p-5 lg:min-h-60 lg:p-7')}
        >
          <span className="flex w-full items-start justify-between gap-2">
            <span className="font-[Unbounded] text-[clamp(0.75rem,2.6vw,1.1rem)] leading-[1.4] font-extrabold lg:text-[clamp(1.25rem,1.8vw,1.75rem)]">{topic.title}</span>
            {sheet === topic.id ? <Check aria-hidden="true" className="mt-0.5 hidden size-5 shrink-0 sm:block lg:size-7" /> : <ArrowDownRight aria-hidden="true" className="mt-0.5 hidden size-5 shrink-0 sm:block lg:size-7" />}
          </span>
          <span className="hidden max-w-56 text-base leading-relaxed lg:block">{topic.description}</span>
          <span className={cn('w-fit border-b text-xs leading-5 sm:text-sm', sheet === topic.id ? 'border-current' : 'border-transparent')}>{sheet === topic.id ? ru ? 'Открыто' : 'Open' : ru ? 'Смотреть' : 'Explore'}</span>
        </button>)}
      </nav>

      <main id="main" tabIndex={-1} aria-labelledby="intro-title" className={cn(sheetColors[sheet], 'min-w-0 px-5 pt-8 pb-10 outline-none sm:px-9 sm:pt-10 sm:pb-12 lg:col-start-1 lg:row-start-2 lg:px-12 lg:pt-12 lg:pb-14')}>
        <h1 id="intro-title" className="font-[Unbounded] text-[clamp(1.8rem,6.65vw,6rem)] leading-[1.15] font-extrabold tracking-[-0.04em] uppercase">{profile.name[language]}</h1>
        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-current pb-6 text-base sm:mt-7 sm:pb-8">
          <span>{ru ? 'Программист. Студент.' : 'Programmer. Student.'}</span>
          <span>{ru ? `${profile.age} лет · Алматы` : `${profile.age} · Almaty`}</span>
        </div>
        <p className="sr-only" role="status">{topics.find(topic => topic.id === sheet)?.title}</p>

        <div className="pt-9 sm:pt-12">
          {sheet === 'about' && <section aria-labelledby="about-title">
            <h2 id="about-title" className="max-w-2xl font-[Unbounded] text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.3] font-extrabold tracking-[-0.03em]">{t.aboutTitle}</h2>
            <div className="mt-7 max-w-xl space-y-5 text-lg leading-relaxed sm:text-xl">
              <p>{t.hero}</p>
              <p>{t.aboutBody}</p>
              <p>{t.aboutSecondary}</p>
            </div>
          </section>}

          {sheet === 'outside' && <section aria-labelledby="outside-title">
            <h2 id="outside-title" className="font-[Unbounded] text-[clamp(2rem,4.8vw,4.5rem)] leading-[1.2] font-extrabold tracking-[-0.03em]">{t.interestsTitle}</h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed sm:text-xl">
              <p>{t.interestsBody}</p>
              <p>{t.interestsSeasons}</p>
            </div>
          </section>}

          {sheet === 'projects' && <section aria-labelledby="work-title">
            <h2 id="work-title" className="font-[Unbounded] text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.3] font-extrabold tracking-[-0.03em]">{t.workTitle}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">{t.workNote}</p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-y border-current py-2">
              <div role="group" aria-label={ru ? 'Категория проектов' : 'Project category'} className="flex flex-wrap items-center gap-1">
                {(['all', 'interface', 'tool'] as const).map(filter => <button key={filter} type="button" onClick={() => setCategory(filter)} aria-pressed={category === filter} className={cn('min-h-11 border-b-2 px-2 text-xs sm:px-3', inkFocus, category === filter ? 'border-current font-bold' : 'border-transparent')}>{t.filters[filter]}</button>)}
              </div>
              <div role="group" aria-label={t.view} className="flex items-center gap-1">
                <button type="button" onClick={() => setLayout('gallery')} aria-label={t.gallery} aria-pressed={layout === 'gallery'} className={cn('grid size-11 place-items-center border-b-2', inkFocus, layout === 'gallery' ? 'border-current' : 'border-transparent')}><LayoutGrid aria-hidden="true" className="size-5" /></button>
                <button type="button" onClick={() => setLayout('list')} aria-label={t.list} aria-pressed={layout === 'list'} className={cn('grid size-11 place-items-center border-b-2', inkFocus, layout === 'list' ? 'border-current' : 'border-transparent')}><List aria-hidden="true" className="size-5" /></button>
              </div>
            </div>
            <p className="sr-only" role="status">{t.projectCount}: {filtered.length}</p>
            <div className={cn(layout === 'gallery' ? 'mt-8 grid items-start gap-x-6 gap-y-9 sm:grid-cols-2' : 'divide-y divide-current')}>
              {filtered.map(project => <CardContainer key={project.id} enabled={layout === 'gallery'} className={cn('group relative min-w-0', layout === 'list' ? 'grid grid-cols-[4rem_minmax(0,1fr)_1.5rem] items-center gap-3 py-5 sm:grid-cols-[7rem_minmax(0,1fr)_2rem] sm:gap-5' : '')}>
                <div aria-hidden="true" className={cn('pointer-events-none overflow-hidden', layout === 'list' && 'h-18 sm:h-22')}><ProjectPreview project={project.id} compact={layout === 'list'} /></div>
                <div className={cn('min-w-0', layout === 'gallery' && 'pt-4')}>
                  <h3 translate="no" className="text-base leading-snug font-bold sm:text-xl">{project.name}</h3>
                  <p className="mt-1 text-xs leading-5 opacity-90">{t[project.id].subtitle}</p>
                  <p className="mt-2 text-xs leading-5">{t[project.id].category}</p>
                  {layout === 'gallery' && <p className="mt-3 inline-flex items-center gap-2 text-xs underline underline-offset-4">{t.exploreHint}<ArrowUpRight aria-hidden="true" className="size-4" /></p>}
                </div>
                {layout === 'list' && <ArrowUpRight aria-hidden="true" className="size-5" />}
                <button type="button" onClick={event => { returnFocus.current = event.currentTarget; setSelected(project.id) }} aria-label={`${t.open}: ${project.name}`} className="absolute inset-0 z-10 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-4"><span className="sr-only">{t.open}: {project.name}</span></button>
              </CardContainer>)}
            </div>
            <p className="mt-9 max-w-xl text-xs leading-6">{t.galleryNotice}</p>
          </section>}
        </div>
      </main>

      <footer className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 px-3 py-6 text-sm sm:px-6 sm:text-base lg:col-span-2">
        <p>{ru ? 'Жанибек. Код и всё, что рядом.' : 'Zhanibek. Code and life around it.'}</p>
        <div className="flex flex-wrap items-center gap-3">
          {profile.email && <Button asChild className="min-h-11 rounded-none"><a href={`mailto:${profile.email}`}><Mail aria-hidden="true" />{t.email}</a></Button>}
          {profile.telegram && <a href={profile.telegram} target="_blank" rel="noreferrer" className={cn('inline-flex min-h-11 items-center gap-2 px-3', inkFocus)}><Send aria-hidden="true" className="size-4" />Telegram</a>}
          <a href="#top" className={cn('inline-flex min-h-11 items-center gap-2 px-3 underline underline-offset-4', inkFocus)}>{t.top}<ArrowUp aria-hidden="true" className="size-4" /></a>
        </div>
      </footer>
    </div>
    <ProjectDialog selected={selected} language={language} onSelect={setSelected} returnFocus={returnFocus} />
  </div>
}
