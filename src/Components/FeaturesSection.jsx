import React from 'react'
import { Bubbles, Hourglass, BellRing } from 'lucide-react';

function FeaturesSection() {
  
    const features = [
  {
    id: 1,
    icon: <Bubbles size={50}/>,
    title: "Zen Mode",
    description: "A calm, distraction-free focus environment that helps you enter deep work mode.",
  },
  {
    id: 2,
    icon: <Hourglass size={50}/>,
    title: "Smart Timer",
    description: "Stay productive with intelligently timed focus and break intervals using the Pomodoro method.",
  },
  {
    id: 3,
    icon: <BellRing size={50}/>,
    title: "Gentle Alerts",
    description: "Receive soft, non-intrusive alerts when your focus session or break ends.",
  },
]

  return (
    <div className='flex flex-col items-center relative md:-mt-24 z-10'>
      <div className='flex flex-col md:flex-row items-center mt-10 px-15 gap-4'>
        {
            features.map((feature) => {
                return(
                    <div key={feature.id} className='flex flex-col items-center p-6 shadow-2xl rounded-2xl cursor-pointer border-b-4 border-transparent hover:border-amber-500 md:border-b-0 md:border-r-4 md:hover:border-amber-500 max-w-sm transition-transform duration-200 hover:scale-105 bg-white'
                    >
                        <span className='my-2 text-amber-500'>{feature.icon}</span>
                        <h3 className='text-xl font-bold'>{feature.title}</h3>
                        <p className='text-slate-600 text-justify p-2'> {feature.description} </p>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default FeaturesSection
