import React from 'react';

const Footer = () => {
  return (
    <section className="footer">
      <h3>ଆପଣ ନିଜ ପସନ୍ଦର ଚିତ୍ର ଏବଂ ଭିଡିଓଗୁଡିକ ପ୍ରାସଙ୍ଗିକ କରିପାରିବେ </h3>
      <h4>You can add relevant photos,audios and videos of your choice</h4>
      <div className="icons">
        <a href="#event" className="btn">
          ଯୋଡନ୍ତୁ(Add) <span className="fas fa-plus-circle"></span>{' '}
        </a>
      </div>
    </section>
  );
};

export default Footer;
