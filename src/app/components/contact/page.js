"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;
  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
    reset(); // Reset form fields
    setShowMessage(true); // Show the message
    setTimeout(() => {
      setShowMessage(false); // Hide the message after 3 seconds
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <div className="d-flex align-items-center justify-content-between my-4">
        <h2>Get in Touch</h2>
        <Link href="/">GO HOME</Link>
      </div>
      {showMessage && (
        <div className="alert alert-success mb-3" role="alert">
          I&apos;ll reach you soon!
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="contact" className="form-label">
          Contact
        </label>
        <input
          type="text"
          id="contact"
          className="form-control"
          {...register("contact", {
            required: "Contact is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.contact && (
          <div className="invalid-feedback">{errors.contact.message}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <textarea
          id="address"
          className="form-control"
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && (
          <div className="invalid-feedback">{errors.address.message}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
