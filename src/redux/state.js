
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Good morning!', likesCount: 12 },
            { id: 2, message: 'How are you?', likesCount: 20 },
            { id: 3, message: "I'm fine, and you?", likesCount: 6 }
        ]
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
};

export default state;