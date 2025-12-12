"use client";

import { useState } from "react";
import { Mail, Linkedin, Facebook, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Mock form submission
      console.log("Form submitted:", formData);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(false);
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "samiul@example.com",
      link: "mailto:samiul@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/samiulislam",
      link: "https://linkedin.com",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "/samiulislam",
      link: "https://facebook.com",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Contact</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s build something awesome together. Feel free to reach out
            for collaborations or just a friendly hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
              <h3 className="mb-6 text-2xl font-semibold">Send me a message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 p-4 bg-success/10 rounded-full">
                    <CheckCircle className="w-12 h-12 text-success" />
                  </div>
                  <h4 className="mb-2 text-success text-xl font-semibold">Message sent successfully!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-input-background border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? "border-destructive focus:ring-destructive/50"
                          : "border-input focus:ring-primary/50"
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-input-background border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-destructive focus:ring-destructive/50"
                          : "border-input focus:ring-primary/50"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-input-background border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message
                          ? "border-destructive focus:ring-destructive/50"
                          : "border-input focus:ring-primary/50"
                      }`}
                      placeholder="Tell me about your project or just say hi..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="mb-6 text-2xl font-semibold">Get in touch</h3>
                <p className="text-muted-foreground mb-8">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-lg bg-secondary hover:bg-accent transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="group-hover:text-primary transition-colors font-medium">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20">
                <h4 className="mb-3 text-lg font-semibold">Looking for a developer?</h4>
                <p className="text-sm text-muted-foreground">
                  I&apos;m currently available for freelance work and full-time
                  opportunities. Let&apos;s discuss how I can help bring your
                  ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

