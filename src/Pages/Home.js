import React from "react";
import "../Styles/Home.css";
import Navigationbar from "../Components/Navigationbar";
import Footer from "../Components/Footer";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import pic from "../Local_files/ian.jpg";

export default function Home() {
  return (
    <div className="home-container bg-light">
      <Navigationbar />
      <div className="home-image">
        <div className="row">
          <div class="col-4 mx-auto text-center">
            <img
              className="img-fluid rounded-circle my-4"
              src={pic}
              alt="Ian Evangelista"
            ></img>
          </div>
        </div>
        <div className="row">
          <div class="col-8 mx-auto text-center">
            <div class="card m-5">
              <div class="card-header">
                <h1 className="text-h1 my-auto">2.KLASSE DATAINGENIØR</h1>
              </div>
              <div class="card-block">
                <h4 className="text-h4 my-auto">
                  NORGES TEKNISK-NATURVITENSKAPELIGE UNIVERSITET
                </h4>
              </div>
              <div class="card-footer">
                <link
                  href="//use.fontawesome.com/releases/v5.0.7/css/all.css"
                  rel="stylesheet"
                ></link>
                <div className="row justify-content-center align-items-center">
                  <button className="btn-lg bg-primary button rounded-lg fab fa-linkedin m-3 border-0">
                    <a
                      href="https://www.linkedin.com/in/ianevangelista/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-dark my-1">LinkedIn</p>
                    </a>
                  </button>
                  <button className="btn-lg bg-primary rounded-lg fab fa-github m-3 border-0">
                    <a
                      href="https://github.com/ianevangelista"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-dark my-1">GitHub</p>
                    </a>
                  </button>
                  <button className="btn-lg bg-primary rounded-lg fab fa-gitlab m-3 border-0">
                    <a
                      href="https://gitlab.com/ianeva"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-dark my-1">GitLab</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
