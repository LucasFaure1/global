import React, { useState, useEffect } from 'react';
import { ArrowLeft, Brain, TrendingUp, TrendingDown, BarChart3, PieChart, Activity, Zap, Target, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';

const MLDemo = ({ onBack }: { onBack: () => void }) => {
  const [predictions, setPredictions] = useState([
    { 
      id: 1, 
      metric: 'Ventas Próximo Mes', 
      value: '$45,230', 
      confidence: 94, 
      trend: 'up', 
      change: '+12%',
      description: 'Basado en tendencias históricas y factores estacionales'
    },
    { 
      id: 2, 
      metric: 'Churn de Clientes', 
      value: '2.3%', 
      confidence: 89, 
      trend: 'down', 
      change: '-0.8%',
      description: 'Reducción esperada gracias a mejoras en retención'
    },
    { 
      id: 3, 
      metric: 'Conversión de Leads', 
      value: '18.7%', 
      confidence: 92, 
      trend: 'up', 
      change: '+3.2%',
      description: 'Optimización de funnel de ventas mostrando resultados'
    },
    { 
      id: 4, 
      metric: 'Costo por Adquisición', 
      value: '$127', 
      confidence: 87, 
      trend: 'down', 
      change: '-15%',
      description: 'Eficiencia mejorada en campañas de marketing'
    }
  ]);

  const [modelPerformance, setModelPerformance] = useState({
    accuracy: 94.2,
    precision: 91.8,
    recall: 89.5,
    f1Score: 90.6
  });

  const [dataInsights, setDataInsights] = useState([
    { insight: 'Los clientes de 25-35 años tienen 40% más probabilidad de conversión', impact: 'high', category: 'demographics' },
    { insight: 'Las campañas de email los martes generan 23% más engagement', impact: 'medium', category: 'marketing' },
    { insight: 'Productos con reviews >4.5 estrellas venden 60% más', impact: 'high', category: 'product' },
    { insight: 'El abandono de carrito se reduce 30% con recordatorios a las 2h', impact: 'medium', category: 'behavior' }
  ]);

  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPredictions(prev => prev.map(pred => ({
        ...pred,
        confidence: Math.max(85, Math.min(98, pred.confidence + (Math.random() - 0.5) * 2)),
        value: pred.metric.includes('$') ? 
          `$${(Math.random() * 10000 + 40000).toFixed(0)}` : 
          pred.metric.includes('%') ? 
          `${(Math.random() * 5 + 15).toFixed(1)}%` : 
          pred.value
      })));

      setModelPerformance(prev => ({
        accuracy: Math.max(90, Math.min(98, prev.accuracy + (Math.random() - 0.5) * 0.5)),
        precision: Math.max(88, Math.min(96, prev.precision + (Math.random() - 0.5) * 0.5)),
        recall: Math.max(85, Math.min(95, prev.recall + (Math.random() - 0.5) * 0.5)),
        f1Score: Math.max(87, Math.min(95, prev.f1Score + (Math.random() - 0.5) * 0.5))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const startTraining = () => {
    setIsTraining(true);
    setTrainingProgress(0);
    
    const trainingInterval = setInterval(() => {
      setTrainingProgress(prev => {
        if (prev >= 100) {
          clearInterval(trainingInterval);
          setIsTraining(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 500);
  };

  const refreshPredictions = () => {
    setPredictions(prev => prev.map(pred => ({
      ...pred,
      confidence: Math.floor(Math.random() * 10) + 85,
      value: pred.metric.includes('$') ? 
        `$${(Math.random() * 20000 + 35000).toFixed(0)}` : 
        pred.metric.includes('%') ? 
        `${(Math.random() * 8 + 12).toFixed(1)}%` : 
        pred.value,
      change: pred.trend === 'up' ? 
        `+${(Math.random() * 10 + 5).toFixed(1)}%` : 
        `-${(Math.random() * 5 + 2).toFixed(1)}%`
    })));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-pink-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver a Servicios</span>
            </button>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Modelos ML Activos</span>
              </div>
              <div className="text-white text-sm">
                Precisión Promedio: {modelPerformance.accuracy.toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Model Performance Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-green-400">{modelPerformance.accuracy.toFixed(1)}%</div>
            <div className="text-green-300 text-sm">Precisión</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-blue-400">{modelPerformance.precision.toFixed(1)}%</div>
            <div className="text-blue-300 text-sm">Exactitud</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-purple-400">{modelPerformance.recall.toFixed(1)}%</div>
            <div className="text-purple-300 text-sm">Cobertura</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-pink-400">{modelPerformance.f1Score.toFixed(1)}%</div>
            <div className="text-pink-300 text-sm">F1-Score</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Predictions Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Brain className="w-8 h-8 mr-3 text-purple-400" />
                  Predicciones IA en Tiempo Real
                </h3>
                <button
                  onClick={refreshPredictions}
                  className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Actualizar</span>
                </button>
              </div>

              <div className="grid gap-6">
                {predictions.map((pred) => (
                  <div key={pred.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{pred.metric}</h4>
                        <p className="text-gray-400 text-sm">{pred.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white mb-1">{pred.value}</div>
                        <div className={`flex items-center space-x-1 ${
                          pred.trend === 'up' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {pred.trend === 'up' ? 
                            <TrendingUp className="w-4 h-4" /> : 
                            <TrendingDown className="w-4 h-4" />
                          }
                          <span className="text-sm font-semibold">{pred.change}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Nivel de Confianza</span>
                        <span className="text-white font-semibold">{pred.confidence}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            pred.confidence > 90 ? 'bg-gradient-to-r from-green-500 to-green-400' :
                            pred.confidence > 80 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                            'bg-gradient-to-r from-red-500 to-red-400'
                          }`}
                          style={{ width: `${pred.confidence}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Model Training */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                Entrenamiento de Modelo
              </h3>
              
              {isTraining ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-blue-400 animate-spin" />
                    <span className="text-white">Entrenando modelo...</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Progreso</span>
                      <span className="text-white">{trainingProgress.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${trainingProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={startTraining}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Iniciar Entrenamiento
                </button>
              )}
            </div>

            {/* Data Insights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-green-400" />
                Insights Automáticos
              </h3>
              <div className="space-y-3">
                {dataInsights.map((insight, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-start space-x-2 mb-2">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        insight.impact === 'high' ? 'bg-red-400' : 'bg-yellow-400'
                      }`}></div>
                      <p className="text-white text-sm leading-relaxed">{insight.insight}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        insight.category === 'demographics' ? 'bg-blue-500/20 text-blue-300' :
                        insight.category === 'marketing' ? 'bg-green-500/20 text-green-300' :
                        insight.category === 'product' ? 'bg-purple-500/20 text-purple-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {insight.category}
                      </span>
                      <span className={`text-xs font-semibold ${
                        insight.impact === 'high' ? 'text-red-400' : 'text-yellow-400'
                      }`}>
                        {insight.impact.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Model Status */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <BarChart3 className="w-6 h-6 mr-2 text-cyan-400" />
                Estado del Sistema
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Modelos Activos</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold">12</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Predicciones Hoy</span>
                  <span className="text-white font-semibold">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Tiempo de Respuesta</span>
                  <span className="text-cyan-400 font-semibold">0.3s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Última Actualización</span>
                  <span className="text-gray-400 text-sm">{new Date().toLocaleTimeString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Analytics */}
        <div className="mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <PieChart className="w-8 h-8 mr-3 text-indigo-400" />
              Análisis Avanzado de Patrones
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-lg font-bold text-white mb-3">Segmentación de Clientes</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Premium (25%)</span>
                    <span className="text-green-400 font-semibold">$2.1M</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-lg font-bold text-white mb-3">Tendencias de Mercado</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Crecimiento Q4</span>
                    <span className="text-blue-400 font-semibold">+18.5%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-4/5 animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-lg font-bold text-white mb-3">Optimización ROI</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Mejora Detectada</span>
                    <span className="text-purple-400 font-semibold">+34%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLDemo;