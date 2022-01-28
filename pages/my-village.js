import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import myVillageCss from '../styles/MyVillage.module.css';

const arr = [
  {
    id: '1',
    link: '/',
    img: '/images/myVillage/health.svg',
    text: 'ସ୍ୱାସ୍ଥ୍ୟ',
  },
  { id: '2', link: '/', img: '/images/myVillage/edu.svg', text: 'ଶିକ୍ଷା' },
  {
    id: '3',
    link: '/',
    img: '/images/myVillage/agri.svg',
    text: 'ସ୍ୱାସ୍ଥ୍ୟ',
  },
  { id: '4', link: '/', img: '/images/myVillage/map.svg', text: 'ଶିକ୍ଷା' },
  {
    id: '5',
    link: '/',
    img: '/images/myVillage/entertainment.svg',
    text: 'କୃଷି ଏବଂ ଜୀବିକା',
  },
  {
    id: '6',
    link: '/',
    img: '/images/myVillage/comm.svg',
    text: 'ସ୍ଥାନାନ୍ତରଣ ଏବଂ ବଜାର ପାଇଁ ଯୋଗାଯୋଗ',
  },
  {
    id: '7',
    link: '/',
    img: '/images/myVillage/gov.svg',
    text: 'ଜଙ୍ଗଲ ଏବଂ  ଜୀବ ବିବିଧତା',
  },
  {
    id: '8',
    link: '/',
    img: '/images/myVillage/forest.svg',
    text: 'ଗାଁ ଇତିହାସ ଏବଂ ସଂସ୍କୃତି',
  },
  {
    id: '9',
    link: '/',
    img: '/images/myVillage/history.svg',
    text: 'ଶାସନ ଏବଂ ସ୍ଥାନୀୟ ଆତ୍ମସରକାର',
  },
];

const MyVillage = () => {
  return (
    <div>
      <Head>
        <title>My Village | COWM</title>
        <meta name="description" content="Community Owned Wifi Mesh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={myVillageCss.container}>
        {arr.map((card) => {
          return (
            <Link href={card.link}>
              <div className={myVillageCss.cardContainer}>
                <div className={myVillageCss.card}>
                  <Image
                    src={card.img}
                    height={156}
                    width={360}
                    className={myVillageCss.image}
                  />
                  <div className={myVillageCss.textContainer}>
                    <p>{card.text}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MyVillage;
