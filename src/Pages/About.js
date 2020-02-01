import React, { Component } from "react";
import "../Styles/About.css";
export default class About extends Component {
  render() {
    return (
      <div>
        <div id="about" className="about-image">
          <div className="row">
            <div class="col-6 mx-auto text-center">
              <h1 className="text-white mb-3">OM MEG</h1>
              <h4 className="text-white">
                2.klasse dataingeniør-student på Norges
                teknisk-naturvitenskapelige universitet.
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
