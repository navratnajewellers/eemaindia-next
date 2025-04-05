import { useState } from 'react';
import { Col, Loader, Row } from 'rsuite';
import ContactForm from './ContactForm';
import { motion } from 'motion/react';

const HomeContact = () => {
  const [isMapLoading, setIsMapLoading] = useState(true);

  return (
    <div className="contact-section2-container">
      <Row
        as={motion.div}
        className="ct-sec2-header text-center "
        initial={{ opacity: 0, translateY: 45 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h4 className="main-color">Contact details</h4>
        <h2>Happy to Answer All Your Questions</h2>
      </Row>
      <Row
        as={motion.div}
        initial={{ opacity: 0, translateY: 45 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Col xs={24} sm={24} md={12} lg={12} className="ct-sec2-contactform">
          <ContactForm />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} className="ct-sec2-gmap-conatiner">
          <div className="ct-sec2-gmap">
            <Loader
              size="md"
              center
              content="loading"
              vertical
              className={isMapLoading ? '' : ' dis-none-imp '}
            />
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7365384940667!2d77.24790428885501!3d28.547637699999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce340ab79b197%3A0x3720d15cd5fb9b1f!2sHemkunt%20Tower!5e0!3m2!1sen!2sin!4v1721993932794!5m2!1sen!2sin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.3619707349953!2d77.20283947408963!3d28.52883788878457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1fd1caede81%3A0xfb65c4866f92da37!2sWeWork!5e0!3m2!1sen!2sin!4v1742474630657!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsMapLoading(false)}
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeContact;
