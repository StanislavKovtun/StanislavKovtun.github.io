
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Good morning!', likesCount: 12 },
                { id: 2, message: 'How are you?', likesCount: 20 },
                { id: 3, message: "I'm fine, and you?", likesCount: 6 }
            ],
            newPostText: 'new text for new post'
        },

        dialogsPage: {
            
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
        },

        sidebar: {

        }
    },
    _callSubscriber() {
        // console.log('state was changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;//наблюдатель
    },
    getState() {
        return this._state;
    },

    addPost() {
        // debugger;
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 12
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
};

window.store = store;
export default store;