'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import WarningPage from './WarningPage';
import IdentityPage from './IdentityPage';

// import P

interface Post {
    id: number;
    username: string;
    imageUrl: string;
    likes: string;
    comments: Array<{ username: string; text: string; isWarning?: boolean }>;
}

interface Message {
    id: number;
    username: string;
    preview: string;
    time: string;
    unread: boolean;
    messages: Array<{ text: string; time: string; isSent: boolean }>;
}

const conversations: Message[] = [
    {
        id: 1,
        username: 'anonymous.5842',
        preview: 'Je sais où tu habites...',
        time: 'À l\'instant',
        unread: true,
        messages: [
            {text: 'Je sais où tu habites...', time: '14:32', isSent: false},
            {text: 'Tu crois vraiment que tu peux m\'échapper ?', time: '14:33', isSent: false},
            {text: 'Je vois tout ce que tu fais', time: '14:34', isSent: false},
        ]
    },
    {
        id: 2,
        username: 'user_7364',
        preview: 'Je sais où tu habites...',
        time: 'Il y a 2 min',
        unread: true,
        messages: [
            {text: 'Je sais où tu habites...', time: '14:30', isSent: false},
        ]
    },
    {
        id: 3,
        username: 'unknown_9281',
        preview: 'Je sais où tu habites...',
        time: 'Il y a 5 min',
        unread: true,
        messages: [
            {text: 'Je sais où tu habites...', time: '14:27', isSent: false},
        ]
    },
    {
        id: 4,
        username: 'anon_4527',
        preview: 'Je sais où tu habites...',
        time: 'Il y a 8 min',
        unread: true,
        messages: [
            {text: 'Je sais où tu habites...', time: '14:24', isSent: false},
        ]
    },
    {
        id: 5,
        username: 'ghost_1834',
        preview: 'Je sais où tu habites...',
        time: 'Il y a 10 min',
        unread: true,
        messages: [
            {text: 'Je sais où tu habites...', time: '14:22', isSent: false},
        ]
    },
    {
        id: 6,
        username: 'shadow_6429',
        preview: 'Je sais où tu habites...',
        time: 'Il y a 15 min',
        unread: true,
        messages: [
            {text: 'Je sais où tu habites...', time: '14:17', isSent: false},
        ]
    },
];

const posts: Post[] = [
    {
        id: 1,
        username: 'emily.rose',
        imageUrl: '/ressources/25-decembre-2025.png',
        likes: '3,842 likes',
        comments: [
            {username: 'zoey.dev', text: 'EMILY 😳😳 tu brilles là !!'},
            {username: 'ken.photo', text: 'On dirait un film 🔥🔥🔥'},
            {username: 'mila.art', text: 'Mais W T F c\'est trop beau 😭💗'},
            {username: 'emily.rose', text: 'stopppp vous êtes adorables 😭💞'},
            {username: 'anonymous.5842', text: 'Attention, fr...'},
        ]
    },
    {
        id: 2,
        username: 'emily.rose',
        imageUrl: '/ressources/13-octobre-2024.png',
        likes: '1,932 likes',
        comments: [
            {username: 'alex', text: 'Comment même ta TABLE est esthétique ??? 😭'},
            {username: 'zoey.dev', text: 'Je refuse de croire que c\'est juste une table 😭'},
            {username: 'emily.rose', text: 'LMAO arrêtez 💀💀💀'},
        ]
    },
    {
        id: 3,
        username: 'emily.rose',
        imageUrl: '/ressources/15-juin-2024.png',
        likes: '5,104 likes',
        comments: [
            {username: 'mila.art', text: 'ZOEYYY arrête d\'être trop ICONIQUE 😭🔥'},
            {username: 'ken.photo', text: 'Je hurle c\'est trop propre 🤯'},
            // { username: 'emily.rose', text: 'ok queen 👑✨' },
        ]
    },
    {
        id: 4,
        username: 'emily.rose',
        imageUrl: '/ressources/22-septembre-2024.png',
        likes: '2,847 likes',
        comments: [
            {username: 'zoey.dev', text: 'KENNNN c\'est trop stylé ça 🔥🔥🔥'},
            // { username: 'emily.rose', text: 'Bro calme-toi tu vas casser Insta 💀' },
            {username: 'alex', text: 'Ça tape, vraiment 😳'},
            {username: 'anonymous.5842', text: 'Si j\'étais toi, je m\'afficherais pas sur les réseaux'},
        ]
    },
];

export default function InstagramApp() {
    const [currentPage, setCurrentPage] = useState<'feed' | 'messages' | 'conversation' | 'warning' | 'identity'>('feed');
    const [selectedConversation, setSelectedConversation] = useState<Message | null>(null);

    const handleWarningClick = (username: string) => {
        if (username === 'anonymous.5842') {
            setCurrentPage('warning');
        }
    };

    const handleCorrectAnswer = () => {
        setCurrentPage('identity');
    };

    if (currentPage === 'warning') {
        return <WarningPage onCorrectAnswer={handleCorrectAnswer}/>;
    }

    if (currentPage === 'identity') {
        return <IdentityPage/>;
    }

    return (
        <div className="h-full bg-gradient-to-b from-purple-400 to-pink-400 overflow-auto">
            {/* Instagram Header */}
            <div className="bg-white border-b px-4 py-3 sticky top-0 z-10 shadow-sm">
                <div className="flex items-center justify-between max-w-xl mx-auto">
                    <h1 className="text-2xl font-bold" style={{fontFamily: 'cursive', color: '#262626'}}>
                        Instagrom
                    </h1>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                        </button>
                        <button
                            className="p-2 hover:bg-gray-100 rounded-full relative"
                            onClick={() => setCurrentPage('messages')}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                            </svg>
                            {/* Notification badge */}
                            <span
                                className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                {conversations.length}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Messages View */}
            {currentPage === 'messages' && (
                <div className="h-full bg-white">
                    {/* Messages Header */}
                    <div className="border-b px-4 py-3 flex items-center">
                        <button onClick={() => setCurrentPage('feed')} className="mr-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        <h2 className="text-xl font-semibold">Messages</h2>
                    </div>

                    {/* Conversations List */}
                    <div className="divide-y">
                        {conversations.map((conversation) => (
                            <button
                                key={conversation.id}
                                onClick={() => {
                                    setSelectedConversation(conversation);
                                    setCurrentPage('conversation');
                                }}
                                className="w-full flex items-center p-4 hover:bg-gray-50 transition-colors"
                            >
                                <div className="w-14 h-14 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                                <div className="flex-1 text-left overflow-hidden">
                                    <div className="flex justify-between items-start mb-1">
                                        <span
                                            className={`font-semibold text-sm ${conversation.unread ? 'text-black' : 'text-gray-600'}`}>
                                            {conversation.username}
                                        </span>
                                        <span className="text-xs text-gray-500">{conversation.time}</span>
                                    </div>
                                    <p className={`text-sm truncate ${conversation.unread ? 'font-semibold text-black' : 'text-gray-600'}`}>
                                        {conversation.preview}
                                    </p>
                                </div>
                                {conversation.unread && (
                                    <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Conversation View */}
            {currentPage === 'conversation' && selectedConversation && (
                <div className="h-full bg-white flex flex-col">
                    {/* Conversation Header */}
                    <div className="border-b px-4 py-3 flex items-center">
                        <button onClick={() => setCurrentPage('messages')} className="mr-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                        <h2 className="text-lg font-semibold">{selectedConversation.username}</h2>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-auto p-4 space-y-4">
                        {selectedConversation.messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.isSent ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                                    msg.isSent
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-black'
                                }`}>
                                    <p className="text-sm">{msg.text}</p>
                                    <p className={`text-xs mt-1 ${msg.isSent ? 'text-blue-100' : 'text-gray-500'}`}>
                                        {msg.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="border-t px-4 py-3 flex items-center">
                        <input
                            type="text"
                            placeholder="Envoyer un message..."
                            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled
                        />
                        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full disabled:opacity-50"
                                disabled>
                            Envoyer
                        </button>
                    </div>
                </div>
            )}

            {/* Feed */}
            {currentPage === 'feed' && (
                <div className="py-5">
                    <div className="max-w-xl mx-auto space-y-6">
                        {posts.map((post) => (
                            <div key={post.id} className="bg-white rounded-md shadow-md overflow-hidden">
                                {/* Post Header */}
                                <div className="flex items-center p-3">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 overflow-hidden">
                                        <Image width={100} height={100}
                                               className={"h-full w-full object-cover"}
                                               src={"/ressources/15-juin-2024.png"} alt={""}/>
                                    </div>
                                    <span className="font-semibold text-sm">{post.username}</span>
                                </div>

                                {/* Post Image */}
                                <div className="relative w-full" style={{height: '300px'}}>
                                    <Image
                                        src={post.imageUrl}
                                        alt={`Post by ${post.username}`}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>

                                {/* Post Actions */}
                                <div className="p-3 text-2xl flex items-center space-x-4">
                                    <span className="cursor-pointer hover:opacity-70">❤️</span>
                                    <span className="cursor-pointer hover:opacity-70">💬</span>
                                    <span className="cursor-pointer hover:opacity-70">➤</span>
                                </div>

                                {/* Post Info */}
                                <div className="px-3 pb-3">
                                    <div className="font-semibold text-sm mb-2">{post.likes}</div>
                                    <div className="space-y-1">
                                        {post.comments.map((comment, idx) => (
                                            <div key={idx} className="text-sm">
                                                <button
                                                    onClick={() => handleWarningClick(comment.username)}
                                                    className={`font-semibold mr-2 ${
                                                        comment.isWarning
                                                            ? 'text-red-600 hover:underline cursor-pointer'
                                                            : 'text-black'
                                                    }`}
                                                >
                                                    {comment.username}
                                                </button>
                                                <span className={comment.isWarning ? 'text-red-600' : 'text-gray-800'}>
                                                {comment.text}
                                            </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

