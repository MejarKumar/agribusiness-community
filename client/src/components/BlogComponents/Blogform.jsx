import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Blogform.css";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { addBlog } from "../../store/actions/blogactions";
import { useDispatch } from "react-redux";

export default function Blogform() {
  const dispatch = useDispatch();
  const [blog, setBlog] = useState({
    blog_title: "",
    blog_tags: "",
    intro: "",
    subheading_1: "",
    subheading_2: "",
    description_1: "",
    description_2: "",
    conclusion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlog(blog));
    // setBlog({
    //   blog_title: "",
    //   blog_tags: "",
    //   intro: "",
    //   subheading_1: "",
    //   subheading_2: "",
    //   description_1: "",
    //   description_2: "",
    //   conclusion: "",
    // });
    console.log(blog);
  };

  return (
    <>
      <div className="blogform_section">
        <Container>
          <Row>
            <Col lg={5}>
              <h2 className="blogform_heading">Write Blog</h2>
              <p
                style={{
                  textAlign: "justify",
                  padding: "1rem",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt eveniet eos, facilis veniam sequi numquam sint sunt,
                natus temporibus impedit reprehenderit et expedita porro facere
                assumenda odit quod corporis? Ipsam!
              </p>
              <Container style={{ minHeight: "100hv" }} className="login_form">
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Title of Blog </Form.Label>
                    <Form.Control
                      type="text"
                      name="blog_title"
                      value={blog.blog_title}
                      onChange={(e) =>
                        setBlog({ ...blog, blog_title: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Introduction</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="intro"
                      value={blog.intro}
                      onChange={(e) =>
                        setBlog({ ...blog, intro: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>SubHeading 1</Form.Label>
                    <Form.Control
                      type="text"
                      name="subheading_1"
                      value={blog.subheading_1}
                      onChange={(e) =>
                        setBlog({ ...blog, subheading_1: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description for subheading 1</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description_1"
                      value={blog.description_1}
                      onChange={(e) =>
                        setBlog({ ...blog, description_1: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>SubHeading 2</Form.Label>
                    <Form.Control
                      type="text"
                      name="subheading_2"
                      value={blog.subheading_2}
                      onChange={(e) =>
                        setBlog({ ...blog, subheading_2: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description for subheading 2</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description_2"
                      value={blog.description_2}
                      onChange={(e) =>
                        setBlog({ ...blog, description_2: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Conclusion </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="conclusion"
                      value={blog.conclusion}
                      onChange={(e) =>
                        setBlog({ ...blog, conclusion: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Button type="submit" variant="success">
                    Post
                  </Button>{" "}
                </Form>
              </Container>
            </Col>
            <Col lg={7} className="right_section">
              <img
                src="https://api.backlinko.com/app/uploads/2019/12/the-classic-list-post-914x1536.webp"
                alt=""
              />
            </Col>
          </Row>
        </Container>{" "}
      </div>
    </>
  );
}
