import { useDispatch } from "react-redux";
import { UserModel } from "../Model/user.model";
import { setChatUser } from "../Redux/userSlice";

function ChatUserCard({ user }: { user: UserModel }) {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-row items-center justify-between cursor-pointer" onClick={() => dispatch(setChatUser(user))}>
            <div className="flex flex-row items-center">
                <img src={user.profilepicture} alt='user' className="h-8 w-8 rounded-full" />
                <div className="pl-2 text-base">{user.name}</div>
            </div>
            {(user.id % 2 === 0) ?
                <div className="h-2.5 w-2.5 bg-green-500 rounded-full"></div>
                : <div className="h-2.5 w-2.5 bg-gray-500 rounded-full"></div>}
        </div>
    )
}

export default ChatUserCard;