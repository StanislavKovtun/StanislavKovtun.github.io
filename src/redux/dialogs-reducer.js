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
    switch(action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MESSAGE':
            let newBody = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: newBody});
            return state;
        default:
            return state;
        }
}

export default dialogsReducer;

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body})