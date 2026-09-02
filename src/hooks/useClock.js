import { useEffect, useState } from 'react'

/** Live Jakarta time, HH:MM. Ticks every 20s — it only shows minutes. */
export function useClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
        }),
      )

    tick()
    const timer = setInterval(tick, 20000)
    return () => clearInterval(timer)
  }, [])

  return time
}
