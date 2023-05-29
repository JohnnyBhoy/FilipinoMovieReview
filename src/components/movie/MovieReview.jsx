import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useLocation } from 'react-router-dom';
import MovieInfo from './MovieInfo';


export default function HomePage() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const movie = params.get("movie");
    const title = params.get("title");

    return (
        <div className='dark:bg-primary bg-white ml-2 p-3'>
            <div className='flex gap-5'>
                <div className='w-[60%] shadow-lg mt-5 mb-3'>
                            <img src={movie}
                                className='h-[38rem] rounded-md' />

                </div>
                <div className='w-[40%] shadow-lg dark:bg-secondary bg-white p-5 space-y-3 rounded-md'>
                    <MovieInfo about="Title">
                        <p className='font-bold text-lg'>
                           {title}
                        </p>
                    </MovieInfo>
                    <MovieInfo about="Casts">
                        <p >
                            Directed by	Cathy Garcia-Molina,Written by,Vanessa R. Valdez,Carmi Raymundo,Produced by,Charo Santos-Concio,Malou 
                            Santos,Starring,John Lloyd Cruz,Bea Alonzo,Cinematography	Manuel Teehankee,Edited by	Marya Ignacio,Music by	
                            Jessie Lasaten,Production,company,ABS-CBN Film Productions, Inc.,Distributed by	Star Cinema,Release date,November 14, 2007
                            Country	Philippines,Language,Filipino,Box office	₱152.7 million[1]
                            </p>
                    </MovieInfo>
                    <MovieInfo about="Story">
                        <p>
                            One More Chance is a 2007 Filipino romantic drama film directed by the award-winning director Cathy Garcia-Molina and starring 
                            John Lloyd Cruz and Bea Alonzo. The film was written by Vanessa R. Valdez and Carmi Raymundo and produced by Charo Santos-Concio 
                            and Malou N. Santos. In the film, it tells a love story between Popoy and Basha who are lovers since their college days and they 
                            became a couple. Suddenly, as they try to maintain their relationship, they have misunderstandings to each other due to their 
                            ambitions in life. As they almost break apart, the two will find solutions to repair their love.
                            One More Chance was released on November 14, 2007, by Star Cinema and grossed over ₱152.7 million nationwide, making it a box 
                            office success and received several year-end accolades. A sequel, A Second Chance, was released in November 2015. The 4K digital 
                            remaster of the film was released through iTunes on September 14, 2015, and a limited theatrical run on October 4, 2017
                        </p>
                    </MovieInfo>
                </div>
            </div>
        </div>
    )
}
