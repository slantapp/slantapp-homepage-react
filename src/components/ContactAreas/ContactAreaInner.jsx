import React from "react";
import { CONTACT_IMG } from "../../lib/assets";

export const ContactAreaInner = () => {
  return (
    <section className="inner-contact-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="inner-contact-img">
              <img src={CONTACT_IMG} alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="inner-contact-info">
              <h2 className="title">Our Office Address</h2>
              <div className="contact-info-item">
                <h5 className="title-two">Nigeria Office</h5>
                <ul className="list-wrap">
                  <li>
                    Abuja, Nigeria <br />
                  </li>
                  <li>+2349061432144</li>
                  <li>info@slantapp.com, support@slantapp.io</li>
                </ul>
              </div>
            </div>

            <div style={{marginTop: "50px"}}></div>

            <div className="contact-form">
              <h5 className="title-two" style={{marginBottom: "20px"}}>Send Us an Email</h5>
              <form action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input type="text" placeholder="Name *" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input type="email" placeholder="E-mail *" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input type="number" placeholder="Phone *" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input type="text" placeholder="Subject *" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-grp">
                      <textarea placeholder="Comments *"></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit">Submit Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
