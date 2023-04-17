import React from 'react';
import './Header.css'

const Header = () => {

   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   const date = new Date();

   let month = months[date.getMonth()];
   let day = `${date.getDate()}th`;

    return(
        <header>
            <h1>
                <span>{month}</span>
                <span>{day}</span>
            </h1>
        </header>
    )
}

export default Header;