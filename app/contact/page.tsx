import React from 'react'
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-source-serif text-4xl font-bold mb-8">Get in Touch</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to streamline your device management? We're here to help you get started.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact-us">Get to Know More</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <Link href="mailto:bharath@paveit.io">Email Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}