import React from "react";

export default function Card(props) {
  return (
    <div className={"card w-" + props.cardSize + " m-3 border-0"}>
      <div className="card-body p-0">
        <div className="m-0">{props.children}</div>
      </div>
    </div>
  );
}
