import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        services: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // You can add your logic for form submission, API calls, etc.
      };
    return (
        <div>
        <div className="my-10 space-y-5">
          <div>
            <h1 className="text-5xl font-bold my-10 text-center text-logoRed">
              {/* <AiFillAliwangwang></AiFillAliwangwang> */}
            Get in Touch</h1>
            <p className="text-center">We&apos;d love to hear from you. Whether you have a question about our programs, services, or research, our team is here to help.</p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:justify-around gap-5">
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-box flex gap-3">
              <div className="card-body bg-green-600 text-white rounded-btn">
                <h2 className="card-title text-white">Address:</h2>
                <p>Canadian University Of Bangladesh</p>
                <p>Rangs RL Square Pragati Sharani (Bir uttam Rafiqul Islam Avenue), Dhaka-1212, Bangladesh</p>
  
                <h2 className="text-white font-bold">Call Us at:</h2>
                <p>(+880)1388463330 <br></br>(+880)13274393332</p>
  
                <h2 className="text-white font-bold">Mail Us at:</h2>
                <p>ethicalhacking@cub.edu.bd</p> 
              </div>
            </div>
            <div className="lg:w-1/2 lg:ml-4 p-5 rounded-md bg-gray-100 hover:bg-red">
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-4 p-1  hover:bd-logoRed">
                <div className="md:flex md:items-center mb-4">
                        <div className="md:w-1/2 px-2">
                          <input
                            type="text"
                            placeholder="Name:"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input mt-1 w-full rounded focus:border-logoRed"
                            required
                          />
                        </div>
  
                        <div className="md:w-1/2 mt-4 md:mt-0 px-2">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email:"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input mt-1 w-full rounded focus:border-logoRed"
                            required
                          />
                        </div>
                      </div>
  
                      <div className="md:flex md:items-center mb-4 px-2">
                        <div className="md:w-1/2">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone:"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-input mt-1 w-full rounded focus:border-logoRed"
                            required
                          />
                        </div>
  
                        {/* <div className="md:w-1/2 mt-4 md:mt-0 px-2">
                          <select
                            name="services"
                            value={formData.services}
                            onChange={handleChange}
                            className="form-select mt-1 w-full rounded focus:border-logoRed"
                            placeholder="Services:"
                            required
                          >
                            <option value="">Select a service</option>
                            <option value="service1">Service 1</option>
                            <option value="service2">Service 2</option>
                            <option value="service3">Service 3</option>
                          </select>
                        </div> */}
                      </div>
  
                      <div className="mb-4">
                        <textarea
                          name="message"
                          placeholder="Message:"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-textarea mt-1 rounded w-full"
                          required
                        />
                      </div>
  
                      <button
                        type="submit"
                        style={{ marginBottom: '1.5em', marginTop: '-1em'}}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                      >
                        Submit
                      </button>
              </form>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Contact;