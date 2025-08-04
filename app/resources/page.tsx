import React from 'react'
import { SiteHeader } from "@/components/site-header"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <h1 className="font-source-serif text-4xl font-bold mb-8">Resources</h1>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-8 rounded-lg shadow">
                <h2 className="font-source-serif text-2xl font-semibold mb-4">Knowledge Base</h2>
                <p className="text-muted-foreground">Access our comprehensive guides and documentation for device management best practices.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow">
                <h2 className="font-source-serif text-2xl font-semibold mb-4">Case Studies</h2>
                <p className="text-muted-foreground">Learn how other companies have optimized their device management with PAVE IT.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}