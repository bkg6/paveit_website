import React from 'react'
import { SiteHeader } from "@/components/site-header"

export default function ShippingPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-4xl">
            <h1 className="font-source-serif text-4xl font-bold mb-8">Shipping Policy</h1>
            <div className="prose max-w-none">
              <p className="text-sm text-muted-foreground mb-8">Last updated on 24-02-2025</p>
              
              <div className="space-y-6">
                <p>The orders for the user are shipped through registered domestic courier companies and/or speed post only. Orders are shipped within 7 days from the date of the order and/or payment or as per the delivery date agreed at the time of order confirmation and delivering of the shipment, subject to courier company/post office norms.</p>

                <p>Platform Owner shall not be liable for any delay in delivery by the courier company/postal authority. Delivery of all orders will be made to the address provided by the buyer at the time of purchase.</p>

                <p>Delivery of our services will be confirmed on your email ID as specified at the time of registration. If there are any shipping cost(s) levied by the seller or the Platform Owner (as the case may be), the same is not refundable.</p>
                
                <p>Once product is processed it will be delivered within 5-7 working days.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}