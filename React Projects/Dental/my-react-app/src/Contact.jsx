import "./Contact.css";
export default function Contact() {
  return (
    <>
      <div id="contact" className="contact-section">
        <div className="contact">
          <div className="contact-elements">
            <h1>Stay In Touch</h1>
            <hr />
            <div className="contact-email">
              <i class="fa-regular fa-envelope"></i>{" "}
             <a href="mailto:khaledfrayji@smiley.com"><p>khaledfrayji@smiley.com</p></a> 
            </div>
            <div className="contact-email">
            <i class="fa-solid fa-phone"></i>{" "}
              <a href=""><p>(+961) 01-23-45-67</p></a>
            </div>
          </div>

          <div className="contact-elements">
            <h1>Navigation</h1>
            <hr />
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
          </div>

          <div className="contact-elements">
            <h1>Social Media</h1>
            <hr />
            <div className="social-media">
              <a href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a>{" "}
              <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.x.com"><i class="fa-brands fa-twitter"></i></a>
             <a href="https://www.tiktok.com"><i class="fa-brands fa-tiktok"></i></a> 
            </div>
          </div>
        </div>
        <div className="copy-rights">
          <p>&copy; Smiley, 2024 all rights reserved</p>
          <p>Designed by Khaled Frayji</p>
        </div>
      </div>
    </>
  );
}
