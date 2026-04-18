import Hero from "@/components/Hero";
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
    </main>
  );
};

export default Index;
