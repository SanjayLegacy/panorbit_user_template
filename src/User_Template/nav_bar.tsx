import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Popover } from "react-tiny-popover";
import { UserModel } from "../Model/user.model";
import { setLoggedInUser } from "../Redux/userSlice";
import UserCard from "./user_card";

function NavBar({ title }: { title: string }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

    const loggedInUser: UserModel = useSelector((state: any) => state.user.loggedInUser);
    const allUsers: UserModel[] = useSelector((state: any) => state.user.userData);

    const displayUsers = allUsers.filter(user => {
        return user.id !== loggedInUser.id;
    });

    return (
        <div className="flex flex-row justify-between p-6">
            <h1 className="text-3xl font-semibold text-gray-600">
                {title}
            </h1>
            <Popover
                onClickOutside={() => setIsPopoverOpen(!isPopoverOpen)}
                isOpen={isPopoverOpen}
                positions={['bottom']}
                content={<div className="flex flex-col p-5 bg-white w-96 mr-20 rounded-3xl shadow-2xl">
                    <img src={loggedInUser.profilepicture} alt='user' className="h-28 w-28 rounded-full bg-red-400 self-center" />
                    <div className="p-1 text-xl font-medium text-gray-600 self-center">{loggedInUser.name}</div>
                    <div className="p-1 text-xl font-medium text-gray-400 self-center">{loggedInUser.email}</div>
                    <div className="p-4">
                        <div className="border-b-2" />
                    </div>
                    <div className="w-full h-48 overflow-y-auto no-scrollbar p-4 self-center">
                        {displayUsers?.map((user: UserModel, index: number) => (
                            <div key={index} className='justify-center w-full flex flex-col self-center' onClick={() => dispatch(setLoggedInUser(user))}>
                                <div className="align-middle">
                                    <UserCard user={user} />
                                </div>
                                <div className="p-2">
                                    <div className="border-b-2" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="bg-red-500 self-center p-2 px-4 text-white font-semibold text-xl rounded-3xl" onClick={() => navigate('/')}>Sign out</button>
                </div>}
            >
                <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                    <UserCard user={loggedInUser} />
                </div>
            </Popover>
        </div>
    );
}

export default NavBar;