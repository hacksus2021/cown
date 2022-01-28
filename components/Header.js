import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <a href="Index.html" className="logo">
        <Image src="/images/logos.jpg" width="40" height="30" alt="" />C
        <span className="fas fa-heartbeat"></span>WSnT Community owned
        wifi:Sharing and Telemedicine
      </a>
      {/* <nav className="navbar">
        <a href="">home</a>
      </nav> */}
      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  );
}
