'use client';

import React, {ReactNode, useEffect} from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";

type PropType = {
    options?: EmblaOptionsType
    slides: ReactNode[]
}

const autoplayOptions = {
    delay: 4000,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
}

export const EmblaCarousel = (props: PropType) => {
    const { options, slides } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options,
        [
                Autoplay(autoplayOptions),
                ]
        )
    useEffect(() => {
        if (emblaApi) {
            // console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
