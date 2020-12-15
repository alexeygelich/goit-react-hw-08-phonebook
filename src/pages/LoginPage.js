import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import authOpetations from "../redux/auth/authOpetations";

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
          <Field type="email" name="email" />
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
