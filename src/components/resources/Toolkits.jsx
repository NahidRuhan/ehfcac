
const Toolkits = () => {
  return (
    <div className="container mx-auto py-10 space-y-5">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-logoRed">Toolkits</h1>
      <p className="text-center text-xl">Download our specialized toolkits for ethical hacking, digital forensics, and cybersecurity.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Ethical Hacking Toolkit</h2>
          <p>Tools and resources for conducting ethical hacking and penetration testing.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Digital Forensics Toolkit</h2>
          <p>Software and guidelines for performing digital forensic investigations.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Cybersecurity Toolkit</h2>
          <p>Comprehensive resources for enhancing cybersecurity practices.</p>
        </div>
      </div>
    </div>
  );
};

export default Toolkits;
