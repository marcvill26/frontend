import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const validate = (values) => {
    const patrom = "/^[A-Z0-9._%+-]+";
    const errors = {};
    //se valida el email
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    //se value el password
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 character or more";
    } else if (!patrom) {
      errors.password = "Debe tener letras alguna mayuscula y algun numero";
    }
    if (!values.repassword) {
      errors.repassword = "Required";
    } else if (values.repassword !== values.password) {
      errors.repassword = "Password dosen't match";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(10, "Must be 10 characters or more")
        .required("Required"),
      repassword: Yup.string()
        .max(10, "Must be 10 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit} className="login__form">
        <h1>register</h1>
        <label htmlFor="email">email</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          id="email"
          placeholder="Email"
          name="email"
          className="login__inputs"
        ></input>
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password">password</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          id="password"
          name="password"
          placeholder="password"
          type="password"
          className="login__inputs"
        ></input>
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}

        <label htmlFor="repassword">confirm password</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repassword}
          id="repassword"
          name="repassword"
          type="password"
          placeholder="confirm password"
          className="login__inputs"
        ></input>

        {formik.touched.repassword && formik.errors.repassword ? (
          <div className="error">{formik.errors.repassword}</div>
        ) : null}
        <button type="submit" className="login__button">
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
