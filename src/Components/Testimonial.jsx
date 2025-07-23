import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonial = () => {
  const scrollRef = useRef(null);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => {
        setTestimonials(json.slice(0, 10)); // Limit to 10 testimonials
      })
      .catch(err => console.error('Failed to fetch testimonials:', err));
  }, []);

  const colors = [
    'bg-red-100', 'bg-yellow-100', 'bg-green-100', 'bg-blue-100',
    'bg-purple-100', 'bg-pink-100', 'bg-indigo-100', 'bg-emerald-100'
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth / 2; // 2 cards per view
    container.scrollBy({
      left: direction === 'left' ? -cardWidth * 2 : cardWidth * 2,
      behavior: 'smooth',
    });
  };

  return (
    <section className='my-16 px-4 relative'>
      <h2 className='text-2xl font-bold mb-6 capitalize'>Testimonials</h2>

      <div className='relative overflow-hidden'>
        <div
          ref={scrollRef}
          className='flex transition-all ease-in-out duration-300 space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide'
        >
          {testimonials.map((t, index) => {
            const randColor = colors[index % colors.length];
            const gender = index % 2 === 0 ? 'men' : 'women';
            return (
              <div
                key={t.id}
                className='min-w-[90%] md:min-w-[45%] snap-start bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center'
              >
                <div className={`w-20 h-20 flex items-center justify-center rounded-full ${randColor}`}>
                  <img
                    src={`https://randomuser.me/api/portraits/${gender}/${index}.jpg`}
                    alt={t.email}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
                <p className='mt-4 font-semibold'>{t.name}</p>
                <p className='text-slate-600 text-center mt-2'>{t.body}</p>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => scroll('left')}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 z-10'
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => scroll('right')}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 z-10'
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
