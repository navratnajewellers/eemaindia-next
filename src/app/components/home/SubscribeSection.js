'use client';

import { useRef, useState } from 'react';
import { Button, Form, Modal, Schema } from 'rsuite';
import FormControl from 'rsuite/esm/FormControl';
import FormGroup from 'rsuite/esm/FormGroup';

const { StringType } = Schema.Types;

const model = Schema.Model({
  email: StringType()
    .isEmail('Please enter a valid email')
    .isRequired('Email is required'),
});

export default function SubscribeSection() {
  const [formValue, setFormValue] = useState({ email: '' });
  const [formError, setFormError] = useState({});
  const [showErrorModal, setShowErrorModal] = useState(false);
  const formRef = useRef();

  const handleSubmit = async () => {
    if (formRef.current && !formRef.current.check()) {
      setShowErrorModal(true);
      return;
    }

    // ✅ On valid submission
    // alert(`Subscribed with email: ${formValue.email}`);
    console.log(`Subscribed with email: ${formValue.email}`);

    // setFormValue({ email: '' });

    try {
      const response = await fetch('https://formspree.io/f/xdkewrlg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email: formValue.email }),
      });

      if (response.status == 200) {
        setFormValue({ email: '' });
        // setSuccessModal(true);
        console.log('email send sucessfully');
      } else {
        // setErrorMessage('Failed to submit. Please try again later.');
        // setShowErrorModal(true);
        console.log('error in sending');
      }
    } catch (error) {
      // setErrorMessage('Something went wrong.');
      // setShowErrorModal(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className=" subscribe-container ">
        <div>
          <h3>Keep in touch with EEMA INDIA, Subscribe to our newsletter</h3>
        </div>
        <Form
          fluid
          ref={formRef}
          model={model}
          formValue={formValue}
          onChange={setFormValue}
          onCheck={setFormError}
          className=" custom-flex "
        >
          <FormGroup style={{ marginBottom: 'auto', marginRight: '5px' }}>
            <FormControl name="email" placeholder="Enter your email" />
          </FormGroup>
          <Button appearance="primary" onClick={handleSubmit}>
            Subscribe
          </Button>
        </Form>
      </div>

      {/* ❌ Error Modal */}
      <Modal open={showErrorModal} onClose={() => setShowErrorModal(false)}>
        <Modal.Header>
          <Modal.Title>Validation Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{formError?.email && <p>{formError.email}</p>}</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowErrorModal(false)} appearance="primary">
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
