import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function UserDetail() {
  const auth = useSelector((state) => state.auth);
  let navigate = useNavigate();
  //   console.log(auth.email);
  const handleWriteBlog = () => {
    navigate("/write_blog");
  };
  return (
    <div className="user_info_section">
      <Container>
        <div className="back_to_home">
          <button className="btn btn_ask">Ask question </button>

          <button onClick={handleWriteBlog} className="btn btn_ask">
            Write Blog{" "}
          </button>

          {/* <a href="/" style={{ textDecoration: "none" }}>
            Back to home
            <svg
              style={{ width: "0.8rem", marginLeft: "0.8rem" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
            </svg>
          </a> */}
        </div>
        <Container>
          <div className="user_detail_section">
            <div className="img_part">
              <img
                src="../../../Image/user.jpg"
                className="user_image"
                style={{ width: "50%" }}
              ></img>
            </div>
            <div className="intro_section">
              <h2>{auth.username}</h2>
              <p>Web Developer </p>
              <p>{auth.email}</p>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                quibusdam, molestias culpa impedit neque nemo quidem cum modi
                delectus ratione, in veritatis iste enim iure? Dicta debitis
                optio repudiandae distinctio? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eum, amet consequatur sit earum
                velit ex illum iusto voluptas exceptu.
              </p>
            </div>
          </div>
        </Container>

        {/* <Row>
          <Col md={2} sm={1}>
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <img src="../../../Image/user.jpg" className="user_image"></img>
            </div>
          </Col>
          <Col md={7} sm={7}>
            {" "}
            <div className="intro_section">
              <h2>{auth.username}</h2>
              <p>Web Developer </p>
              <p>{auth.email}</p>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                quibusdam, molestias culpa impedit neque nemo quidem cum modi
                delectus ratione, in veritatis iste enim iure? Dicta debitis
                optio repudiandae distinctio? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eum, amet consequatur sit earum
                velit ex illum iusto voluptas exceptu.
              </p>
            </div>
          </Col>
          <Col md={2} sm={2}>
            <div className="btn_section">
              <button className="btn btn_ask">Ask question </button>

              <button className="btn btn_ask">Write Blog </button>
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}
