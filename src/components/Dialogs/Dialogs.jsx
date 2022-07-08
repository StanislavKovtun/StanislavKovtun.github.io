
import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItems/DialogsItem';
import Message from './Messages/Messages';
// import { Navigate } from 'react-router-dom';
import AddMessageForm from './AddMessageForm';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messagesElements = state.messages.map((m) => <Message key={m.id} message={m.message} id={m.id} />);
    
    // let newMessageElement = React.createRef();
    // let newMessageBody = state.newMessageBody;

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}
                    <div>
                        <AddMessageForm sendMessage={props.sendMessage} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;