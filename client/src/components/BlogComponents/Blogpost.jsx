import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Blogform.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../store/actions/blogactions";
import { useState } from "react";

const Blogpost = () => {
  // const [blog, setBlog] = useState("");
  // const auth = useSelector((state) => state.auth);
  // const classes = useStyles();
  const blogs = useSelector((state) => state.blogs);
  const navigate = useNavigate();
  let { blog_id } = useParams();
  const dispatch = useDispatch();
  const [blog, setBlog] = useState({
    intro: "",
    blog_title: "",
    posting_time: "",
  });
  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  // console.log(blog_id);
  // if (!auth._id) return <Redirect to="/signin" />;
  return (
    <div className="blog_post_section">
      <Container>
        {blogs ? (
          blogs.map((bg, _id) => {
            if (bg._id === blog_id) {
              return (
                <>
                  <h1>{bg.blog_title}</h1>
                  <img
                    className="post_image"
                    src="../../../Image/about.jpg"
                    alt=""
                  />
                  <div className="blog_user_detail">
                    <img
                      className="user_image"
                      src="../../../Image/user.jpg"
                      alt=""
                    />
                    <div className="user_section">
                      <p>{bg.author}</p>
                      <p>{bg.posting_time}</p>
                    </div>
                  </div>
                  <p>{bg.intro}</p>
                  <h2>{bg.subheading_1}</h2>
                  <p>{bg.description_1}</p>
                  {bg.subheading_2 && <h2>{bg.subheading_2} </h2>}
                  {bg.description_2 && <p>{bg.description_2} </p>}
                  <h2>Conclusion</h2>
                  <p>{bg.conclusion}</p>
                </>
              );
            }
          })
        ) : (
          <h2>OOPS ! </h2>
        )}
      </Container>
    </div>
  );
};

export default Blogpost;
