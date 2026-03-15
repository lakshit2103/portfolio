import { useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certs',    href: '#certifications' },
  { label: 'Education',href: '#education' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('home')
  const [open,     setOpen]     = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = document.querySelectorAll<HTMLElement>('section[id]')
      let current = 'home'
      sections.forEach(s => {
        if (window.scrollY + 100 >= s.offsetTop) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const smoothClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header ref={navRef} className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.inner}>
        <a href="#home" className={styles.logo} onClick={e => smoothClick(e, '#home')}>
          <span className={styles.logoBox}>LS</span>
          <span className={styles.logoName}>Lakshit</span>
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`${styles.link} ${active === item.href.slice(1) ? styles.linkActive : ''}`}
                onClick={e => smoothClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:lakshitsehdev21@gmail.com" className={styles.cta}>
          Say hi — <span>lakshitsehdev21@gmail.com</span>
          <i className="fas fa-arrow-right" />
        </a>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  )
}
