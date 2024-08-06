import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const emailData = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        "service_2gedva3",
        "template_p8ib4tj",
        emailData,
        "52gJBhhd75qEpz0uK",
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message sent successfully!");
        reset();
      })
      .catch((err) => {
        console.error("FAILED...", err);
        toast.error("Failed to send message. Please try again later.");
      });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-gray-100 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 text-white"
    >
      <div className="container mx-auto flex flex-wrap">
        <Toaster position="top-center" reverseOrder={false} />

        {/* Content Section */}
        <div className="flex-1 p-8">
          <motion.h2
            className="mb-4 text-5xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="mb-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Im always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a question
            or want to say hello, feel free to drop a message!
          </motion.p>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            I look forward to hearing from you!
          </motion.p>
        </div>

        {/* Form Section */}
        <div className="flex-1 p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-lg border border-gray-300 bg-white p-8 text-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <label className="mb-2 block text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`w-full border p-3 ${errors.name ? "border-red-500" : "border-gray-300"} rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-500`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <label className="mb-2 block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full border p-3 ${errors.email ? "border-red-500" : "border-gray-300"} rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-500`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label className="mb-2 block text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className={`w-full border p-3 ${errors.message ? "border-red-500" : "border-gray-300"} rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-500`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              className="rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg transition-colors duration-300 hover:bg-blue-700"
              whileHover={{ scale: 1.1 }}
            >
              Send
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
