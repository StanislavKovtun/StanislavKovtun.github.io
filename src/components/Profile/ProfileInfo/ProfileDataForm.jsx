import React from "react";
import { ErrorMessageWrapper } from "../../FormValidation/validators";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import Style from "./ProfileInfo.module.css";
import StyleVal from "../../FormValidation/FormsControls.module.css";

const validationSchema = Yup.object().shape({

    fullName: Yup.string()
        .min(2, "Must be longer than 2 characters !")
        .max(25, "Must be shorter than 5 characters !")
        .required("Required !"),

    lookingForAJobDescription: Yup.string()
        .min(2, "Must be longer than 2 characters !")
        .max(50, "Must be shorter than 5 characters !")
        .required("Required !"),

    aboutMe: Yup.string()
        .min(2, "Must be longer than 2 characters !")
        .max(50, "Must be shorter than 5 characters !")
        .required("Required !"),

});

let contactsJsx = (name) => {
    return (
        <div key={name} className={Style.contact}>
            <div className={Style.contactItem}>
                <b className={Style.contactItemName}>{name}:</b>
                <Field
                    name={`contacts.${name}`}
                    type={'text'}
                    id={name}
                    placeholder={name}
                />
            </div>
        </div>);
}

const ProfileDataForm = (props) => {

    let { profile, handleSubmit, goToViewMode } = props;

    let objectFromApiCopy = JSON.parse(JSON.stringify(profile));

    const arrayWithNames = Object.keys(profile.contacts);

    arrayWithNames.forEach((item) => {
        let value = objectFromApiCopy.contacts[item];
        if (value === null) {
            objectFromApiCopy.contacts[item] = '';
        }
    })

    return (
        <div>

            <Formik
                initialValues={objectFromApiCopy}
                validationSchema={validationSchema}
                onSubmit={(values, bagWithMethods) => {
                    let { setStatus, setSubmitting } = bagWithMethods;
                    handleSubmit(values, setStatus, setSubmitting, goToViewMode);
                }}
            >
                {(propsF) => {

                    let { status, isSubmitting } = propsF;

                    return (
                        <Form>
                            <div>
                                <b>Full name: </b>
                                <Field
                                    name={'fullName'}
                                    type={'text'}
                                    placeholder={'Full name'}
                                />
                            </div>
                            <ErrorMessage name="fullName">
                                {ErrorMessageWrapper}
                            </ErrorMessage>

                            <div>
                                <Field
                                    name={'lookingForAJob'}
                                    type={'checkbox'}
                                    id='lookingForAJob' />
                                <label htmlFor={'lookingForAJob'}>
                                    <b> Looking for a job</b> </label>
                            </div>

                            <div>
                                <b>Looking for a job description:</b>
                                <div>
                                    <Field
                                        name={'lookingForAJobDescription'}
                                        as={'textarea'}
                                        placeholder={'My professional skills'}
                                    />
                                </div>
                            </div>
                            <ErrorMessage name="lookingForAJobDescription">
                                {ErrorMessageWrapper}
                            </ErrorMessage>

                            <div>
                                <b>About me: </b>
                                <div>
                                    <Field
                                        name={'aboutMe'}
                                        as={'textarea'}
                                        placeholder={'About me'}
                                    />
                                </div>
                            </div>
                            <ErrorMessage name="aboutMe">
                                {ErrorMessageWrapper}
                            </ErrorMessage>

                            <div>
                                <b>Contacts</b>:
                            </div>

                            <FieldArray
                                //name="friends"
                                name="contacts"
                                render={() => (
                                    <div>
                                        {arrayWithNames.map(name => contactsJsx(name))}
                                    </div>
                                )}
                            />

                            {status &&
                                <div className={StyleVal.validationErrorMessage}>
                                    <b> ..{status} - with setStatus </b>
                                </div>}

                            <button type={'submit'}
                                disabled={isSubmitting}
                            >{isSubmitting ? "Please wait..." : "Save"}
                            </button>

                            <button onClick={goToViewMode}
                                type={'button'}
                                className={Style.buttonCancel}> Cancel
                            </button>

                        </Form>
                    )
                }}
            </Formik>

        </div>)
}

export default ProfileDataForm;
