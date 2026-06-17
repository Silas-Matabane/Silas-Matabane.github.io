import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
  as: Tag = 'div',
}) {
  const ref = useScrollReveal(threshold)

  return (
    <Tag
      ref={ref}
      className={`stagger-item${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
