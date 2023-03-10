import ChatBox from "./chat_box";
import indicator from "./images/page_indicator.svg";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function SideBar() {
    const location = useLocation();
    const activeStyle = {
        navLink: "pt-5 pb-5 text-gray-300 font-semibold text-2xl cursor-pointer",
        active: "pt-5 pb-5 text-white font-semibold text-2xl cursor-pointer",
    }

    return (
        <>
            <div className="flex flex-row h-screen w-screen p-5 pr-16 relative">
                <section className="bg-blue-600 rounded-3xl flex flex-col items-start text-left justify-center pl-12 pr-8">
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <NavLink to={`/profile`} className={(navData: any) => navData.isActive ? activeStyle.active : activeStyle.navLink}>Profile</NavLink>
                            <hr className="w-48 h-[0.01rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
                        </div>
                        {location.pathname.includes('profile') && <img src={indicator} alt='profile' />}
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <NavLink to={'/posts'} className={(navData: any) => navData.isActive ? activeStyle.active : activeStyle.navLink}>Posts</NavLink>
                            <hr className="w-48 h-[0.01rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
                        </div>
                        {location.pathname.includes('posts') && <img src={indicator} alt='posts' />}
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <NavLink to={'/gallery'} className={(navData: any) => navData.isActive ? activeStyle.active : activeStyle.navLink}>Gallery</NavLink>
                            <hr className="w-48 h-[0.01rem] bg-gray-100 border-0 rounded dark:bg-gray-700" />
                        </div>
                        {location.pathname.includes('gallery') && <img src={indicator} alt='gallery' />}
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <NavLink to={'/todo'} className={(navData: any) => navData.isActive ? activeStyle.active : activeStyle.navLink}>ToDo</NavLink>
                            <div className="w-48" />
                        </div>
                        {location.pathname.includes('todo') && <img src={indicator} alt='todo' />}
                    </div>
                </section>
                <section className="w-full h-full">
                    <Outlet />
                </section>
            </div>
            <ChatBox />
        </>
    );
}

export default SideBar;