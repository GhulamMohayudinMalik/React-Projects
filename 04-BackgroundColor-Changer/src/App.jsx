import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen duration-300' style={{backgroundColor : color}}>
        <div className='fix flex flex-wrap justify-center bottom-12 inset-x-0 px-0'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=> setColor('red')} className='outline-none px-4 py-1 rounded-full tshadow-lg text-white' style={{backgroundColor : 'red'}}>Red</button>
            <button onClick={()=> setColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : 'green'}}>Green</button>
            <button onClick={()=> setColor('blue')} className='outline-none px-4 py-1 rounded-full  shadow-lg text-white' style={{backgroundColor : 'blue'}}>Blue</button>
            <button onClick={()=> setColor('yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : 'yellow'}}>Yellow</button>
            <button onClick={()=> setColor('brown')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : 'brown'}}>Brown</button>
            <button onClick={()=> setColor('orange')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : 'orange'}}>Orange</button>
            <button onClick={()=> setColor('pink')} className='outline-none px-4 py-1 rounded-full  shadow-lg text-white' style={{backgroundColor : 'pink'}}>Pink</button>
            <button onClick={()=> setColor('purple')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : 'purple'}}>Purple</button>
            <button onClick={()=> setColor('cyan')} className='outline-none px-4 py-1 rounded-full  shadow-lg text-white' style={{backgroundColor : 'cyan'}}>Cyan</button>
            <button onClick={()=> setColor('gold')} className='outline-none px-4 py-1 rounded-full  shadow-lg text-white' style={{backgroundColor : 'gold'}}>Gold</button>
            <button onClick={()=> setColor('tomato')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : 'tomato'}}>Tomato</button>
            <button onClick={()=> setColor('teal')} className='outline-none px-4 py-1 rounded-full  shadow-lg text-white' style={{backgroundColor : 'teal'}}>Teal</button>
            <button onClick={()=> setColor('tan')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : 'tan'}}>Tan</button>
            <button onClick={()=> setColor('grey')} className='outline-none px-4 py-1 rounded-full  shadow-lg text-white' style={{backgroundColor : 'grey'}}>Grey</button>
            <button onClick={()=> setColor('black')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : 'black'}}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
