'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import StatCard from '@/components/StatCard'
import { DataTable } from '@/components/table/DataTable'
import { columns } from '@/components/table/columns'
import { useEffect, useState } from 'react'
import { decryptKey } from '@/lib/utils'

export default function AdminContent({ appointments }: any) {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const encryptedKey = sessionStorage.getItem('accessKey')
    if (!encryptedKey) {
      router.push('/')
      return
    }

    const accessKey = decryptKey(encryptedKey)
    if (accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      setAuthorized(true)
    } else {
      router.push('/')
    }
  }, [router])

  if (!authorized) {
    return null
  }

  const handleLogout = () => {
    sessionStorage.removeItem('accessKey')
    router.push('/')
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="Logo"
            className="h-8 w-fit"
          />
        </Link>
        <div className="flex items-center gap-6 md:gap-12">
          <p className="ml-2 text-12-semibold md:text-16-semibold">
            Admin Dashboard
          </p>
          <button
            onClick={handleLogout}
            className="px-4 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome, Admin 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  )
}
