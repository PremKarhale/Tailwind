import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <h1 className='text-white text-2xl grid place-content-center '>Hey it is card to test tailwind css</h1>
      <div className='p-2'></div>

      <div >
        <div className='p-1  max-w-max mx-auto text-black bg-white rounded-2xl  flex shadow-lg items-center space-x-4'>
          <img src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg" alt="" className='rounded-full h-15 w-14' />
          <div>
            <div className=' font-medium '>
              # Slack
              <p className='text-slate-500 text-base'>By prem karhale</p>
            </div>
          </div>
        </div>
        <div className='p-0.5'></div>
      </div>
      <div className='flex justify-center mx-auto'>
      <button className='bg-amber-600 w-[14dvw] hover:bg-orange-300 md:text-green-600 sm:text-red-500 rounded-[15px] p-1 shadow-lg text-black font-medium'>Buy now </button>
      </div>

    </div>
  )
}

export default App
