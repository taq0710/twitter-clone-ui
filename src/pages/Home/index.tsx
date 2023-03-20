import { useAppDispatch, useAppSelector } from 'app/hooks';
import SidebarComponent from 'components/layout/SideBar';
import ViewpostComponent from 'components/pageComponents/Home/Viewpost';
import RightitemComponent from 'components/pageComponents/Home/rightItem';
import { loginHome } from 'features/login/loginSlide';
import React,{useEffect} from 'react';

export interface  HomeProps {
}

export default function Home (props:  HomeProps) {
  const dispatch = useAppDispatch();
  const loginInfo = useAppSelector(state=>state.login)
  useEffect(()=>{
    dispatch({
      type:loginHome,
      payload:{
        email: "",
        password: ""
      }
    })
  },[])

  return (
    <div className='flex justify-center'>
      <SidebarComponent/>
      <ViewpostComponent/>
      <RightitemComponent/>
    </div>
  );
}
