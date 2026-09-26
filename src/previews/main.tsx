import { createRoot } from 'react-dom/client'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import '@fontsource-variable/manrope'
import '../index.css'
import '../fonts.css'
import Notebook from './notebook'
import Editorial from './editorial'
import Poster from './poster'

const options = [
  { id: 'notebook', name: 'Открытый блокнот', detail: 'Светлый, собранный, с синими акцентами. Личные заметки и темы рядом, без длинной одинаковой ленты.', color: 'bg-[#214acb]', component: Notebook },
  { id: 'editorial', name: 'Выше шума', detail: 'Тёплая журнальная композиция. Фотография гор, выразительный шрифт и твоя история в одном развороте.', color: 'bg-[#173d34]', component: Editorial },
  { id: 'poster', name: 'Живой плакат', detail: 'Крупная типографика, насыщенные цвета и переключение тем. Самый яркий и экспериментальный вариант.', color: 'bg-[#7a0f19]', component: Poster },
] as const

const params = new URLSearchParams(window.location.search)
const current = options.find(option => option.id === params.get('view'))
const capture = params.get('capture') === '1'

function Comparison() {
  return <div className="min-h-screen bg-[#efefed] px-5 py-8 font-sans text-[#222522] selection:bg-[#cfdabc] selection:text-[#172416] sm:px-10 sm:py-12">
    <main className="mx-auto max-w-360">
      <header className="flex flex-wrap items-start justify-between gap-6 border-b border-[#ccd0c9] pb-8">
        <div className="max-w-180">
          <h1 className="text-3xl leading-tight font-medium tracking-[-0.035em] sm:text-5xl">Какой сайт больше про тебя?</h1>
          <p className="mt-5 max-w-150 text-base leading-7 text-[#535b51]">Три разные страницы на твоём содержании. Для основного сайта выбран «Живой плакат». Здесь можно посмотреть и сравнить первоначальные варианты.</p>
        </div>
        <a href={import.meta.env.BASE_URL} className="inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4 focus-visible:ring-[#315423] focus-visible:ring-offset-[#efefed]"><ArrowLeft aria-hidden="true" className="size-4" />Текущий сайт</a>
      </header>
      <div className="mt-9 grid items-start gap-10 lg:grid-cols-3 lg:gap-7">
        {options.map((option, index) => <article key={option.id} className="min-w-0">
          <a href={`?view=${option.id}`} aria-label={`Открыть вариант: ${option.name}`} className="block overflow-hidden rounded-xl bg-white focus-visible:ring-[#315423] focus-visible:ring-offset-[#efefed]">
            <img src={`${import.meta.env.BASE_URL}previews/${option.id}.webp`} width={1440} height={1000} alt={`Первый экран варианта «${option.name}»`} className="aspect-[36/25] h-auto w-full object-cover" />
          </a>
          <div className="mt-5 flex items-center gap-3">
            <span aria-hidden="true" className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-semibold text-white ${option.color}`}>{index + 1}</span>
            <h2 className="text-2xl font-medium tracking-tight">{option.name}</h2>
          </div>
          <p className="mt-3 max-w-110 text-sm leading-7 text-[#535b51]">{option.detail}</p>
          <a href={`?view=${option.id}`} className="mt-4 inline-flex min-h-12 items-center gap-3 border-b border-[#222522] text-sm font-semibold focus-visible:ring-[#315423] focus-visible:ring-offset-[#efefed]">Посмотреть страницу<ArrowUpRight aria-hidden="true" className="size-4" /></a>
        </article>)}
      </div>
      <footer className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-[#ccd0c9] pt-7">
        <p className="max-w-155 text-sm leading-7 text-[#535b51]">Нравится направление, но хочется что-то поменять? Напиши, что оставить и что убрать. Можно также попросить совершенно другие варианты.</p>
        <a href={import.meta.env.BASE_URL} className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#222522] px-6 text-sm font-semibold text-white focus-visible:ring-[#315423] focus-visible:ring-offset-[#efefed]">Открыть выбранный сайт<ArrowUpRight aria-hidden="true" className="size-4" /></a>
      </footer>
    </main>
  </div>
}

function Preview() {
  if (!current) return <Comparison />
  const Page = current.component
  return <>
    <div className={capture ? undefined : 'pb-16'}><Page /></div>
    {!capture && <nav aria-label="Навигация по вариантам дизайна" className="fixed inset-x-0 bottom-0 z-50 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 border-t border-[#ccd0c9] bg-[#fafaf7] px-4 py-2 font-sans text-[#222522]">
      <a href={`${import.meta.env.BASE_URL}design-preview.html`} className="inline-flex min-h-11 items-center gap-2 text-sm focus-visible:ring-[#315423] focus-visible:ring-offset-[#fafaf7]"><ArrowLeft aria-hidden="true" className="size-4" />Все варианты</a>
      <span className="hidden text-xs text-[#62675f] sm:inline">{current.name} · предпросмотр</span>
      <a href={import.meta.env.BASE_URL} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold focus-visible:ring-[#315423] focus-visible:ring-offset-[#fafaf7]">Основной сайт<ArrowUpRight aria-hidden="true" className="size-4" /></a>
    </nav>}
  </>
}

document.title = current ? `${current.name} — вариант сайта Жанибека` : 'Жанибек — три варианта сайта'
createRoot(document.getElementById('root')!).render(<Preview />)
