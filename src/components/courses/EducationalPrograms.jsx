
const EducationalPrograms = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center text-3xl md:text-5xl font-bold my-10 text-logoRed">Educational Programs</h1>
      
      {/* Bachelor's in Cybersecurity */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-3xl font-bold mb-4">Bachelor’s in Cybersecurity</h2>
        <p><strong>Duration:</strong> 4 Years</p>
        <p className="mt-2"><strong>Overview:</strong> This comprehensive program is designed to equip students with foundational and advanced knowledge in cybersecurity, ethical hacking, and digital forensics. Students will learn about network security, cyber law, ethical hacking practices, and digital forensic techniques.</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Curriculum Highlights:</h3>
          <ul className="list-disc list-inside">
            <li><strong>Year 1:</strong> Introduction to Cybersecurity, Computer Networks, Programming Fundamentals</li>
            <li><strong>Year 2:</strong> Operating Systems Security, Database Security, Cyber Laws and Ethics</li>
            <li><strong>Year 3:</strong> Ethical Hacking Techniques, Network Security, Cyber Threat Intelligence</li>
            <li><strong>Year 4:</strong> Advanced Digital Forensics, Incident Response, Capstone Project</li>
          </ul>
        </div>
      </div>

      {/* Master's in Cyber Forensics and Security */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-3xl font-bold mb-4">Master’s in Cyber Forensics and Security</h2>
        <p><strong>Duration:</strong> 2 Years</p>
        <p className="mt-2"><strong>Overview:</strong> This advanced degree focuses on the technical and legal aspects of cyber forensics and security. Students will gain expertise in digital forensics, incident response, and cybersecurity management.</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Curriculum Highlights:</h3>
          <ul className="list-disc list-inside">
            <li><strong>Year 1:</strong> Advanced Forensics, Incident Response Techniques, Cybercrime Investigation</li>
            <li><strong>Year 2:</strong> Secure Software Development, Risk Management, Thesis Project</li>
          </ul>
        </div>
      </div>

      {/* Certification Programs */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-3xl font-bold mb-4">Certification Programs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Certified Ethical Hacker (CEH) */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Certified Ethical Hacker (CEH)</h3>
            <p><strong>Duration:</strong> 6 Months</p>
            <p className="mt-2"><strong>Overview:</strong> Provides the skills necessary to understand and identify weaknesses and vulnerabilities in target systems.</p>
            <div className="mt-4">
              <h4 className="font-semibold">Modules:</h4>
              <ul className="list-disc list-inside">
                <li>Ethical Hacking Essentials</li>
                <li>Network Scanning</li>
                <li>System Hacking</li>
                <li>Malware Threats</li>
              </ul>
            </div>
          </div>

          {/* Certified Forensic Investigator (CFI) */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Certified Forensic Investigator (CFI)</h3>
            <p><strong>Duration:</strong> 6 Months</p>
            <p className="mt-2"><strong>Overview:</strong> Equips professionals with the knowledge to perform detailed forensic investigations.</p>
            <div className="mt-4">
              <h4 className="font-semibold">Modules:</h4>
              <ul className="list-disc list-inside">
                <li>Evidence Collection</li>
                <li>Digital Forensic Tools</li>
                <li>Legal Considerations</li>
              </ul>
            </div>
          </div>

          {/* Certified Information Systems Security Professional (CISSP) */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Certified Information Systems Security Professional (CISSP)</h3>
            <p><strong>Duration:</strong> 6 Months</p>
            <p className="mt-2"><strong>Overview:</strong> Prepares individuals for roles in managing and implementing cybersecurity programs.</p>
            <div className="mt-4">
              <h4 className="font-semibold">Modules:</h4>
              <ul className="list-disc list-inside">
                <li>Security and Risk Management</li>
                <li>Asset Security</li>
                <li>Security Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalPrograms;
