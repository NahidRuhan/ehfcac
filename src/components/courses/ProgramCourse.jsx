import Banner from "../shared/Banner";
import EducationalPrograms from "./EducationalPrograms";
import StudentTestimonials from "./StudentTestimonials";
import WorkshopsAndSeminars from "./WorkshopsAndSeminars";

const ProgramCourse = () => {
  return (
    <div className="space-y-24">
      <Banner></Banner>
      <EducationalPrograms></EducationalPrograms>
      <WorkshopsAndSeminars></WorkshopsAndSeminars>
      <StudentTestimonials></StudentTestimonials>
    </div>
  );
};

export default ProgramCourse;
