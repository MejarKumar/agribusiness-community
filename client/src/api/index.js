export const api = "http://localhost:5000/api";

export const setHeaders = () => {
    const headers = {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    };

    return headers;
};