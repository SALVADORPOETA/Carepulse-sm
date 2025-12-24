'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { decryptKey, encryptKey } from '@/lib/utils'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const PasskeyModal = () => {
  const router = useRouter()
  const path = usePathname()
  const [open, setOpen] = useState(true)
  const [passkey, setPasskey] = useState('')
  const [error, setError] = useState('')

  const encryptedKey =
    typeof window !== 'undefined'
      ? window.sessionStorage.getItem('accessKey')
      : null

  useEffect(() => {
    const accessKey = encryptedKey && decryptKey(encryptedKey)
    if (path) {
      if (accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
        setOpen(false)
        router.push('/admin')
      } else {
        setOpen(true)
      }
    }
  }, [encryptedKey])

  const validatePasskey = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      const encryptedKey = encryptKey(passkey)
      sessionStorage.setItem('accessKey', encryptedKey)
      setOpen(false)
    } else {
      setError('Invalid passkey. Please try again.')
    }
  }

  const closeModal = () => {
    setOpen(false)
    router.push('/')
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent
        className="
    shad-alert-dialog
    w-[90vw]
    max-w-[90vw]
    p-4
    sm:p-6
    sm:max-w-md
  "
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-start justify-between">
            Admin Access Verification
            <Image
              src="/assets/icons/close.svg"
              alt="close"
              width={20}
              height={20}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </AlertDialogTitle>
          <AlertDialogDescription>
            To access the admin page, please enter the passkey.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          <InputOTP
            maxLength={6}
            value={passkey}
            onChange={(value) => setPasskey(value)}
          >
            <InputOTPGroup className="flex justify-center md:shad-otp">
              <InputOTPSlot
                className="shad-otp-slot h-8 w-8 text-sm md:h-12 md:w-12 md:text-base"
                index={0}
              />
              <InputOTPSlot
                className="shad-otp-slot h-8 w-8 text-sm md:h-12 md:w-12 md:text-base"
                index={1}
              />
              <InputOTPSlot
                className="shad-otp-slot h-8 w-8 text-sm md:h-12 md:w-12 md:text-base"
                index={2}
              />
              <InputOTPSlot
                className="shad-otp-slot h-8 w-8 text-sm md:h-12 md:w-12 md:text-base"
                index={3}
              />
              <InputOTPSlot
                className="shad-otp-slot h-8 w-8 text-sm md:h-12 md:w-12 md:text-base"
                index={4}
              />
              <InputOTPSlot
                className="shad-otp-slot h-8 w-8 text-sm md:h-12 md:w-12 md:text-base"
                index={5}
              />
            </InputOTPGroup>
          </InputOTP>
          {error && (
            <p className="shad-error text-14-regular mt-4 flex justify-center">
              {error}
            </p>
          )}
        </div>
        <AlertDialogFooter>
          <div className="flex justify-center">
            <AlertDialogAction
              onClick={(e) => validatePasskey(e)}
              className="shad-primary-btn w-[80%] md:w-full"
            >
              Enter Admin Passkey
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default PasskeyModal
