import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import authOpetations from "../redux/auth/authOpetations";
import "./formik.css";

const LoginPage = ({ login }) => {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          login(values);
          resetForm({});
        }}
      >
        <Form className="form">
          <label>Email</label>
          <Field type="email" name="email" />
          <label>Password</label>
          <Field type="password" name="password" />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
};

const mapDispatchToProps = {
  login: authOpetations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
