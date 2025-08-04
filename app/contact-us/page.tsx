import React from 'react'
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-4xl">
            <h1 className="font-source-serif text-4xl font-bold mb-8">Contact Us</h1>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground">We're here to help with your device management needs.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-teal-600" />
                    <p>+91 8884444636</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-teal-600" />
                    <p>bharath@paveit.io</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-teal-600 mt-1" />
                    <div>
                      <p>7-1-282/C/90, S.R.NAGAR</p>
                      <p>Hyderabad, 500038</p>
                      <p>India</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <Button size="lg" className="w-full" asChild>
                    <Link href="/contact-us">Get to Know More</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link href="mailto:bharath@paveit.io">Send Email</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
                <div className="space-y-2">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
                <p className="mt-4 text-muted-foreground">All times are in Indian Standard Time (IST)</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}