import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import s from '../styles/Home.module.css';

const arr = [
  {
    id: '1',
    text: 'ମୋ ଗାଁ',
    link: '/my-village',
    imgSrc: '/images/village.svg',
  },
  {
    id: '2',
    text: 'ଟେଲି ମେଡିସିନ୍',
    link: '/telemedicine',
    imgSrc: '/images/telemed.svg',
  },
  {
    id: '3',
    text: 'ପଡୋଶୀ ଗାଁ',
    link: '/neighbouring-village',
    imgSrc: '/images/neighbouring.svg',
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>COWM</title>
        <meta name="description" content="Community Owned Wifi Mesh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.container}>
        {arr.map((c) => (
          <div className={s.card} key={c.id}>
            <Image src={c.imgSrc} alt={c.text} height={216} width={360} />
            <div className={s.innerContainer}>
              <Link href={c.link}>
                <h2 style={{ cursor: 'pointer' }}>{c.text}</h2>
              </Link>
              <Link href={c.link}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ cursor: 'pointer' }}
                >
                  <path
                    d="M5 12H19"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
