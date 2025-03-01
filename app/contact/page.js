"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
// import Updates from '@/components/Updates';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
// import Email from "@/assets/icons/white_mail.png"
// import Whatsapp from "@/assets/icons/white_WA.png"
// import Facebook from "@/assets/icons/image.png"
import Link from 'next/link'
import Image from 'next/image'
import footerBg from "@/assets/images/heroBg3.png";
// import contactBg from "@/assets/images/contactBg3.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiry: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple submissions

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // If already submitting, prevent another request
    if (isSubmitting) return;

    setIsSubmitting(true); // Disable submit button

    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.inquiry) newErrors.message = "Inquiry is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false); // Re-enable button if validation fails
      return;
    }

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Email Sent Successfully!', {
          position: "top-right",
          autoClose: 2000,
          theme: "dark"
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          inquiry: "",
        });

        setErrors({});
      } else {
        toast.error('Failed to Send Email!', {
          position: "top-right",
          autoClose: 1000,
          theme: "dark"
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false); // Re-enable button after request is complete
    }
  };

  return (
    <>
      <ToastContainer />
      {/* <Updates /> */}
      <Navbar />

      <div className="min-h-screen mb-16 flex justify-center items-center bg-gradient-to-b from-lime-600 to-emerald-600   p-4" style={{ backgroundImage: `url(${footerBg.src})`,backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className="w-full sm:mt-[10rem] xs:mt-[10rem] lg:mt-[8rem] max-w-4xl flex-col-reverse backdrop-blur-2xl bg-white/60  text-black rounded-lg shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] p-6 md:p-10 flex md:flex-row" >
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-black">Contact Us</h2>
            <p className="text-black mb-6">Consultation</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 rounded  backdrop-blur-sm border border-black focus:border-[#5E9538] focus:outline-none"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 rounded backdrop-blur-sm border border-black focus:border-[#5E9538] focus:outline-none"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded backdrop-blur-sm border border-black focus:border-[#5E9538] focus:outline-none"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 rounded backdrop-blur-sm border border-black focus:border-[#5E9538] focus:outline-none"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <textarea
                  name="inquiry"
                  placeholder="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="w-full p-2 rounded backdrop-blur-sm border border-black focus:border-[#5E9538] focus:outline-none"
                  rows="4"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className={`w-full p-2 rounded text-white font-bold ${
                  isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-[#76B947] hover:bg-[#5E9538]"
                }`}
                disabled={isSubmitting} // Prevent multiple clicks
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/3 xs:mt-8 md:mt-0 md:ml-8 text-black">
            <h2 className="text-lg font-bold text-black">“Simplifying Health Goals by Offering Healthy Food for you”</h2>
            <h2 className="text-lg xs:hidden md:flex font-bold text-black mt-6">Contact Information</h2>
            <p className="mt-2 hover:text-black">Call Us: +91 97196 71243</p>
            <div className="flex gap-4 mt-2">
              <div className='uppercase sm:text-xs gap-4 flex'>
                {/* <Link href="mailto:greenheavenacademy2011@gmail.com"><Image src={Email} alt='email' width={30} height={30} /></Link>
                <Link href="https://wa.me/919058695869" target="_blank" rel="noopener noreferrer">
                  <Image src={Whatsapp} alt='email' width={30} height={30} />
                </Link>
                <Link href="https://www.facebook.com/Education.temple.G.H.E.Academy/" target='_blank' className="hover:text-blue-500"><Image src={Facebook} alt='email' width={30} height={30} /></Link> */}

              </div>
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
