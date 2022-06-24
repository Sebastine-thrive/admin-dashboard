import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import {  MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const Navbutton = ({ title, icon, color, dotColor, customFunc }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button
      type='button'
      onClick={() => customFunc()}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'>

      <span
        style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2 '
      />

      {icon}

    </button>
  </TooltipComponent>
);

const Navbar = () => {

  const {  setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);


  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative' >

      <Navbutton
        title='menu'
        customFunc={() => setActiveMenu((activeMenu) => !activeMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />} />

      <div className='flex'>
        <Navbutton
          title='Cart'
          color={currentColor}
          customFunc={() => handleClick('cart')}
          icon={<FiShoppingCart />} />

        <Navbutton
          title='chat'
          customFunc={() => handleClick('chat')}
          color={currentColor}
          dotColor='#03C907'
          icon={<BsChatLeft />} />

        <Navbutton
          title='notification'
          customFunc={() => handleClick('notification')}
          color={currentColor}
          dotColor='#03C907'
          icon={<RiNotification3Line />} />

        <TooltipComponent content='profile' position='BottomCenter' >

          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}
          >

            <img src={avatar} alt="user profile thumbnail" className='rounded-full w-8 h-8' />

            <p>
              <span className='text-gray-400 text-14'> Hi,
              </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'> User
              </span>
            </p>

            <MdKeyboardArrowDown className='text-gray-400 text-14' />

          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.UserProfile && <UserProfile />}
        {isClicked.notification && <Notification />}

      </div>
    </div>
  );
};

export default Navbar;