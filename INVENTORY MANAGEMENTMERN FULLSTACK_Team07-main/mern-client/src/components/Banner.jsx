import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
    return (
      <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
          <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
               {/* left side */}
               <div className='md:w-1/2 space-y-8 h-full'>
                
                    <h2 className='text-5xl font-bold leading-snug text-black'>StockPulse <span className='text-blue-700'>Inventory Management System</span></h2>
                    <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur architecto sed ratione quibusdam? Laudantium aut nihil tempore ex laboriosam rem odit nemo. Labore sapiente odio molestiae consequuntur, officia corrupti hic atque non, alias provident, odit eos pariatur illum? Corporis accusantium blanditiis dolores officiis incidunt asperiores neque nulla pariatur quos quia.</p>
                <div>
                    <input type="search" name="search" id="search" placeholder='Search the product' className='py-2 px-2 rounded-s-sm outline-none' />
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>

                </div>
               </div>

               {/* right side */}
               <div>
                <BannerCard></BannerCard>
                </div>

            </div>
        </div>
    )
}
export default Banner