// import React, { Component } from "react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Bloglists.css";
import { getBlogs } from "../../store/actions/blogactions";
import { useState } from "react";

const Bloglists = () => {
  //  const auth = useSelector((state) => state.auth);
  const blogs = useSelector((state) => state.blogs);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [blog, setBlog] = useState({
    intro: "intro",
    blog_title: "title",
    posting_time: "posting time",
  });
  useEffect(() => {
    dispatch(getBlogs());
  }, [blog._id, dispatch]);
  console.log(blogs);

  return (
    <>
      <div className="bloglist_section">
        <Container>
          <Row>
            <Col sm={5} className="bloglist_left">
              <img src="../../../Image/blog_page.svg" alt="" />
            </Col>
            <Col sm={6} className="bloglist_right">
              <h1>
                Welcome to the <span className="blogtitle">Blogs</span> world...{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                eius exercitationem atque soluta laudantium, commodi vero
                laborum aut inventore praesentium in nam nostrum excepturi quo
                vel iste cumque saepe accusantium!
              </p>
            </Col>
          </Row>

          <div className="search_section" style={{ textAlign: "center" }}>
            <input
              type="text"
              placeholder="search here..."
              className="search_field"
            />
            <button className="serach_button">Search </button>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            expedita illo natus quos. Nisi corporis quaerat placeat sunt quae
            perferendis recusandae nostrum molestias quis ipsum, eaque deleniti
            eos id voluptas.
          </p>

          {/* {blogs.map((bg) => {
            console.log("1");
            <h2>{bg.blog_title}</h2>;
          })} */}

          <div className="list_section">
            <Row>
              {blogs ? (
                <>
                  {blogs.map((bg, i) => {
                    return (
                      <>
                        <Col
                          lg={3}
                          sm={5}
                          md={5}
                          className="list_item"
                          onClick={(e) => navigate(`/blog/${bg._id}`)}
                        >
                          <img src="../../../Image/blog_page.svg" alt="" />
                          <h4>{bg.blog_title}</h4>
                          <p>{bg.intro}</p>
                          <div className="footer_card">
                            {bg.posting_time}
                            <span>
                              <i class="fa-solid fa-thumbs-up"></i> 200{" "}
                            </span>{" "}
                            <span>
                              <i class="fa-solid fa-thumbs-down"></i> 11
                            </span>{" "}
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </>
              ) : (
                <h2>blogs are not here</h2>
              )}
              ;
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Bloglists;
