import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import styles from "../FormValidation/FormsControls.module.css";
import { connect } from "react-redux";
import { login } from "./../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>

      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        //onSubmit={(formData, { setSubmitting, setStatus }) => {//##
        onSubmit={(formData, { setStatus }) => {
          //##
          props.login(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha,
            setStatus//##
          );
          //setSubmitting(false);//##
        }}
        validationSchema={loginFormSchema}
      >
        {(
          { status } //##
        ) => (
          <Form>
            <div>
              <Field type={"text"} name={"email"} placeholder={"e-mail"} />
            </div>
            <ErrorMessage
              className={styles.errorMessage}
              name="email"
              component="div"
            />
            <div>
              <Field
                type={"password"}
                name={"password"}
                placeholder={"password"}
              />
            </div>
            <ErrorMessage
              className={styles.errorMessage}
              name="password"
              component="div"
            />
            {console.log('form capcha')}
            {/* {props.captchaUrl && <img src={props.captchaUrl} alt="captchaImg" />} */}

            {status && props.captchaUrl &&
              <div>

                <div>
                  <img src={props.captchaUrl} alt={status} />
                </div>

                <div>
                  <Field
                    name={'captcha'}
                    type={'text'} />
                </div>

              </div>

            }

            {/* //## трансляция текста ошибки из API на форму*/}
            <div>{status && <div className="message">{status}</div>}</div>

            <div>
              <Field type={"checkbox"} name={"rememberMe"} />
              <label htmlFor={"rememberMe"}> remember me </label>
            </div>
            <button type={"submit"}>Log in</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, { login })(Login);
