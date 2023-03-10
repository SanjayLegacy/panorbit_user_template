import NavBar from "./nav_bar";
import { useSelector } from "react-redux";
import { UserModel } from "../Model/user.model";

function ProfilePage() {
    const loggedInUser: UserModel = useSelector((state: any) => state.user.loggedInUser);

    return (
        <div className="flex flex-col w-full h-full pl-8 overflow-y-auto no-scrollbar">
            <NavBar title="Profile" />
            <div className="pl-6 pr-6">
                <div className="border-b-2" />
            </div>
            <div className="flex flex-row w-full h-full pt-5">
                <div className="flex flex-col h-full w-2/3 p-5 gap-y-5">
                    <img src={loggedInUser.profilepicture} alt='user' className="h-64 w-64 rounded-full self-center" />
                    <div className="p-2 text-3xl font-semibold text-gray-600 self-center">{loggedInUser.name}</div>
                    <UserInfo title="Username" data={loggedInUser.username} />
                    <UserInfo title="e-mail" data={loggedInUser.email} />
                    <UserInfo title="Phone" data={loggedInUser.phone} />
                    <UserInfo title="Website" data={loggedInUser.website} />
                    <div className="pl-20 pr-20">
                        <div className="border-b-2" />
                    </div>
                    <div className="p-2 text-2xl font-normal text-gray-400 self-center">Company</div>
                    <UserInfo title="Name" data={loggedInUser.company.name} />
                    <UserInfo title="catchphrase" data={loggedInUser.company.catchPhrase} />
                    <UserInfo title="bs" data={loggedInUser.company.bs} />
                </div>
                <div className="border-r-2"></div>
                <div className="h-full w-full pl-10 flex flex-col gap-y-5">
                    <div className="text-2xl font-normal text-gray-400">Address:</div>
                    <AddressInfo title="Street" data={loggedInUser.address.street} />
                    <AddressInfo title="Suite" data={loggedInUser.address.suite} />
                    <AddressInfo title="City" data={loggedInUser.address.city} />
                    <AddressInfo title="Zipcode" data={loggedInUser.address.zipcode} />
                    <img src={require("./images/map.png")} className="rounded-3xl w-11/12 self-end" alt='img' />
                    <div className="flex flex-row self-end gap-x-4">
                        <div className="flex flex-row">
                            <span className="text-lg font-normal text-gray-400 flex flex-1">Lat  :</span>
                            <span className="text-lg font-medium text-gray-600 flex flex-1 ml-2">{loggedInUser.address.geo.lat}</span>
                        </div>
                        <div className="flex flex-row">
                            <span className="text-lg font-normal text-gray-400 flex flex-1">Long  :</span>
                            <span className="text-lg font-medium text-gray-600 flex flex-1 ml-2">{loggedInUser.address.geo.lng}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function UserInfo({ title, data }: { title: string, data: string }) {
    return (
        <div className="flex flex-row">
            <span className="text-2xl font-normal text-gray-400 justify-end flex flex-1">{title}  :</span>
            <span className="text-2xl font-medium text-gray-600 justify-start flex flex-1 ml-2">{data}</span>
        </div>
    )
}

function AddressInfo({ title, data }: { title: string, data: string }) {
    return (
        <div className="flex flex-row">
            <span className="text-2xl font-normal text-gray-400 justify-end flex flex-0.5">{title}  :</span>
            <span className="text-2xl font-medium text-gray-600 justify-start flex flex-1 ml-2">{data}</span>
        </div>
    )
}

export default ProfilePage;