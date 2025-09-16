import React, { useState, useEffect } from 'react';
import { ArrowLeft, Workflow, Play, Pause, RotateCcw, Settings, CheckCircle, Clock, AlertTriangle, Activity, Zap, Mail, Database, FileText, Users, TrendingUp, Calendar } from 'lucide-react';

const AutomationDemo = ({ onBack }: { onBack: () => void }) => {
  const [workflows, setWorkflows] = useState([
    { 
      id: 1, 
      name: 'Procesamiento de Emails', 
      status: 'running', 
      progress: 75, 
      tasksCompleted: 1247, 
      efficiency: 94,
      description: 'Clasifica, responde y deriva emails automáticamente',
      icon: Mail,
      color: 'bg-blue-500'
    },
    { 
      id: 2, 
      name: 'Generación de Reportes', 
      status: 'completed', 
      progress: 100, 
      tasksCompleted: 89, 
      efficiency: 98,
      description: 'Crea reportes ejecutivos y análisis de datos',
      icon: FileText,
      color: 'bg-green-500'
    },
    { 
      id: 3, 
      name: 'Gestión de Leads', 
      status: 'running', 
      progress: 45, 
      tasksCompleted: 567, 
      efficiency: 91,
      description: 'Califica, segmenta y hace seguimiento de leads',
      icon: Users,
      color: 'bg-purple-500'
    },
    { 
      id: 4, 
      name: 'Actualización de CRM', 
      status: 'pending', 
      progress: 0, 
      tasksCompleted: 0, 
      efficiency: 0,
      description: 'Sincroniza datos entre sistemas automáticamente',
      icon: Database,
      color: 'bg-yellow-500'
    }
  ]);

  const [selectedWorkflow, setSelectedWorkflow] = useState(1);
  const [systemStats, setSystemStats] = useState({
    totalAutomations: 24,
    activeNow: 18,
    tasksToday: 3421,
    timeSaved: '127h',
    errorRate: 0.2
  });

  const [realtimeLogs, setRealtimeLogs] = useState([
    { time: '10:45:23', action: 'Email procesado y respondido automáticamente', type: 'success' },
    { time: '10:45:18', action: 'Lead calificado como alta prioridad', type: 'info' },
    { time: '10:45:12', action: 'Reporte de ventas generado exitosamente', type: 'success' },
    { time: '10:45:08', action: 'Datos sincronizados con CRM', type: 'success' },
    { time: '10:45:03', action: 'Alerta: Inventario bajo detectado', type: 'warning' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update progress for running workflows
      setWorkflows(prev => prev.map(workflow => {
        if (workflow.status === 'running' && workflow.progress < 100) {
          const newProgress = Math.min(workflow.progress + Math.random() * 10, 100);
          return {
            ...workflow,
            progress: newProgress,
            tasksCompleted: workflow.tasksCompleted + Math.floor(Math.random() * 5),
            status: newProgress >= 100 ? 'completed' : 'running'
          };
        }
        return workflow;
      }));

      // Update system stats
      setSystemStats(prev => ({
        ...prev,
        tasksToday: prev.tasksToday + Math.floor(Math.random() * 10),
        activeNow: Math.floor(Math.random() * 3) + 16
      }));

      // Add new log entry
      const actions = [
        'Nuevo email procesado automáticamente',
        'Lead convertido a oportunidad',
        'Tarea programada ejecutada',
        'Backup automático completado',
        'Notificación enviada al equipo',
        'Datos actualizados en tiempo real'
      ];
      const newLog = {
        time: new Date().toLocaleTimeString(),
        action: actions[Math.floor(Math.random() * actions.length)],
        type: Math.random() > 0.8 ? 'warning' : Math.random() > 0.5 ? 'info' : 'success'
      };
      setRealtimeLogs(prev => [newLog, ...prev.slice(0, 9)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const startWorkflow = (id: number) => {
    setWorkflows(prev => prev.map(workflow => 
      workflow.id === id ? { ...workflow, status: 'running', progress: 5 } : workflow
    ));
  };

  const pauseWorkflow = (id: number) => {
    setWorkflows(prev => prev.map(workflow => 
      workflow.id === id ? { ...workflow, status: 'paused' } : workflow
    ));
  };

  const resetWorkflow = (id: number) => {
    setWorkflows(prev => prev.map(workflow => 
      workflow.id === id ? { ...workflow, status: 'pending', progress: 0, tasksCompleted: 0 } : workflow
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-green-400';
      case 'completed': return 'text-blue-400';
      case 'paused': return 'text-yellow-400';
      case 'pending': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running': return <Activity className="w-4 h-4 animate-spin" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'paused': return <Pause className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const selectedWorkflowData = workflows.find(w => w.id === selectedWorkflow);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver a Servicios</span>
            </button>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{systemStats.activeNow} Automatizaciones Activas</span>
              </div>
              <div className="text-white text-sm">
                Tiempo Ahorrado Hoy: {systemStats.timeSaved}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* System Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-white">{systemStats.totalAutomations}</div>
            <div className="text-purple-300 text-sm">Automatizaciones</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-green-400">{systemStats.activeNow}</div>
            <div className="text-green-300 text-sm">Activas Ahora</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-blue-400">{systemStats.tasksToday.toLocaleString()}</div>
            <div className="text-blue-300 text-sm">Tareas Hoy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-yellow-400">{systemStats.timeSaved}</div>
            <div className="text-yellow-300 text-sm">Tiempo Ahorrado</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-red-400">{systemStats.errorRate}%</div>
            <div className="text-red-300 text-sm">Tasa de Error</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Workflows List */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Workflow className="w-6 h-6 mr-2 text-purple-400" />
                Flujos de Trabajo
              </h3>
              <div className="space-y-4">
                {workflows.map((workflow) => {
                  const Icon = workflow.icon;
                  return (
                    <div
                      key={workflow.id}
                      onClick={() => setSelectedWorkflow(workflow.id)}
                      className={`p-4 rounded-xl cursor-pointer transition-all ${
                        selectedWorkflow === workflow.id 
                          ? 'bg-white/20 border border-white/30' 
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 ${workflow.color} rounded-lg flex items-center justify-center`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white font-medium text-sm">{workflow.name}</span>
                        </div>
                        <div className={`flex items-center space-x-1 ${getStatusColor(workflow.status)}`}>
                          {getStatusIcon(workflow.status)}
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs mb-3">{workflow.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Progreso</span>
                          <span className="text-white">{workflow.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              workflow.status === 'completed' ? 'bg-green-500' : 
                              workflow.status === 'running' ? 'bg-blue-500' : 'bg-gray-500'
                            }`}
                            style={{ width: `${workflow.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Tareas: {workflow.tasksCompleted}</span>
                          <span className="text-green-400">Eficiencia: {workflow.efficiency}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Workflow Detail */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              {selectedWorkflowData && (
                <>
                  {/* Workflow Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${selectedWorkflowData.color} rounded-xl flex items-center justify-center`}>
                        {React.createElement(selectedWorkflowData.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{selectedWorkflowData.name}</h3>
                        <p className="text-gray-400">{selectedWorkflowData.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => startWorkflow(selectedWorkflowData.id)}
                        disabled={selectedWorkflowData.status === 'running'}
                        className="w-10 h-10 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Play className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={() => pauseWorkflow(selectedWorkflowData.id)}
                        disabled={selectedWorkflowData.status !== 'running'}
                        className="w-10 h-10 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Pause className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={() => resetWorkflow(selectedWorkflowData.id)}
                        className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <RotateCcw className="w-5 h-5 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-gray-600 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                        <Settings className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Progress Visualization */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">Progreso General</span>
                      <span className="text-2xl font-bold text-white">{selectedWorkflowData.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                      <div 
                        className={`h-4 rounded-full transition-all duration-1000 ${
                          selectedWorkflowData.status === 'completed' ? 'bg-gradient-to-r from-green-500 to-green-400' : 
                          selectedWorkflowData.status === 'running' ? 'bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse' : 
                          'bg-gray-500'
                        }`}
                        style={{ width: `${selectedWorkflowData.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400">{selectedWorkflowData.tasksCompleted}</div>
                      <div className="text-gray-400 text-sm">Tareas Completadas</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-400">{selectedWorkflowData.efficiency}%</div>
                      <div className="text-gray-400 text-sm">Eficiencia</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className={`text-2xl font-bold ${getStatusColor(selectedWorkflowData.status)}`}>
                        {selectedWorkflowData.status.toUpperCase()}
                      </div>
                      <div className="text-gray-400 text-sm">Estado</div>
                    </div>
                  </div>

                  {/* Workflow Steps */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-4">Pasos del Proceso</h4>
                    <div className="space-y-3">
                      {[
                        { step: 'Recepción de datos', status: 'completed', time: '0.2s' },
                        { step: 'Procesamiento IA', status: 'completed', time: '1.1s' },
                        { step: 'Validación automática', status: 'running', time: '0.8s' },
                        { step: 'Ejecución de acciones', status: 'pending', time: '-' },
                        { step: 'Notificación de resultados', status: 'pending', time: '-' }
                      ].map((step, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              step.status === 'completed' ? 'bg-green-500' :
                              step.status === 'running' ? 'bg-blue-500 animate-pulse' :
                              'bg-gray-600'
                            }`}>
                              {step.status === 'completed' ? <CheckCircle className="w-4 h-4 text-white" /> :
                               step.status === 'running' ? <Activity className="w-4 h-4 text-white animate-spin" /> :
                               <Clock className="w-4 h-4 text-white" />}
                            </div>
                            <span className="text-white">{step.step}</span>
                          </div>
                          <span className="text-gray-400 text-sm">{step.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Real-time Activity Log */}
        <div className="mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-yellow-400" />
              Actividad en Tiempo Real
            </h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {realtimeLogs.map((log, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      log.type === 'success' ? 'bg-green-400' :
                      log.type === 'warning' ? 'bg-yellow-400' :
                      'bg-blue-400'
                    }`}></div>
                    <span className="text-white text-sm">{log.action}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationDemo;