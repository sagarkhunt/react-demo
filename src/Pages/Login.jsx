import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/auth.fetch";

const validationSchema = Yup.object().shape({
  password: Yup.string().min(2, "Too Short!").required("Required"),
  username: Yup.string().required("Required"),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    enableReinitialize: false,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(login(values, setSubmitting, navigate));
    },
  });

  return (
    <Container className="mt-5 mb-5">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />

          {formik.errors.email && formik.touched.username ? (
            <Form.Text className="text-danger">
              {formik.errors.username}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password ? (
            <Form.Text className="text-danger">
              {formik.errors.password}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          {formik.isSubmitting ? "Please wait..." : "Login"}
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
