import React from "react";
import { CCol } from "@coreui/react";
const Card = (props) => {
  return (
    <div
      //   xs={12}
      {...props}
      className="p-3 m-2"
      style={{ border: "1px solid gray", borderRadius: "2em", ...props.style }}
    >
      {props.children}
    </div>
  );
};

export default Card;
