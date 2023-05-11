import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CCol, CImage } from "@coreui/react";
import Card from "./Card";
import get_data from "./utils";
const PersonDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    setData(get_data().find((v) => +v.id === +id));
  }, [id]);

  return (
    <>
      <Card
        xs={12}
        style={{
          height: "min-content",
          backgroundImage: `url(${data.bgImg})`,
          backgroundPositionX: "center",
          backgroundPositionY: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 10em",
          //   paddingTop: "20%",
        }}
        className="m-2 d-flex flex-column"
      >
        <CImage
          src={data.avatar}
          className="position-absolute"
          style={{
            borderRadius: "50%",
            aspectRatio: 1,
            height: "20%",
            top: "10%",
            border: "5px solid white",
          }}
        />
        <div className="" style={{ height: "12em" }}></div>
        <div className="d-flex flex-row flex-grow-1 align-items-center">
          <CCol xs={8}>
            <h2>
              <strong>{data.name}</strong>
            </h2>
            <p className="my-0">{data.desireWorkType}</p>
            <p className="text-secondary">
              {data.phone} | {data.email}{" "}
              <b className="text-primary">聯絡資料</b>
            </p>
          </CCol>
          <CCol xs={4} className="d-flex flex-column">
            {data.experience?.map((v, i) => (
              <p key={i}>
                <b> {v.company}</b>
              </p>
            ))}
            {data.education?.map((v, i) => (
              <div key={i} className="d-flex">
                <CImage
                  src={v.img}
                  style={{
                    height: "2em",
                    borderRadius: "50%",
                  }}
                />
                <p key={i} className="mx-2">
                  <b> {v.school}</b>
                </p>
              </div>
            ))}
          </CCol>
        </div>
      </Card>
      <Card xs={12}>
        <h3>
          <b>工作經歷</b>
        </h3>
        {data.experience?.map((v, i) => (
          <div key={i} className="m-2 b-2">
            <p className="my-1">
              <b>{v.position}</b>
            </p>
            <p className="my-0">
              {v.company} {v.type}
            </p>
            <p className="text-secondary mb-2">{`${v.start} - ${v.end}`}</p>
            <p>
              <b>技能: </b>
              {v.skills.join(", ")}
            </p>
          </div>
        ))}
      </Card>
      <Card>
        <h3>
          <b>教育背景</b>
        </h3>
        {data.education?.map((v, i) => (
          <div key={i} className="d-flex">
            <CImage
              src={v.img}
              className="mx-2"
              style={{ height: "3.2em", borderRadius: "50%" }}
            ></CImage>
            <div>
              <h5>{v.school}</h5>
              <p className="my-0">
                {v.degree}, {v.major}
              </p>
              <p className="text-secondary">
                {v.start} - {v.end}
              </p>
            </div>
          </div>
        ))}
      </Card>
      <Card>
        <h3>
          <b>技能</b>
        </h3>
        {data.skills?.map((v, i) => (
          <h5 key={i} className={(i !== 0 && `border-top`) + " py-2"}>
            {v}
          </h5>
        ))}
      </Card>
    </>
  );
};

export default PersonDetail;
