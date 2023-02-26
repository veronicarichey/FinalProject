import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const ContactUs = () => {
    const [data, setData] = useState({name:"", email:"", message:""});

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value})
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data);
}

  return (
    <Form method='post' onSubmit={handleSubmit}>
      <h1>Contact Us Here</h1>  

      <Form.Label className="form-label">Email address</Form.Label>
      <input type="email" name="email" onChange={handleChange} value={data.email} placeholder="name@example.com" />

      <Form.Label>Name</Form.Label>
      <input type="name" name="name" onChange={handleChange} value={data.name} placeholder="Full Name" />

      <Form.Label>Message</Form.Label>
      <textarea name="message" cols="10" rows="10" onChange={handleChange} value={data.message} placeholder='Type here...' />
      <Button type="submit">Send</Button>
    </Form>
  );
}

export default ContactUs;