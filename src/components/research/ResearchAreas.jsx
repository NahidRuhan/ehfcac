
const researchAreas = [
  {
    title: 'Cyber Threat Intelligence',
    description: 'Developing advanced techniques for threat detection and mitigation to protect against evolving cyber threats.',
    projects: ['AI-based threat detection systems', 'Predictive analytics for cyber threats'],
    image: 'https://i.ibb.co/VQBkwmV/cyber-security.png'
  },
  {
    title: 'Digital Forensics',
    description: 'Innovating methods for digital evidence collection, analysis, and presentation to support legal processes and investigations.',
    projects: ['Automated forensic analysis tools', 'Advanced data recovery techniques'],
    image: 'https://i.ibb.co/VQBkwmV/cyber-security.png'
  },
  {
    title: 'Blockchain Security',
    description: 'Exploring the security aspects of blockchain technology and its applications, ensuring secure implementation and operation.',
    projects: ['Smart contract security', 'Blockchain-based identity management'],
    image: 'https://i.ibb.co/VQBkwmV/cyber-security.png'
  },
  {
    title: 'Artificial Intelligence in Cybersecurity',
    description: 'Leveraging AI and machine learning to enhance cybersecurity measures, including threat detection and response.',
    projects: ['Machine learning algorithms for anomaly detection', 'AI-driven cybersecurity automation'],
    image: 'https://i.ibb.co/VQBkwmV/cyber-security.png'
  }
];

const ResearchAreas = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center text-3xl md:text-5xl font-bold my-10 text-logoRed">Research Areas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {researchAreas.map((area, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow h-auto flex flex-col">
            <img src={area.image} alt={area.title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
            <p className="mb-2">{area.description}</p>
            <h4 className="text-md font-semibold mb-1">Current Projects:</h4>
            <ul className="list-disc list-inside overflow-auto flex-grow">
              {area.projects.map((project, idx) => (
                <li key={idx}>{project}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchAreas;
