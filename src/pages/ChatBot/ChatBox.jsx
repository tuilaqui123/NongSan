import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import logo from '../../assets/logo.png';
import '../../hiddenScroll.css'

const COZE_TOKEN = "pat_sKkyqAN97kv3RuBubBe62ap1dhIih2tTsu4UtStzwV1NURnnQ2n8bZqWdsm5I3DN"

const BOT_ID = "7372015982967226376"
/*
"{
    "name":"Spoonacular-searchRecipes",
    "arguments":{"number":5,"query":"cá kho"},
    "plugin_id":7311701972032241666,
    "api_id":7311701972032323586,
    "plugin_type":1}"
*/

const ChatBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', type: 'answer', content: "Xin chào! Tôi là Fudee, Tôi có thể giúp gì cho bạn?", content_type: 'text' }
    ]);
    const [input, setInput] = useState('');
    const [isWaitting, setIsWaitting] = useState(false)

    const config = {
        headers: {
            "Authorization": `Bearer ${COZE_TOKEN}`,
            "Content-Type": "application/json",
        }
    };

    const messageContainerRef = useRef(null)
    const handleSend = async () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { role: 'user', type: 'answer', content: input, content_type: 'text' }];
        setMessages(newMessages);

        const userRequest = {
            "conversation_id": "demo-8",
            "bot_id": BOT_ID,
            "user": "demo-user",
            "query": input,
            "stream": false
        }
        setInput('');
        setIsWaitting(true)


        try {
            const response = await axios
                .post(
                    'https://api.coze.com/open_api/v2/chat',
                    userRequest,
                    config
                )

            const botResponse = response.data.messages[0]
            console.log(botResponse)
            setMessages(prevMessages => [...prevMessages, botResponse]);

        } catch (error) {
            console.error("Error sending message: ", error)
        } finally {
            setIsWaitting(false)
        }

    }

    useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages]);


    return (
        <div className="fixed z-50 right-5 bottom-5 flex flex-row items-end gap-3">
            <div className={clsx({
                "w-[400px] h-[550px] bg-gray-100 border  rounded-lg shadow-2xl overflow-hidden": isOpen,
                "hidden": !isOpen
            })}>
                <div className="w-full h-[60px] bg-[#3e3e3e] flex items-center justify-center">
                    <img
                        src={logo}
                        className="h-full py-2"
                        alt="logo"
                    />
                </div>

                <ul ref={messageContainerRef} className="w-full h-[430px] p-2 py-3 flex flex-col gap-3 overflow-y-auto scrollable-div">
                    {messages.map((msg, index) => (
                        <li key={index} className={`flex ${msg.role === 'assistant' ? 'flex-row items-end gap-2' : 'items-end justify-end'}`}>
                            {msg.role === 'assistant' && (
                                <div className="w-9 h-9 bg-[#3e3e3e] flex items-center justify-center rounded-md">
                                    <i className="fa-solid fa-robot text-[#7dc642]"></i>
                                </div>
                            )}
                            <div className={`w-[80%] h-auto p-2 overflow-hidden px-3 rounded-md ${msg.role === 'assistant' ? 'bg-gray-300' : 'bg-[#7dc642]'}`}>
                                <p className='whitespace-pre-wrap break-words'>{msg.content}</p>
                            </div>
                        </li>
                    ))}
                    {isWaitting && (
                        <li className='flex flex-row items-end gap-2'>
                            <div className="w-9 h-9 bg-[#3e3e3e] flex items-center justify-center rounded-md">
                                <i className="fa-solid fa-robot text-[#7dc642]"></i>
                            </div>
                            <div className='w-[80%] h-auto overflow-hidden p-2 px-3 rounded-md bg-gray-300'>
                                <p className='animate-pulse'>Đang suy nghĩ . . .</p>
                            </div>
                        </li>
                    )}
                </ul>

                <div className="relative w-full h-[60px] flex items-center border-t border-gray-300 bg-white">
                    <input
                        type="text"
                        placeholder="Enter a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="h-full w-full outline-none indent-2 pr-10 relative z-10"
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <i
                        className="fa-solid fa-paper-plane absolute text-xl z-20 right-3 cursor-pointer hover:text-[#7dc642] duration-150"
                        onClick={handleSend}
                    ></i>
                </div>
            </div>

            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#7dc642] cursor-pointer"
            >
                <i
                    className={clsx({
                        "fa-solid fa-comment text-xl text-white": !isOpen,
                        "fa-solid fa-xmark text-xl text-white": isOpen
                    })}
                ></i>
            </div>
        </div>
    );
};

export default ChatBox;
