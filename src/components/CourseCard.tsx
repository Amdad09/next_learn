type CourseCardProps = {
    title: string;
    description: string;
    level: string;
};

const CourseCard = ({ title, description, level }: CourseCardProps) => {
    return (
        <article className="rounded-2xl border border-slate-200 bg-slate-800 p-6 shadow-sm">
            <span className="text-sm font-medium text-blue-600">{level}</span>

            <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>

            <p className="mt-3 text-slate-200">{description}</p>

            <button className="mt-5 rounded-lg bg-slate-900 px-4 py-2 text-white cursor-pointer">
                Learn More
            </button>
        </article>
    );
};

export default CourseCard;
