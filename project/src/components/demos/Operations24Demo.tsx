import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Shield, Activity, AlertTriangle, CheckCircle, Server, Cpu, HardDrive, Wifi, Zap, Bell, Settings, RefreshCw } from 'lucide-react';

const Operations24Demo = ({ onBack }: { onBack: () => void }) => {
  const [systemMetrics, setSystemMetrics] = useState({
    uptime: 99.97,
    activeAgents: 24,
    tasksCompleted: 2847,
    responseTime: 0.3,
    cpuUsage: 23,
    memoryUsage: 67,
    diskUsage: 45,
    networkLatency: 12
  });

  const [alerts, setAlerts] = useState([
    { id: 1, type: 'info', message: 'Backup automático completado exitosamente', time: '10:45', resolved: true },
    { id: 2, type: 'warning', message: 'Uso de memoria alto en servidor-03', time: '10:42', resolved: false },
    { id: 3, type: 'success', message: 'Actualización de seguridad aplicada', time: '10:38', resolved: true },
    { id: 4, type: 'info', message: 'Nuevo agente IA desplegado automáticamente', time: '10:35', resolved: true }
  ]);

  const [services, setServices] = useState([
    { name: 'API Gateway', status: 'healthy', uptime: 99.99, requests: 15420 },
    { name: 'Database Cluster', status: 'healthy', uptime: 99.95, requests: 8930 },
    { name: 'AI Processing', status: 'healthy', uptime: 99.98, requests: 12340 },
    { name: 'Message Queue', status: 'warning', uptime: 99.87, requests: 5670 },
    { name: 'Load Balancer', status: 'healthy', uptime: 99.99, requests: 23450 },
    { name: 'Cache Layer', status: 'healthy', uptime: 99.96, requests: 18920 }
  ]);

  const [monitoringData, setMonitoringData] = useState([
    { time: '10:40', cpu: 25, memory: 65, network: 15 },
    { time: '10:41', cpu: 28, memory: 67, network: 12 },
    { time: '10:42', cpu: 22, memory: 69, network: 18 },
    { time: '10:43', cpu: 26, memory: 66, network: 14 },
    { time: '10:44', cpu: 23, memory: 68, network: 11 },
    { time: '10:45', cpu: 24, memory: 67, network: 13 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        tasksCompleted: prev.tasksCompleted + Math.floor(Math.random() * 10) + 1,
        activeAgents: Math.floor(Math.random() * 5) + 22,
        responseTime: Math.max(0.1, prev.responseTime + (Math.random() - 0.5) * 0.1),
        cpuUsage: Math.max(10, Math.min(80, prev.cpuUsage + (Math.random() - 0.5) * 5)),
        memoryUsage: Math.max(40, Math.min(90, prev.memoryUsage + (Math.random() - 0.5) * 3)),
        networkLatency: Math.max(5, Math.min(50, prev.networkLatency + (Math.random() - 0.5) * 3))
      }));

      // Add new monitoring data
      const newDataPoint = {
        time: new Date().toLocaleTimeString().slice(0, 5),
        cpu: Math.floor(Math.random() * 20) + 15,
        memory: Math.floor(Math.random() * 15) + 60,
        network: Math.floor(Math.random() * 10) + 8
      };
      setMonitoringData(prev => [...prev.slice(1), newDataPoint]);

      // Occasionally add new alerts
      if (Math.random() < 0.3) {
        const alertMessages = [
          'Escalado automático activado',
          'Certificado SSL renovado automáticamente',
          'Limpieza de logs completada',
          'Optimización de base de datos ejecutada',
          'Respaldo incremental finalizado'
        ];
        const newAlert = {
          id: Date.now(),
          type: Math.random() > 0.7 ? 'warning' : Math.random() > 0.5 ? 'info' : 'success',
          message: alertMessages[Math.floor(Math.random() * alertMessages.length)],
          time: new Date().toLocaleTimeString().slice(0, 5),
          resolved: Math.random() > 0.3
        };
        setAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const resolveAlert = (id: number) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, resolved: true } : alert
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-500/20';
      case 'warning': return 'bg-yellow-500/20';
      case 'error': return 'bg-red-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-green-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver a Servicios</span>
            </button>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Sistema Operativo 24/7</span>
              </div>
              <div className="text-white text-sm">
                Uptime: {systemMetrics.uptime.toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* System Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-6 h-6 text-green-400" />
              <div className="text-2xl font-bold text-green-400">{systemMetrics.uptime.toFixed(2)}%</div>
            </div>
            <div className="text-green-300 text-sm">Uptime</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-6 h-6 text-blue-400" />
              <div className="text-2xl font-bold text-blue-400">{systemMetrics.activeAgents}</div>
            </div>
            <div className="text-blue-300 text-sm">Agentes Activos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-6 h-6 text-yellow-400" />
              <div className="text-2xl font-bold text-yellow-400">{systemMetrics.tasksCompleted.toLocaleString()}</div>
            </div>
            <div className="text-yellow-300 text-sm">Tareas Hoy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-6 h-6 text-cyan-400" />
              <div className="text-2xl font-bold text-cyan-400">{systemMetrics.responseTime.toFixed(1)}s</div>
            </div>
            <div className="text-cyan-300 text-sm">Respuesta</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* System Resources */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Server className="w-8 h-8 mr-3 text-green-400" />
                Recursos del Sistema
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Cpu className="w-5 h-5 text-blue-400" />
                        <span className="text-white font-medium">CPU</span>
                      </div>
                      <span className="text-white font-bold">{systemMetrics.cpuUsage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          systemMetrics.cpuUsage > 70 ? 'bg-red-500' :
                          systemMetrics.cpuUsage > 50 ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${systemMetrics.cpuUsage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <HardDrive className="w-5 h-5 text-purple-400" />
                        <span className="text-white font-medium">Memoria</span>
                      </div>
                      <span className="text-white font-bold">{systemMetrics.memoryUsage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          systemMetrics.memoryUsage > 80 ? 'bg-red-500' :
                          systemMetrics.memoryUsage > 60 ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${systemMetrics.memoryUsage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <HardDrive className="w-5 h-5 text-cyan-400" />
                        <span className="text-white font-medium">Disco</span>
                      </div>
                      <span className="text-white font-bold">{systemMetrics.diskUsage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-cyan-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${systemMetrics.diskUsage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Wifi className="w-5 h-5 text-green-400" />
                        <span className="text-white font-medium">Red</span>
                      </div>
                      <span className="text-white font-bold">{systemMetrics.networkLatency}ms</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          systemMetrics.networkLatency > 30 ? 'bg-red-500' :
                          systemMetrics.networkLatency > 20 ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${Math.min(systemMetrics.networkLatency * 2, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Status */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-400" />
                Estado de Servicios
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, idx) => (
                  <div key={idx} className={`p-4 rounded-lg ${getStatusBg(service.status)}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{service.name}</span>
                      <div className={`flex items-center space-x-1 ${getStatusColor(service.status)}`}>
                        <div className={`w-2 h-2 rounded-full ${
                          service.status === 'healthy' ? 'bg-green-400' :
                          service.status === 'warning' ? 'bg-yellow-400' :
                          'bg-red-400'
                        } ${service.status === 'healthy' ? 'animate-pulse' : ''}`}></div>
                        <span className="text-xs font-semibold uppercase">{service.status}</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Uptime: {service.uptime}%</span>
                      <span className="text-gray-400">Requests: {service.requests.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Alerts and Monitoring */}
          <div className="lg:col-span-1 space-y-6">
            {/* Real-time Alerts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Bell className="w-6 h-6 mr-2 text-yellow-400" />
                Alertas en Tiempo Real
              </h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {alerts.map((alert) => (
                  <div key={alert.id} className={`p-3 rounded-lg ${
                    alert.type === 'success' ? 'bg-green-500/20' :
                    alert.type === 'warning' ? 'bg-yellow-500/20' :
                    'bg-blue-500/20'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-2">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          alert.type === 'success' ? 'bg-green-400' :
                          alert.type === 'warning' ? 'bg-yellow-400' :
                          'bg-blue-400'
                        }`}></div>
                        <div>
                          <p className="text-white text-sm">{alert.message}</p>
                          <p className="text-gray-400 text-xs mt-1">{alert.time}</p>
                        </div>
                      </div>
                      {!alert.resolved && alert.type === 'warning' && (
                        <button
                          onClick={() => resolveAlert(alert.id)}
                          className="text-yellow-400 hover:text-yellow-300 text-xs"
                        >
                          Resolver
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Chart */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Activity className="w-6 h-6 mr-2 text-cyan-400" />
                Monitoreo Continuo
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-sm text-gray-400 mb-2">CPU Usage (últimos 6 min)</div>
                  <div className="flex items-end space-x-1 h-16">
                    {monitoringData.map((data, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-500 rounded-t flex-1 transition-all duration-300"
                        style={{ height: `${(data.cpu / 50) * 100}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-sm text-gray-400 mb-2">Memory Usage</div>
                  <div className="flex items-end space-x-1 h-16">
                    {monitoringData.map((data, idx) => (
                      <div
                        key={idx}
                        className="bg-purple-500 rounded-t flex-1 transition-all duration-300"
                        style={{ height: `${(data.memory / 100) * 100}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Settings className="w-6 h-6 mr-2 text-gray-400" />
                Acciones Rápidas
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition-colors flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reiniciar Servicios
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                  Ejecutar Backup
                </button>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                  Optimizar Sistema
                </button>
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                  Generar Reporte
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operations24Demo;