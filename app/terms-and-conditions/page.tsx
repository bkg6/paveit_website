import React from 'react'
import { SiteHeader } from "@/components/site-header"

export default function TermsAndConditionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-4xl">
            <h1 className="font-source-serif text-4xl font-bold mb-8">Terms & Conditions</h1>
            <div className="prose max-w-none">
              <p className="text-sm text-muted-foreground mb-8">Last updated on 24-02-2025</p>
              
              <div className="space-y-6">
                <p>By accessing and using PAVE IT's services, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully before using our services.</p>

                <h2 className="text-2xl font-semibold mt-8">1. Service Description</h2>
                <p>PAVE IT provides device procurement, management, and logistics services for businesses across India. Our services include device delivery, setup, maintenance, and retrieval.</p>

                <h2 className="text-2xl font-semibold mt-8">2. User Obligations</h2>
                <p>Users must provide accurate information for device delivery and maintain proper communication channels for service coordination.</p>

                <h2 className="text-2xl font-semibold mt-8">3. Payment Terms</h2>
                <p>All payments must be made as per the agreed terms. Service charges are non-refundable unless specified in our Refund Policy.</p>

                <h2 className="text-2xl font-semibold mt-8">4. Device Handling</h2>
                <p>Users are responsible for maintaining devices in good condition and reporting any issues promptly.</p>

                <h2 className="text-2xl font-semibold mt-8">5. Liability</h2>
                <p>PAVE IT is not liable for any damages arising from device misuse or circumstances beyond our control.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}