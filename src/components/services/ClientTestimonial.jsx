
const testimonials = [
    {
      name: 'Nahid Pervej Ruhan',
      image: 'https://i.ibb.co/0GS38PS/image.png',
      text: 'The hands-on approach and the expert faculty at EHFCAC have provided me with the skills and confidence I need to excel in the cybersecurity field.'
    },
    {
      name: 'Tanvir Ahmed',
      image: 'https://i.ibb.co/0GS38PS/image.png',
      text: 'The diverse curriculum and real-world scenarios at EHFCAC have prepared me well for the challenges in the cybersecurity industry.'
    },
    {
      name: 'Jubayer Rahman',
      image: 'https://i.ibb.co/0GS38PS/image.png',
      text: 'EHFCAC’s focus on practical experience has been invaluable. The workshops and seminars led by industry experts have been particularly beneficial.'
    },
    {
      name: 'Ishraful Islam',
      image: 'https://i.ibb.co/0GS38PS/image.png',
      text: 'I have learned so much at EHFCAC. The faculty are knowledgeable and supportive, and the courses are up-to-date with the latest industry trends.'
    }
  ];
  
  const ClientTestimonial = () => {
    return (
      <div className="container mx-auto pb-10">
        <h1 className="text-center text-3xl md:text-5xl font-bold my-10 text-logoRed">Client Testimonials</h1>
        <p className="text-center mb-10">Hear from our clients about their experiences at EHFCAC.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow h-full flex flex-col items-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-full h-32 object-cover rounded-t-lg mb-4" />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-center mt-2">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ClientTestimonial;
  