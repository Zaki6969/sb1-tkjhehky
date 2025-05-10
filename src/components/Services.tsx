import React from 'react';
import { Truck, FileCheck, BarChart, HeadphonesIcon, ClipboardListIcon, ShieldCheck } from 'lucide-react';

export const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const Services = () => {
  const services = [
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Permit Application Assistance",
      description: "Expert help with all paperwork and application processes for transport permits, ensuring compliance with regulations."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fleet Management",
      description: "Comprehensive management of your trucking or courier fleet, optimizing routes and schedules for maximum efficiency."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Business Operations",
      description: "Day-to-day operational support to ensure your transport business runs smoothly and efficiently."
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "Ongoing Support",
      description: "Continuous professional support and advice for all aspects of your transport business."
    },
    {
      icon: <ClipboardListIcon className="w-6 h-6" />,
      title: "Compliance Monitoring",
      description: "Regular checks to ensure your business remains compliant with all relevant transport regulations."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Risk Management",
      description: "Identify and mitigate risks associated with transport operations to protect your business."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Transport Management Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive transport management services tailored to the needs of trucking and courier service companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            With our expert guidance, you can focus on growing your transport business while we handle the complexities of permits, compliance, and daily operations.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};