import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Check } from 'lucide-react'
import { copy, projects } from '@/content'

const sheets = [
  {
    id: 'about',
    title: 'Обо мне',
    description: 'Код со школы. Университет сейчас.',
    colors: 'bg-[#7a0f19] text-[#f3e6d2]',
  },
  {
    id: 'outside',
    title: 'Вне экрана',
    description: 'Прогулки, горы и любимые сезоны.',
    colors: 'bg-[#edb92f] text-[#7a0f19]',
  },
  {
    id: 'projects',
    title: 'Мои проекты',
    description: 'Сайты, приложения и исходный код.',
    colors: 'bg-[#515b3d] text-[#f3e6d2]',
  },
] as const

type Sheet = (typeof sheets)[number]['id']

const focus = 'focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-[-6px]'

export default function PosterPreview() {
  const [selected, setSelected] = useState<Sheet>('about')
  const active = sheets.find((sheet) => sheet.id === selected)!

  return (
    <div className="min-h-screen bg-[#223a42] p-2 font-['Manrope_Variable'] text-[#f3e6d2] selection:bg-[#f3e6d2] selection:text-[#7a0f19] sm:p-3">
      <div className="mx-auto grid max-w-[1600px] gap-2 lg:grid-cols-[minmax(0,1fr)_minmax(240px,0.36fr)] lg:gap-3">
        <nav aria-label="Темы личного сайта" className="grid grid-cols-3 gap-2 lg:col-start-2 lg:row-start-1 lg:grid-cols-1 lg:gap-3">
          {sheets.map((sheet) => (
            <button
              key={sheet.id}
              id={`poster-select-${sheet.id}`}
              type="button"
              aria-pressed={selected === sheet.id}
              aria-controls="poster-sheet"
              onClick={() => setSelected(sheet.id)}
              className={`${sheet.colors} ${focus} flex min-h-28 cursor-pointer flex-col justify-between gap-5 p-3 text-left sm:p-5 lg:min-h-48 lg:p-7`}
            >
              <span className="flex w-full items-start justify-between gap-2">
                <span className="font-[Unbounded] text-[clamp(0.75rem,2.6vw,1.1rem)] leading-[1.4] font-extrabold lg:text-[1.75rem]">{sheet.title}</span>
                {selected === sheet.id ? (
                  <Check aria-hidden="true" className="mt-0.5 hidden size-5 shrink-0 sm:block lg:size-7" strokeWidth={2} />
                ) : (
                  <ArrowDownRight aria-hidden="true" className="mt-0.5 hidden size-5 shrink-0 sm:block lg:size-7" strokeWidth={1.8} />
                )}
              </span>
              <span className="hidden max-w-56 text-base leading-relaxed lg:block">{sheet.description}</span>
              <span className={`w-fit border-b text-xs leading-5 sm:text-sm ${selected === sheet.id ? 'border-current' : 'border-transparent'}`}>
                {selected === sheet.id ? 'Открыто' : 'Смотреть'}
              </span>
            </button>
          ))}
        </nav>

        <main
          id="poster-sheet"
          aria-labelledby={`poster-select-${selected}`}
          className={`${active.colors} min-w-0 px-5 pt-8 pb-10 sm:px-9 sm:pt-10 sm:pb-12 lg:col-start-1 lg:row-start-1 lg:px-12 lg:pt-12 lg:pb-14`}
        >
          <h1 className="font-[Unbounded] text-[clamp(1.8rem,6.65vw,6rem)] leading-[1.15] font-extrabold tracking-[-0.04em]">ЖАНИБЕК</h1>
          <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-current pb-6 text-base sm:mt-7 sm:pb-8">
            <span>Программист. Студент.</span>
            <span>20 лет · Алматы</span>
          </div>

          <div key={selected} className="pt-9 sm:pt-12" aria-live="polite" aria-atomic="true">
            {selected === 'about' && (
              <>
                <h2 className="max-w-2xl font-[Unbounded] text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.3] font-extrabold tracking-[-0.03em]">
                  Пишу код<br />со школы.
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-relaxed sm:text-xl">
                  Привет! Я Жанибек. Учусь на программного инженера в Caspian University. Люблю программировать — и не только.
                </p>
                <div className="mt-12 grid gap-8 border-t border-current pt-7 sm:mt-16 sm:grid-cols-2 sm:gap-10">
                  <section>
                    <h3 className="text-lg font-bold">Всё началось в школе</h3>
                    <p className="mt-3 text-base leading-relaxed">В десятом классе я пошёл на первые курсы программирования. Тогда начал писать код и знакомиться с разработкой.</p>
                  </section>
                  <section>
                    <h3 className="text-lg font-bold">Теперь — университет</h3>
                    <p className="mt-3 text-base leading-relaxed">Сейчас я на третьем курсе Caspian University в Алматы. Изучаю программную инженерию и продолжаю собирать свои проекты.</p>
                  </section>
                </div>
              </>
            )}

            {selected === 'outside' && (
              <>
                <h2 className="font-[Unbounded] text-[clamp(2rem,4.8vw,4.5rem)] leading-[1.2] font-extrabold tracking-[-0.03em]">
                  Горы.<br />Осень.<br />Зима.
                </h2>
                <p className="mt-8 max-w-xl text-lg leading-relaxed sm:text-xl">Не всё, что я люблю, связано с компьютером. Мне нравятся прогулки, природа и особенно горы.</p>
                <div className="mt-12 grid gap-8 border-t border-current pt-7 sm:grid-cols-2 sm:gap-10">
                  <section>
                    <h3 className="text-lg font-bold">Выйти погулять</h3>
                    <p className="mt-3 text-base leading-relaxed">Люблю проводить время на природе. Прогулки и горы — такая же часть моих интересов, как программирование.</p>
                  </section>
                  <section>
                    <h3 className="text-lg font-bold">Любимые времена года</h3>
                    <p className="mt-3 text-base leading-relaxed">Осень и зима. Здесь без рейтинга: нравятся обе.</p>
                  </section>
                </div>
              </>
            )}

            {selected === 'projects' && (
              <>
                <h2 className="font-[Unbounded] text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.3] font-extrabold tracking-[-0.03em]">То, что я делаю.</h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed">Несколько сайтов и приложений — ещё одна часть моей истории. У каждого есть ссылка на исходный код.</p>
                <p className="mt-4 max-w-xl text-base leading-relaxed">Ниже — реальные скриншоты. Локальные версии и учебные данные отмечены в подписях.</p>
                <div className="mt-10 space-y-10">
                  {projects.map((project) => (
                    <article key={project.id} className="border-t border-current pt-6">
                      <div className="grid gap-5 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
                        <figure className="min-w-0">
                          <img
                            src={`${import.meta.env.BASE_URL}images/projects/${project.id}-desktop.webp`}
                            alt={`Интерфейс проекта «${project.name}», компьютерная версия`}
                            width={1440}
                            height={1000}
                            loading="lazy"
                            decoding="async"
                            className="h-auto w-full"
                          />
                          <figcaption className="mt-3 text-sm leading-relaxed">{copy.ru[project.id].capture}</figcaption>
                        </figure>
                        <div className="min-w-0">
                          <h3 className="text-xl leading-snug font-bold">{project.name}</h3>
                          <p className="mt-3 text-base leading-relaxed">{copy.ru[project.id].idea}</p>
                          <a href={project.source} target="_blank" rel="noreferrer" className={`${focus} mt-4 inline-flex min-h-11 items-center gap-3 px-2 py-2 text-base font-bold underline decoration-1 underline-offset-4`}>
                            Исходный код
                            <ArrowUpRight aria-hidden="true" className="size-5 shrink-0" />
                            <span className="sr-only"> {project.name}, GitHub, новая вкладка</span>
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </main>

        <footer className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 px-3 py-6 text-base sm:px-6 lg:col-span-2">
          <p>Жанибек. Код и всё, что рядом.</p>
          <a href="https://github.com/KazakbayZhanibek" target="_blank" rel="noreferrer" className={`${focus} inline-flex min-h-11 items-center gap-3 px-3 py-2 underline underline-offset-4`}>
            Мой GitHub
            <ArrowUpRight aria-hidden="true" className="size-5" />
            <span className="sr-only">, новая вкладка</span>
          </a>
        </footer>
      </div>
    </div>
  )
}
