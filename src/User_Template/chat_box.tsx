import { useState } from "react";
import ChatUserCard from "./chat_user_card";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { RiSendPlane2Fill } from "react-icons/ri";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useSelector } from "react-redux";
import { UserModel } from "../Model/user.model";

function ChatBox() {
    const [chatToggle, setChatToggle] = useState(false);
    const [chatUserToggle, setChatUserToggle] = useState(false);
    const [closeChat, setCloseChat] = useState(false);

    const allUsers: UserModel[] = useSelector((state: any) => state.user.userData);
    const loggedInUser: UserModel = useSelector((state: any) => state.user.loggedInUser);
    const chatUser: UserModel = useSelector((state: any) => state.user.chatUser);

    const displayUsers = allUsers.filter(user => {
        return user.id !== loggedInUser.id;
    });

    return (
        <>
            {/* Parent ChatBox */}
            {chatToggle ?
                <div className="absolute bottom-0 right-16 h-96 w-1/6 rounded-t-2xl">
                    <div className="flex flex-col h-full w-full rounded-t-2xl bg-blue-600">
                        <div className="flex flex-row w-full h-1/5 justify-between items-center pl-4 pr-4 rounded-t-2xl bg-blue-600">
                            <div className="flex flex-row items-center">
                                <FiMessageSquare className="invert-icon w-10 h-10 text-white" />
                                <div className="text-white pl-4 font-normal text-2xl">Chats</div>
                            </div>
                            <SlArrowDown className="invert-icon w-5 h-5 text-white cursor-pointer" onClick={() => setChatToggle(!chatToggle)} />
                        </div>
                        <div className="flex flex-col w-full h-full bg-white border border-blue-600 p-3 gap-y-2 overflow-y-auto">
                            {displayUsers?.map((user: UserModel, index: number) => (
                                <div key={index} onClick={() => { setCloseChat(true); setChatUserToggle(true); }}><ChatUserCard user={user} /></div>
                            ))}
                        </div>
                    </div>
                </div>
                : <div className="absolute bottom-0 right-16 h-16 w-1/6 rounded-t-2xl bg-blue-600">
                    <div className="flex flex-row h-full w-full justify-between items-center pl-4 pr-4">
                        <div className="flex flex-row items-center">
                            <FiMessageSquare className="invert-icon w-10 h-10 text-white" />
                            <div className="text-white pl-4 font-normal text-2xl">Chats</div>
                        </div>
                        <SlArrowUp className="invert-icon w-5 h-5 text-white cursor-pointer" onClick={() => setChatToggle(!chatToggle)} />
                    </div>
                </div>}
            {/* Child ChatBox */}
            {closeChat &&
                <>
                    {chatUserToggle ?
                        <div className="absolute bottom-0 right-1/4 h-72 w-1/6 rounded-t-2xl">
                            <div className="flex flex-col h-full w-full rounded-t-2xl bg-blue-600">
                                <div className="flex flex-row w-full h-1/5 justify-between items-center pl-4 pr-4 rounded-t-2xl bg-blue-600">
                                    <div className="flex flex-row items-center">
                                        <img src={chatUser.profilepicture} alt='user' className="h-6 w-6 rounded-full" />
                                        <div className="pl-2 text-lg text-white">{chatUser.name}</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-2">
                                        <SlArrowDown className="invert-icon w-5 h-5 text-white cursor-pointer" onClick={() => setChatUserToggle(!chatUserToggle)} />
                                        <MdOutlineClose className="invert-icon w-6 h-6 text-white cursor-pointer" onClick={() => setCloseChat(false)} />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full h-full px-5 pt-2 bg-white border-x border-blue-600 gap-y-2">
                                    <div className="flex flex-wrap p-2 h-20 w-60 text-sm text-gray-600 bg-gray-100 rounded-b-lg rounded-tr-lg">
                                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                    </div>
                                    <div className="flex self-center text-sm text-gray-400 font-medium">9:16 PM</div>
                                    <div className="flex flex-wrap p-2 h-15 w-60 text-sm text-gray-600 bg-gray-100 rounded-b-lg rounded-tl-lg self-end">
                                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                    </div>
                                </div>
                                <div className="flex flex-row w-full h-1/5 bg-white border border-gray-400">
                                    <div className="w-[90%] bg-white pr-1">
                                        <input className="h-full w-full px-1" />
                                    </div>
                                    <RiSendPlane2Fill className="w-6 h-6 bg-white text-blue-600 self-center cursor-pointer" onClick={() => { }} />
                                </div>
                            </div>
                        </div>
                        : <div className="absolute bottom-0 right-1/4 h-12 w-1/6 rounded-t-2xl">
                            <div className="flex flex-row items-center h-full w-full rounded-t-2xl bg-blue-600">
                                <div className="flex flex-row w-full h-1/5 justify-between items-center pl-4 pr-4 rounded-t-2xl bg-blue-600">
                                    <div className="flex flex-row items-center">
                                        <img src={chatUser.profilepicture} alt='user' className="h-6 w-6 rounded-full" />
                                        <div className="pl-2 text-lg text-white">{chatUser.name}</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-2">
                                        <SlArrowUp className="invert-icon w-5 h-5 text-white cursor-pointer" onClick={() => setChatUserToggle(!chatUserToggle)} />
                                        <MdOutlineClose className="invert-icon w-6 h-6 text-white cursor-pointer" onClick={() => setCloseChat(false)} />
                                    </div>
                                </div>
                            </div>
                        </div>}
                </>}
        </>
    )
}

export default ChatBox;