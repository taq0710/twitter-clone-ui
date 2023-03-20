import React from 'react';

export interface ProfileInfoProps {

}
const itemsTippy = [{
  url: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
  username: "User Name",
  useid: "UserID",
  describe: 'biographical description',
  following: 1.125,
  follower: '12m',


}]
function ProfileInfo(props: ProfileInfoProps) {
  return (<>
    {
      itemsTippy.map((itemsTippy, index) => (
        <div className='bg-white w-72 rounded-lg shadow-boxsd' key={index}>
          <div className='flex justify-between'>
            <img className='rounded-full p-3' src='' alt="" />
            <div>
              <button className='flex border hover:bg-gray-700 border-black rounded-full bg-black text-white p-1 mt-3 mr-1'>
                <span className='py-1 px-4 text-xs font-bold'>Follow</span>
              </button>
            </div>
          </div>
          <div className='pl-3 pb-3'>
            <p className='text-xl font-bold hover:underline'>{itemsTippy.username}</p>
            <p className='pb-5'>{`@${itemsTippy.useid}`}</p>
            <p>{itemsTippy.describe}</p>
          </div>
          <div className='flex pl-3'>
            <div className='flex items-center hover:underline text-sm'>
              <p className='font-bold'>{itemsTippy.following}</p>
              <p className='pr-3'>Following</p>
            </div>
            <div className='flex items-center hover:underline text-sm'>
              <p className='font-bold'>{itemsTippy.follower}</p>
              <p className='pr-3'>Follower</p>
            </div>
          </div>
        </div>
      ))
    }
  </>
  );
}

export default ProfileInfo;