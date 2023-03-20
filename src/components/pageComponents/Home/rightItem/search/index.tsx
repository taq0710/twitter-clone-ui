import { useState } from 'react';
import { AiOutlineSearch, AiFillCloseCircle } from 'react-icons/ai';
export interface SearchProps{}

export default function Search(props: SearchProps) {
  const [value, setValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClearClick = () => {
    setValue('');
  };

  return (
    <div className=' bg-white'>
      <div className="w-7/12 flex justify-center">
        <div className="relative flex items-center mt-3 py-2 w-10/12  ">
          <AiOutlineSearch className="text-xl mx-2 absolute text-gray-500" />
          <input
            className="placeholder:text-sm focus:outline-none w-full bg-gray-100 rounded-full pl-8 pr-3 py-1 border-2 border-gray-100 focus:border-blue-500"
            placeholder="Search twitter"
            value={value}
            onChange={handleInputChange}
          />
          {value && (
            <AiFillCloseCircle
              className="text-2xl absolute right-3 text-tweet cursor-pointer hover:text-tweet transition-colors"
              onClick={handleClearClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}
