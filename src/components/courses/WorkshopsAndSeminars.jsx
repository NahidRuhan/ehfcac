
const WorkshopsAndSeminars = () => {
  const topics = [
    { title: 'AI in Cybersecurity', image: 'https://i.ibb.co/VQBkwmV/cyber-security.png' },
    { title: 'Blockchain Security', image: 'https://i.ibb.co/VQBkwmV/cyber-security.png' },
    { title: 'Advanced Ethical Hacking Techniques', image: 'https://i.ibb.co/VQBkwmV/cyber-security.png' },
    { title: 'Digital Forensics Best Practices', image: 'https://i.ibb.co/VQBkwmV/cyber-security.png' }
  ];

  return (
    <div className="container mx-auto my-10 space-y-5">
      <h1 className="text-center text-3xl md:text-5xl font-bold my-10 text-logoRed">Workshops and Seminars</h1>
      <div className="bg-white p-6">
        <p className="text-lg mb-4">
          We regularly host workshops and seminars led by industry experts to keep students and professionals updated with the latest trends and techniques in cybersecurity. Topics include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topics.map((topic, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow h-60 flex flex-col items-center">
              <img src={topic.image} alt={topic.title} className="w-1/2 h-32 object-cover rounded-t-lg mb-4" />
              <p className="text-center text-lg font-semibold">{topic.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkshopsAndSeminars;
