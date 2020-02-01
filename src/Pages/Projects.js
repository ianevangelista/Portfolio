import React from "react";
import "../Styles/Projects.css";
import ProjectCard from "../Components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <div id="projects" className="row">
        <div class="col-6 mx-auto text-center">
          <h1 className="text-dark my-3">PROSJEKTER</h1>
          <div className="row">
            <div className="col">
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}