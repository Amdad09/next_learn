import Image from "next/image";
import { blogs } from "../page";

interface BlogPageProps {
    params: Promise<{ blogId: string }>;
}
const BlogPage = async ({ params }: BlogPageProps) => {
    const { blogId } = await params;
    const blog = blogs.find(blog => blog.id === blogId);
    if(!blog) return <div>Blog not Found!</div>
    const { title, date, author, category, tags, image } = blog;
    return (
        <>
            {blog && (
                <div className="card bg-slate-950 py-12 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>
                            {author} | {category} | {date}
                        </p>
                    </div>
                    <figure>
                        <Image
                            src={image}
                            width={500}
                            height={300}
                            alt="Shoes"
                            className="group-hover:scale-105 duration-500 "
                        />
                    </figure>
                    <div className="inline-flex gap-2 py-6">
                        {tags.map((tag: string) => (
                            <span
                                className=" border text-slate-800 border-blue-200 bg-blue-100 rounded-3xl py-1 px-2"
                                key={tag}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-sm text-slate-400">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Temporibus nulla eaque asperiores ullam nostrum,
                        quasi doloremque odio minus fuga at sequi eveniet.
                        Inventore dicta eligendi repudiandae, vel consequuntur
                        ratione quam aliquam quibusdam maiores consequatur, et,
                        recusandae labore quasi repellendus obcaecati.
                    </p>
                </div>
            )}
        </>
    );
};

export default BlogPage;
