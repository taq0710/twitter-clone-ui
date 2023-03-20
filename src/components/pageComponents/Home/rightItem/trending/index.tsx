import { MdOutlineMoreHoriz } from 'react-icons/md'
import WhotoFollow from '../whotofollow';
export interface TrendingsProps{

}
const trendings = [
  {
    category: 'Technology-Trending',
    title: 'ChatGPT',
    tweetCount: '120k Tweets',
  },
  {
    category: 'VietNam-Trending',
    title: 'Saigon',
    tweetCount: '121k Tweets',
  },
  {
    category: 'Sport-Trending',
    title: 'Footbal',
    tweetCount: '122k Tweets',
  },
  {
    category: 'Game-Trending',
    title: 'League of Legend',
    tweetCount: '123k Tweets',
  },
  {
    category: 'Food-Trending',
    title: 'Noodle',
    tweetCount: '124k Tweets',
  },
  {
    category: 'Girl-Trending',
    title: 'Hot girl',
    tweetCount: '125k Tweets',
  },
  {
    category: '-Trending',
    title: 'League of Legend',
    tweetCount: '123k Tweets',
  },
  {
    category: 'Game-Trending',
    title: 'League of Legend',
    tweetCount: '123k Tweets',
},
];

export default function Trendings(props: TrendingsProps) {
  const hoverBgColor = 'hover:bg-gray-200';
  
  return (
    
      <div className="">
        <div className="w-7/12 flex justify-center ">
          <div className=" ml-1 p w-10/12">
            <div className="w-full bg-gray-100 rounded-lg">
              <p className='text-lg font-bold px-2 pb-2 pt-1'>Trendings for you</p>
              {trendings.map((trending, index) => (
                <div className={hoverBgColor + ' py-2 cursor-pointer transition'} key={index}>
                  <div className='flex items-center justify-between px-2 text-gray-500'>
                    <p className='text-sm'>{trending.category}</p>
                    <div className={`p-1 hover:bg-hover rounded-full`}><MdOutlineMoreHoriz/></div>
                  </div>
                  <p className='px-2 text-sm font-bold pb-1'>{trending.title}</p>
                  <p className='px-2 text-sm text-gray-500'>{trending.tweetCount}</p>
                </div>
              ))}
              <div className={`px-2 py-3 ${hoverBgColor} rounded-b-lg text-sm text-tweet cursor-pointer`}>Show More</div>
            </div>
          </div>
        </div>
        <WhotoFollow/>
        <div className='w-1/2'>
          <div className=' mt-3 '>
            <div className='flex text-xs ml-9 text-gray-500'>
              <p className='mr-2 hover:underline cursor-pointer'>Terms of Service</p>
              <p className='mr-2 hover:underline cursor-pointer'>Privacy Policy</p>
              <p className='mr-2 hover:underline cursor-pointer'>Cookie Policy</p>
            </div>
            <div className='flex text-xs ml-9 text-gray-500'>
              <p className='mr-2 hover:underline cursor-pointer'>Accessibility</p>
              <p className='mr-2 hover:underline cursor-pointer'>Ads info</p>
              <p className='flex items-center mr-2 hover:underline cursor-pointer'>More <MdOutlineMoreHoriz/></p>
            </div>
            <p className='text-xs ml-9 text-gray-500'>© 2023 Twitter, Inc.</p>
            </div>
        </div>
      </div>
    
    )
}
