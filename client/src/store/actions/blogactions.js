import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getBlogs = () => {
    return (dispatch) => {
        axios
            .get("https://agribusiness-community-5dma.vercel.app/api/blogs", setHeaders())
            .then((blogs) => {
                dispatch({
                    type: "GET_BLOGS",
                    blogs,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};


export const getBlogById = (id) => {
    return (dispatch) => {
        axios
            .get("https://agribusiness-community-5dma.vercel.app/api/blog/:id", setHeaders())
            .then((Blogs) => {
                dispatch({
                    type: "GET_BLOG_BY_ID",
                    Blogs,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
}


export const addBlog = (newBlog) => {
    return (dispatch, getState) => {
        const author = getState().auth.username;
        const uid = getState().auth._id;
        axios
            .post("https://agribusiness-community-5dma.vercel.app/api/writeblog", { ...newBlog, author, uid }, setHeaders())
            .then((Blogs) => {
                dispatch({
                    type: "ADD_BLOG",
                    Blogs,
                });
                console.log(Blogs)
            })
            .catch((error) => {
                console.log(error.response);
                alert(error.response);
                // toast.error(error.response?.data, {
                //     position: toast.POSITION.BOTTOM_RIGHT,
                // });
            });
    };
};

// export const updateBlog = (updatedTodo, id) => {
//     return (dispatch) => {
//         axios
//             .put(`${url}/Blogs/${id}`, updatedBlog, setHeaders())
//             .then((blog) => {
//                 dispatch({
//                     type: "UPDATE_BLOG",
//                     blog,
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//                 toast.error(error.response?.data, {
//                     position: toast.POSITION.BOTTOM_RIGHT,
//                 });
//             });
//     };
// };

// export const deleteblog = (id) => {
//     return (dispatch) => {
//         axios
//             .delete(`${url}/Blogs/${id}`, setHeaders())
//             .then(() => {
//                 dispatch({
//                     type: "DELETE_BLOG",
//                     id,
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//                 toast.error(error.response?.data, {
//                     position: toast.POSITION.BOTTOM_RIGHT,
//                 });
//             });
//     };
// };

// export const checkBlog = (id) => {
//     return (dispatch) => {
//         axios
//             .patch(`${url}/Blogs/${id}`, {}, setHeaders())
//             .then((blog) => {
//                 dispatch({
//                     type: "CHECK_BLOG",
//                     blog,
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//                 toast.error(error.response?.data, {
//                     position: toast.POSITION.BOTTOM_RIGHT,
//                 });
//             });
//     };
// };