import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
      <div className='dark:bg-primary bg-white'>
          <div className='flex gap-5'>
              <div className='w-[60%] shadow-lg  dark:bg-secondary bg-white mt-5 mb-3'>
              <Carousel autoPlay showThumbs={false} infiniteLoop showStatus={false} swipeable className='p-3'>
                  <div>
                      <img src="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd1PWhSdxiJrCkeDObHdgApnLf-vRRW18ltn3dRhBzCMbeuR8ypFLFMzHboElPBiM5ucoV42dDEeXStH4KNm4ftKKABo_Gb8rk1e.jpg?r=0af"
                      className='h-[38rem] rounded-lg' />
                  </div>
                  <div>
                      <img src="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcmLjsMJlufx9yv-cKybIX597NRyZCbt196xc9GIhi0vSQ31rTpHeRqPnycFqFv8RN8QdeLCofFZBwoQ8ADGnFl4-ndq-oEpgPFN.jpg?r=33d" 
                          className='h-[38rem] rounded-lg'
                          />
                  </div>
                  <div>
                      <img src="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU8yYqVRlJgQAZoMtE7nXBaS4AKH9jmzyP5KOjpWOQrYSNgqunxCxFj38e0EbmuCmE93dTOkxgkX9XdKX35LrckOgV9uXp3WpDUv.jpg?r=49e" 
                          className='h-[38rem] rounded-lg'
                          />
                  </div>
                  <div>
                      <img src="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUGblJeHSCNbwCNCfKqVx0hZ9z9k2ysulErwibzkpiaJfrkfRy0JuBY37nUBFhiQhy8PLLF6mdfHifYbwpnfcJ7hBci7ctrMGIha.jpg?r=ded"
                          className='h-[38rem] rounded-lg'
                      />
                  </div>
                  <div>
                      <img src="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYaH8GFiUMyPVTI5CPIAqjvHd6pnbyni2YNOjzeX5KyndLs1IK4OG7KBEFD-7PF5w_SoKFG6SvaGVciy20qmDZwt9ihdecvZ6Wsr.jpg?r=220"
                          className='h-[38rem] rounded-lg'
                      />
                  </div>
                  <div>
                      <img src="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVvHUi7UFAb4uaJseZV0cZ6Ve2sh7V1RMoh35P7VmkKNxZloXf8Tvs6FO93HZYMiJ0ZiSbrWvsRqvOUuXRgMCW4H7F9A441g7gJN.jpg?r=e33"
                          className='h-[38rem] rounded-lg'
                      />
                  </div>
                  <div>
                      <img src="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYGL1Ui39dWx8jxqrTWiVGL4zg0emC1qVu5Tgz_F93hQyP5zVQ7JB_h6PDfdDsKHBB4FOVnWpcDVxBM4ZxTfo7dXfgG-Q_TQRuo0.jpg?r=886"
                          className='h-[38rem] rounded-lg'
                      />
                  </div>
                  <div>
                      <img src="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa_wNCD3b6667WuNEd4T9hcKz1FaF4pidlrcJTdic74C5RLFGRIoLR4iugSc3zC6ZPSK3xY0rMlunwJ7ZYR3Ivkb2l26vvTpizwY.jpg?r=3ea"
                          className='h-[38rem] rounded-lg'
                      />
                  </div>
                  <div>
                      <img src="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVvHUi7UFAb4uaJseZV0cZ6Ve2sh7V1RMoh35P7VmkKNxZloXf8Tvs6FO93HZYMiJ0ZiSbrWvsRqvOUuXRgMCW4H7F9A441g7gJN.jpg?r=e33"
                          className='h-[38rem] rounded-lg'
                      />
                  </div>
                  <div>
                      <img src="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRjjoDXT4qzzZUGySFrrF50HXKZ9hKwIYtl0zYn8vywPI2Zk7WQ8DIjcsA0jmhzssBCI1EhlYJpPqVV2wX9FarzTnHQ-cipfrpfb.jpg?r=ccc"
                          className='h-[38rem] rounded-lg'
                      />
                  </div>
                  <div>
                      <img src="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfNJT8DEA1VW0MgZhUgbJYN52oyTZAfEGQeZ1RKXBlSakMIC9GUOjXcl3ze0mzZnsaTmAiYnLZE_yfdfypnQF_oeaGzCg2TRQHln.jpg?r=3e0"
                          className='h-[38rem] rounded-lg'
                      />
                  </div>
              </Carousel>
         </div>
              <div className='w-[40%] shadow-lg   dark:bg-secondary bg-white mt-5'>
              <p className='font-bold dark:text-white text-secondary'>Top Rated Pinoy Movies</p>
              <div className='flex p-5 justify-between items-center'>
                      <MovieItem 
                      title="One More Chance"
                      movie="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABftcZ6d6J2mKTvY37bxqhRoo6Tp7PwStckeVz3N2Xbv-vMG_-Tt4i8JULILi_UG_YpVK1pq-YULw0_Slrk5KNlmkVuOz7A0_K7Er.jpg?r=f9b" 
                      />
                      <MovieItem 
                      title="Unforgettable"
                      movie="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbvIVyjE4XA8UkYORzvylhW3kaQUr5_dDKzS0VLDYn3esc0svtWVqw3A8zedjnp7PVMKhw_G9XJwytgTyX7jgV-Blg6As-cP0-Mx.jpg?r=397" 
                      />
                      <MovieItem 
                      title="Glorious"
                      movie="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeGJqsszXZC8FqThGUPySg5pYihWonl7Io0YkZqNNjipNmQdNctwRZFd0Ivv2WpeGNaS7inUXiUjfFLAhfNliuoO1tJE08MdoHv9.jpg?r=401" 
                      />
                  </div>             
                   <div className='flex p-5 justify-between items-center'>
                      <MovieItem 
                      title=""Just a Stranger
                      movie="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWg0HYUCcD2NnhAovkb4l7HXKlScAez5idFnhOgaIjEjoQpPxoID-QxmtkkZBTyljAHTPSUoMVYByyPaqrVKMQtbt1u2xMa6u-qm.jpg?r=396" 
                      />
                      <MovieItem 
                      title="Wild and Free"
                      movie="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABffq2TuWGu2Owmz7lpsAMrVQmyRFE24-Yr3KJ3Po272EghgL5WALW_hmEx6zrZ2CIwkAHmsFfMfX1D6OgNVplGZo-bUy5btCJz5l.jpg?r=999" 
                      />
                      <MovieItem 
                      title="I'm Drunk, I Love You"
                      movie="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABafWJiqj19eOKWqZQZ0HZUHB8jlIHWh4_SxhD05zLFq_xvR8jk_yzyEqb8oz5DpC_5OSafMO-0aPSOidU7YgOGfD0Hv7XozCqqtL.jpg?r=483" 
                      />
                  </div>
                  <div className='flex p-5 justify-between items-center'>
                      <MovieItem 
                      title="Hindi Tayu Pwedi"
                      movie="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY1x34MPZHTKEjWNr78UB2z2OZS9l5oQorJjOyqsQJTjEOUwy4s_Zl6bvy8i_05oHHBmbdoFEzakX8a7QpoRtps_wT8zMFpXrFGG.jpg?r=21f" 
                      />
                      <MovieItem 
                      title="Cuddle Weather"
                      movie="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeAqaJFTcLQM4ngBPBkZD6CFRk8Bvj5qsDFwznZCLkYmyMR-K47N0rdy3U3J6Y5Ovtm_TlVCLTONx1Wf3ZPbnwyz_1cN7VGsJr-X.jpg?r=481" 
                      />
                      <MovieItem 
                      title="A Hard Day"
                      movie="https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXrLFnDrqWGnRttOVo1XUihlyqt_L4X_7-3KcCaVzNzOK_LoeDKU2xIFvXSCOPJWX9VCUofzSXhebuKfheKrjKO6Y_gyk_HLJv-d.jpg?r=ce7" 
                      />
                  </div>
        </div>
    </div>
</div>
  )
}

const MovieItem = ({title,movie}) => {
    return (
    <div>
        <Link to={`movie/movie-review?movie=${movie}&&title=${title}`}>
            <img src={movie}
                alt=""
                className='rounded-lg h-[10rem] w-[10rem] shadow-lg max-w-xs transition duration-300 ease-in-out hover:scale-110' />
        </Link>
    </div>
    )
}
