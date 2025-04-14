'use client'
import TokenPurchaseForm from '@/components/TokenPurchaseForm'
import BetForm from '@/components/BetForm'
import WinnerSection from '@/components/WinnerSection'
import WithdrawSection from '@/components/WithdrawSection'
import AdminPage from '@/app/admin/page'


export default function Home() {
  return (
    <div className="space-y-8">
      <TokenPurchaseForm />
      <BetForm />
      <WinnerSection />
      <WithdrawSection />
      <AdminPage/>
    </div>
  )
}