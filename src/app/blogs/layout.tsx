import type { ReactNode } from "react";

interface LayoutBlogProps{
    children: ReactNode;
}

const LayoutBlog = ({ children }: LayoutBlogProps) => {
  return (
    <div>
        {children}
    </div>
  );
};

export default LayoutBlog;