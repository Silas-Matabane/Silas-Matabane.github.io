import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function SectionHeading({
  children,
  centered = false,
  gradient = false,
  className = '',
}) {
  const ref = useScrollReveal(0.3)

  const classes = [
    'section-title',
    centered ? 'centered text-center' : '',
    gradient ? 'gradient-text' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <h2 ref={ref} className={classes}>
      {children}
    </h2>
  )
}
