import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { MdComment } from 'react-icons/md'
import { BsDot, BsUpload } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { FiMoreHorizontal, FiBarChart2 } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { TiTick } from 'react-icons/ti'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import ProfileInfo from 'components/pageComponents/Home/Viewpost/post/profileInfo'
export interface PostsProps { }
const itemposts = [
    {
        topic: "You might like",
        username: "User Name",
        useid: "UserID",
        status: "Beach Beautyfull",
        imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
        comment: 50,
        tweet: 51,
        like: 52,
        view: 53,

    }, {
        topic: "You might like",
        username: "User Name",
        useid: "UserID",
        status: "Beach Beautyfull",
        imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
        imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
        comment: 50,
        tweet: 51,
        like: 52,
        view: 53,

    }
]
export default function Following(props: PostsProps) {
    return (
        <>
            {itemposts.map((itemposts, index) => (
                <div className='cursor-pointer hover:bg-gray-100 border-b' key={index}>
                    <div className='flex items-center w-full justify-between'>
                        <div className='flex items-center mt-1 w-10/12'>
                            <div className='ml-10 mr-3'><MdComment className='text-gray-500 cursor-pointer' /></div>
                            <div >
                                <Tippy
                                    placement='bottom'
                                    interactive
                                    render={attrs => (
                                        <div className=' ml-20 w-56 bg-white rounded-lg shadow-boxsd' tabIndex={-1} {...attrs}>
                                            <div className='px-2'>
                                                <p className='text-2xl font-bold'> Business personalities</p>
                                                <p className='text-sm font-medium'>Business</p>
                                                <p className='py-2 text-xs'>Following this Topic will help personalize Home timeline and experience across Twitter</p>
                                                <div className=' flex items-center justify-between pb-2'>
                                                    <button className='flex border hover:bg-gray-200 border-gray-400 rounded-full'><span className='py-1 px-4 text-xs font-bold'>Not Interested</span></button>
                                                    <button className='flex border hover:bg-gray-700 border-black rounded-full bg-black text-white'><span className='py-1 px-4 text-xs font-bold'>Follow</span></button>

                                                </div>
                                            </div>
                                        </div>
                                    )}>
                                    <p className='text-sm font-bold text-gray-500 hover:underline cursor-pointer'>
                                        {itemposts.topic}
                                    </p>
                                </Tippy>
                            </div>
                            <div><BsDot /></div>
                            <div className='flex items-center  w-8/12 justify-between'>
                                <p className='text-tweet text-sm font-medium hover:underline cursor-pointer'>
                                    See more
                                </p>
                            </div>
                        </div>
                        <Tippy
                            placement='bottom'
                            delay={200}
                            render={attrs => (
                                <div className='' tabIndex={-1} {...attrs}>
                                    <div className='bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs'><p>Dismiss</p></div>
                                </div>
                            )}>
                            <div className='hover:bg-hover mr-1 rounded-full p-2'><IoClose className=' text-xl cursor-pointer text-gray-500' />
                            </div>
                        </Tippy>
                    </div>
                    <div className='flex w-full'>
                        <div>
                            <Tippy
                                placement='bottom'
                                interactive
                                render={() => (
                                    <ProfileInfo />
                                )}>
                                <img className='rounded-full mt-2 ml-3' src={itemposts.imgulr} alt="" />
                            </Tippy>
                        </div>
                        <div className='pl-2 w-11/12 '>
                            <div className='flex items-center w-full justify-between'>
                                <div className='flex items-center'>
                                    <Tippy
                                        placement='bottom'
                                        interactive
                                        render={() => (
                                            <ProfileInfo />
                                        )}>
                                        <p className='font-bold text-username hover:underline'>{itemposts.username}</p>
                                    </Tippy>
                                    <div className='p-tick mx-1 rounded-full bg-tweet'>
                                        <TiTick className='text-gray-50 text-xs' />
                                    </div>
                                    <Tippy
                                        placement='bottom'
                                        interactive
                                        render={() => (
                                            <ProfileInfo />
                                        )}>
                                        <p className='text-gray-500'>{`@${itemposts.useid}`}</p>
                                    </Tippy>
                                    <div className='text-gray-500'><BsDot /></div>
                                    <p className='text-gray-500 hover:underline'>1h</p>
                                </div>
                                <Tippy
                                    placement='bottom'
                                    delay={200}
                                    render={attrs => (
                                        <div className='' tabIndex={-1} {...attrs}>
                                            <div className='bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs'><p>More</p></div>
                                        </div>
                                    )}>
                                    <div className='mr-1 hover:bg-hover rounded-full p-2'><FiMoreHorizontal className=' text-xl' />
                                    </div>
                                </Tippy>
                            </div>
                            <div className='flex pr-5 mb-3'>
                                <p className='text-justify'>
                                    {itemposts.status}
                                </p>
                            </div>
                            <div className='mr-4'>
                                <img className='rounded-2xl' src={itemposts.imgPosturl} alt="" />
                                <p className='text-sm text-gray-500'>from</p>
                                <div className='w-9/12 flex items-center justify-between text-gray-500 mb-2'>
                                    <Tippy
                                        placement='bottom'
                                        delay={200}
                                        render={attrs => (
                                            <div className='' tabIndex={-1} {...attrs}>
                                                <div className='bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs'><p>Reply</p></div>
                                            </div>
                                        )}>
                                        <div className='flex items-center hover:text-tweet '>
                                            <span className='p-2 hover:bg-hover rounded-full'><FaRegComment /></span> {itemposts.comment}
                                        </div>
                                    </Tippy>
                                    <Tippy
                                        placement='bottom'
                                        delay={200}
                                        render={attrs => (
                                            <div className='' tabIndex={-1} {...attrs}>
                                                <div className='bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs'><p>Retweet</p></div>
                                            </div>
                                        )}>
                                        <div className='flex items-center hover:text-hover2'>
                                            <span className='p-2 hover:bg-hover2bg rounded-full'><AiOutlineRetweet /></span> {itemposts.tweet}
                                        </div>
                                    </Tippy>
                                    <Tippy
                                        placement='bottom'
                                        delay={200}
                                        render={attrs => (
                                            <div className='' tabIndex={-1} {...attrs}>
                                                <div className='bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs'><p>Like</p></div>
                                            </div>
                                        )}>
                                        <div className='flex items-center hover:text-hover3'>
                                            <span className='p-2 hover:bg-hover3bg rounded-full'><AiOutlineHeart /></span> {itemposts.like}
                                        </div>
                                    </Tippy>
                                    <Tippy
                                        placement='bottom'
                                        delay={200}
                                        render={attrs => (
                                            <div className='' tabIndex={-1} {...attrs}>
                                                <div className='bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs'><p>View</p></div>
                                            </div>
                                        )}>
                                        <div className='flex items-center hover:text-tweet'>
                                            <span className='p-2 hover:bg-hover rounded-full'><FiBarChart2 /></span> {itemposts.view}
                                        </div>
                                    </Tippy>
                                    <Tippy
                                        placement='bottom'
                                        delay={200}
                                        render={attrs => (
                                            <div className='' tabIndex={-1} {...attrs}>
                                                <div className='bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs'><p>Share</p></div>
                                            </div>
                                        )}>
                                        <div className='flex items-center hover:text-tweet'><span><BsUpload /></span>
                                        </div>
                                    </Tippy>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
}
