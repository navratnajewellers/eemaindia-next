/* eslint-disable @next/next/no-img-element */
'use client';

import { Col, Container, Divider, Row } from 'rsuite';
import '../styles/footer.css';
import AnimatedText from './AnimatedText';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const EeFooter = () => {
  return (
    <Container className=" bg-black footer-container ">
      <Row className=" ft-content-container ">
        <Col xs={24} sm={24} md={6} lg={6} className=" ft-cont-sec1-container ">
          <div className="ft-cont-logo">
            <div className="imageWrapper">
              <img src="/images/company-logo.svg" alt="company-logo"></img>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={3} lg={3}>
          <div className="ft-cont-link">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="https://eemaindia.com/eema-regional-initiatives">
                  Regional Initiative
                </a>
              </li>
              <li>
                <a href="https://eemaindia.com/aboutus">About Us </a>
              </li>
              <li>
                <a href="https://eemaindia.com/privacy">Privacy</a>
              </li>
              <li>
                <a href="https://eemaindia.com/career">Careers</a>
              </li>
              <li>
                <a href="https://eemaindia.com/contact">Contact Us</a>
              </li>
              <li>
                <a href="https://eemaindia.com/eemaxglobal">EEMAX GLOBAL </a>
              </li>
              <li>
                <a href="https://eemaindia.com/eema-events">Events</a>
              </li>
              <li>
                <a href="https://eemaindia.com/press-coverage-eema">News</a>
              </li>
              <li>
                <a href="https://eemaindia.com/newsletter">Newsletter</a>
              </li>
              <li>
                <a href="https://eemaindia.com/eema-gallery">Gallery</a>
              </li>

              <li>
                <a href="https://eemaindia.com/be-an-eema-member">Join EEMA</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <div className="ft-cont-link pr-2 ">
            <h4>Important Documents</h4>
            <ul>
              <li>
                <a href="https://eemaindia.com/files/docs/EEMA-Board-Resolution-FOR-REPRESENTATIVE-FOR-EEMA-2024-Form.doc">
                  EEMA Board Resolution For Representative For EEMA 2024 Form
                </a>
              </li>
              <li>
                <a href="https://eemaindia.com/files/docs/Annexure-1–NOMINATION-FORM-For-EEMA-ELECTIONS-2024-26.docx">
                  Annexure 1 – Nomination form for EEMA elections 2024-26
                </a>
              </li>
              <li>
                <a href="https://eemaindia.com/files/docs/KRA-for-Zonal-Joint-Secretary.docx">
                  KRA for Zonal Joint Secretary
                </a>
              </li>
              <li>
                <a href="https://eemaindia.com/files/docs/KRA-for-zonal-committee-members.docx">
                  KRA For Zonal Committee Members
                </a>
              </li>
              <li>
                <a href="https://eemaindia.com/files/docs/NEW_EEMA_Constitution_FINAL_AMENDED_COPY_August_2023_24_.pdf">
                  EEMA Amended Constitution
                </a>
              </li>
              <li>
                <a href="https://eemaindia.com/files/docs/EEMA_Election_Schedule_2024_VP_.pdf">
                  EEMA Election Schedule 2024
                </a>
              </li>
              <li>
                <a href="/files/docs/EEMA_Election_Process_Manual_2024_VP_.pdf">
                  EEMA Election Process Manual 2024
                </a>
              </li>
              <li>
                <a href="https://eemaindia.com/files/docs/EEMA_AUDIT_REPORT_&amp;_BALANCE_SHEET_FY_2023_24_AY_2024-25_4.pdf">
                  EEMA AUDIT REPORT &amp; BALANCE SHEET FY 2023-24 (AY 2024-25)
                </a>
              </li>
              <li>
                <a
                  href="https://eemaindia.com/spotlightaward/winners-2024.php"
                  target="_blank"
                >
                  EEMA Spotlight Awards - South Winners List 2024
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={24} md={7} lg={7}>
          <div className=" ft-cont-contact ">
            <h4>Get In Touch</h4>
            <div className=" mb-6 ">
              <h5 className=" main-color ">ADMINISTRATION OFFICE:</h5>
              <p>
                E-330, Ground Floor, Greater Kailash Part – 2, New Delhi. 110048
                INDIA
              </p>
              <p>
                <a href="tel:+91(11)29211029">+91(11)29211029 / 30 / 31</a>{' '}
                <span className="ft-link-seperator-conatiner">|</span>
                <a href="tel:+91(11) 40074304">+91(11) 40074304</a>{' '}
                <span className="ft-link-seperator-conatiner">|</span>
                <a href="mailto:info@eemaindia.com">info@eemaindia.com</a>
              </p>
            </div>
            <div>
              <h5 className=" main-color ">REGISTERED OFFICE:</h5>
              <p>
                B-9, 3rd Floor, Greater Kailash Enclave part – 2, New Delhi-
                110048
              </p>
              <p>
                <a href="tel:011-40546007"> 011-40546007 </a>{' '}
                <span className="ft-link-seperator-conatiner">|</span>
                <a href="mailto:accounts@eemaindia.com">
                  {' '}
                  accounts@eemaindia.com{' '}
                </a>
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Divider />
      <Row className="ft-copyright-container">
        <Col xs={24} sm={24} md={12} lg={12}>
          <section className="ft-cp-sec1">
            <span className="ft-cp-content">
              &copy; Copyright {new Date().getFullYear()} - All Rights Reserved
              By
            </span>
            <a href="#">
              <AnimatedText text={`EEMA INDIA`} />
            </a>
          </section>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="footer-social-container">
            <ul>
              <li className="ft-social-icon">
                <a target="_blank" href="https://www.facebook.com/eemaindia/">
                  <FaFacebook size={20} />
                </a>
              </li>
              <li className="ft-social-icon">
                <a target="_blank" href="https://twitter.com/eemaindia?lang=en">
                  <FaXTwitter size={20} />
                </a>
              </li>
              <li className="ft-social-icon">
                <a target="_blank" href="https://www.instagram.com/eema.india/">
                  <FaInstagram size={20} />
                </a>
              </li>
              <li className="ft-social-icon">
                <a
                  target="_blank"
                  href="https://in.linkedin.com/company/event-entertainment-management-association"
                >
                  <FaLinkedin size={20} />
                </a>
              </li>

              <li className="ft-social-icon">
                <a target="_blank" href="https://www.youtube.com/@theeemaindia">
                  <FaYoutube size={28} />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EeFooter;
