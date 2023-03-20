import * as React from 'react';
import { listMenu } from 'constants/listMenu';
import Logo from '../logo';
import User from '../userItem';

export interface ColumnItemProps { }

export default function ColumnItem(props: ColumnItemProps) {
  return (
    <div className='w-64 flex flex-col justify-between h-screen overflow-y-auto '>
      <div>
        <Logo />
        <ul>
          {listMenu.map((item) => (
            <li
              className={`w-48 flex items-center my-1 ml-0 rounded-full  font-normal text-xl ${item.key === 'home' ? 'font-semibold' : ''
                }`}
              key={item.key}
            >
              <span className='flex p-3 hover:bg-gray-200 cursor-pointer rounded-full text-center transition-all animate-bg-gray-100'>
                {item.icon}
                {item.title}
              </span>
            </li>
          ))}
        </ul>
        <div className='py-2 '>
          <p className='w-48 py-2.5 mr-16 bg-tweet hover:bg-blue-500 cursor-pointer rounded-full font-normal text-center text-xl text-white'>Tweet</p>
        </div>
      </div>
      <User/>
    </div>
  );
}
