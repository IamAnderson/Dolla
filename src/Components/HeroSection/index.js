import React from 'react'
import { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'
import Video from '../../Videos/video.mp4'
import {HeroContent, HeroH1, HeroBtnWrapper, HeroP, ArrowForward, ArrowRight} from './HeroElements'
import { Button } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover) 
    }

  return (
    <>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='/video/mp4' />
            </HeroBg>
        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>
                Sign Up for a new account today and recieve 250$ in credit towards your next payment.
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter = {onHover} onMouseLeave = {onHover}
                primary = "true"
                dark = 'true'
                >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>    

        </HeroContainer>
    </>
  )
}

export default HeroSection