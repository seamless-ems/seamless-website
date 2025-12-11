import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Head from "@/components/Head";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Head
        title={`Seamless — Event Management SaaS for Schedules, Speakers & Collaboration`}
        description={`Seamless automates speaker management, publishes live schedules, and enables collaborative content workflows for event organizers.`}
        url={`https://seamlessevents.io/`}
        image={`/assets/hero-illustration.jpg`}
      />
      <Hero />
      <Features />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
