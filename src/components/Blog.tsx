import type { DocumentData } from '@/app/blogs/page';
import Image from 'next/image';
import Link from 'next/link';

interface BlogProps {
    blog: DocumentData;
}
const Blog = ({ blog }: BlogProps) => {
    const { id, title, date, author, category, tags, image } = blog;
    return (
        <div className="card bg-base-100 shadow-sm group">
            <figure>
                <Image
                    src={image}
                    width={500}
                    height={300}
                    alt="Shoes"
                    className="group-hover:scale-105 duration-500 "
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <p>
                    {author} | {category} | {date}
                </p>
                <div className="card-actions flex items-center justify-between">
                    <div className="inline-flex gap-2">
                        {tags.map((tag) => (
                            <span
                                className=" border text-slate-800 border-blue-200 bg-blue-100 rounded-3xl py-1 px-2"
                                key={tag}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <Link
                        href={`/blogs/${id}`}
                        className="btn bg-black text-white hover:bg-slate-950 py-3 px-5 text-sm font-light rounded-xl"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
