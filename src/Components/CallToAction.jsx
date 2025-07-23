import React from 'react'

const CallToAction = () => {
  return (
    <>
    <div className='my-15 g-slate-100 flex flex-col items-center'>
      <p className='capitalize my-5 text-2xl font-black'>
        get started today
      </p>
        <form className='flex justify-center items-center w-full gap-3' aria-label="Join the waitlist" onSubmit={e => e.preventDefault()} >
            <label htmlFor="waitlist-email" style={{ display: 'none' }}>Email address</label>
            <span>
                <input type="email" id="waitlist-email" name="email" placeholder="Enter your email" required style={{width: '250px'}} className='border-1 p-2 rounded-2xl'/>
            </span>
            <span>
                <button className='bg-amber-300 rounded-2xl p-2 hover:bg-[#fcd34dce]'  type="submit">Join the waitlist</button>
            </span>
        </form>
    </div>
  
    </>
  )
}

export default CallToAction