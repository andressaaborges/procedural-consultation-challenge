import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function CasesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-16 p-8">
      <Header />
      {children}
    </div>
  )
}
