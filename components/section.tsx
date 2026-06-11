export function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="font-display text-3xl tracking-tight md:text-4xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}
