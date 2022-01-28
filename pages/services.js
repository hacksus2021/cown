import React from 'react';
import Image from 'next/image';
import s from '../styles/Services.module.css';

const arr = [
  { text: 'ସ୍ୱାସ୍ଥ୍ୟ' },
  { text: 'ଶିକ୍ଷା' },
  { text: 'ସ୍ୱାସ୍ଥ୍ୟ' },
  { text: 'ଶିକ୍ଷା' },
  { text: 'କୃଷି ଏବଂ ଜୀବିକା' },
  { text: 'ସ୍ଥାନାନ୍ତରଣ ଏବଂ ବଜାର ପାଇଁ ଯୋଗାଯୋଗ' },
  { text: 'ଜଙ୍ଗଲ ଏବଂ  ଜୀବ ବିବିଧତା' },
  { text: 'ଗାଁ ଇତିହାସ ଏବଂ ସଂସ୍କୃତି' },
  { text: 'ଶାସନ ଏବଂ ସ୍ଥାନୀୟ ଆତ୍ମସରକାର' },
];

const Services = () => {
  return (
    <div className={s.container}>
      <div className={s.main}>
        <div className={s.grid}>
          {arr.map((a, i) => (
            <div className={s.card} key={a.text}>
              <Image
                src={`/images/${i + 1}.jpeg`}
                alt="Avatar"
                width={400}
                height={400}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span className={s.text}>
                  <b>{a.text}</b>
                </span>
                <button className={s.button}>&#8594;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
