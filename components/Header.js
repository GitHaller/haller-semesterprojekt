import Image from 'next/image';
import logo from '../public/IMG_1951.JPG'; // Pfad zum Logo

const Header = () => {
  return (
    <header className="header">
      <Image src={logo} alt="Logo" width={800} height={5000} />
    </header>
  );
};

export default Header;
