import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../FormValidation/FormsControls.module.css";
import postFormSchema from "../FormValidation/MessageFormSchema";

const AddMessageForm = (props) => {
  let addNewMessage = (values) => {
    props.sendMessage(values);
  };

  return (
    <Formik
      initialValues={{ newMessageBody: "" }}
      // validate={() => ({})}

      onSubmit={(values, { resetForm }) => {
        addNewMessage(values.newMessageBody);
        resetForm({ values: "" });
      }}
      validationSchema={postFormSchema}
    >
      {() => (
        <Form>
          <div>
            <Field
              name={"newMessageBody"}
              as={"textarea"}
              placeholder={"enter text"}
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="newMessageBody"
              component="div"
            />
          </div>

          <button type={"submit"}>Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddMessageForm;
