import React, { useEffect, useState } from "react";
import get_data from "../utils";
import { Link } from "react-router-dom";
import { CCol, CImage } from "@coreui/react";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(get_data());
  }, []);
  useEffect(() => console.log(data), [data]);
  return (
    <div
      className="d-flex flex-shrink-1"
      style={{ flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.map((v, i) => {
        return (
          <CCol
            // xs={4}
            style={{
              flex: "0 0 auto",
              width: "30%",
              aspectRatio: 1,
              borderRadius: "10%",
              border: "solid gray 1px",
              margin: "0.3em",
              backgroundSize: "100% 30%",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "top",
              backgroundImage: `url(${v.bgImg})`,
              padding: "1em",
            }}
            key={i}
          >
            <Link to={`/${v.id}`}>
              <div
                style={{
                  height: "30%",
                }}
              ></div>
              <div
                className="h-10"
                style={{ position: "relative", height: "20%" }}
              >
                <CImage
                  src={v.avatar}
                  style={{
                    position: "absolute",
                    left: "2%",
                    top: "-70%",
                    // width: "20%",
                    height: "150%",
                    borderRadius: "50%",
                    aspectRatio: 1,
                  }}
                  //   className="w-20 h-20"
                />
              </div>
            </Link>
            <div>
              <h5>
                <strong>{v.name}</strong>
              </h5>
              <p className="text-secondary">{v.desireWorkType.join(" | ")}</p>
            </div>
          </CCol>
        );
      })}
    </div>
  );
};

export default Home;
