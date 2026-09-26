import { ArrowDownRight, ArrowUp, ArrowUpRight } from 'lucide-react'
import { copy, projects } from '@/content'

const inkFocus = 'focus-visible:ring-2 focus-visible:ring-[#214acb] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f5f3ed]'

const topics = [
  { href: '#notebook-about', name: 'Обо мне', detail: 'Знакомство и учёба' },
  { href: '#notebook-outside', name: 'Вне экрана', detail: 'То, что мне близко' },
  { href: '#notebook-projects', name: 'Проекты', detail: 'Сайты и приложения' },
]

export default function NotebookPreview() {
  return (
    <div id="notebook-top" className="bg-[#f5f3ed] font-sans text-[#292c30] [color-scheme:light] selection:bg-[#214acb] selection:text-white">
      <div className="mx-auto max-w-[1240px] px-5 pb-8 pt-8 sm:px-9 sm:pt-12 lg:px-14">
        <header className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b-2 border-[#214acb] pb-6 sm:pb-8">
          <h1 className="text-[clamp(2.8rem,8.5vw,6rem)] leading-[1.06] font-semibold tracking-[-0.04em] text-[#214acb]">Жанибек</h1>
          <p className="pb-1 text-sm leading-6 sm:text-right">
            Личная страница<br />
            <span className="text-[#62625f]">Алматы, Казахстан</span>
          </p>
        </header>

        <div className="grid gap-9 pt-6 sm:pt-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:border-r lg:border-[#214acb]/25 lg:pr-7">
            <nav aria-label="Разделы личной страницы" className="grid grid-cols-1 gap-0 min-[440px]:grid-cols-3 min-[440px]:gap-4 lg:grid-cols-1 lg:gap-0">
              {topics.map((topic) => (
                <a key={topic.href} href={topic.href} className={`group flex min-h-14 items-center justify-between gap-2 border-b border-[#214acb]/25 py-3 text-[#214acb] hover:bg-[#214acb]/5 ${inkFocus}`}>
                  <span>
                    <span className="block text-[15px] font-semibold">{topic.name}</span>
                    <span className="mt-1 hidden text-xs leading-5 text-[#62625f] lg:block">{topic.detail}</span>
                  </span>
                  <ArrowDownRight size={17} strokeWidth={1.6} className="shrink-0" aria-hidden="true" />
                </a>
              ))}
            </nav>

            <div className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2 lg:mt-14 lg:block">
              <h2 className="text-sm font-semibold">Что мне близко</h2>
              <p className="text-sm leading-7 text-[#62625f] lg:mt-3 lg:max-w-36">
                Код, прогулки, горы и природа. Осень и зима.
              </p>
            </div>
            <p className="mt-14 hidden text-xs leading-6 text-[#62625f] lg:block">Немного обо мне,<br />в одном открытом блокноте.</p>
          </aside>

          <main className="min-w-0">
            <section id="notebook-about" aria-labelledby="notebook-about-heading" tabIndex={-1} className={`scroll-mt-24 ${inkFocus}`}>
              <h2 id="notebook-about-heading" className="max-w-[640px] text-[clamp(1.7rem,3.3vw,2.6rem)] leading-[1.28] font-medium tracking-[-0.025em] text-[#214acb]">
                Пишу код со школы.<br />Люблю горы и прогулки.
              </h2>
              <p className="mt-6 max-w-[600px] text-lg leading-8">
                Привет! Мне 20 лет. Я учусь на третьем курсе Caspian University в Алматы, на программного инженера.
              </p>

              <div className="my-8 grid gap-3 border-y border-[#214acb]/35 py-5 sm:grid-cols-[108px_minmax(0,1fr)] sm:gap-6">
                <p className="text-sm font-semibold leading-6 text-[#214acb]">На полях</p>
                <p className="max-w-[530px] text-base leading-7 text-[#214acb]">
                  Первые курсы — в 10 классе. Сейчас — третий курс университета. Интерес к программированию остался со мной.
                </p>
              </div>

              <div className="max-w-[640px] space-y-4 text-base leading-8">
                <p>{copy.ru.aboutBody}</p>
                <p>Сейчас продолжаю учиться, писать код и собирать свои проекты — от небольших сайтов до приложений. Несколько из них оставил ниже: их можно посмотреть в исходниках.</p>
              </div>
            </section>

            <section id="notebook-outside" aria-labelledby="notebook-outside-heading" tabIndex={-1} className={`mt-14 scroll-mt-24 border-t border-[#214acb]/35 pt-6 sm:mt-20 ${inkFocus}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 id="notebook-outside-heading" className="text-2xl font-semibold tracking-[-0.025em]">Вне экрана</h2>
                <span className="text-sm text-[#62625f]">Не только программирование</span>
              </div>
              <div className="mt-7 grid gap-7 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:gap-9">
                <p className="font-[Prata] text-[clamp(2rem,4vw,3rem)] leading-[1.5] tracking-[-0.02em] text-[#214acb]">
                  Горы.<br />Осень.<br />Зима.
                </p>
                <div className="space-y-4 text-base leading-8">
                  <p>Мне нравится программировать, но не всё, что я люблю, связано с компьютером. Люблю гулять, быть на природе и особенно — горы.</p>
                  <p>Осень и зима — мои любимые времена года. Эта часть жизни для меня не менее важна, чем код.</p>
                </div>
              </div>
            </section>

            <section id="notebook-projects" aria-labelledby="notebook-projects-heading" tabIndex={-1} className={`mt-14 scroll-mt-24 border-t border-[#214acb]/35 pt-6 sm:mt-20 ${inkFocus}`}>
              <h2 id="notebook-projects-heading" className="text-2xl font-semibold tracking-[-0.025em]">Из того, что я делаю</h2>
              <p className="mt-3 max-w-[590px] text-base leading-7 text-[#62625f]">Несколько сайтов и приложений — ещё одна часть моей истории. По ссылкам — код проектов на GitHub.</p>
              <ul className="mt-7 border-t border-[#214acb]/25">
                {projects.map((project) => (
                  <li key={project.id} className="border-b border-[#214acb]/25 py-4 sm:py-5">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold leading-7">{project.name}</h3>
                        <p className="mt-1 text-sm leading-6 text-[#62625f]">{copy.ru[project.id].subtitle}</p>
                        {project.id === 'calories' && <p className="mt-2 text-xs leading-5 text-[#62625f]">Совместный проект: Жанибек, Данчо и Димаш.</p>}
                      </div>
                      <a href={project.source} target="_blank" rel="noreferrer" aria-label={`Исходный код ${project.name} на GitHub, новая вкладка`} className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-2 px-2 text-sm font-medium text-[#214acb] underline-offset-4 hover:underline ${inkFocus}`}>
                        <span className="hidden sm:inline">Код</span>
                        <ArrowUpRight size={20} strokeWidth={1.6} aria-hidden="true" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="https://github.com/KazakbayZhanibek" target="_blank" rel="noreferrer" className={`mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#214acb] underline underline-offset-4 hover:decoration-2 ${inkFocus}`}>
                Мой профиль на GitHub
                <ArrowUpRight size={17} strokeWidth={1.6} aria-hidden="true" />
                <span className="sr-only"> — новая вкладка</span>
              </a>
            </section>
          </main>
        </div>

        <footer className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#214acb] pt-5 sm:mt-20">
          <p className="text-sm text-[#62625f]">Жанибек. Рад знакомству.</p>
          <a href="#notebook-top" className={`inline-flex min-h-11 items-center gap-3 px-1 text-sm font-semibold text-[#214acb] hover:underline hover:underline-offset-4 ${inkFocus}`}>
            К началу <ArrowUp size={16} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </footer>
      </div>
    </div>
  )
}
