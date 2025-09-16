import React from 'react';
import { Users, Award, Target, Cpu } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Miembros del Equipo', value: '50+' },
    { icon: Award, label: 'Años en IA', value: '8+' },
    { icon: Target, label: 'Automatizaciones', value: '2000+' },
    { icon: Cpu, label: 'Agentes IA Desplegados', value: '500+' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Acerca de Global Automate
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Somos pioneros en automatización con IA, especializados en crear 
                agentes inteligentes y sistemas automatizados. Nuestra misión es 
                empoderar a las empresas con IA que trabaja incansablemente para optimizar operaciones.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Con años de experiencia en inteligencia artificial, hemos ayudado 
                a cientos de empresas a automatizar sus procesos, reducir costos 
                y escalar sus operaciones con soluciones inteligentes de IA.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <Icon className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-700 to-cyan-500 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Nuestros Valores</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-blue-700 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Innovación</h4>
                      <p className="text-gray-600">Liderando el futuro de la automatización IA</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Confiabilidad</h4>
                      <p className="text-gray-600">Sistemas de IA que funcionan perfectamente 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Eficiencia</h4>
                      <p className="text-gray-600">Maximizando la productividad a través de la automatización</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;