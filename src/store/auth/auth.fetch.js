import AxiosRequest from "../../AxiosRequest";
// import { toast } from "react-toastify";
import { authSetState } from "./auth.slice";

export const login = (values, setSubmitting, navigate) => async (dispatch) => {
  try {
    const { data } = await AxiosRequest.post("auth/login", values);
    dispatch(
      authSetState([
        { key: "authToken", value: data.token },
        { key: "user", value: data },
      ]),
    );

    localStorage.setItem("authToken", data.token);
    navigate("/");
  } catch (error) {
    console.log(error);
    //   toast.error(error.response.data.message);
    setSubmitting(false);
  }
};
