import CourseCard from "@/components/CourseCard";
const courses = [
    {
        title: 'React',
        description: 'Build interactive user interfaces with React.',
        level: 'Beginner',
    },
    {
        title: 'Next.js',
        description: 'Build modern full-stack applications with Next.js.',
        level: 'Intermediate',
    },
    {
        title: 'Backend',
        description: 'Learn APIs, databases and server-side development.',
        level: 'Intermediate',
    },
];
const CoursesPage = () => {
  return (
      <div className="grid md:grid-cols-3 gap-4 mt-10">
          {courses.map((course) => (
              <CourseCard
                  key={course.title}
                  title={course.title}
                  description={course.description}
                  level={course.level}
              />
          ))}
      </div>
  );
};

export default CoursesPage;