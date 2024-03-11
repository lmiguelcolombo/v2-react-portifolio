import axios from 'axios';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data:', formData);

    axios
      .post(
        'https://getform.io/f/lbkoolpb',
        {
          message: formData.message,
        },
        { headers: { Accept: 'application/json' } }
      )
      .then((response) => {
        if (!response) {
          throw Error(
            'Your message has not been sent. Please, try again later.'
          );
        }
        alert(`Message sent successfully!`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} method="POST" className="contact-form">
      <div className="input">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <input
        type="hidden"
        name="_gotcha"
        style={{ display: 'none !important' }}
      />

      <div className="input">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn-filled-blue">
        Submit
      </button>
    </form>
  );
}

// function Input() {}
// function Textarea() {}
