import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  email: string;
  comment: string;
};
const BlogCommentForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Perform any additional actions before or after submitting data
    console.log(data);

    // Show a success toast
    toast.success("Comment submitted successfully!");

    // Reset the form to default values
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="nk-comment-form">
      <div className="row">
        <div className="col-sm-6">
          <input
            type="text"
            id="nk-commenter-name-field"
            placeholder="Name"
            {...register("name")}
            required
          />
        </div>

        <div className="col-sm-6">
          <input
            type="email"
            id="nk-commenter-email-field"
            {...register("email")}
            placeholder="Email"
            required
          />
        </div>

        <div className="col-12">
          <textarea
            id="nk-commenter-txt-field"
            rows={10}
            placeholder="Type your comment here"
            {...register("comment")}
            required
          ></textarea>
        </div>

        <div className="col-12">
          <button type="submit" className="nk-def-btn">
            Post Comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default BlogCommentForm;
