import "./Services.css";
export default function Services() {
  return (
    <div id="services" className="services">
      <div className="teeth-forte">
        <h1>Your teeth, our forté.</h1>
        <h2>Experience innovative, gentle treatments that will leave you smiling.</h2>
        <div class="services-container">
  <div class="service-item most-popular">
    <h3>CLEANING & WHITENING</h3>
    <span class="badge">MOST POPULAR</span>
    <p>Combines both cleaning & whitening services for longer-lasting results. Plus free fluoride polish for added strength, protection, and the sparkliest smile.</p>
    <p class="time-price">60-105 minutes | starts at $349</p>
    <a href="tel:0123456789"><button class="btn">BOOK NOW</button></a> 
    <a href="#" class="learn-more">Learn More</a>
  </div>
  <div class="service-item">
    <h3>CLEANING</h3>
    <p>Sit back and relax as we clean, polish, and floss your teeth with care. No x-rays, no hassles. Fluoride polish for added enamel strength & protection, available as add-on.</p>
    <p class="time-price">30-60 minutes | starts at $149</p>
   <a href="tel:0123456789"><button class="btn">BOOK NOW</button></a> 
    <a href="#" class="learn-more">Learn More</a>
  </div>
  <div class="service-item">
    <h3>WHITENING</h3>
    <p>Take advantage of the newest whitening technology. With The Gleamery Whitening System, get sensitivity-minded whitening with instant results. Add-ons available.</p>
    <p class="time-price">30-90 minutes | starts at $249</p>
    <a href="tel:0123456789"><button class="btn">BOOK NOW</button></a> 
    <a href="#" class="learn-more">Learn More</a>
  </div>
</div>

      </div>
      <p>
        we are dedicated to providing comprehensive and compassionate dental
        care for patients of all ages. Our experienced team utilizes the latest
        technology and techniques to ensure you receive the highest standard of
        treatment in a comfortable and welcoming environment. Our services
        include:
      </p>
      <div className="gallery">
        <div className="gallery-elements">
          <img
            src="https://clintondentist.net/wp-content/uploads/2023/09/Smile-ParksFamilyDentistry.jpg"
            alt=""
          />
          <h2>Treat Your Smile</h2>
          <p>
            Need a simple check-up? A full smile makeover? We’ve got you
            covered.
          </p>
        </div>
        <div className="gallery-elements">
          <img
            src="https://clintondentist.net/wp-content/uploads/2023/09/Crowns-ParksFamilyDentistry.jpg"
            alt=""
          />
          <h2>Traditional Crowns</h2>
          <p>
            Made from top-quality materials and custom-fitted to your unique
            smile.
          </p>
        </div>
        <div className="gallery-elements">
          <img
            src="https://clintondentist.net/wp-content/uploads/2023/09/Dental-Bridges-ParksFamilyDentistry.jpg"
            alt=""
          />
          <h2>Dental Bridges</h2>
          <p>
            The ultimate fix-it tool for creating a complete and stunning grin.
          </p>
        </div>
        <div className="gallery-elements">
          <img
            src="https://clintondentist.net/wp-content/uploads/2023/09/CEREC-Crowns-ParksFamilyDentistry.jpg"
            alt=""
          />
          <h2>Same-Day Crowns</h2>
          <p>
            Custom made for your beautiful smile and made in one single visit.
          </p>
        </div>
        <div className="gallery-elements">
          <img
            src="https://clintondentist.net/wp-content/uploads/2023/09/Implants-ParksFamilyDentistry.jpg"
            alt=""
          />
          <h2>Implant Restorations</h2>
          <p>Damaged implant restorations got you down? Let us help!</p>
        </div>
        <div className="gallery-elements">
          <img
            src="https://clintondentist.net/wp-content/uploads/2023/09/Nitrous-Oxide-ParksFamilyDentistry.jpg"
            alt=""
          />
          <h2>Nitrous Oxide</h2>
          <p>
            Also known as “laughing gas”, will make your appointment a breeze.
          </p>
        </div>
      </div>
    </div>
  );
}
