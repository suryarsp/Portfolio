import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  email: string;
  message: string;
};
const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Perform any additional actions before or after submitting data
    console.log(data);

    // Show a success toast
    toast.success("Message submitted successfully!");

    // Reset the form to default values
    reset();
  };
  return (
    <form
      action="#"
      className="nk-contact-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        id="nk-contact-form-name"
        placeholder="Your Full Name"
        {...register("name")}
        required
      />
      <input
        type="email"
        id="nk-contact-form-email"
        placeholder="Email Address"
        {...register("email")}
        required
      />
      <textarea
        id="nk-contact-form-message"
        rows={10}
        placeholder="Your Message"
        {...register("message")}
        required
      ></textarea>
      <button type="submit" className="nk-def-btn">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
