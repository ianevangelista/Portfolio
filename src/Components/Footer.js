// @flow
import React from "react";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer className="custom-bg lab_social_icon_footer">
      <hr />
      <link
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        rel="stylesheet"
      ></link>
      <div className="row">
        <div className="col-sm mx-5 text-center align-self-center my-auto">
          <h5>
            Kontakt meg
            <hr className="w-50" />
          </h5>
          <div className="row mx-5">
            <div className="col-sm mx-5 text-center align-self-center small">
              <div className="row">
                <p className="col-sm">
                  <i class="fa fa-home mr-3"></i>
                  <a href="https://www.google.com/maps/place/Norges+teknisk-naturvitenskapelige+universitet/@63.419499,10.3998831,17z/data=!3m1!4b1!4m5!3m4!1s0x466d31bfd8c0937f:0xb4fde91ca281978b!8m2!3d63.419499!4d10.402077">
                    Høgskoleringen 1, 7491 Trondheim
                  </a>
                </p>
              </div>
              <div className="row">
                <p className="col-sm">
                  <i class="fa fa-envelope mr-3"></i>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ianevangelista1999@gmail.com&su=Hendvendelse">
                    ianevangelista1999@gmail.com
                  </a>
                </p>
              </div>

              <div className="row">
                <p className="col-sm">
                  <i class="fa fa-phone mr-3"></i> + 47 45049804
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm mx-5 text-center align-self-center my-auto">
          <h5>
            Sosiale medier
            <hr className="w-50" />
          </h5>
          <div className="row mx-5">
            <div className="col-sm mx-5 text-center align-self-center">
              <a href="https://www.facebook.com/ian.evangelista99">
                <i
                  id="social-fb"
                  className="fa fa-facebook-square fa-3x social m-2"
                ></i>
              </a>
              <a href="https://twitter.com/">
                <i
                  id="social-tw"
                  className="fa fa-twitter-square fa-3x social m-2"
                ></i>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ianevangelista1999@gmail.com&su=Hendvendelse">
                <i
                  id="social-em"
                  className="fa fa-envelope-square fa-3x social m-2"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
