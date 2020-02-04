import React from "react";
export default function Contact() {
  return (
    <div>
      <div id="contact" className="row">
        <div className="col-6 mx-auto text-center">
          <h1 className="text-dark my-3">KONTAKT MEG</h1>
          <div className="row">
            <div className="col">
              <i className="fa fa-envelope"></i>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ianevangelista1999@gmail.com&su=Hendvendelse">
                <p>ianevangelista1999@gmail.com</p>
              </a>
            </div>
            <div className="col">
              <i className="fa fa-phone"></i>
              <p>+47 45049804</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}