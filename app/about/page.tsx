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
      </main>
    </div>
  )
}