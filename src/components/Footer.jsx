import React from 'react'
import instagram from "../assets/icons/instagram.svg";
import linkedIn from "../assets/icons/linkedIn.svg";
import gitHub from "../assets/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="bg-slate-700">
    <div>
      <div>
        <ul className='flex gap-5 justify-center pt-5'>
          <li>
            <a href="https://github.com/Defisto7">
              <img src={gitHub} alt="Link" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dima-yanovskji-23670022a/">
              <img src={linkedIn} alt="Link" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/defisto77/">
              <img src={instagram} alt="Link" />
            </a>
          </li>
        </ul>
        <div>
          <p className='text-white text-center p-2'>© 2023 Dima Yanovskyi</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer