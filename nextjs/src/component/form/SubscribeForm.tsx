"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  email: string;
};

const SubscribeForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Perform any additional actions before or after submitting data
    console.log(data);

    // Show a success toast
    toast.success("Subscription successful!");

    // Reset the form to default values
    reset();
  };

  return (
    <form
      action="#"
      className="nk-nwsltr-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="email"
        {...register("email", { required: true })}
        id="nk-nwsltr-email"
        placeholder="Enter Your email"
        required
      />
      <button type="submit" className="nk-def-btn">
        SUBSCRIBE <i className="fa-solid fa-arrow-up-right"></i>
      </button>
    </form>
  );
};

export default SubscribeForm;
