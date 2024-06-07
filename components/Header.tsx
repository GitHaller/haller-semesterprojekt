// components/Header.tsx
import Head from 'next/head';

const Header = () => {
  return (
    <header>
      <Head>
        <title>Akelo the Dog</title> {/* Hier ändern Sie den Titel */}
        <meta name="description" content="Dog" />
      </Head>
      <h1>Header Ihrer Seite</h1>
      {/* Weitere Header-Inhalte */}
    </header>
  );
};

export default Header;
