import React from 'react'
import { motion } from 'framer-motion';

const Pricing = () => {
    const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Ideal for personal use or trying things out.",
    features: [
      "Basic tracking features",
      "1 workspace",
      "Limited support"
    ],
    buttonLabel: "Get Started",
    highlight: false,
    id: 1
  },
  {
    name: "Pro",
    price: "$9.99/month",
    description: "Perfect for professionals and growing teams.",
    features: [
      "All Free features",
      "Unlimited workspaces",
      "Advanced analytics",
      "Priority support"
    ],
    buttonLabel: "Upgrade Now",
    highlight: true, // maybe to show with a different style
       id: 2
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "Best for large teams and organizations.",
    features: [
      "All Pro features",
      "Custom integrations",
      "Dedicated success manager",
      "Onboarding support"
    ],
    buttonLabel: "Contact Sales",
    highlight: false,
       id: 3
  }
];

  return (
    <>
        <div className='px-15 md:flex-row flex flex-col gap-10 items-center my-10'>
            {
                pricingPlans.map((priceCard) => {
                    return(
                        <motion.div 
                            initial={{opacity:0, y:40}}
                            animate={{opacity:1, y:0}}
                            transition={{duration:3}}
                        
                        key={priceCard.id} className='flex flex-col gap-10 items-center shadow-xl rounded-2xl p-5 text-justify hover:scale-105 cursor-pointer'>
                            <p className='text-2xl font-sans'>{priceCard.name}</p>
                            <p className='text-3xl font-bold'> {priceCard.price} </p>
                            <p className='text-xl'> {priceCard.description} </p>
                            <p> {priceCard.features.map((feature, i) => {
                                return(
                                    <ul className='gap-4 text-xl'>
                                        <li>{feature}</li>
                                    </ul>
                                )
                            }) } </p>
                            <motion.button 
                                initial={{opacity:2, y:10}}
                                animate={{
                                    opacity:1, y:0
                                }}
                                transition={{
                                      delay: 4,
                                        duration: 0.6,
                                        type: 'spring',
                                        stiffness: 120, // controls bounce
                                        damping: 8 
                                }}
                            type="submit" className='bg-amber-300 rounded p-3 hover:scale-105'>
                                {priceCard.buttonLabel}
                            </motion.button>
                        </motion.div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Pricing