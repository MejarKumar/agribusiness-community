const axios = require("axios");
const { url } = require("../../api/index");

export const signUp = (user) => {

    const notifying = (ee) => {
        alert(ee);
    }


    return (dispatch) => {

        axios.post("https://agribusiness-community-5dma.vercel.app/api/signup", user).then(token => {
            localStorage.setItem("token", token.data);

            dispatch({
                type: "SIGN_UP",
                token: token.data
            });
        }).catch(error => {
            //print the toast      
            console.log(error.response);
            // alert("hello")
            notifying(error.response.data);

        })


    };
};


export const signIn = (email, password) => {
    return (dispatch) => {
        axios.post("https://agribusiness-community-5dma.vercel.app/api/login", { email, password }).then(token => {
            localStorage.setItem("token", token.data);
            dispatch({
                type: 'SIGN_IN',
                token: token.data
            });
        }).catch(error => {
            console.log(error.response);
            //print the toast
        })
    }
}
export const signOut = () => {
    return (dispatch) => {
        // dispatch({
        //     type: "CLEAR_TODOS",
        // });

        dispatch({
            type: "SIGN_OUT",
        });

    };
};

export const loadUser = () => {
    return (dispatch, getState) => {
        const token = getState().auth.token;
        if (token) {
            dispatch({
                type: "USER_LOADED",
                token,
            });
        } else return null;
    };
};