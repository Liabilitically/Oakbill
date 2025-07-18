import React from 'react'

const FAQ = () => {
  return (
    <>
        <h2 className="text-4xl font-bold dark:text-base-content">FAQs</h2>
        <div className="mt-7 w-full max-w-3xl px-4 space-y-3">
          <div className="collapse bg-base-200 border border-base-300 shadow-sm">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title font-semibold bg-base-200">When will Oakbill be ready?</div>
            <div className="collapse-content text-sm">We&rsquo;re putting the finishing touches on something truly special. Waitlist members will get first access when we&rsquo;re ready to launch.</div>
          </div>
          <div className="collapse bg-base-200 border border-base-300 shadow-sm">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title font-semibold">What makes this different from other expensive invoicing tools?</div>
            <div className="collapse-content text-sm">We believe invoicing should feel as natural as your creative process. No corporate coldness, just a simple and reliable tool that works the way you want it to.</div>
          </div>
          <div className="collapse bg-base-200 border border-base-300 shadow-sm">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title font-semibold">How much will it cost?</div>
            <div className="collapse-content text-sm">We&rsquo;re designing fair pricing for independent creators. Waitlist members get early access to our founder&rsquo;s pricing.</div>
          </div>
        </div>
    </>
  )
}

export default FAQ