
// import Link from "next/link";
// import SectionHeading from "@/components/ui/SectionHeading";
// import { profile } from "@/data/profile";

// export default function ContactSection() {
//   return (
//     <section id="contact" className="bg-white px-5 py-24">
//       <div className="container mx-auto">
//         <SectionHeading
//           eyebrow="Get In Touch"
//           title="Contact Information"
//           description="For academic collaboration, professional communication, and institutional inquiries."
//         />

//         <div className="grid gap-6 md:grid-cols-3">
//           <div className="rounded-xl bg-slate-50 p-7">
//             <h3 className="font-bold text-slate-900">Email</h3>
//             <a
//               href={`mailto:${profile.email}`}
//               className="mt-3 block break-all text-amber-700 hover:underline"
//             >
//               {profile.email}
//             </a>
//           </div>

//           <div className="rounded-xl bg-slate-50 p-7">
//             <h3 className="font-bold text-slate-900">Phone</h3>
//             <a
//               href={`tel:${profile.phone}`}
//               className="mt-3 block text-amber-700 hover:underline"
//             >
//               {profile.phone}
//             </a>
//           </div>

//           <div className="rounded-xl bg-slate-50 p-7">
//             <h3 className="font-bold text-slate-900">Address</h3>
//             <p className="mt-3 text-slate-600">{profile.address}</p>
//           </div>
//         </div>

//         <div className="mt-10 flex flex-wrap gap-4">
//           <Link
//             href={profile.socialLinks.linkedin}
//             target="_blank"
//             className="rounded-md bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-amber-600"
//           >
//             LinkedIn
//           </Link>

//           <Link
//             href={profile.socialLinks.facebook}
//             target="_blank"
//             className="rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:border-amber-500"
//           >
//             Facebook
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Form Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  // Contact Information
  const contactItems = [
    {
      icon: Mail,
      title: "Email Address",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: MapPin,
      title: "Location",
      value: profile.address,
      href: null,
    },
  ];

  // Social Links
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      name: "LinkedIn",
      url: profile.socialLinks.linkedin,
    },
    {
      icon: FaFacebookF,
      name: "Facebook",
      url: profile.socialLinks.facebook,
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/RezaerRabby",
    },
  ];

  // Animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-5 py-24 dark:bg-slate-950 sm:px-8"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative container mx-auto max-w-7xl">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          description="For academic collaboration, professional communication, and institutional inquiries."
        />

        {/* Main Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* LEFT SIDE - CONTACT INFORMATION */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-7 shadow-xl dark:border-white/10 sm:p-10"
          >
            {/* Card Background */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

            <div className="relative">

              <motion.span
                variants={itemVariants}
                className="text-sm font-semibold uppercase tracking-[3px] text-amber-400"
              >
                Contact Information
              </motion.span>

              <motion.h3
                variants={itemVariants}
                className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl"
              >
                Let's Start a{" "}
                <span className="text-amber-400">
                  Conversation.
                </span>
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="mt-5 max-w-md text-sm leading-7 text-slate-400"
              >
                Have a project in mind or want to discuss a
                professional opportunity? Feel free to contact me.
                I would love to hear from you.
              </motion.p>

              {/* Contact Cards */}
              <div className="mt-10 space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <div className="group flex items-center gap-5 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:translate-x-2 hover:border-amber-500/30 hover:bg-amber-500/5">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-slate-950">
                        <Icon size={22} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                          {item.title}
                        </p>

                        <p className="mt-1 break-words text-sm font-medium text-slate-200">
                          {item.value}
                        </p>
                      </div>

                      {item.href && (
                        <ArrowUpRight
                          size={18}
                          className="shrink-0 text-slate-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-400"
                        />
                      )}
                    </div>
                  );

                  return (
                    <motion.div
                      key={item.title}
                      variants={itemVariants}
                    >
                      {item.href ? (
                        <a href={item.href}>
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="relative mt-12"
            >
              <div className="mb-5 h-px w-full bg-white/10" />

              <h4 className="mb-5 text-sm font-semibold text-white">
                Follow Me On
              </h4>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.div
                      key={social.name}
                      whileHover={{
                        y: -6,
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                    >
                      <Link
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950"
                      >
                        <Icon size={20} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-xl dark:border-white/10 dark:bg-slate-900 sm:p-10"
          >

            {/* Form Heading */}
            <div className="mb-8">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-amber-600 dark:text-amber-400">
                Send Me a Message
              </span>

              <h3 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                Get In Touch
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Fill out the form below and let's discuss your project.
              </p>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-amber-500 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:bg-amber-400"
              >
                Send Message

                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
