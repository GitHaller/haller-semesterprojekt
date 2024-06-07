// pages/page.tsx
import Header from '../components/Header';

const Page = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Willkommen zu meiner Next.js-Anwendung!</h1>
        {/* Hier können Sie Ihre Inhalte einfügen */}
        <p>Genießt dieses süße Bild von meinem Hund!</p>
      </main>
    </div>
  );
};

export default Page;
