export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`py-6 md:py-8 ${className}`}>
      {children}
    </section>
  )
}
