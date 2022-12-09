import { toast } from "react-toastify";

const blogReducer = (blogs = [], action) => {
    switch (action.type) {
        case "GET_BLOGS":
            return action.blogs.data;
        case "ADD_BLOG":
            toast.success("A todo was added...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return [action.blog.data, ...blogs];
        case "GET_BLOG_BY_ID":
            blogs.map(blog => {
                if (blog._id === action.blog.data._id) {
                    return action.blog.data;
                } else {
                    return blog;
                }
            });
        // case "UPDATE_TODO":
        //     toast.success("A todo was updated...", {
        //         position: toast.POSITION.BOTTOM_RIGHT,
        //     });
        //     return blogs.map((todo) =>
        //         todo._id === action.todo.data._id ? action.todo.data : todo
        //     );
        // case "CHECK_TODO":
        //     toast.success("A todo status was changed...", {
        //         position: toast.POSITION.BOTTOM_RIGHT,
        //     });
        //     return blogs.map((todo) =>
        //         todo._id === action.todo.data._id ? action.todo.data : todo
        //     );
        // case "DELETE_TODO":
        //     toast.success("A todo was deleted...", {
        //         position: toast.POSITION.BOTTOM_RIGHT,
        //     });
        //     return blogs.filter((todo) => todo._id !== action.id);
        case "CLEAR_blogs":
            return [];
        default:
            return blogs;
    }
};

export default blogReducer;