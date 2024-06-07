// pages/page.tsx
import Header from '../components/Header';
import styles from './page.module.css';

const images = [
  { src: '/images/AKELO2.JPG', alt: 'AKELO 2', caption: 'Wanderurlaub 2021' },
  { src: '/images/AKELO3.JPG', alt: 'AKELO 3', caption: 'Wanderurlaub 2021' },
  { src: '/images/AKELO4.JPG', alt: 'AKELO 4', caption: 'Übernachtung im Mini-Bett' },
  { src: '/images/AKELO5.JPG', alt: 'AKELO 5', caption: 'Weihnachtsgeschenk' },
  { src: '/images/AKELO6.JPG', alt: 'AKELO 6', caption: 'Kaminfeuer-Prasseln' },
  { src: '/images/AKELO7.JPG', alt: 'AKELO 7', caption: 'Hund mit Mütze' },
  { src: '/images/AKELO8.JPG', alt: 'AKELO 8', caption: 'Shotgun!' },
  { src: '/images/AKELO9.JPG', alt: 'AKELO 9', caption: 'Lass mich schlafen' },
];

const Page = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Willkommen zu meiner Next.js-Anwendung!</h1>
        <p>Genießt diese süßen Bilder von meinem Hund!</p>
        <div className={styles.gallery}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={image.src} alt={image.alt} className={styles.image} />
              <p className={styles.caption}>{image.caption}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
