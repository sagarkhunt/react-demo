import AxiosRequest from "../../AxiosRequest";
// import { toast } from "react-toastify";
import { authSetState } from "./auth.slice";

export const login = (values, setSubmitting, navigate) => async (dispatch) => {
  try {
    const { data } = await AxiosRequest.post("auth/login", values);
    dispatch(authSetState([{ key: "authToken", value: data.data.token }]));
    localStorage.setItem("authToken", data.data.token);
    navigate("/");
  } catch (error) {
    console.log(error);
    //   toast.error(error.response.data.message);
    setSubmitting(false);
  }
};
