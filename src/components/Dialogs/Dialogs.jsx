
import React from 'react';
import s from './Dialogs.module.css'
// import { NavLink } from "react-router-dom";
import DialogItem from './DialogItems/DialogsItem';
import Message from './Messages/Messages';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map((m) => <Message key={m.id} message={m.message} id={m.id} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

            <div>
                <textarea ref={newMessageElement} name="" id="" cols="40" rows="5"></textarea>
            </div>

            <div>
                <button onClick={addMessage}>Add</button>
            </div>

        </div>
    )
}

export default Dialogs;