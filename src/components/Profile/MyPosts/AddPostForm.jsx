import { Formik, Form, Field, ErrorMessage } from "formik";
import postFormSchema from "./../../FormValidation/PostFormSchema";
import styles from "../../FormValidation/FormsControls.module.css";

const AddPostForm = (props) => {
  let addNewPost = (values) => {
    props.onSubmit(values);
  };

//пример, удалить##
  const validatePostText = (value) => {
    let error;
    if (value === "admin") {
      error = "Nice try!";
    }
    return error;
  };

  return (
    <Formik
      initialValues={{ newPostText: "" }}
      onSubmit={(values, { resetForm }) => {
        addNewPost(values.newPostText);
        resetForm({ values: "" });
      }}
      validationSchema={postFormSchema}
    >
      {(errors, touched) => (
        <Form>
          <div>
            <Field
              className={styles.fieldError}
              name={"newPostText"}
              as={"textarea"}
              placeholder={"enter text"}
              validate={validatePostText}
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="newPostText"
              component="div"
            />
          </div>
          {/* {errors.newPostText && <div id="feedback">{errors.newPostText}</div>} */}
          <button type={"submit"}>Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddPostForm;
