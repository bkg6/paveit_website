import React from 'react'
import { SiteHeader } from "@/components/site-header"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* About PAVEIT */}
        <section id="about-paveit" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">About PAVEIT</h2>
            <p className="mb-4">
              PAVEIT is a global laptop fulfillment partner purpose-built for payroll and EOR platforms.
            </p>
            <p className="mb-4">
              We specialize in delivering preloaded, ready-to-use laptops to remote hires across India, Singapore, the Philippines, Dubai, the US, UK, and Spain—
              with SLA-backed timelines and zero customs hassle.
            </p>
            <p className="mb-4">
              Our clients don't chase vendors or manage logistics.<br />
              They send us a name—we handle the rest.
            </p>
            <p className="font-semibold mb-4">
              One vendor. Seven countries. Remote IT, solved.
            </p>
            <p className="text-gray-600">
              Trusted by leading global hiring platforms, PAVEIT is the invisible infrastructure behind smooth onboarding.
            </p>
          </div>
        </section>
        <hr className="my-16 border-gray-200" />
        
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