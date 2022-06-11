
import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItems/DialogsItem';
import Message from './Messages/Messages';
// import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messagesElements = state.messages.map((m) => <Message key={m.id} message={m.message} id={m.id} />);
    let newMessageElement = React.createRef();

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    let addMessage = () => {
        debugger;
        let text = newMessageElement.current.value;
    };

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}
                    <div>
                        <div>
                            <textarea value={newMessageBody}
                                onChange={onNewMessageChange}
                                placeholder='Enter your message...'></textarea>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;