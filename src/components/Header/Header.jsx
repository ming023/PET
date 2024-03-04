import "./Header.css";
import React, { useState } from "react";

function Header() {
  return (
    <div className="header_container">
      <header>
        <nav>
          <ul>
            <a href="/">
              <img src="/logo.jpeg" />
            </a>
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
              <a href="/process">절차 및 관리</a>
            </li>
            <li>
              <a href="/system">입양 시스템</a>
            </li>
            <a href="/login">
              <img src="/icon-user.svg" />
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
