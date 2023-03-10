import NavBar from "./nav_bar";

function PostsPage() {
    return (
        <div className="flex flex-col w-full h-full pl-8 text-center justify-center">
            <div className="h-2/3">
                <NavBar title="Posts" />
                <div className="pl-6 pr-6">
                    <div className="border-b-2" />
                </div>
            </div>
            <div className="h-full">
                <h1 className="text-8xl font-semibold text-gray-300">
                    Coming Soon
                </h1>
            </div>
        </div>
    );
}

export default PostsPage;