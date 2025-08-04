import React from 'react'
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="font-source-serif text-4xl font-bold mb-4">Device Pricing</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the right devices for your team with our competitive pricing options.
                All devices come with our comprehensive management services.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* MacBook Air */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>MacBook Air</CardTitle>
                  <CardDescription>M3 Chip, 8GB RAM, 256GB SSD</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="relative w-full h-48 mb-6">
                    <Image 
                      src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80"
                      alt="MacBook Air"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-3xl font-bold">₹99,900</p>
                  <p className="text-sm text-muted-foreground">+ applicable taxes</p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>M3 chip with 8‑core CPU and 8‑core GPU</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>8GB unified memory</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>256GB SSD storage</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>13.6-inch Liquid Retina display</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Two Thunderbolt / USB 4 ports</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>MagSafe 3 charging port</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/checkout">Buy Now</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* MacBook Air Higher Spec */}
              <Card className="flex flex-col border-teal-600">
                <CardHeader className="bg-teal-50 rounded-t-lg">
                  <div className="text-center text-teal-600 font-medium text-sm mb-2">MOST POPULAR</div>
                  <CardTitle>MacBook Air</CardTitle>
                  <CardDescription>M3 Chip, 16GB RAM, 512GB SSD</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="relative w-full h-48 mb-6">
                    <Image 
                      src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt="MacBook Air"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-3xl font-bold">₹119,900</p>
                  <p className="text-sm text-muted-foreground">+ applicable taxes</p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>M3 chip with 8‑core CPU and 10‑core GPU</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>16GB unified memory</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>512GB SSD storage</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>13.6-inch Liquid Retina display</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Two Thunderbolt / USB 4 ports</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>MagSafe 3 charging port</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/checkout">Buy Now</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* MacBook Pro */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>MacBook Pro</CardTitle>
                  <CardDescription>M3 Pro Chip, 18GB RAM, 512GB SSD</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="relative w-full h-48 mb-6">
                    <Image 
                      src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt="MacBook Pro"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-3xl font-bold">₹169,900</p>
                  <p className="text-sm text-muted-foreground">+ applicable taxes</p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>M3 Pro chip with 11‑core CPU and 14‑core GPU</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>18GB unified memory</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>512GB SSD storage</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>14.2-inch Liquid Retina XDR display</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Three Thunderbolt 4 ports</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>HDMI port, SDXC card slot, MagSafe 3 port</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/checkout">Buy Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <h2 className="font-source-serif text-2xl font-semibold mb-4">Looking for Windows Laptops?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                We also offer a range of Windows laptops from top manufacturers like Dell and Lenovo.
              </p>
              <Button size="lg" asChild>
                <Link href="/pricing/comparison">View Windows Laptop Comparison</Link>
              </Button>
            </div>

            <div className="mt-16 bg-slate-50 p-8 rounded-lg">
              <h2 className="font-source-serif text-2xl font-semibold mb-4">All Devices Include</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Free delivery across India</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Device setup and configuration</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Asset tracking and management</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>24/7 technical support</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Manufacturer warranty</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                  <span>Retrieval service when needed</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}