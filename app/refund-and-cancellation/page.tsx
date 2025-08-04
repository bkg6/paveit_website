import React from 'react'
import { SiteHeader } from "@/components/site-header"

export default function RefundAndCancellationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-4xl">
            <h1 className="font-source-serif text-4xl font-bold mb-8">Refund & Cancellation Policy</h1>
            <div className="prose max-w-none">
              <p className="text-sm text-muted-foreground mb-8">Last updated on 24-02-2025</p>
              
              <div className="space-y-6">
                <p>This policy outlines the terms and conditions for refunds and cancellations of PAVE IT's services.</p>

                <h2 className="text-2xl font-semibold mt-8">1. Cancellation Policy</h2>
                <p>Service cancellations must be requested at least 48 hours before scheduled device delivery. Late cancellations may incur charges.</p>

                <h2 className="text-2xl font-semibold mt-8">2. Refund Eligibility</h2>
                <p>Refunds are processed for cancelled services as per the following conditions:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Full refund for cancellations made 48 hours before delivery</li>
                  <li>Partial refund for issues with device quality or service delivery</li>
                  <li>No refund for damages caused by user mishandling</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8">3. Processing Time</h2>
                <p>Refunds are processed within 7-10 business days of approval. Once refund is processed it will be credited in bank account within 5-7 working days.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}