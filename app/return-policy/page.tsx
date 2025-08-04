import React from 'react'
import { SiteHeader } from "@/components/site-header"

export default function ReturnPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-4xl">
            <h1 className="font-source-serif text-4xl font-bold mb-8">Return Policy</h1>
            <div className="prose max-w-none">
              <p className="text-sm text-muted-foreground mb-8">Last updated on 24-02-2025</p>
              
              <div className="space-y-6">
                <p>We have 7 day return policy. Replacement and exchange will be delivered within 7 days. </p>

                <p>In order to become eligible for a return or an exchange:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>The purchased item should be unused and in the same condition as you received it</li>
                  <li>The item must have original packaging</li>
                  <li>If the item that you purchased was on a sale, then the item may not be eligible for a return/exchange</li>
                </ul>

                <p>Further, only such items are replaced by us (based on an exchange request), if such items are found defective or damaged.</p>


                <p>You agree that there may be a certain category of products/items that are exempted from returns or refunds. Such categories of the products would be identified to you at the time of purchase.</p>

                <p>For exchange/return accepted request(s) (as applicable), once your returned product/item is received and inspected by us, we will send you an email to notify you about receipt of the returned/exchanged product. Further, if the same has been approved after the quality check at our end, your request (i.e. return/exchange) will be processed in accordance with our policies.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}