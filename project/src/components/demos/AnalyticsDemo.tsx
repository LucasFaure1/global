import React, { useState, useEffect } from 'react';
import { ArrowLeft, BarChart3, TrendingUp, TrendingDown, PieChart, Activity, Target, DollarSign, Users, ShoppingCart, Eye, MousePointer } from 'lucide-react';

const AnalyticsDemo = ({ onBack }: { onBack: () => void }) => {
  const [kpis, setKpis] = useState({
    revenue: 125430,
    conversion: 18.7,
    visitors: 15420,
    roi: 245,
    avgOrderValue: 89.50,
    customerLifetime: 1250
  });

  const [realtimeData, setRealtimeData] = useState([
    { time: '10:40', visitors: 145, conversions: 23, revenue: 2340 },
    { time: '10:41', visitors: 152, conversions: 28, revenue: 2890 },
    { time: '10:42', visitors: 138, conversions: 19, revenue: 1950 },
    { time: '10:43', visitors: 167, conversions: 31, revenue: 3120 },
    { time: '10:44', visitors: 159, conversions: 26, revenue: 2670 },
    { time: '10:45', visitors: 174, conversions: 34, revenue: 3450 }
  ]);

  const [channelData, setChannelData] = useState([
    { channel: 'Organic Search', visitors: 4520, conversions: 8.9, revenue: 45200, color: 'bg-green-500' },
    { channel: 'Paid Ads', visitors: 3210, conversions: 12.4, revenue: 39800, color: 'bg-blue-500' },
    { channel: 'Social Media', visitors: 2890, conversions: 6.7, revenue: 19340, color: 'bg-purple-500' },
    { channel: 'Email', visitors: 1950, conversions: 15.2, revenue: 29640, color: 'bg-yellow-500' },
    { channel: 'Direct', visitors: 2850, conversions: 11.8, revenue: 33650, color: 'bg-cyan-500' }
  ]);

  const [insights, setInsights] = useState([
    { 
      title: 'Oportunidad de Crecimiento', 
      description: 'Las campañas de email muestran la mayor tasa de conversión (15.2%). Recomendamos aumentar inversión en 40%.',
      impact: 'high',
      metric: '+$12,500 revenue estimado'
    },
    { 
      title: 'Optimización de Funnel', 
      description: 'El 68% de usuarios abandonan en el checkout. Implementar checkout simplificado puede mejorar conversión en 25%.',
      impact: 'high',
      metric: '+4.7% conversión estimada'
    },
    { 
      title: 'Segmentación de Audiencia', 
      description: 'Usuarios de 25-35 años generan 60% más revenue. Enfocar campañas en este segmento.',
      impact: 'medium',
      metric: '+18% ROI estimado'
    }
  ]);

  const [heatmapData, setHeatmapData] = useState([
    { element: 'Header CTA', clicks: 1240, conversions: 89, rate: 7.2 },
    { element: 'Product Images', clicks: 2890, conversions: 156, rate: 5.4 },
    { element: 'Add to Cart', clicks: 1560, conversions: 234, rate: 15.0 },
    { element: 'Checkout Button', clicks: 890, conversions: 167, rate: 18.8 },
    { element: 'Footer Links', clicks: 340, conversions: 12, rate: 3.5 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update KPIs
      setKpis(prev => ({
        ...prev,
        revenue: prev.revenue + Math.floor(Math.random() * 500) + 100,
        conversion: Math.max(15, Math.min(25, prev.conversion + (Math.random() - 0.5) * 0.5)),
        visitors: prev.visitors + Math.floor(Math.random() * 20) + 5,
        roi: Math.max(200, Math.min(300, prev.roi + (Math.random() - 0.5) * 5))
      }));

      // Add new real-time data point
      const newDataPoint = {
        time: new Date().toLocaleTimeString().slice(0, 5),
        visitors: Math.floor(Math.random() * 50) + 120,
        conversions: Math.floor(Math.random() * 20) + 15,
        revenue: Math.floor(Math.random() * 2000) + 1500
      };
      setRealtimeData(prev => [...prev.slice(1), newDataPoint]);

      // Update channel data
      setChannelData(prev => prev.map(channel => ({
        ...channel,
        visitors: channel.visitors + Math.floor(Math.random() * 10),
        conversions: Math.max(5, Math.min(20, channel.conversions + (Math.random() - 0.5) * 0.3)),
        revenue: channel.revenue + Math.floor(Math.random() * 200) + 50
      })));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', { 
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 0 
    }).format(amount);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-400 bg-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-indigo-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver a Servicios</span>
            </button>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Dashboard en Vivo</span>
              </div>
              <div className="text-white text-sm">
                Última actualización: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* KPI Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-6 h-6 text-green-400" />
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">{formatCurrency(kpis.revenue)}</div>
            <div className="text-green-300 text-sm">Revenue Hoy</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-6 h-6 text-blue-400" />
              <TrendingUp className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">{kpis.conversion.toFixed(1)}%</div>
            <div className="text-blue-300 text-sm">Conversión</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-6 h-6 text-purple-400" />
              <TrendingUp className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white">{kpis.visitors.toLocaleString()}</div>
            <div className="text-purple-300 text-sm">Visitantes</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="w-6 h-6 text-yellow-400" />
              <TrendingUp className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-white">{kpis.roi}%</div>
            <div className="text-yellow-300 text-sm">ROI</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <ShoppingCart className="w-6 h-6 text-cyan-400" />
              <TrendingUp className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-white">{formatCurrency(kpis.avgOrderValue)}</div>
            <div className="text-cyan-300 text-sm">Ticket Promedio</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-6 h-6 text-pink-400" />
              <TrendingUp className="w-4 h-4 text-pink-400" />
            </div>
            <div className="text-2xl font-bold text-white">{formatCurrency(kpis.customerLifetime)}</div>
            <div className="text-pink-300 text-sm">LTV Cliente</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Real-time Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Activity className="w-8 h-8 mr-3 text-indigo-400" />
                Métricas en Tiempo Real
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400">{realtimeData[realtimeData.length - 1]?.visitors}</div>
                  <div className="text-green-300 text-sm">Visitantes Ahora</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400">{realtimeData[realtimeData.length - 1]?.conversions}</div>
                  <div className="text-blue-300 text-sm">Conversiones/Hora</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400">{formatCurrency(realtimeData[realtimeData.length - 1]?.revenue || 0)}</div>
                  <div className="text-purple-300 text-sm">Revenue/Hora</div>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-3">Visitantes (últimos 6 períodos)</div>
                  <div className="flex items-end space-x-2 h-24">
                    {realtimeData.map((data, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center">
                        <div
                          className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t w-full transition-all duration-500"
                          style={{ height: `${(data.visitors / 200) * 100}%` }}
                        ></div>
                        <span className="text-xs text-gray-400 mt-1">{data.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-3">Revenue por Hora</div>
                  <div className="flex items-end space-x-2 h-24">
                    {realtimeData.map((data, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center">
                        <div
                          className="bg-gradient-to-t from-green-600 to-green-400 rounded-t w-full transition-all duration-500"
                          style={{ height: `${(data.revenue / 4000) * 100}%` }}
                        ></div>
                        <span className="text-xs text-gray-400 mt-1">{data.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Channel Performance */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <PieChart className="w-6 h-6 mr-2 text-cyan-400" />
                Rendimiento por Canal
              </h3>
              <div className="space-y-4">
                {channelData.map((channel, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 ${channel.color} rounded`}></div>
                        <span className="text-white font-medium">{channel.channel}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold">{formatCurrency(channel.revenue)}</div>
                        <div className="text-gray-400 text-sm">{channel.conversions.toFixed(1)}% conv.</div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{channel.visitors.toLocaleString()} visitantes</span>
                      <span>{((channel.revenue / kpis.revenue) * 100).toFixed(1)}% del total</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div 
                        className={`h-2 rounded-full ${channel.color}`}
                        style={{ width: `${(channel.revenue / Math.max(...channelData.map(c => c.revenue))) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insights and Heatmap */}
          <div className="lg:col-span-1 space-y-6">
            {/* AI Insights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-yellow-400" />
                Insights IA
              </h3>
              <div className="space-y-4">
                {insights.map((insight, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-semibold text-sm">{insight.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${getImpactColor(insight.impact)}`}>
                        {insight.impact.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs mb-3 leading-relaxed">{insight.description}</p>
                    <div className="text-green-400 text-xs font-semibold">{insight.metric}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Heatmap Data */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <MousePointer className="w-6 h-6 mr-2 text-pink-400" />
                Análisis de Clicks
              </h3>
              <div className="space-y-3">
                {heatmapData.map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm font-medium">{item.element}</span>
                      <span className="text-pink-400 font-bold">{item.rate}%</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                      <span>{item.clicks} clicks</span>
                      <span>{item.conversions} conversiones</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-1.5 rounded-full"
                        style={{ width: `${(item.rate / 20) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Acciones Rápidas</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg text-sm transition-all">
                  Generar Reporte Completo
                </button>
                <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-2 px-4 rounded-lg text-sm transition-all">
                  Exportar Datos
                </button>
                <button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white py-2 px-4 rounded-lg text-sm transition-all">
                  Configurar Alertas
                </button>
                <button className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white py-2 px-4 rounded-lg text-sm transition-all">
                  Optimizar Campañas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDemo;