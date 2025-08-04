import React from 'react'
import { SiteHeader } from "@/components/site-header"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <h1 className="font-source-serif text-4xl font-bold mb-8">Our Services</h1>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-8 rounded-lg shadow">
                <h2 className="font-source-serif text-2xl font-semibold mb-4">Device Procurement</h2>
                <p className="text-muted-foreground">Fast and reliable procurement of laptops and IT equipment for your remote workforce across India.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow">
                <h2 className="font-source-serif text-2xl font-semibold mb-4">Inventory Management</h2>
                <p className="text-muted-foreground">Comprehensive tracking and management of all your IT assets through our unified dashboard.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow">
                <h2 className="font-source-serif text-2xl font-semibold mb-4">Employee Onboarding</h2>
                <p className="text-muted-foreground">Streamlined device setup and delivery process for smooth employee onboarding.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow">
                <h2 className="font-source-serif text-2xl font-semibold mb-4">24/7 Support</h2>
                <p className="text-muted-foreground">Round-the-clock technical support and assistance for all your device-related needs.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}