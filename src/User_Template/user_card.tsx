import { UserModel } from "../Model/user.model";

function UserCard({ user }: { user: UserModel }) {
    return (
        <div className="flex flex-row items-center pb-5 cursor-pointer">
            <img src={user.profilepicture} alt='user' className="h-10 w-10 rounded-full" />
            <div className="pl-4 text-2xl text-gray-700">{user.name}</div>
        </div>
    )
}

export default UserCard;