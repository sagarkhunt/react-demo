import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authSetState } from "../store/auth/auth.slice";
import { useDispatch } from "react-redux";

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.clear();
    dispatch(
      authSetState([
        { key: "authToken", value: null },
        { key: "user", value: null },
      ]),
    );
  }, [navigate, dispatch]);
  return <Fragment />;
};

export default LogOut;
