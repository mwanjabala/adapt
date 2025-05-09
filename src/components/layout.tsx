import { Outlet, Link } from 'react-router-dom'
import { useTheme } from './theme-provider'
import { Sun, Moon } from 'lucide-react'
import { Button } from './ui/button'

export default function Layout() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link className="mr-6 flex items-center space-x-2" to="/">
              <span className="font-bold text-xl">ADAPT</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground"
                to="/about"
              >
                About
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground"
                to="/product"
              >
                Product
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground"
                to="/contact"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {theme === 'light' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by ADAPT Learning. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 