import * as React from 'react';
import Search from './search';
import Trendings from './trending';

export interface RightitemComponentProps {
}

export default function RightitemComponent(props: RightitemComponentProps) {
  return (
    <div className='flex-auto w-rightitem pb-96'>
      <div className="sticky top-0 z-10">
        <Search />
      </div>
      <div className="h-715 sticky top-300" >
        <Trendings />
      </div>
    </div>
  );
}
