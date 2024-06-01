const DialogForm = ({onDialog}) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
            onClick={() => onDialog(false)}>
            <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 w-full max-w-lg h-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}>
                <h3 className="text-gray-900 text-lg mb-5">Are you sure you want to delete?</h3>
                <div className="flex items-center">
                    <button className="bg-red-500 text-white py-2 px-4 mr-2 cursor-pointer"
                        onClick={() => onDialog(true)}>Yes</button>
                    <button className="bg-green-500 text-white py-2 px-4 ml-2 cursor-pointer"
                        onClick={() => onDialog(false)}>No</button>
                </div>
            </div>
        </div>
    )
}

export default DialogForm;