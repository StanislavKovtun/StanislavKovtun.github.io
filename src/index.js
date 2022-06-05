import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Good morning!', likesCount: 12},
  {id: 2, message: 'How are you?', likesCount: 20},
  {id: 3, message: "I'm fine, and you?", likesCount: 6}
];

// let postsElements = posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>);

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

// let dialogsElements = dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id} />);
// let messagesElements = messages.map((m) => <Message key={m.id} message={m.message} id={m.id}/>);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
