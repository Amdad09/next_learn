import Link from 'next/link';

const Hero = () => {
    return (
        <section className="bg-slate-950 px-6 py-24 text-center text-white">
            <div className="mx-auto max-w-3xl">
                <p className="mb-4 font-semibold text-blue-400">
                    Learn by Building
                </p>

                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    Learn. Build. Grow.
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
                    Master modern web development through practical projects and
                    real-world concepts.
                </p>

                <Link
                    href="/courses"
                    className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
                >
                    Explore Courses
                </Link>
            </div>
        </section>
    );
};

export default Hero;
