import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Laptop2, Clock, HeadphonesIcon, LayoutDashboard } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 md:py-40 min-h-[80vh] flex items-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container text-center">
          <h1 className="font-source-serif text-4xl font-light leading-tight tracking-tighter md:text-6xl lg:leading-[1.2] max-w-4xl mx-auto">
            Procure, Ship & Retrieve<br />devices with ease
          </h1>
          <p className="mt-6 text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
            No matter where you hire, get the equipment delivered in time for the first day of work
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact-us">Get to Know More</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By - Moved below hero section */}
      <section className="py-16 border-y border-slate-200">
        <div className="container">
          <h2 className="text-center font-source-serif text-2xl font-light mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="w-[140px] h-[35px] bg-slate-100 flex items-center justify-center rounded">
              <span className="text-slate-600 font-medium">Multiplier</span>
            </div>
            <div className="w-[140px] h-[35px] bg-slate-100 flex items-center justify-center rounded">
              <span className="text-slate-600 font-medium">Horizon</span>
            </div>
            <div className="w-[140px] h-[35px] bg-slate-100 flex items-center justify-center rounded">
              <span className="text-slate-600 font-medium">Tripgain</span>
            </div>
            <div className="w-[140px] h-[35px] bg-slate-100 flex items-center justify-center rounded">
              <span className="text-slate-600 font-medium">Onmeta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="font-source-serif text-3xl font-light md:text-4xl">
              Equip, inventory, send, and retrieve
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Mighty missions need mighty tools. We streamline your device management,<br />
              ensuring seamless operations across your organization.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <Laptop2 className="h-12 w-12 text-teal-600" />
                <h3 className="mt-4 font-source-serif text-xl font-light">Device Provisioning and Inventory</h3>
                <p className="mt-2 text-muted-foreground">
                  One day delivery assured at free of cost<br />
                  across the country
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-teal-600" />
                <h3 className="mt-4 font-source-serif text-xl font-light">Employee Onboarding</h3>
                <p className="mt-2 text-muted-foreground">
                  Simplest onboarding and offboarding<br />
                  for remote employees
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <HeadphonesIcon className="h-12 w-12 text-teal-600" />
                <h3 className="mt-4 font-source-serif text-xl font-light">24*7 Support</h3>
                <p className="mt-2 text-muted-foreground">
                  Round-the-clock assistance for all your<br />
                  device management needs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <LayoutDashboard className="h-12 w-12 text-teal-600" />
                <h3 className="mt-4 font-source-serif text-xl font-light">Unified Dashboard</h3>
                <p className="mt-2 text-muted-foreground">
                  Manage all your devices from one<br />
                  central dashboard
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/contact-us">Get to Know More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="font-source-serif text-3xl font-light md:text-4xl">
              Cost effective, Rapid Delivery
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to onboard people, help them settle in,<br />
              and support them on their journey
            </p>
          </div>

          <div className="mt-16">
            <Card className="mx-auto max-w-3xl">
              <CardContent className="pt-6">
                <p className="text-lg italic text-muted-foreground">
                  "PaveIT smoothened our global workforce management. Equipping our team in India is now super fast. 
                  Bharath's team works at rocket speed and are available 24*7 for queries. PaveIT is a game changer 
                  for managing remote teams."
                </p>
                <div className="mt-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-normal text-lg">Siva Surya</p>
                    <p className="text-muted-foreground">Head of Infrastructure at Multiplier</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-900 py-12 text-white">
        <div className="container">
          <div className="text-center">
            <h2 className="font-source-serif text-2xl font-light">Your company's nervous system</h2>
            <p className="mt-2 text-slate-300 max-w-2xl mx-auto">
              Organize everything - from signed documents to emergency contact<br />
              information - in an accessible way
            </p>
            <div className="mt-6">
              <Button variant="outline" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link href="/contact-us">Get to Know More</Link>
              </Button>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/contact-us" className="text-slate-300 hover:text-white">Contact Us</Link>
            <Link href="/terms-and-conditions" className="text-slate-300 hover:text-white">Terms & Conditions</Link>
            <Link href="/refund-and-cancellation" className="text-slate-300 hover:text-white">Refund & Cancellation</Link>
            <Link href="/privacy-policy" className="text-slate-300 hover:text-white">Privacy Policy</Link>
            <Link href="/return-policy" className="text-slate-300 hover:text-white">Return Policy</Link>
            <Link href="/shipping-policy" className="text-slate-300 hover:text-white">Shipping Policy</Link>
          </div>
          <div className="mt-6 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} AWECHEMIST TECHNOLOGIES PVT LTD. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}