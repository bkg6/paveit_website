import React from 'react'
import { SiteHeader } from "@/components/site-header"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <h1 className="font-source-serif text-4xl font-bold mb-8">About PAVE IT</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                PAVE IT is revolutionizing device management for international companies with employees in India. We specialize in rapid device procurement, seamless delivery, and comprehensive IT asset management.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our mission is to eliminate the complexities of device management, allowing companies to focus on their core business while we handle all aspects of IT equipment logistics.
              </p>
              <p className="text-lg text-muted-foreground">
                With our extensive network and streamlined processes, we ensure that your employees receive their devices on time, every time, anywhere in India.
              </p>
            </div>
          </div>
        </section>
        
        <section id="enterprise-services" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">PAVEIT Enterprise Partner Services</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 bg-white rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Global Fulfillment</h3>
                <p>Preloaded laptops delivered across 7 countries with SLA-backed timelines.</p>
              </div>
              <div className="p-6 bg-white rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Customs & Compliance</h3>
                <p>End-to-end import/export handling—no surprises at customs.</p>
              </div>
              <div className="p-6 bg-white rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Vendor Consolidation</h3>
                <p>Replace 5 local vendors with <strong>one</strong> single PAVEIT partner.</p>
              </div>
              <div className="p-6 bg-white rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Onboarding Integration</h3>
                <p>Slack/HubSpot/Zapier trigger—procurement to desk in one step.</p>
              </div>
              <div className="p-6 bg-white rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Lifecycle Management</h3>
                <p>Swaps, repairs, asset recovery and secure recycling.</p>
              </div>
              <div className="p-6 bg-white rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Analytics & Reporting</h3>
                <p>Live dashboard on delivery times, device health, and cost per hire.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}