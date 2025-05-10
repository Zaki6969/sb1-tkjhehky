import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marco Rossi",
      company: "Rossi Logistics",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "The permit application process seemed overwhelming until I hired this service. They guided me through every step, and now my trucking business is fully operational. The monthly fee is well worth the expertise and time saved.",
      rating: 5
    },
    {
      id: 2,
      name: "Sofia Schmidt",
      company: "Express Courier GmbH",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "As someone new to the transport industry, having professional support has been invaluable. They handle the complex regulations while I focus on growing my client base. Highly recommended for any transport business.",
      rating: 5
    },
    {
      id: 3,
      name: "Jean Dupont",
      company: "Dupont Freight Services",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "Their expertise saved me months of research and prevented costly mistakes with regulations. The operational advice has helped me optimize routes and reduce costs. One of the best business decisions I've made.",
      rating: 4
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from transport business owners who have successfully launched and grown their operations with our support.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <div className="flex-shrink-0">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-blue-100" 
                          />
                        </div>
                        <div>
                          <div className="flex gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
                          <div>
                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                            <p className="text-gray-500 text-sm">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 focus:outline-none transition md:-translate-x-5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 focus:outline-none transition md:translate-x-5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};