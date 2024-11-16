import React from 'react';
import { Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    // In a real application, you would send this data to your backend
    console.log('Contact form data:', data);
    // Simulate success
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <Mail className="mx-auto h-12 w-12 text-blue-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">Contact Us</h2>
          <p className="mt-2 text-gray-400">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="mt-12">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  className="block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}