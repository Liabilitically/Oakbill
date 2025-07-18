import NavigationBar from "./components/NavigationBar";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";
import InfoCard from "./components/InfoCard";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-primary min-h-screen bg-base-100 selection:bg-base-300 selection:text-base-content">
      <NavigationBar />
      <div className="flex flex-col flex-1 items-center px-4">
        <h2 className="md:text-6xl text-4xl justify-center text-center md:mb-7 mb-5 md:mt-15 mt-5 mx-4 font-bold dark:text-base-content">Get paid faster, stress less</h2>
        <p className="md:text-xl text-md px-4 justify-center text-center mb-14 text-info lg:w-2xl">
          The invoicing tool that feels as natural as your creativity. Coming soon for freelancers who value simplicity and reliability.
        </p>
        <div className="w-full flex justify-center">
          <div className="grid gap-6 md:grid-cols-3 grid-cols-1 mb-24">
            <InfoCard iconName="psychiatry" cardTitle="Effortless Creation" cardContent="Build beautiful invoices in minutes, not hours. No complicated templates or confusing menus." />
            <InfoCard iconName="autorenew" cardTitle="Gentle Reminders" cardContent="Automatic follow-ups that maintain relationships while getting you paid. Professional, never pushy." />
            <InfoCard iconName="mobile_3" cardTitle="Mobile-First Design" cardContent="Invoice clients from anywhere. Co-working space, home studio, or client site — your business travels with you." />
          </div>
        </div>
        <div className="flex-col w-full justify-items-center text-center select-none">
          <p className="mb-1">Join the Waitlist</p>
          <span className="material-symbols-outlined text-primary animate-pulse" style={{ fontSize: '2rem' }}>keyboard_arrow_down</span>
        </div>
      </div>
      <div className="flex min-h-96 mt-4 bg-base-200 justify-center items-center py-7 w-full px-4">
        <WaitlistForm />
      </div>
      <div className="flex flex-col bg-base-100 items-center text-center p-10 mb-10 w-full">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
