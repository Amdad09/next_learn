import Blog from '@/components/Blog';
import type { Metadata } from 'next';

export interface DocumentData {
    id: string;
    title: string;
    date: string;
    parent: string | null;
    order: number;
    author: string;
    category: string;
    image: string;
    tags: string[];
}

export const blogs: DocumentData[] = [
    {
        id: 'what-is-react',
        title: 'What is React?',
        date: '2026-09-17',
        parent: null,
        order: 1,
        author: 'Amdadul Haque',
        category: 'React',
        image: 'https://i.ibb.co.com/7NJ9Q9Lz/pexels-ekrulila-2255355.jpg',
        tags: ['react', 'javascript', 'frontend'],
    },
    {
        id: 'react-components',
        title: 'Understanding React Components',
        date: '2026-09-17',
        parent: 'what-is-react',
        order: 2,
        author: 'Amdadul Haque',
        category: 'React',
        image: 'https://i.ibb.co.com/7NJ9Q9Lz/pexels-ekrulila-2255355.jpg',
        tags: ['react', 'components', 'jsx'],
    },
    {
        id: 'javascript-closures',
        title: 'Understanding JavaScript Closures',
        date: '2026-09-17',
        parent: null,
        order: 3,
        author: 'Amdadul Haque',
        category: 'JavaScript',
        image: 'https://i.ibb.co.com/7NJ9Q9Lz/pexels-ekrulila-2255355.jpg',
        tags: ['javascript', 'closures', 'scope'],
    },
    {
        id: 'what-is-nextjs',
        title: 'What is Next.js?',
        date: '2026-09-17',
        parent: null,
        order: 4,
        author: 'Amdadul Haque',
        category: 'Next.js',
        image: 'https://i.ibb.co.com/7NJ9Q9Lz/pexels-ekrulila-2255355.jpg',
        tags: ['nextjs', 'react', 'web-development'],
    },
    {
        id: 'understanding-git',
        title: 'Understanding Git and GitHub',
        date: '2026-09-17',
        parent: null,
        order: 5,
        author: 'Amdadul Haque',
        category: 'Tools',
        image: 'https://i.ibb.co.com/7NJ9Q9Lz/pexels-ekrulila-2255355.jpg',
        tags: ['git', 'github', 'version-control'],
    },
];

export const metadata: Metadata = {
    title: 'Blogs page',
    description: 'Learning blogs',
};

const BlogsPage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-12'>
            {blogs.map((blog) => (
                <Blog key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default BlogsPage;
