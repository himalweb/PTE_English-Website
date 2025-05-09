import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="container footer-flex">

          <div className="footer-box">
            <div className="f-min-box">
              <h3>PTE Academic</h3>
              <p>Accepted worldwide for study and immigration.</p>
            </div>

            <div className="f-min-box">
              <h3>PTE Core</h3>
              <p>A general English test. Accepted in Canada for immigration.</p>
            </div>

            <div className="f-min-box">
              <h3>Tests for UK visas & immigration</h3>
              <p>PTE Academic UKVI and PTE Home A1, A2 & B1 – for study, work, or settling in the UK.</p>
            </div>
          </div>

          <div className="footer-useful-link">
            <h3>Useful links</h3>
            <p>About PTE <br />
              Preparation<br />
              Help Center<br />
              Find test centers and fees<br />
              Policy center<br />
              Test Taker Handbooks<br />
              Inspiration and advice<br />
              News and media<br />
              Research</p>
          </div>

          <div className="footer-useful-link">
            <h3>Destinations</h3>
            <p>Australia</p>
            <p> Canada</p>
            <p> New Zealand</p>
            <p> United Kingdom</p>
            <p> United States</p>
            <p>Other countries</p>
          </div>

          <div className="footer-social-icon">
            <img src="https://www.pearsonpte.com/assets/images/Logo.svg" alt="" />
            <p>Join the conversation</p>
            <div className="s-icon">
              <span className='f-icon'><FaFacebook /></span>
              <span className='f-icon'><FaYoutube /></span>
              <span className='f-icon'><FaInstagram /></span>
              <span className='f-icon'><FaTwitter /></span>
            </div>

          </div>



        </div>




      </footer>

      <div className="last-footer">
        <div className="container">
          UK accreditation
          Privacy policy
          Website terms and conditions
          Policy center
          Cookie Settings
        </div>
      </div>
    </>
  )
}

export default Footer
