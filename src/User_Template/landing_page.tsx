import UserCard from "./user_card";
import { useNavigate } from "react-router-dom";
import backGroundImage from "./images/Waves-1.5x.png";
import { useDispatch } from "react-redux";
import { userArray, setLoggedInUser } from "../Redux/userSlice";
import { UserModel } from "../Model/user.model";
import { useGetUsersQuery } from "../Api/user.api";
import { useEffect } from "react";
import Spinner from "./spinner";

function LandingPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data: usersData, isSuccess: usersSuccess, isLoading: usersLoading } = useGetUsersQuery();

    useEffect(() => {
        if (usersSuccess) dispatch(userArray(usersData?.users));
    }, [usersSuccess, dispatch, usersData]);

    if (usersLoading) {
        return <Spinner />
    }

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center" style={{ backgroundImage: `url(${backGroundImage})` }}>
            <div className="flex flex-col h-3/4 w-2/5 rounded-3xl justify-center shadow-2xl overflow-hidden">
                <div className="flex flex-col h-1/4 w-full bg-gray-100 rounded-t-3xl">
                    <div className="m-auto text-3xl text-gray-600 font-semibold">Select an account</div>
                </div>
                <div className="flex flex-col h-full w-full overflow-y-scroll gap-y-4 px-10 py-4 bg-white">
                    {usersData?.users?.map((user: UserModel, index: number) => (
                        <div className="border-b-2" key={index} onClick={() => { dispatch(setLoggedInUser(user)); navigate('/profile'); }}>
                            <UserCard user={user} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LandingPage;