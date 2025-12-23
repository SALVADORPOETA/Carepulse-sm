import PatientForm from '@/components/forms/PatientForm'
import PasskeyModal from '@/components/PasskeyModal'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home({ searchParams }: SearchParamProps) {
  const { admin } = await searchParams
  const isAdmin = admin === 'true'

  return (
    <div className="relative min-h-screen">
      {isAdmin && <PasskeyModal />}
      <div className="pointer-events-none fixed inset-y-0 right-0 hidden md:block w-[50vw]">
        <Image
          src="/assets/images/onboarding-img.png"
          alt="patient"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="md:pr-[50vw]">
        <section className="remove-scrollbar container py-2">
          <div className="sub-container max-w-[496px]">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="patient"
                className="mb-12 h-10 w-fit"
              />
            </Link>
            <PatientForm />
            <div className="text-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left">
                © {new Date().getFullYear()} CarePulse
              </p>
              <Link href="/?admin=true" className="text-green-500">
                Admin
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
