import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import authOpetations from "../redux/auth/authOpetations";

const RegisterPage = ({registration}) => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          registration(values);
          // login(values);
          resetForm({});
        }}
      >
        <Form className="form">
          <Field type="text" name="name" />
          <Field type="email" name="email" />
          <Field type="password" name="password" />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
};

const mapDispatchToProps = {
  registration: authOpetations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);