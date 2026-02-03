import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VanillaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-grow w-full px-4 py-8">{children}</main>
      <Footer />
    </>
  );
}
