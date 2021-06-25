import React from "react";
const Footer = () => {
  let date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="rows">
            <h1>follow us</h1>
            <div className="social-icons">
              <a
                className="facebook"
                href="https://www.facebook.com/neelimaindustries/"
                target="_blank"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a className="twitter" href="https://www.twitter.com/neelimaindustri?lang=en" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="instagram"
                href="https://www.instagram.com/neelimaindustries/?hl=en"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                className="linkedin"
                href="https://www.linkedin.com/company/neelima-industries-private-limited/mycompany/"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              {/* <a className="gmail" href="#" target="_blank">
                <i className="fa fa-google-plus"></i>
              </a> */}
            </div>
          </div>
        </div>
        <div className="text-center footer-text">
          ©️ {year} Neelima Industries Pvt. Ltd. | All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
