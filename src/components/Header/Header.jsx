import './Header.css';
import React, { useState } from 'react';

function Header(){

   const [isCartOpen, setCartOpen] = useState(false);
 

   const toggleMenu = () => {
      setCartOpen((prevIsOpen) => !prevIsOpen);
    };

   return <div className="header_container">
    <header>
        <nav>
         <ul>
            <a href="/"><img src="/logo.jpeg"/></a>
            <li>
               <a href="/protect">보호 아이 찾기</a>
            </li>
            <li>
               <a href="/point">보호 아이들</a>
               </li>
            <li>
               <a href="/community">입양 후 소식</a>
               </li>
            <li>
               <a href="/">절차 및 관리</a>
               </li>
            <li><a href="/faq">FAQ</a></li>
            <a href="/login"><img src="/icon-user.svg"/></a>
         </ul>
        </nav>
      </header>
   </div>
}

export default Header;