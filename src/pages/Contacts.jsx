import React from 'react'

const Contacts = () => {
  return (
    <div className='text-white text-center leading-[50px]'>
      <ul>
        <li>
          <h2>Location</h2>
          <p>
            <a href="https://www.google.com.ua/maps/place/%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4015698,30.2030527,10z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234?hl=ru">
              Kyiv, Ukraine
            </a>
          </p>
        </li>
        <li>
          <h2>Telegram</h2>
          <p>
            <a href="http://t.me/Defisto">+380939155084</a>
          </p>
        </li>
        <li>
          <h2>Email</h2>
          <p>
            <a href="mailto:criska7@gmail.com">dimayanovskyi@gmail.com</a>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Contacts