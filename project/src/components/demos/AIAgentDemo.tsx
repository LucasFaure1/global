import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Bot, User, Send, Mic, MicOff, Volume2, Settings, Zap, CheckCircle, Clock, TrendingUp, MessageCircle, Phone, Calendar, FileText, Star } from 'lucide-react';

const AIAgentDemo = ({ onBack }: { onBack: () => void }) => {
  const [messages, setMessages] = useState([
    { 
      type: 'ai' as const, 
      message: '¡Hola! Soy tu Asistente IA Avanzado. Puedo ayudarte con consultas, agendar citas, procesar pedidos, analizar datos y mucho más. ¿En qué puedo ayudarte hoy?', 
      timestamp: new Date().toLocaleTimeString(),
      actions: ['Agendar Cita', 'Ver Productos', 'Soporte Técnico', 'Análisis de Datos']
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [stats, setStats] = useState({
    conversationsToday: 1247,
    avgResponseTime: '0.3s',
    satisfactionRate: 98.5,
    tasksCompleted: 3421
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        conversationsToday: prev.conversationsToday + Math.floor(Math.random() * 3),
        tasksCompleted: prev.tasksCompleted + Math.floor(Math.random() * 5)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const aiResponses = [
    {
      message: '¡Perfecto! He procesado tu solicitud. Te he agendado una cita para mañana a las 10:00 AM con el Dr. García. He enviado la confirmación por email y SMS. ¿Necesitas que agregue algún recordatorio especial?',
      actions: ['Ver Calendario', 'Modificar Cita', 'Agregar Recordatorio']
    },
    {
      message: 'Excelente consulta. He analizado tu historial de compras y te recomiendo nuestro Plan Premium que se adapta perfectamente a tus necesidades. Incluye 50% de descuento este mes. ¿Te preparo una cotización personalizada?',
      actions: ['Ver Cotización', 'Comparar Planes', 'Hablar con Vendedor']
    },
    {
      message: 'He revisado nuestro inventario en tiempo real. Tenemos 15 unidades disponibles del producto que buscas. El precio actual es $299 con envío gratis. ¿Quieres que procese tu pedido ahora mismo?',
      actions: ['Comprar Ahora', 'Agregar al Carrito', 'Ver Similares']
    },
    {
      message: 'He analizado tu caso y detecté una oportunidad de optimización que puede ahorrarte 30% en costos operativos. He generado un reporte detallado con recomendaciones específicas. ¿Te lo envío por email?',
      actions: ['Ver Reporte', 'Agendar Consulta', 'Implementar Ahora']
    },
    {
      message: 'Basándome en tus datos, he identificado 3 leads de alta conversión que requieren seguimiento inmediato. He preparado scripts personalizados y agendado llamadas automáticamente. ¿Quieres revisar la estrategia?',
      actions: ['Ver Leads', 'Revisar Scripts', 'Iniciar Campaña']
    }
  ];

  const sendMessage = () => {
    if (!userInput.trim()) return;
    
    const newMessage = { 
      type: 'user' as const, 
      message: userInput, 
      timestamp: new Date().toLocaleTimeString() 
    };
    setMessages(prev => [...prev, newMessage]);
    setUserInput('');
    setIsTyping(true);
    
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages(prev => [...prev, { 
        type: 'ai', 
        message: randomResponse.message, 
        timestamp: new Date().toLocaleTimeString(),
        actions: randomResponse.actions
      }]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickAction = (action: string) => {
    setMessages(prev => [...prev, { 
      type: 'user', 
      message: action, 
      timestamp: new Date().toLocaleTimeString() 
    }]);
    setIsTyping(true);
    
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        'Agendar Cita': '✅ ¡Cita agendada exitosamente! Te he reservado el horario más conveniente según tu calendario. Recibirás recordatorios automáticos.',
        'Ver Productos': '🛍️ He seleccionado los 5 productos más relevantes para ti basándome en tu historial. Todos tienen descuentos especiales disponibles.',
        'Soporte Técnico': '🔧 He diagnosticado el problema automáticamente. La solución se implementará en 2 minutos. Te mantendré informado del progreso.',
        'Ver Calendario': '📅 Tu calendario está optimizado. He reorganizado 3 reuniones para maximizar tu productividad y agregué tiempo de preparación.',
        'Comprar Ahora': '🛒 ¡Compra procesada! Pago confirmado, envío programado para mañana. Número de seguimiento: #AI2024-789',
        'Ver Reporte': '📊 Reporte generado con IA avanzada. Incluye 12 recomendaciones específicas que pueden aumentar tu ROI en 45%.'
      };
      
      setMessages(prev => [...prev, { 
        type: 'ai', 
        message: responses[action] || '✨ Procesando tu solicitud con IA avanzada. Tendrás resultados en segundos.',
        timestamp: new Date().toLocaleTimeString(),
        actions: ['Ver Detalles', 'Siguiente Paso', 'Optimizar Más']
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setUserInput('Necesito ayuda con automatización de mi proceso de ventas');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver a Servicios</span>
            </button>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">IA Activa</span>
              </div>
              <div className="text-white text-sm">
                Respuesta promedio: {stats.avgResponseTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stats Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-400" />
                Métricas en Tiempo Real
              </h3>
              <div className="space-y-4">
                <div className="bg-green-500/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">{stats.conversationsToday.toLocaleString()}</div>
                  <div className="text-green-300 text-sm">Conversaciones Hoy</div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">{stats.satisfactionRate}%</div>
                  <div className="text-blue-300 text-sm">Satisfacción Cliente</div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">{stats.tasksCompleted.toLocaleString()}</div>
                  <div className="text-purple-300 text-sm">Tareas Completadas</div>
                </div>
                <div className="bg-yellow-500/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">{stats.avgResponseTime}</div>
                  <div className="text-yellow-300 text-sm">Tiempo Respuesta</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                Capacidades IA
              </h3>
              <div className="space-y-3">
                {[
                  'Procesamiento de Lenguaje Natural',
                  'Análisis de Sentimientos',
                  'Integración con CRM',
                  'Aprendizaje Continuo',
                  'Escalación Inteligente',
                  'Automatización de Tareas'
                ].map((capability, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Asistente IA Avanzado</h3>
                      <p className="text-blue-300 text-sm">Especialista en Automatización</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Volume2 className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Settings className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        msg.type === 'user' 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                          : 'bg-white/20 text-white border border-white/30'
                      }`}>
                        <p className="text-sm leading-relaxed">{msg.message}</p>
                        <p className="text-xs opacity-70 mt-2">{msg.timestamp}</p>
                        {msg.actions && (
                          <div className="mt-3 space-y-2">
                            {msg.actions.map((action, actionIdx) => (
                              <button
                                key={actionIdx}
                                onClick={() => handleQuickAction(action)}
                                className="block w-full text-left px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs transition-colors border border-white/20"
                              >
                                {action}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white/20 px-4 py-3 rounded-2xl border border-white/30">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input */}
              <div className="p-6 border-t border-white/10">
                <div className="flex space-x-4">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Escribe tu mensaje o prueba: 'Necesito automatizar mi proceso de ventas'"
                      className="w-full bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20 focus:border-blue-400 focus:outline-none placeholder-white/50"
                    />
                  </div>
                  <button
                    onClick={toggleListening}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {isListening ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5 text-white" />}
                  </button>
                  <button
                    onClick={sendMessage}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
                
                {/* Quick Actions */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Agendar Cita', 'Analizar Datos', 'Procesar Pedido', 'Soporte Técnico'].map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickAction(action)}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-white text-xs border border-white/20 transition-colors"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentDemo;