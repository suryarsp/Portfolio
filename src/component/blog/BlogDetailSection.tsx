import React from "react";
import BlogDetailsHeading from "./BlogDetailsHeading";
import BlogDetailsLeft from "./BlogDetailsLeft";
import BlogDetailSidebar from "./BlogDetailSidebar";
interface Props {
  blogInfo: {
    id: number;
    category: string;
    date: string;
    title: string;
    slug: string;
    imgSrc: string;
  };
}
const BlogDetailSection = ({ blogInfo }: Props) => {
  return (
    <div className="nk-blog-details nk-section-spacing pt-0">
      <div className="nk-blog-details__img">
        <img src={blogInfo.imgSrc} alt="Blog Details Cover" />
      </div>
      <div className="container">
        <BlogDetailsHeading
          category={blogInfo.category}
          date={blogInfo.date}
          title={blogInfo.title}
        />

        <div className="row nk-blog-details__row justify-content-center">
          <div className="col-lg-8">
            <BlogDetailsLeft />
          </div>

          <div className="col-lg-4 col-md-8 col-10 col-xxs-12">
            <BlogDetailSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailSection;
