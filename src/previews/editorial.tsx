import { ArrowDown, ArrowUp, ArrowUpRight } from 'lucide-react'
import { copy, projects } from '@/content'

const linkStyle = 'inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a34e2e]'

export default function EditorialPreview() {
  return (
    <div id="editorial-top" className="bg-[#f2eee6] font-['Manrope_Variable'] text-[#173d34] selection:bg-[#173d34] selection:text-[#f2eee6]">
      <a href="#editorial-main" className="sr-only z-50 bg-[#f2eee6] p-4 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-2 focus:outline-[#a34e2e]">
        К содержимому
      </a>

      <header className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-8 gap-y-1 border-b border-[#173d34]/25 px-5 py-4 sm:px-10 lg:px-16">
        <a href="#editorial-top" className={`${linkStyle} font-[Prata] text-xl`}>Выше шума</a>
        <nav aria-label="По странице" className="flex flex-wrap gap-x-5 text-sm sm:gap-x-8">
          <a href="#editorial-story" className={linkStyle}>Обо мне</a>
          <a href="#editorial-interests" className={linkStyle}>Вне кода</a>
          <a href="#editorial-projects" className={linkStyle}>Проекты</a>
        </nav>
      </header>

      <main id="editorial-main">
        <section aria-labelledby="editorial-name" className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col px-5 pb-10 pt-12 sm:px-10 sm:pt-16 lg:pb-12 lg:pl-16 lg:pr-10 lg:pt-20">
            <h1 id="editorial-name" className="font-[Prata] text-[clamp(2.9rem,7vw,6rem)] font-normal leading-[1.12] tracking-[-0.035em]">Жанибек.</h1>
            <p className="mt-5 max-w-[13ch] font-[Prata] text-[clamp(2rem,3.4vw,3rem)] leading-[1.3] tracking-[-0.025em]">Между кодом<br />и горами.</p>
            <p className="mt-7 max-w-[36ch] text-base leading-[1.85] sm:text-lg">
              Мне 20. Пишу код со школы, люблю прогулки, горы и природу. Здесь — немного обо мне и о том, что мне близко.
            </p>
            <div className="mt-9 border-t border-[#173d34]/25 pt-5 lg:mt-10">
              <p className="text-base font-semibold">Caspian University, Алматы</p>
              <p className="mt-1 text-sm leading-6 text-[#426157]">Программная инженерия · третий курс</p>
            </div>
            <a href="#editorial-story" className={`${linkStyle} mt-7 w-fit text-sm font-semibold text-[#a34e2e] lg:mt-8`}>
              Познакомимся поближе <ArrowDown aria-hidden="true" size={17} strokeWidth={1.5} />
            </a>
          </div>

          <figure className="m-0 min-w-0 px-5 pb-8 sm:px-10 lg:flex lg:flex-col lg:pb-0 lg:pl-0 lg:pr-0">
            <img
              src="/previews/assets/mountains.jpg"
              alt="Заснеженные вершины и горный ландшафт"
              width={1600}
              height={2000}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover sm:aspect-[3/2] lg:aspect-auto lg:min-h-[580px] lg:flex-1 lg:object-center"
            />
            <figcaption className="py-3 text-xs leading-5 text-[#426157] lg:px-5">
              Горы — часть моих интересов. Фото: Unsplash.
            </figcaption>
          </figure>
        </section>

        <section id="editorial-story" aria-labelledby="editorial-story-title" className="mx-auto grid max-w-[1312px] scroll-mt-8 gap-7 border-t border-[#173d34]/25 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-0 lg:py-24">
          <h2 id="editorial-story-title" className="max-w-[13ch] font-[Prata] text-[clamp(2rem,4vw,3.4rem)] font-normal leading-[1.3] tracking-[-0.025em]">Всё началось<br />ещё в школе.</h2>
          <div className="max-w-[62ch] space-y-5 text-base leading-[1.9] sm:text-lg">
            <p>В десятом классе я пошёл на первые курсы программирования. Тогда начал писать код — и с тех пор продолжаю знакомиться с разработкой.</p>
            <p>Сейчас учусь на третьем курсе Caspian University в Алматы, на программного инженера. Учёба и свои проекты — две части этого знакомства.</p>
          </div>
        </section>

        <section id="editorial-interests" aria-labelledby="editorial-interests-title" className="scroll-mt-8 bg-[#173d34] text-[#f2eee6]">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24 lg:px-16 lg:py-24">
            <h2 id="editorial-interests-title" className="font-[Prata] text-[clamp(2.5rem,5.8vw,5rem)] font-normal leading-[1.25] tracking-[-0.025em]">Не всё любимое<br />на экране.</h2>
            <div className="max-w-[44ch] self-center text-base leading-[1.9] sm:text-lg">
              <p>Мне нравится программировать. А ещё — гулять, быть на природе и особенно в горах.</p>
              <p className="mt-5 text-[#d5dfd5]">Осень и зима — мои любимые времена года. Эта часть жизни мне так же близка, как код.</p>
            </div>
          </div>
          <div className="mx-5 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#f2eee6]/25 py-6 font-[Prata] text-xl text-[#d5dfd5] sm:mx-10 sm:gap-x-12 sm:text-2xl lg:mx-16">
            <span>Прогулки</span><span>Горы</span><span>Осень</span><span>Зима</span>
          </div>
        </section>

        <section id="editorial-projects" aria-labelledby="editorial-projects-title" className="mx-auto max-w-[1440px] scroll-mt-8 px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mb-9 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <h2 id="editorial-projects-title" className="font-[Prata] text-[clamp(2rem,4vw,3.4rem)] font-normal leading-[1.3] tracking-[-0.025em]">И немного кода.</h2>
            <div className="max-w-[52ch] self-end text-base leading-7">
              <p>Несколько сайтов и приложений — ещё одна часть моей истории.</p>
              <p className="mt-2 text-sm text-[#426157]">На изображениях — реальные интерфейсы. В локальных снимках используются учебные данные.</p>
            </div>
          </div>
          <ul className="border-t border-[#173d34]/25">
            {projects.map((project) => (
              <li key={project.id} className="grid grid-cols-[80px_minmax(0,1fr)] gap-x-4 gap-y-2 border-b border-[#173d34]/25 py-5 sm:grid-cols-[144px_minmax(0,1fr)_auto] sm:items-center sm:gap-x-7 sm:py-6">
                <img
                  src={`/images/projects/${project.id}-desktop.webp`}
                  alt=""
                  width={1440}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full border border-[#173d34]/15 object-cover object-top"
                />
                <div className="min-w-0">
                  <h3 className="text-base font-semibold sm:text-xl">{project.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#426157]">{copy.ru[project.id].subtitle}</p>
                  {project.id === 'calories' && <p className="mt-1 text-xs leading-5 text-[#426157]">Совместно с Данчо и Димашем</p>}
                </div>
                <a href={project.source} target="_blank" rel="noreferrer" aria-label={`${project.name} — код на GitHub, в новой вкладке`} className={`${linkStyle} col-start-2 w-fit text-sm font-semibold text-[#a34e2e] sm:col-start-auto`}>
                  Смотреть код <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.5} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1440px] flex-wrap items-end justify-between gap-6 border-t border-[#173d34]/25 px-5 py-8 sm:px-10 lg:px-16">
        <div>
          <p className="font-[Prata] text-2xl">Спасибо, что заглянули.</p>
          <p className="mt-2 text-sm text-[#426157]">Жанибек · Алматы</p>
        </div>
        <div className="flex flex-wrap gap-x-7 text-sm">
          <a href="https://github.com/KazakbayZhanibek" target="_blank" rel="noreferrer" className={linkStyle} aria-label="Мой GitHub, в новой вкладке">Мой GitHub <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" /></a>
          <a href="#editorial-top" className={linkStyle}>Наверх <ArrowUp size={16} strokeWidth={1.5} aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  )
}
