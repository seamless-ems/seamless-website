import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Head from "@/components/Head";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Head
        title="Seamless — Events are Hard. Speaker Management shouldn't be."
        description="All your speakers, all in one place. Call for speakers, intake forms, card templates, and a content hub."
        url="https://seamlessevents.io/"
        image="https://seamlessevents.io/og-image.png"
      />
      <Hero />
      <Footer />
    </main>
  );
};

export default Index;
