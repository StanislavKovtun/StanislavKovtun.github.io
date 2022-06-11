const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
            
    dialogs: [
        { id: 1, name: 'Stas' },
        { id: 2, name: 'Lilya' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Vika' },
        { id: 5, name: 'Vitalik' }
    ],

    messages: [
        { id: 1, message: 'Good morning!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: "I'm fine, and you?" }
    ],

    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch(action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            stateCopy = {
                ...state, 
                newMessageBody: action.body
            };
            return stateCopy;
        case 'SEND-MESSAGE':
            let newBody = state.newMessageBody;
            stateCopy = {
                ...state, 
                newMessageBody: '',
                //копируем массив messages + добавляем еще один элемент с текстом newBody
                messages: [...state.messages, {id: 6, message: newBody}] 
            };
            return stateCopy;
        default:
            return state;
        }
}

export default dialogsReducer;

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body})