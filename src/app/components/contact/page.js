"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import arrow from "../../assets/images/back-arrow-svgrepo-com.svg";
import Link from "next/link";
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm();
  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
    reset(); // Reset form fields
    setShowMessage(true);
    isValid?.name && isValid?.email && isValid?.message && isValid?.phone;
    setTimeout(() => {
      setShowMessage(false); // Hide the message after 3 seconds
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <div
        className={`${styles.getInTouch} d-flex align-items-center justify-content-between mb-4 py-3`}>
        <h1 className="mb-0">CONTACT ME</h1>
        <Link href="/">
          {" "}
          <Image src={arrow} alt="back-button" width={40} />
        </Link>
      </div>
      {showMessage && (
        <div className="alert alert-success mb-3" role="alert">
          I&apos;ll reach you soon!
        </div>
      )}
      <div className="container mt-5">
        <div className="row">
          <div className="mb-3 col-md-6 pe-2 pe-md-5">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`form-control ${
                errors.name ? "is-invalid" : isValid?.name ? "is-valid" : ""
              }`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>
          <div className="mb-3 col-md-6 ps-2 ps-md-5">
            <label htmlFor="name" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              id="contact"
              className={`form-control ${
                errors.contact
                  ? "is-invalid"
                  : isValid?.contact
                  ? "is-valid"
                  : ""
              }`}
              {...register("contact", {
                required: "Phone Number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.contact && (
              <div className="invalid-feedback">{errors.contact.message}</div>
            )}
          </div>
          <div className="mb-3 col-md-6 mt-4 pe-2 pe-md-5">
            <label htmlFor="contact" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className={`form-control ${
                errors.email ? "is-invalid" : isValid?.email ? "is-valid" : ""
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-3 col-md-6 mt-4 ps-2 ps-md-5">
            <label htmlFor="address" className="form-label">
              Location
            </label>
            <input
              id="address"
              className={`form-control ${
                errors.address
                  ? "is-invalid"
                  : isValid?.address
                  ? "is-valid"
                  : ""
              }`}
              {...register("address", {
                required: "Please provide an address",
              })}
            />
            {errors.address && (
              <div className="invalid-feedback">{errors.address.message}</div>
            )}
          </div>

          <div className="mb-3 mt-4">
            <label htmlFor="address" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              className={`form-control ${
                errors.message
                  ? "is-invalid"
                  : isValid?.message
                  ? "is-valid"
                  : ""
              }`}
              {...register("message", {
                required: "If any message",
              })}
            />
            {errors.message && (
              <div className="invalid-feedback">{errors.message.message}</div>
            )}
          </div>
          <div className={styles.formBtn}>
            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
