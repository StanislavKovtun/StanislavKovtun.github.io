
import React from 'react';
import s from './Dialogs.module.css'
// import { NavLink } from "react-router-dom";
import DialogItem from './DialogItems/DialogsItem';
import Message from './Messages/Messages';

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Stas' },
        { id: 2, name: 'Lilya' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Vika' },
        { id: 5, name: 'Vitalik' }
    ];

    let messages = [
        { id: 1, message: 'Good morning!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: "I'm fine, and you?" }
    ];

    // <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
    let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map((m) => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;