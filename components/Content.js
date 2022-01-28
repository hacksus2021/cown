import Image from 'next/image';

const Card = () => {
  return (
    <section className="home" id="#home">
      <h1 className="heading">
        ସମ୍ପ୍ରଦାୟର ମାଲିକାନା ୱାଇଫାଇ: ଅଂଶୀଦାର ଏବଂ ଟେଲିମେଡିସିନ୍{' '}
      </h1>
      <section className="banner-container" id="event">
        <div className="banner">
          <img src="images/village.jpg" alt="" />
          <div className="content">
            <h3>ମୋ ଗାଁ</h3>
            <h4>my village</h4>
            <a href="#" className="btn">
              check out <span className="fas fa-arrow-circle-right"></span>
            </a>
          </div>
        </div>
        <div className="banner">
          <img src="images/rural.jpg" alt="" />
          <div className="content">
            <h3>ପଡୋଶୀ ଗାଁ</h3>
            <h4>Neighbouring Village</h4>
            <a href="#" className="btn">
              check out <span className="fas fa-arrow-circle-right"></span>
            </a>
          </div>
        </div>
        <div className="banner">
          <img src="images/telem.jpg" alt="" />
          <div className="content">
            <h3>ଟେଲି ମେଡିସିନ୍ </h3>
            <h4>Telemedicine</h4>
            <a href="#" className="btn">
              check out <span className="fas fa-arrow-circle-right"></span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Card;
