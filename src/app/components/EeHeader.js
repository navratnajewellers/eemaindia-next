/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
'use client';

import { FaPlus, FaMinus } from 'react-icons/fa';
import MenuIcon from '@rsuite/icons/Menu';
import { Drawer } from 'rsuite';
import { useState } from 'react';
import '../styles/header.css';

export default function EeHeader() {
  const [isOpen, setIsOpen] = useState(false);
  // for the nav in drawer, opening options
  const [open, setOpen] = useState(false);

  // console.log("is on Mobile device", isMobile);

  //Desktop Header
  const DesktopHeader = () => {
    return (
      <header className="header-container custom-flex ">
        <a href="/" className="imageWrapper company-logo-container ">
          <img src="/images/company-logo.svg" alt="company-logo"></img>
        </a>
        <section className="custom-flex h-nav-container">
          <a href="/aboutus">About Us</a>

          <a href="/members">Members</a>

          <a href="/eemagine">EEMagine 2024</a>

          <a href="/eemaxglobal">EEMax Global</a>

          <a href="/carrer">Carrers</a>
        </section>
        <section className="menu-icon-container cursor-pointer ">
          <MenuIcon
            style={{ fontSize: '2em' }}
            onClick={() => setIsOpen(!isOpen)}
            className="main-color"
          />
        </section>
      </header>
    );
  };

  return (
    <div>
      <DesktopHeader />
      <div>
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          placement="left"
          className="m-header-drawer-container"
        >
          <Drawer.Header>
            <Drawer.Title className=" text-center main-color-imp ">
              EEMA INDIA
            </Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <div className="vertical_menu">
              <ul>
                <li className="menu-item">
                  <a href={`/`}>Home</a>
                </li>
                <li className="menu-item">
                  <a href={`#`}>About Us</a>
                </li>
                <li className="menu-item">
                  <a href={`#`}>Gallery</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#" onClick={() => setOpen(!open)}>
                    Members
                  </a>
                  <span
                    className="mobile-arrows"
                    onClick={() => setOpen(!open)}
                  >
                    {!open ? <FaPlus /> : <FaMinus />}
                  </span>
                  <ul className={`sub-menu ${open ? 'open' : ''}`}>
                    <li>
                      <a href={`#`}>Members Experience</a>
                    </li>
                    <li>
                      <a href={`#`}>Member Lists</a>
                    </li>
                    <li>
                      <a href={`#`}>New Member</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item">
                  <a href={`#`}>EEMagine 2024</a>
                </li>
                <li className="menu-item">
                  <a href={`#`}>EEMax Global</a>
                </li>
                <li className="menu-item">
                  <a href={`#`}>Spotlight Awards</a>
                </li>
                <li className="menu-item">
                  <a href={`#`}>Carrers</a>
                </li>
                <li className="menu-item">
                  <a href={`#`}>Contact Us</a>
                </li>
              </ul>
            </div>
          </Drawer.Body>
        </Drawer>
      </div>
    </div>
  );
}
