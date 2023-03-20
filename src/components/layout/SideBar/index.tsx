import * as React from 'react';
import ColumnItem from './columnItem';


export interface SidebarComponentProps { }

export default function SidebarComponent(props: SidebarComponentProps) {
  return (
    <div className='flex justify-end w-sidebar'>
      <div className='flex flex-col items-end overflow-y-auto fixed top-0 '>
        <ColumnItem/>
      </div>
    </div>
  );
}
