import { Contact, Footer, Navbar } from "@/components";

export default function page() {
  return (
    <main className="transition-all duration-300">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
