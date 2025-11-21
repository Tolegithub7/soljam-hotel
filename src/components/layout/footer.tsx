export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex h-16 items-center justify-between text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Soljam Hotel. All rights reserved.</p>
        <p>Crafted with Next.js, Prisma, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
