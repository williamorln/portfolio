import { useReveal } from '../../hooks/useReveal.js'

/**
 * Fade-and-rise that fires once on scroll. `delay` staggers items in a list.
 * Any `style` passed in is merged, not overwritten — several sections rely on
 * a Reveal that also carries its own clamp() spacing.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  style,
  ...rest
}) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      className={`reveal ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
