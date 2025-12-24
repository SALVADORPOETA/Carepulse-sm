'use client'

import * as React from 'react'
import { OTPInput, OTPInputContext } from 'input-otp'
import { Dot } from 'lucide-react'

import { cn } from '@/lib/utils'

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
  />
))
InputOTP.displayName = 'InputOTP'

const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'
const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        // Clases base
        'relative flex items-center justify-center transition-all',
        // Clases de tamaño y bordes que ya tenías
        'h-7 w-7 text-xs border-y border-r border-input first:rounded-l-md first:border-l last:rounded-r-md md:h-12 md:w-12 md:text-base',
        // ESTADO ACTIVO: Aquí iluminamos el cuadro
        isActive &&
          'z-10 ring-2 ring-green-500 border-green-500 ring-offset-background',
        className
      )}
      {...props}
    >
      {/* CENSURA: Mostramos el punto solo si hay un carácter */}
      {char && <div className="h-2 w-2 rounded-full bg-white md:h-3 md:w-3" />}

      {/* CARET (Cursor parpadeante): Siempre encima y visible si está activo */}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-green-500 md:h-6" />
        </div>
      )}
    </div>
  )
})
// const InputOTPSlot = React.forwardRef<
//   React.ElementRef<'div'>,
//   React.ComponentPropsWithoutRef<'div'> & { index: number }
// >(({ index, className, ...props }, ref) => {
//   const inputOTPContext = React.useContext(OTPInputContext)
//   const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

//   return (
//     <div
//       ref={ref}
//       className={cn(
//         `
//         relative flex items-center justify-center
//         h-7 w-7 text-xs
//         border-y border-r border-input
//         transition-all
//         first:rounded-l-md first:border-l
//         last:rounded-r-md
//         md:h-12 md:w-12 md:text-base
//         `,
//         isActive && 'z-10 ring-2 ring-ring ring-offset-background',
//         className
//       )}
//       {...props}
//     >
//       {char}
//       {hasFakeCaret && (
//         <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
//           <div className="h-4 w-px animate-caret-blink bg-foreground" />
//         </div>
//       )}
//     </div>
//   )
// })
InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
