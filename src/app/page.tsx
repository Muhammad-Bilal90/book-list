import BooksList from "@/components/BooksList";
import HeroBanner from "@/components/HeroBanner";

export default async function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroBanner />
      {/* Books List Section */}
      <BooksList />
    </main>
  );
}
