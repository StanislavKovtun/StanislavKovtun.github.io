import * as Yup from "yup";

const messageFormSchema = Yup.object().shape({

    newMessageBody: Yup.string()
        //минимальная длина - 2 символа
        .min(2, "Must be longer than 1 character")
        //максимальная длина - 50 символов
        .max(50, "Nice try, nobody can write that long text!")
        .required("Required")
});

export default messageFormSchema;
