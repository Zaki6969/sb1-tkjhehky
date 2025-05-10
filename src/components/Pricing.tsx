import React from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const features = [
    "Day-to-day operational support",
    "Transport permit application assistance",
    "Regulatory compliance guidance",
    "Documentation management",
    "Business advice and consultation",
    "Monthly progress reports",
    "Email & phone support",
    "Regular compliance updates"
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            No hidden fees or long-term contracts. Just expert transport management services at a competitive monthly rate.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border border-blue-100 rounded-2xl overflow-hidden shadow-xl p-1">
            <div className="bg-white rounded-xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Transport Management Package</h3>
                  <p className="text-gray-600 mb-4">Complete solution for trucking and courier businesses</p>
                  
                  <div className="mt-6">
                    <div className="flex items-end gap-2">
                      <span className="text-5xl font-bold text-blue-800">€200</span>
                      <span className="text-gray-600 mb-1">/month</span>
                    </div>
                    <p className="text-gray-500 mt-2">No setup fees. No hidden charges.</p>
                  </div>

                  <div className="mt-8">
                    <a 
                      href="#contact" 
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-3 px-6 rounded-lg transition duration-300"
                    >
                      Get Started Today
                    </a>
                    <p className="text-sm text-gray-500 mt-2 text-center">30-day satisfaction guarantee</p>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Need customized services for a larger fleet or special requirements?
            </p>
            <a 
              href="#contact" 
              className="mt-2 inline-block text-blue-600 font-medium hover:text-blue-800 underline"
            >
              Contact us for a custom quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};