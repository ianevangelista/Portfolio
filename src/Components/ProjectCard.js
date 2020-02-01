import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ButtonToolbar } from "react-bootstrap";
import Card from "./Card";
import monteImg from "../Local_files/monte.jpg";
import icecreamImg from "../Local_files/icecream.jpg";
import quizImg from "../Local_files/quiz.png";
import newsImg from "../Local_files/news.png";
import "../Styles/Projects.css";

const iceCream = {
  title: "IDI-Rally",
  img: icecreamImg,
  description: "desc"
};

const monte = {
  title: "Monte",
  img: monteImg,
  description: "desc"
};

const quiz = {
  title: "How Dumb R U?",
  img: quizImg,
  description: "desc"
};

const news = {
  title: "Community news-webpage",
  img: newsImg,
  description: "desc"
};
const projects = [iceCream, monte, quiz, news];

function DialogBox(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.img}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function ProjectCard() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="row justify-content-center align-items-center mx-5">
      {projects.map(p => (
        <div class="col-lg projectCard">
          <ButtonToolbar>
            <Card cardSize="">
              <div className="col-sm-">
                <div className={"mx-auto bg- border-0"}>
                  <div className="container-img">
                    <img
                      src={p.img}
                      className="img-fluid mw-100 h-auto img-custom"
                      alt="Bilde"
                    />
                  </div>
                  <div className="card-text">
                    <p className="h2 text-center mt-3 mx-3 title-custom">
                      {p.title}
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Les mer om prosjektet her
              </Button>
            </Card>
            <DialogBox show={modalShow} onHide={() => setModalShow(false)} />
          </ButtonToolbar>
        </div>
      ))}
    </div>
  );
}
//isbil, monte, quiz, nyhet, portfolio, scrum
