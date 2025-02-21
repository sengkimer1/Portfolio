'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form Submitted:', form);

        // Reset the form fields
        setForm({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="Contact">
            <h1 className="text-3xl sm:text-6xl md:text-5xl lg:text-6xl text-purple-600 font-extrabold text-center">CONTACT</h1>
            <div className="flex justify-center items-center">
                <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 gap-10 px-4 py-20">
                    {/* Contact Information Section */}
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold text-left text-purple-600">Get in Touch</h1>
                        <p className="text-gray-600">We would love to hear from you. Fill out the form and we'll get back to you as soon as possible.</p>
                        <p className="text-lg font-medium">Email: sengkimer17@gmail.com</p>
                        <p className="text-lg font-medium">Phone: +855 717 179 565</p>
                        <p className="text-lg font-medium">Address: Phnom Penh, Cambodia</p>
                    </div>

                    {/* Contact Form Section */}
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg shadow-purple-700 space-y-6 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name" className="block text-gray-700">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                    className="w-full p-2 mt-1 rounded-md border text-black border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                    className="w-full p-2 mt-1 rounded-md border text-black border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700">Phone:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your phone"
                                className="w-full p-2 mt-1 rounded-md border text-black border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700">Message:</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                placeholder="Enter your message"
                                className="w-full p-2 mt-1 rounded-md border text-black border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
