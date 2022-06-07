
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
            messages: [
                { id: 1, message: 'Good morning!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: "I'm fine, and you?" }
            ],
            dialogs: [
                { id: 1, name: 'Stas' },
                { id: 2, name: 'Lilya' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Vika' },
                { id: 5, name: 'Vitalik' }
            ]
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

    dispatch(action) { //{type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 12
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

window.store = store;
export default store;