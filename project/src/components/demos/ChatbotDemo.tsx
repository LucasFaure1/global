import React, { useState, useEffect } from 'react';
import { ArrowLeft, MessageSquare, Users, TrendingUp, Clock, Globe, Smartphone, Monitor, Bot, User, Send, Star, CheckCircle, AlertCircle } from 'lucide-react';

const ChatbotDemo = ({ onBack }: { onBack: () => void }) => {
  const [activeChannel, setActiveChannel] = useState('whatsapp');
  const [conversations, setConversations] = useState([
    { id: 1, user: 'María González', message: 'Hola, necesito información sobre sus productos', time: '10:30', status: 'active', channel: 'whatsapp' },
    { id: 2, user: 'Carlos Ruiz', message: '¿Tienen descuentos disponibles?', time: '10:28', status: 'resolved', channel: 'web' },
    { id: 3, user: 'Ana López', message: 'Quiero hacer un pedido urgente', time: '10:25', status: 'active', channel: 'facebook' }
  ]);
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const [stats, setStats] = useState({
    totalConversations: 1247,
    resolvedToday: 1089,
    avgResponseTime: '0.8s',
    satisfactionRate: 94.2,
    activeNow: 23
  });

  const channels = [
    { id: 'whatsapp', name: 'WhatsApp', icon: '💬', color: 'bg-green-500', active: 156 },
    { id: 'web', name: 'Web Chat', icon: '🌐', color: 'bg-blue-500', active: 89 },
    { id: 'facebook', name: 'Facebook', icon: '📘', color: 'bg-blue-600', active: 67 },
    { id: 'telegram', name: 'Telegram', icon: '✈️', color: 'bg-cyan-500', active: 34 }
  ];

  const chatMessages = [
    { type: 'user', message: 'Hola, necesito información sobre sus productos', time: '10:30' },
    { type: 'bot', message: '¡Hola María! 👋 Soy el asistente virtual de la empresa. Me da mucho gusto ayudarte. Tenemos una amplia gama de productos. ¿Hay algo específico que te interese?', time: '10:30', suggestions: ['Ver Catálogo', 'Productos Populares', 'Ofertas Especiales'] },
    { type: 'user', message: 'Me interesan los productos para el hogar', time: '10:31' },
    { type: 'bot', message: '¡Perfecto! 🏠 Tenemos excelentes productos para el hogar. He encontrado 15 productos que podrían interesarte, incluyendo electrodomésticos, decoración y limpieza. ¿Te gustaría ver nuestros productos más populares o prefieres una categoría específica?', time: '10:31', suggestions: ['Electrodomésticos', 'Decoración', 'Limpieza', 'Ver Todo'] }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalConversations: prev.totalConversations + Math.floor(Math.random() * 3),
        resolvedToday: prev.resolvedToday + Math.floor(Math.random() * 2),
        activeNow: Math.floor(Math.random() * 10) + 20
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        '¡Excelente elección! He procesado tu solicitud y encontré exactamente lo que necesitas. Te he enviado un catálogo personalizado por email. ¿Te gustaría que agende una llamada con nuestro especialista?',
        'Perfecto, he verificado disponibilidad y tenemos stock completo. El precio especial de hoy incluye envío gratis. ¿Procedo con tu pedido?',
        'He analizado tu consulta y te recomiendo nuestro paquete premium que incluye 30% de descuento. ¿Te interesa conocer los detalles?'
      ];
      
      // Add user message and bot response logic here
    }, 1000);
    
    setNewMessage('');
  };

  const handleSuggestion = (suggestion: string) => {
    setNewMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver a Servicios</span>
            </button>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{stats.activeNow} Chats Activos</span>
              </div>
              <div className="text-white text-sm">
                Respuesta: {stats.avgResponseTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-white">{stats.totalConversations}</div>
            <div className="text-cyan-300 text-sm">Conversaciones Hoy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-green-400">{stats.resolvedToday}</div>
            <div className="text-green-300 text-sm">Resueltas</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-blue-400">{stats.avgResponseTime}</div>
            <div className="text-blue-300 text-sm">Tiempo Respuesta</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-yellow-400">{stats.satisfactionRate}%</div>
            <div className="text-yellow-300 text-sm">Satisfacción</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-purple-400">{stats.activeNow}</div>
            <div className="text-purple-300 text-sm">Activos Ahora</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Channels Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-cyan-400" />
                Canales Activos
              </h3>
              <div className="space-y-3">
                {channels.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => setActiveChannel(channel.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      activeChannel === channel.id ? 'bg-white/20 border border-white/30' : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{channel.icon}</span>
                      <span className="text-white text-sm font-medium">{channel.name}</span>
                    </div>
                    <div className="text-xs text-cyan-300">{channel.active}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Conversations List */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-4">Conversaciones Recientes</h3>
              <div className="space-y-3">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedConversation === conv.id ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white text-sm font-medium">{conv.user}</span>
                      <span className="text-xs text-gray-300">{conv.time}</span>
                    </div>
                    <p className="text-xs text-gray-400 truncate">{conv.message}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-cyan-300">{conv.channel}</span>
                      <div className={`w-2 h-2 rounded-full ${conv.status === 'active' ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">ChatBot Inteligente</h3>
                      <p className="text-cyan-300 text-sm">Conversación con María González</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 bg-green-500/20 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-xs">En línea</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-4">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-md px-4 py-3 rounded-2xl ${
                        msg.type === 'user' 
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                          : 'bg-white/20 text-white border border-white/30'
                      }`}>
                        <p className="text-sm leading-relaxed">{msg.message}</p>
                        <p className="text-xs opacity-70 mt-2">{msg.time}</p>
                        {msg.suggestions && (
                          <div className="mt-3 space-y-2">
                            {msg.suggestions.map((suggestion, suggIdx) => (
                              <button
                                key={suggIdx}
                                onClick={() => handleSuggestion(suggestion)}
                                className="block w-full text-left px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs transition-colors border border-white/20"
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-6 border-t border-white/10">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Escribe como cliente: 'Quiero información sobre precios'"
                    className="flex-1 bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20 focus:border-cyan-400 focus:outline-none placeholder-white/50"
                  />
                  <button
                    onClick={sendMessage}
                    className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
                
                {/* Quick Responses */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {['¿Tienen descuentos?', 'Quiero hacer un pedido', 'Información de envío', 'Soporte técnico'].map((response, idx) => (
                    <button
                      key={idx}
                      onClick={() => setNewMessage(response)}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-white text-xs border border-white/20 transition-colors"
                    >
                      {response}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
              Rendimiento
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm">Resolución automática</span>
                <span className="text-green-400 font-bold">89%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-[89%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-400" />
              Tiempo Real
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">Promedio hoy</span>
                <span className="text-blue-400 font-bold">0.8s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">Más rápido</span>
                <span className="text-green-400 font-bold">0.2s</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              Satisfacción
            </h4>
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-yellow-400">4.9</div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDemo;