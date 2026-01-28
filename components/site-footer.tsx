export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-border bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px  -6 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} RiskSignal. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/singafranci02/risksignal1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a href="/privacy" className="hover:text-foreground">
            Privacy
          </a>
          <a href="/terms" className="hover:text-foreground">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}

