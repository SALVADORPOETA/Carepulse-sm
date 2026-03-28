'use client'

import { formatDateTime } from '@/lib/utils'
import { useEffect, useState } from 'react'

export const RenderDateTime = ({ date }: { date: string | Date }) => {
  const [formatted, setFormatted] = useState<string>('')

  useEffect(() => {
    // Al ejecutarse dentro de useEffect, nos aseguramos de que
    // el cálculo ocurra en el navegador del usuario (Client-side)
    const dateString = typeof date === 'string' ? date : date.toISOString()
    setFormatted(formatDateTime(dateString).dateTime)
  }, [date])

  // Retornamos un esqueleto o string vacío mientras se hidrata para evitar el error de Next.js
  if (!formatted) return <span className="opacity-0">Loading...</span>

  return <span>{formatted}</span>
}
