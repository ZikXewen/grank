

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-gray-800 text-yellow-300 shadow-lg">
            <TopSideBarIcon  />
            <SideBarIcon  />
            <AddIcon />
        </div>
    );
}; 



const SideBarIcon = () => (
    <div className = "relative flex items-center justify-center h-12 w-12 my-2 mx-auto shadow-lg bg-gray-700 text-yellow-300 hover:bg-yellow-300 hover:text-gray-800 rounded-3xl hover:rounded-xl transition-all" >
        #1
    </div>
);

const TopSideBarIcon = () => (
    <div className = "relative flex items-center justify-center h-12 w-12 my-2 mx-auto shadow-lg bg-gray-700 text-yellow-300 hover:bg-yellow-300 hover:text-gray-800 rounded-3xl hover:rounded-xl transition-all" >
        R
    </div>
);

const AddIcon = () => (
    <div className = "fixed left-2 bottom-0 flex items-center justify-center h-12 w-12 my-2 mx-auto shadow-lg bg-gray-700 text-yellow-300 hover:bg-yellow-300 hover:text-gray-800 rounded-3xl hover:rounded-xl transition-all" >
        +
    </div>
);
export default SideBar;