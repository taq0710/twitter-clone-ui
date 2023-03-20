export interface WhotoFollowProps {

}
const userFollow = [
    {
        imgurl: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        username: "User Name",
        useid: "UserId"
    },
    {
        imgurl: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        username: "quoc",
        useid: "quoc"
    },
    {
        imgurl: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        username: "phung",
        useid: "phung"
    },
]
export default function WhotoFollow(props: WhotoFollowProps) {
    return (
        <div className="w-7/12 flex justify-center ">
            <div className="mt-3 ml-1  w-10/12">
                <div className="w-full bg-gray-100 rounded-lg">
                    <p className="text-lg font-bold px-2 mb-2">Who to follow</p>
                    {userFollow.map((userFollow, index) => (
                        <div className="flex items-center justify-between px-2 py-2 hover:bg-gray-200 cursor-pointer transition" key={index}>
                            <div className="flex ">
                                <img className="mr-1" src={userFollow.imgurl} alt="" />
                                <div>
                                    <p className="text-base font-medium hover:underline">{userFollow.username}</p>
                                    <p className="text-base text-gray-500">{`@${userFollow.useid}`}</p>
                                </div>
                            </div>
                            <button className="bg-black px-4 py-1 rounded-full text-sm font-medium text-white hover:bg-gray-700">Follow</button>
                        </div>
                        
                        ))}
                        <div className='px-2 py-3 hover:bg-gray-200 rounded-b-lg text-sm text-tweet cursor-pointer'>Show More</div>
                </div>
            </div>
        </div>
    )
}