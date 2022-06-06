import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItem, FooterLinksWrapper, FooterLinkTitle, FooterLink } from './FooterElements'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { SocialMediaWrap, SocialMedia, SocialLogo, WebsiteRight, SocialIconLink, SocialIcons } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
      }


  return (
    <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>   
                        <FooterLinkItem>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                                <FooterLink to='signin'>How it works</FooterLink>
                                <FooterLink to='signin'>Testimonials</FooterLink>
                                <FooterLink to='signin'>Careers</FooterLink>
                                <FooterLink to='signin'>Investors</FooterLink>
                                <FooterLink to='signin'>Terms of Service</FooterLink> 
                        </FooterLinkItem>      

                        <FooterLinkItem>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='signin'>Contact</FooterLink>
                                <FooterLink to='signin'>Destination</FooterLink>
                                <FooterLink to='signin'>Support</FooterLink>
                                <FooterLink to='signin'>Destination</FooterLink>
                                <FooterLink to='signin'>Sponsors</FooterLink>                         
                        </FooterLinkItem>                                           
                    </FooterLinksWrapper>


                    <FooterLinksWrapper>    
                        <FooterLinkItem>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to='signin'>Submit Videos</FooterLink>
                                <FooterLink to='signin'>Ambassador</FooterLink>
                                <FooterLink to='signin'>Agency</FooterLink>
                                <FooterLink to='signin'>Influencers</FooterLink> 
                        </FooterLinkItem>      

                                
                        
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>Dolla</SocialLogo>
                    <WebsiteRight>dolla © {new Date().getFullYear()} All Rights Reserved</WebsiteRight>
                    <SocialIcons>
                        <SocialIconLink to='/' target='_blank' arial-label='FaceBook'>
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink to='//www.instagram.com/' target='_blank' arial-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink to='//www.twitter.com/' target='_blank' arial-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>

                        <SocialIconLink to='//www.linkedin.com/' target='_blank' arial-label='LinkedIn'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    </>
  )
}

export default Footer