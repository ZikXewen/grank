const Board = () => {
    return(
        <div className='flex flex-col h-full space-y-3 mt-20 p-4 w-full justify-items-center'>
            <div className="lg:col-span-2 h-40 col-span-1 bg-gray-700 flex justify-between w-full p-4 rounded-lg"></div>
            <div className="lg:col-span-2 h-40 col-span-1 bg-gray-700 flex justify-between w-full p-4 rounded-lg"></div>
            <div className="lg:col-span-2 h-40 col-span-1 bg-gray-700 flex justify-between w-full p-4 rounded-lg"></div>
        </div>
    );
}

export default Board;