import React, { useState } from 'react';
import { Building2, Hotel, MessageCircle, Clock, Users, TrendingUp, X, CheckCircle, ArrowRight, Phone, Calendar, Key, CreditCard, MapPin, Star } from 'lucide-react';

const Portfolio = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const cases = [
    {
      id: 1,
      industry: 'Inmobiliaria',
      icon: Building2,
      title: 'PropiedadesMax - Asistente IA 24/7',
      subtitle: 'Automatización Completa de Atención al Cliente',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        efficiency: '92%',
        response: '< 30 seg',
        leads: '+340%',
        satisfaction: '4.9/5'
      },
      overview: 'Implementamos un asistente de IA completo para PropiedadesMax, la inmobiliaria líder en Buenos Aires, que maneja desde consultas básicas hasta procesos de venta complejos.',
      challenge: 'PropiedadesMax recibía más de 500 consultas diarias pero solo podía atender el 30% durante horario comercial, perdiendo leads valiosos y frustrando clientes.',
      solution: 'Desarrollamos un asistente IA que funciona 24/7, integrado con su CRM, que puede mostrar propiedades, agendar visitas, calificar leads y hasta negociar precios.',
      results: [
        'Atención 24/7 sin interrupciones - nunca más se pierde un lead',
        '92% de consultas resueltas automáticamente sin intervención humana',
        'Tiempo de respuesta reducido de 4 horas a menos de 30 segundos',
        '340% aumento en leads calificados y conversiones',
        'Agendamiento automático de 150+ visitas semanales',
        'Integración completa con Zoho CRM y WhatsApp Business'
      ],
      features: [
        'Búsqueda inteligente de propiedades por criterios específicos',
        'Agendamiento automático de visitas con calendario sincronizado',
        'Calificación automática de leads con scoring IA',
        'Negociación de precios dentro de parámetros establecidos',
        'Seguimiento automático de clientes potenciales',
        'Reportes ejecutivos de rendimiento en tiempo real',
        'Integración con portales inmobiliarios (Zonaprop, Argenprop)',
        'Sistema de alertas para oportunidades de alta conversión'
      ],
      technologies: ['OpenAI GPT-4', 'WhatsApp Business API', 'Zoho CRM', 'Google Calendar', 'Webhook Automation'],
      color: 'from-blue-700 to-blue-900'
    },
    {
      id: 2,
      industry: 'Hotelería',
      icon: Hotel,
      title: 'HotelSuite Premium - Concierge IA',
      subtitle: 'Experiencia de Huésped Automatizada de Lujo',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        efficiency: '88%',
        response: 'Instantáneo',
        satisfaction: '4.8/5',
        revenue: '+25%'
      },
      overview: 'Creamos un ecosistema completo de automatización para HotelSuite Premium que transforma la experiencia del huésped desde la reserva hasta el checkout.',
      challenge: 'HotelSuite Premium quería ofrecer servicio de lujo 24/7 pero los costos de personal eran prohibitivos, especialmente para servicios de concierge nocturno.',
      solution: 'Desarrollamos un concierge IA multicanal que maneja reservas, servicios de habitación, recomendaciones locales, y coordina con staff humano cuando es necesario.',
      results: [
        'Servicio de concierge 24/7 sin costos adicionales de personal',
        '88% de solicitudes de huéspedes resueltas automáticamente',
        'Respuesta instantánea a cualquier hora del día o noche',
        '25% aumento en ingresos por servicios adicionales',
        'Reducción del 60% en quejas por tiempo de respuesta',
        'Integración perfecta con sistema de gestión hotelera (PMS)'
      ],
      features: [
        'Check-in/Check-out automático con códigos QR',
        'Servicio de habitación automatizado con tracking en tiempo real',
        'Recomendaciones personalizadas de restaurantes y actividades',
        'Gestión automática de amenities y servicios especiales',
        'Sistema de quejas y resolución automática',
        'Coordinación inteligente con housekeeping y mantenimiento',
        'Upselling automático de servicios premium',
        'Gestión de reservas de spa, restaurante y actividades',
        'Sistema de feedback automático post-estadía',
        'Integración con sistemas de facturación y POS'
      ],
      technologies: ['Claude AI', 'WhatsApp Business', 'Telegram Bot', 'PMS Integration', 'QR Code System', 'Payment Gateway'],
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      id: 3,
      industry: 'E-commerce',
      icon: TrendingUp,
      title: 'ShopFlow - Vendedor IA Personal',
      subtitle: 'Automatización de Ventas y Atención Personalizada',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        efficiency: '94%',
        conversion: '+180%',
        revenue: '+45%',
        support: '24/7'
      },
      overview: 'Transformamos ShopFlow con un vendedor IA que maneja todo el proceso de venta, desde la consulta inicial hasta el seguimiento post-venta.',
      challenge: 'ShopFlow perdía el 70% de sus leads porque no podían atender consultas fuera del horario comercial y el proceso de venta era lento y manual.',
      solution: 'Implementamos un vendedor IA que conoce todo el catálogo, puede recomendar productos, procesar órdenes y hacer seguimiento automático de clientes.',
      results: [
        'Ventas 24/7 sin límites de horario comercial',
        '94% de consultas convertidas en interacciones de venta',
        '180% aumento en tasa de conversión',
        '45% incremento en ingresos mensuales',
        'Tiempo de respuesta de menos de 5 segundos',
        'Seguimiento automático que recupera carritos abandonados'
      ],
      features: [
        'Recomendaciones de productos basadas en IA',
        'Procesamiento automático de órdenes y pagos',
        'Seguimiento inteligente de carritos abandonados',
        'Upselling y cross-selling automático',
        'Gestión de inventario en tiempo real',
        'Sistema de descuentos dinámicos',
        'Atención post-venta automatizada',
        'Análisis de comportamiento de compra',
        'Integración con sistemas de envío',
        'Reportes de ventas y tendencias automáticos'
      ],
      technologies: ['GPT-4 Turbo', 'Shopify API', 'Stripe Integration', 'WhatsApp Business', 'Email Automation'],
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  const openCaseModal = (index: number) => {
    setSelectedCase(index);
  };

  const closeCaseModal = () => {
    setSelectedCase(null);
  };

  return (
    <>
      <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Casos de Éxito Reales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo hemos transformado empresas reales con automatización IA, 
              generando resultados medibles y ROI comprobado
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((caseStudy, index) => {
              const Icon = caseStudy.icon;
              return (
                <div 
                  key={index}
                  onClick={() => openCaseModal(index)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${caseStudy.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium opacity-90">{caseStudy.industry}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {caseStudy.subtitle}
                      </p>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-green-700">{caseStudy.stats.efficiency}</div>
                        <div className="text-xs text-green-600">Eficiencia</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-blue-700">{caseStudy.stats.response}</div>
                        <div className="text-xs text-blue-600">Respuesta</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-blue-700 font-semibold group-hover:text-cyan-500 transition-colors">
                      <span>Ver caso completo</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedCase !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${cases[selectedCase].color} rounded-xl flex items-center justify-center`}>
                    {React.createElement(cases[selectedCase].icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {cases[selectedCase].title}
                    </h3>
                    <p className="text-gray-600">{cases[selectedCase].subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={closeCaseModal}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={cases[selectedCase].image} 
                  alt={cases[selectedCase].title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                  <div className="text-white p-8">
                    <div className="text-sm font-medium opacity-90 mb-2">{cases[selectedCase].industry}</div>
                    <h4 className="text-3xl font-bold mb-2">{cases[selectedCase].title}</h4>
                    <p className="text-lg opacity-90">{cases[selectedCase].subtitle}</p>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(cases[selectedCase].stats).map(([key, value], idx) => {
                  const labels = {
                    efficiency: 'Eficiencia',
                    response: 'Tiempo Respuesta',
                    leads: 'Aumento Leads',
                    satisfaction: 'Satisfacción',
                    conversion: 'Conversión',
                    revenue: 'Ingresos',
                    support: 'Soporte'
                  };
                  return (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                      <div className="text-gray-600 text-sm">{labels[key as keyof typeof labels]}</div>
                    </div>
                  );
                })}
              </div>
              
              {/* Overview */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Resumen del Proyecto</h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {cases[selectedCase].overview}
                </p>
              </div>
              
              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="text-lg font-bold text-red-800 mb-3">El Desafío</h4>
                  <p className="text-red-700 leading-relaxed">
                    {cases[selectedCase].challenge}
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="text-lg font-bold text-green-800 mb-3">Nuestra Solución</h4>
                  <p className="text-green-700 leading-relaxed">
                    {cases[selectedCase].solution}
                  </p>
                </div>
              </div>
              
              {/* Results */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Resultados Obtenidos</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {cases[selectedCase].results.map((result, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-100">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Funcionalidades Implementadas</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {cases[selectedCase].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Tecnologías Utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {cases[selectedCase].technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className={`bg-gradient-to-r ${cases[selectedCase].color} rounded-xl p-8 text-white text-center`}>
                <h4 className="text-2xl font-bold mb-3">¿Quieres resultados similares?</h4>
                <p className="mb-6 opacity-90 text-lg">
                  Podemos implementar una solución similar para tu {cases[selectedCase].industry.toLowerCase()}. 
                  Hablemos sobre cómo automatizar tu negocio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      const message = `Hola! Vi el caso de éxito de ${cases[selectedCase].title} y me interesa una solución similar para mi ${cases[selectedCase].industry.toLowerCase()}. ¿Podemos agendar una consulta?`;
                      window.open(`https://wa.me/541124684985?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Consultar por WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      window.location.href = 'mailto:faure.lucas02@gmail.com?subject=Consulta sobre automatización IA&body=Hola! Vi el caso de éxito y me interesa implementar algo similar en mi empresa.';
                    }}
                    className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors flex items-center justify-center"
                  >
                    Enviar Email
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

export default Portfolio;