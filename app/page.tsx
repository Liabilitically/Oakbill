import NavigationBar from "./components/NavigationBar";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";
import InfoCard from "./components/InfoCard";

export default function Home() {
  return (
    <main className="flex flex-col text-primary min-h-screen bg-base-100 selection:bg-base-300 selection:text-base-content">
      <NavigationBar />
      <div className="flex-col flex-1 justify-items-center">
        <h2 className="text-6xl justify-center text-center mb-7 mt-15 mx-4 font-bold dark:text-base-content">Get paid faster, stress less</h2>
        <p className="text-xl px-4 justify-center text-center mb-14 text-info lg:w-2xl">
          The invoicing tool that feels as natural as your creativity. Coming soon for freelancers who value simplicity and reliability.
        </p>
        <div className="grid gap-6 md:grid-cols-3 grid-cols-1 mb-24">
          <InfoCard iconName="psychiatry" cardTitle="Effortless Creation" cardContent="Build beautiful invoices in minutes, not hours. No complicated templates or confusing menus." />
          <InfoCard iconName="autorenew" cardTitle="Gentle Reminders" cardContent="Automatic follow-ups that maintain relationships while getting you paid. Professional, never pushy." />
          <InfoCard iconName="mobile_3" cardTitle="Mobile-First Design" cardContent="Invoice clients from anywhere. Co-working space, home studio, or client site — your business travels with you." />
        </div>
        <div className="flex-col w-full justify-items-center text-center select-none">
          <p className="mb-1">Join the Waitlist</p>
          <span className="material-symbols-outlined text-primary animate-pulse" style={{ fontSize: '2rem' }}>keyboard_arrow_down</span>
        </div>
      </div>
      <div className="flex h-96 mt-4 bg-base-200 justify-center items-center">
        <WaitlistForm />
      </div>
      <div className="flex-col h-96 bg-base-100 justify-center justify-items-center text-center p-10">
        <h2 className="text-4xl font-bold">FAQs</h2>
        <div className="mt-7 md:w-3xl w-md">
          <div className="collapse bg-base-200 border border-base-300 shadow-sm">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title font-semibold bg-base-200">When will Oakbill be ready?</div>
            <div className="collapse-content text-sm">We're putting the finishing touches on something truly special. Waitlist members will get first access when we're ready to launch.</div>
          </div>
          <div className="collapse bg-base-200 border border-base-300 shadow-sm">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title font-semibold">What makes this different from other expensive invoicing tools?</div>
            <div className="collapse-content text-sm">We believe invoicing should feel as natural as your creative process. No corporate coldness, just a simple and reliable tool that works the way you want it to.</div>
          </div>
          <div className="collapse bg-base-200 border border-base-300 shadow-sm">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title font-semibold">How much will it cost?</div>
            <div className="collapse-content text-sm">We're designing fair pricing for independent creators. Waitlist members get early access to our founder's pricing.</div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
