
const services = [
  {
    title: 'Cybersecurity Consultancy',
    description: 'Providing tailored cybersecurity solutions and strategies for businesses and organizations to enhance their security posture.',
    servicesOffered: ['Security assessments', 'Compliance audits', 'Security policy development']
  },
  {
    title: 'Incident Response',
    description: 'Expert assistance in handling and mitigating cyber incidents and breaches to minimize damage and recover swiftly.',
    servicesOffered: ['Incident analysis', 'Containment and eradication', 'Recovery planning']
  },
  {
    title: 'Digital Forensics Investigation',
    description: 'Comprehensive digital forensics services to support legal cases and internal investigations, ensuring integrity and accuracy.',
    servicesOffered: ['Evidence collection and analysis', 'Forensic reporting', 'Expert witness testimony']
  },
  {
    title: 'Penetration Testing',
    description: 'Conducting thorough penetration tests to identify and address vulnerabilities in systems and networks before they can be exploited.',
    servicesOffered: ['Network penetration testing', 'Web application testing', 'Social engineering assessments']
  }
];

const ExpertServices = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center text-3xl md:text-5xl font-bold my-10 text-logoRed">Expert Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="mb-4">{service.description}</p>
            <h3 className="text-lg font-semibold mb-2">Services Offered:</h3>
            <ul className="list-disc list-inside">
              {service.servicesOffered.map((offeredService, idx) => (
                <li key={idx}>{offeredService}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertServices;
