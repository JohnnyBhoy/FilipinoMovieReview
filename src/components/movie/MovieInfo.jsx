import React from 'react'

export default function MovieInfo({about,children}) {
    return <>  
        <div className='flex gap-5 dark:text-white text-secondary'>
     <div classname="w-[15%]">
          <p className='font-semibold'>
            {about}
            </p>
      </div>
      <div classname="w-[85%]">
          {children}
      </div>
      </div>
    </>                    
}
