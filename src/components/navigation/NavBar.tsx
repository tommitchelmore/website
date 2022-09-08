import { Component, createEffect, createSignal, For, onCleanup } from 'solid-js'

type NavBarProps = {
  class?: string
}

const routes: Record<string, string> = {
  '/projects': 'Projects',
  '/experience': 'Experience',
  '/blog': 'Blog',
  '/contact': 'Contact',
}

const NavBar: Component<NavBarProps> = (props) => {
  const [top, setTop] = createSignal(true)
  const handleScroll = () => {
    setTop(window.scrollY < 150)
  }

  createEffect(() => {
    if (typeof window === 'undefined') return

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    onCleanup(() => window.removeEventListener('scroll', handleScroll))
  })

  return (
    <>
      <nav
        class={`fixed top-0 inset-x-0 z-40 bg-[#ffffff01] transition-all ${
          !top() ? 'backdrop-blur-sm' : 'backdrop-blur-0'
        }`}
      >
        <div class="flex items-center justify-between container mx-auto py-4 px-8">
          <a
            href="/"
            class="font-serif text-vulcan dark:text-haze font-medium text-heading-small md:text-heading-medium xl:text-heading-large"
          >
            TM
          </a>
          <ul class="flex items-center space-x-4">
            <For each={Object.entries(routes)}>
              {([path, label]) => (
                <li>
                  <a
                    href={path}
                    class="font-sans uppercase text-body-small text-vulcan/60 dark:text-haze/60 hover:text-amaranth dark:hover:text-amaranth"
                  >
                    {label}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
