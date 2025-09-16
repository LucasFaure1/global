import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'CEO, RetailCorp',
      content: 'Los agentes de IA de Global Automate manejan el 80% de nuestras consultas de clientes automáticamente. Nuestro tiempo de respuesta mejoró dramáticamente.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Director de Operaciones, LogiFlow',
      content: 'Los sistemas de automatización que construyeron nos ahorraron 40 horas por semana. Nuestro equipo ahora puede enfocarse en trabajo estratégico.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100'
    },
    {
      name: 'Ana López',
      role: 'Fundadora, ServicePro',
      content: 'Su chatbot de IA maneja consultas complejas mejor que nuestros agentes humanos. La satisfacción del cliente está en su punto más alto.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Historias de Éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones de automatización IA han transformado 
            empresas de diversas industrias, entregando resultados medibles
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-blue-700 mb-4" />
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;