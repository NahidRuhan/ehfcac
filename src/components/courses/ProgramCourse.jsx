import Banner from "../shared/Banner";
import EducationalPrograms from "./EducationalPrograms";
import StudentTestimonials from "./StudentTestimonials";
import WorkshopsAndSeminars from "./WorkshopsAndSeminars";

const ProgramCourse = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 space-y-24">
      <EducationalPrograms></EducationalPrograms>
      <WorkshopsAndSeminars></WorkshopsAndSeminars>
      <StudentTestimonials></StudentTestimonials>
    </div>
    </div>

  );
};

export default ProgramCourse;
