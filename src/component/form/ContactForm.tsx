import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  "entry.609794493": string;
  "entry.295777740": string;
  "entry.921898051": string;
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
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdHjAxEQpQZy9_NnabYU3RxTvNuW8u_nBC6ssitxeXUeGCU2g/formResponse"
      className="nk-contact-form"
      target="_blank"
      // onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
         id="nk-contact-form-name"
        placeholder="Your Full Name"
       {...register("entry.609794493")}
        required
      />
      <input
        type="email"
        id="nk-contact-form-email"
        placeholder="Email Address"
       {...register("entry.295777740")}
        required
      />
      <textarea
        id="nk-contact-form-message"
        rows={10}
        placeholder="Your Message"
       {...register("entry.921898051")}
        required
      ></textarea>
      <button type="submit" className="nk-def-btn">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
