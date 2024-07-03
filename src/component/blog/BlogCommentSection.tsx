import React from "react";
import BlogCommentForm from "../form/BlogCommentForm";

const BlogCommentSection = () => {
  return (
    <div className="nk-comment-form-area">
      <h4 className="nk-comment-form__title text-animate">Leave a comment</h4>
      <p className="nk-comment-form__sub-title">
        Your email address will not be published. Required fields are marked *
      </p>
      <BlogCommentForm />
    </div>
  );
};

export default BlogCommentSection;
