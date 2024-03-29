import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

import { Stacked, Button } from '../components';
import { earningData } from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className='mt-10'>
      <div className='flex flex-wrap w-full lg:flex-nowrap justify-center '>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-76 rounded-xl w-full lg:w-full p-8 pt-6 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'
        >

          <div className='flex flex-wrap items-center'>
            <div className='text-white items-center px-2 mb-16 ' style={{ backgroundColor: currentColor}}> 
              <p 
              className='font-bold'
              > Earnings</p>
              <p className='text-2xl'>$65,450.12</p>
            </div>
          </div>

        
        </div>

        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white 
           dark:text-gray-200 h-40
           dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'> {item.title} </p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'> Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span> <GoPrimitiveDot /> </span>
                <span>Expense</span>
              </p>

              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span> <GoPrimitiveDot /> </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>

                <p>
                  <span className='text-3xl font-semibold'> $93,445</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>24%</span>
                </p>

                <p className='text-gray-500 mt-1'>Budget</p>

              </div>
              <div className='mt-8'>

                <p className='text-3xl font-semibold'> $93,445</p>
                <p className='text-gray-500 mt-1'>Expenses</p>

              </div>
              
              <div className='mt-10'>
                <Button
                  color='white'
                  bgColor={currentColor}
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>
            </div>

            <Stacked
              width='320'
              height='360px'
              z-index='500'
            />

          </div>

        </div>
      </div>
    </div>
  )
}

export default Ecommerce