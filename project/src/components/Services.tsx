import React, { useState } from 'react';
import { Bot, MessageSquare, Workflow, Brain, Clock, BarChart3, X, CheckCircle, ArrowRight, Send, User, Zap, TrendingUp, Activity, AlertCircle, CheckCircle2, Play } from 'lucide-react';
import AIAgentDemo from './demos/AIAgentDemo';
import ChatbotDemo from './demos/ChatbotDemo';
import AutomationDemo from './demos/AutomationDemo';
import MLDemo from './demos/MLDemo';
import Operations24Demo from './demos/Operations24Demo';
import AnalyticsDemo from './demos/AnalyticsDemo';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [activeDemoPage, setActiveDemoPage] = useState<number | null>(null);

  const services = [
    {
      icon: Bot,
      title: 'Agentes de IA',
      description: 'Asistentes virtuales inteligentes que manejan atención al cliente, ventas y soporte de forma autónoma.',
      color: 'bg-blue-700',
      detailedInfo: {
        overview: 'Nuestros agentes de IA son asistentes virtuales avanzados que pueden manejar conversaciones complejas, resolver problemas y tomar decisiones inteligentes sin intervención humana.',
        benefits: [
          'Atención al cliente 24/7 sin interrupciones',
          'Reducción del 80% en tiempo de respuesta',
          'Manejo de múltiples consultas simultáneas',
          'Aprendizaje continuo de cada interacción',
          'Integración con sistemas existentes',
          'Escalabilidad automática según demanda'
        ],
        features: [
          'Procesamiento de lenguaje natural avanzado',
          'Memoria contextual de conversaciones',
          'Integración con CRM y bases de datos',
          'Análisis de sentimientos en tiempo real',
          'Escalación inteligente a humanos cuando es necesario'
        ]
      }
    },
    {
      icon: MessageSquare,
      title: 'Desarrollo de Chatbots',
      description: 'IA conversacional personalizada que interactúa con clientes y brinda soporte instantáneo en todos los canales.',
      color: 'bg-cyan-500',
      detailedInfo: {
        overview: 'Creamos chatbots inteligentes personalizados para tu marca que pueden manejar desde consultas simples hasta procesos de venta complejos.',
        benefits: [
          'Reducción del 70% en consultas repetitivas',
          'Aumento del 40% en conversiones',
          'Disponibilidad inmediata en múltiples plataformas',
          'Personalización completa según tu marca',
          'Análisis detallado de interacciones',
          'ROI medible desde el primer mes'
        ],
        features: [
          'Integración con WhatsApp, Facebook, web',
          'Flujos de conversación personalizables',
          'Base de conocimiento dinámica',
          'Handoff inteligente a agentes humanos',
          'Dashboard de métricas en tiempo real'
        ]
      }
    },
    {
      icon: Workflow,
      title: 'Automatización de Procesos',
      description: 'Optimiza tareas repetitivas y flujos de trabajo con automatización inteligente que aprende y se adapta.',
      color: 'bg-blue-600',
      detailedInfo: {
        overview: 'Automatizamos procesos empresariales complejos usando IA que se adapta y mejora continuamente, eliminando tareas manuales repetitivas.',
        benefits: [
          'Ahorro de 40+ horas semanales por proceso',
          'Reducción del 90% en errores humanos',
          'Procesamiento 10x más rápido',
          'Escalabilidad sin límites',
          'Integración con sistemas existentes',
          'ROI del 300% en promedio'
        ],
        features: [
          'RPA (Robotic Process Automation)',
          'Integración con APIs y bases de datos',
          'Workflows inteligentes adaptativos',
          'Monitoreo y alertas automáticas',
          'Reportes de rendimiento detallados'
        ]
      }
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Modelos de ML avanzados que analizan datos, predicen resultados y toman decisiones inteligentes.',
      color: 'bg-cyan-600',
      detailedInfo: {
        overview: 'Desarrollamos modelos de machine learning personalizados que analizan tus datos para generar insights accionables y predicciones precisas.',
        benefits: [
          'Predicciones con 95% de precisión',
          'Insights de datos en tiempo real',
          'Detección automática de patrones',
          'Optimización continua de procesos',
          'Reducción de costos operativos',
          'Ventaja competitiva basada en datos'
        ],
        features: [
          'Modelos predictivos personalizados',
          'Análisis de comportamiento de clientes',
          'Detección de anomalías automática',
          'Optimización de precios dinámicos',
          'Forecasting de demanda inteligente'
        ]
      }
    },
    {
      icon: Clock,
      title: 'Operaciones 24/7',
      description: 'Sistemas de IA que trabajan las 24 horas, asegurando que tu negocio nunca pare.',
      color: 'bg-blue-800',
      detailedInfo: {
        overview: 'Implementamos sistemas de IA que operan continuamente, monitoreando, respondiendo y optimizando tu negocio las 24 horas del día.',
        benefits: [
          'Negocio operativo 24/7/365',
          'Respuesta inmediata a incidentes',
          'Monitoreo continuo de sistemas',
          'Mantenimiento predictivo automático',
          'Escalabilidad automática de recursos',
          'Tranquilidad total para propietarios'
        ],
        features: [
          'Monitoreo inteligente de sistemas',
          'Alertas automáticas y resolución',
          'Backup y recuperación automática',
          'Optimización de recursos en tiempo real',
          'Reportes de uptime y rendimiento'
        ]
      }
    },
    {
      icon: BarChart3,
      title: 'Análisis de Rendimiento',
      description: 'Insights en tiempo real y reportes sobre el rendimiento de tu automatización y métricas de ROI.',
      color: 'bg-cyan-700',
      detailedInfo: {
        overview: 'Proporcionamos análisis profundo del rendimiento de tus automatizaciones con dashboards interactivos y reportes detallados de ROI.',
        benefits: [
          'Visibilidad completa de operaciones',
          'Identificación de oportunidades de mejora',
          'ROI medible y transparente',
          'Optimización basada en datos',
          'Reportes ejecutivos automatizados',
          'Toma de decisiones informada'
        ],
        features: [
          'Dashboards interactivos en tiempo real',
          'KPIs personalizados por industria',
          'Alertas inteligentes de rendimiento',
          'Reportes automatizados programables',
          'Análisis predictivo de tendencias'
        ]
      }
    }
  ];

  const openServiceModal = (index: number) => {
    setSelectedService(index);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const openDemoPage = (serviceIndex: number) => {
    setActiveDemoPage(serviceIndex);
    setSelectedService(null);
  };

  const closeDemoPage = () => {
    setActiveDemoPage(null);
  };

  // Render demo pages
  if (activeDemoPage !== null) {
    switch (activeDemoPage) {
      case 0: return <AIAgentDemo onBack={closeDemoPage} />;
      case 1: return <ChatbotDemo onBack={closeDemoPage} />;
      case 2: return <AutomationDemo onBack={closeDemoPage} />;
      case 3: return <MLDemo onBack={closeDemoPage} />;
      case 4: return <Operations24Demo onBack={closeDemoPage} />;
      case 5: return <AnalyticsDemo onBack={closeDemoPage} />;
      default: return null;
    }
  }

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Servicios de Automatización IA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creamos soluciones de automatización inteligente que transforman cómo 
              opera tu negocio, ahorrando tiempo y aumentando la eficiencia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  onClick={() => openServiceModal(index)}
                  className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-700 font-semibold group-hover:text-cyan-500 transition-colors">
                    <span>Ver detalles</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${services[selectedService].color} rounded-xl flex items-center justify-center`}>
                  {React.createElement(services[selectedService].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {services[selectedService].title}
                </h3>
              </div>
              <button
                onClick={closeServiceModal}
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Overview */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">¿Qué es este servicio?</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {services[selectedService].detailedInfo.overview}
                </p>
              </div>
              
              {/* Benefits */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Beneficios Principales</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {services[selectedService].detailedInfo.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Características Técnicas</h4>
                <div className="space-y-3">
                  {services[selectedService].detailedInfo.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-700 to-cyan-500 rounded-xl p-6 text-white text-center">
                <h4 className="text-xl font-bold mb-3">¿Interesado en este servicio?</h4>
                <p className="mb-4 opacity-90">
                  Hablemos sobre cómo podemos implementar {services[selectedService].title.toLowerCase()} en tu negocio
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => openDemoPage(selectedService)}
                    className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Probar Demo en Vivo
                  </button>
                  <button
                    onClick={() => {
                      const message = `Hola! Me interesa el servicio de ${services[selectedService].title}. ¿Podemos agendar una consulta?`;
                      window.open(`https://wa.me/541124684985?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-white"
                  >
                    Consultar por WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;