import React from 'react'
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import Link from "next/link"

export default function ComparisonPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="font-source-serif text-4xl font-bold mb-4">Windows Laptop Comparison</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Compare our Windows laptop options to find the perfect device for your team.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-4 text-left font-semibold border">Feature</th>
                    <th className="p-4 text-left font-semibold border">Lenovo ThinkBook 14 G6</th>
                    <th className="p-4 text-left font-semibold border">Dell L3540</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border font-medium">Processor</td>
                    <td className="p-4 border">Intel Core i5-1335U</td>
                    <td className="p-4 border">Intel Core i5-1235U</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Display</td>
                    <td className="p-4 border">14" WUXGA (1920 x 1200)</td>
                    <td className="p-4 border">15.6" Full HD (1920 x 1080)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Memory</td>
                    <td className="p-4 border">32GB RAM</td>
                    <td className="p-4 border">32GB RAM</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Storage</td>
                    <td className="p-4 border">512GB SSD</td>
                    <td className="p-4 border">512GB SSD</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Operating System</td>
                    <td className="p-4 border">Windows 11 Pro</td>
                    <td className="p-4 border">Windows 11 Pro</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Keyboard</td>
                    <td className="p-4 border">Backlit Keyboard (BKLT)</td>
                    <td className="p-4 border">Backlit Keyboard (BKL)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Connectivity</td>
                    <td className="p-4 border">Wi-Fi + Bluetooth</td>
                    <td className="p-4 border">Wi-Fi + Bluetooth</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Support & Warranty</td>
                    <td className="p-4 border">3-Year Premier Support</td>
                    <td className="p-4 border">3-Year Support</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Additional Features</td>
                    <td className="p-4 border">Fingerprint Reader (FPR), CO2 Offset, Includes Bag</td>
                    <td className="p-4 border">-</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Price</td>
                    <td className="p-4 border font-bold">₹63,500 + Tax</td>
                    <td className="p-4 border font-bold">₹66,500 + Tax</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Recommendation</td>
                    <td className="p-4 border text-teal-600 font-bold">
                      <div className="flex items-center">
                        <Check className="h-5 w-5 mr-2" />
                        Better Value
                      </div>
                    </td>
                    <td className="p-4 border text-red-500 font-bold">
                      <div className="flex items-center">
                        <X className="h-5 w-5 mr-2" />
                        Slightly Older Processor & Higher Price
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Lenovo ThinkBook 14 G6</h3>
                  <p className="text-muted-foreground mb-6">
                    The Lenovo ThinkBook 14 G6 offers excellent value with a newer processor, compact form factor, and additional features like a fingerprint reader and included laptop bag.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Newer Intel Core i5-1335U processor</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Higher resolution WUXGA display</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Additional security with fingerprint reader</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Includes laptop bag</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Lower price point</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full" asChild>
                      <Link href="/checkout">Buy Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Dell L3540</h3>
                  <p className="text-muted-foreground mb-6">
                    The Dell L3540 features a larger 15.6" display which may be preferable for users who need more screen real estate, but comes at a higher price point with slightly older processor technology.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Larger 15.6" display</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Same memory and storage specifications</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Windows 11 Pro pre-installed</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 mt-0.5" />
                      <span>Older processor generation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 mt-0.5" />
                      <span>Higher price point</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/checkout">Buy Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <h2 className="font-source-serif text-2xl font-semibold mb-4">Need Help Deciding?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our team can help you choose the right devices for your specific requirements.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact-us">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}