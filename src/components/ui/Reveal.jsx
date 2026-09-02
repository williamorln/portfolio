import { useReveal } from '../../hooks/useReveal.js'

/**
 * Wraps children in a fade-and-rise that fires once on scroll.
 * `delay` staggers items in a list — keep it under ~200ms or it drags.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ '--reveal-delay': `${delay}ms` }}
      className={`reveal ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
