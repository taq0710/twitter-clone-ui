import Tippy from "@tippyjs/react/headless";
import { IoIosMore } from "react-icons/io"
function User() {
    return (
        <div className="pb-4">
            <Tippy
                placement='top'
                delay={200}
                render={attrs => (
                    <div className='w-64 pt-3 bg-white rounded-lg shadow-boxsd font-medium' tabIndex={-1} {...attrs}>
                        <div className="border-t ">
                            <p className="px-2 py-1">Add an existing account </p>
                            <p className="px-2 py-1">Logout@userID</p>
                        </div>
                    </div>
                )}>
                <div className=" hover:bg-gray-100 rounded-full p-2 ">
                    <div className="flex items-center pr-4">
                        <img className="rounded-full " src="https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png" alt="" />
                        <div className="mx-4">
                            <p className="text-xs font-bold">Quốc Trinh Anh</p>
                            <p className="text-xs">@QucTrnhAnh1</p>
                        </div>
                        <div>

                            <IoIosMore className="pl-3 text-3xl cursor-pointer" />

                        </div>
                    </div>
                </div>
            </Tippy>
        </div >
    );
}

export default User;