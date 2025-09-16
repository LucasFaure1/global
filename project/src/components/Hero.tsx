import React from 'react';
import { ArrowRight, Play, Zap, Bot } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>#1 Plataforma de Automatización IA</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Automatiza Tu
              <span className="block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                Negocio con IA
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Transforma tus operaciones con automatización inteligente y agentes de IA. 
              Creamos soluciones de IA personalizadas que trabajan 24/7 para optimizar 
              tus procesos y aumentar la productividad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://wa.me/541124684985', '_blank')}
                className="group bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Comenzar a Automatizar
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver IA en Acción
              </button>
            </div>
            
            <div className="flex items-center space-x-6 pt-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Automatizaciones</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600">Tiempo Ahorrado</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">Agentes IA</div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative max-w-md mx-auto">
            <div className="bg-gradient-to-r from-blue-700 to-cyan-500 rounded-2xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-xl p-4 -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  {/* AI Dashboard Mockup */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-semibold text-blue-700">Panel de Control IA</div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Agentes Activos</span>
                        <span className="font-bold text-blue-700">24/7</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-blue-700 to-cyan-500 h-1.5 rounded-full w-4/5 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Live Automation Demo */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-semibold text-green-700">Automatización en Vivo</div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Emails procesados</span>
                        <span className="font-bold text-green-700">1,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Leads calificados</span>
                        <span className="font-bold text-green-700">89</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tiempo ahorrado</span>
                        <span className="font-bold text-green-700">32h</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Simulation */}
                  <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center">
                        <Bot className="w-2.5 h-2.5 text-white" />
                      </div>
                      <div className="bg-blue-700 text-white px-2 py-1 rounded-lg text-xs max-w-28">
                        ¡Hola! ¿Cómo puedo ayudarte hoy?
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 justify-end">
                      <div className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg text-xs max-w-28">
                        Necesito automatizar mi proceso de ventas
                      </div>
                      <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center">
                        <Bot className="w-2.5 h-2.5 text-white" />
                      </div>
                      <div className="bg-blue-700 text-white px-2 py-1 rounded-lg text-xs max-w-32">
                        Perfecto! Te ayudo a crear un agente IA para eso...
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 justify-end">
                      <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-xs max-w-40">
                        ¿Cuánto tiempo me tomaría implementarlo?
                      </div>
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center">
                        <Bot className="w-3 h-3 text-white" />
                      </div>
                      <div className="bg-blue-700 text-white px-3 py-2 rounded-lg text-xs max-w-36">
                        ¡Solo 48 horas! Y estará funcionando 24/7
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-green-50 p-2 rounded-lg text-center">
                      <div className="text-base font-bold text-green-700">95%</div>
                      <div className="text-xs text-green-600">Eficiencia</div>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg text-center">
                      <div className="text-base font-bold text-blue-700">24/7</div>
                      <div className="text-xs text-blue-600">Operativo</div>
                    </div>
                  </div>
                  
                  {/* Real-time Processing */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                    <div className="text-sm font-semibold text-purple-700 mb-2">Procesamiento en Tiempo Real</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">Tareas completadas hoy</span>
                        <span className="font-bold text-purple-700">2,847</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-purple-600 to-pink-500 h-1.5 rounded-full w-3/4 animate-pulse"></div>
                        </div>
                        <span className="text-xs font-bold text-purple-700">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -left-2 w-12 h-12 bg-cyan-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;