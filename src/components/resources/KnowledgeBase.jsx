
const KnowledgeBase = () => {
  return (
    <div className="container mx-auto  space-y-5">
      <h1 className="text-center text-3xl md:text-5xl font-bold my-10 text-logoRed">Knowledge Base</h1>
      <p className="text-center text-xl">Access a wealth of resources including white papers, case studies, and best practices in cybersecurity.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">White Papers</h2>
          <p>In-depth reports on various cybersecurity topics authored by EHFCAC experts.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
          <p>Detailed analyses of successful projects and their outcomes.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <p>Guides and checklists for implementing effective cybersecurity measures.</p>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
