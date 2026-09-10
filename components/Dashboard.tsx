import React from 'react';
import { useAppStore } from '@/store/appStore';
import { TrendingUp, AlertCircle, Zap } from 'lucide-react';
import MetricCard from './cards/MetricCard';
import Card from './cards/Card';

const Dashboard: React.FC = () => {
  const { metrics } = useAppStore();

  const priorities = [
    'Analyser les ventes de la semaine',
    'Identifier les produits les plus rentables',
    'Tester une nouvelle opportunité',
    'Réduire une dépense inutile',
  ];

  const recommendations = [
    {
      title: 'Optimiser KDP',
      reason: 'Marge supérieure à 60%',
      impact: '+180€/mois',
      cost: '0€',
      risk: 'Faible',
      priority: 'Haute',
    },
    {
      title: 'Lancer nouvelle niche',
      reason: 'Demande détectée',
      impact: '+250€/mois',
      cost: '50€',
      risk: 'Moyen',
      priority: 'Haute',
    },
    {
      title: 'Réduire coûts API',
      reason: 'Dépense suboptimale',
      impact: '+80€/mois',
      cost: '0€',
      risk: 'Faible',
      priority: 'Moyen',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold gradient-text">NEXORA AI</h1>
        <p className="text-slate-400">NEXORA Core — Internal Business Intelligence</p>
        <div className="mt-2 inline-block rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-200 border border-yellow-500/30">
          ⚠️ Données DEMO • Version 1.0
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <MetricCard label="CHIFFRE D'AFFAIRES" value={`${metrics.revenue}€`} />
        <MetricCard label="DÉPENSES" value={`${metrics.expenses}€`} variant="danger" />
        <MetricCard label="BÉNÉFICE NET" value={`${metrics.netProfit}€`} variant="success" />
        <MetricCard label="OBJECTIF" value={`${metrics.objective}€`} />
        <MetricCard label="PROGRESSION" value={`${metrics.progress}%`} />
      </div>

      {/* Priorities and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Priorities */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Zap className="text-nexora-accent" size={20} />
            <h2 className="text-xl font-bold">Priorités actuelles</h2>
          </div>
          <div className="space-y-3">
            {priorities.map((priority, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-lg bg-nexora-primary/50 border border-slate-700/30 hover:border-nexora-accent/30 transition-all"
              >
                <div className="h-2 w-2 rounded-full bg-nexora-accent mt-1.5 flex-shrink-0"></div>
                <p className="text-sm text-slate-300">{priority}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Key Metrics */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-nexora-accent" size={20} />
            <h2 className="text-xl font-bold">Indicateurs clés</h2>
          </div>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-nexora-primary/50 border border-slate-700/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-400 text-sm">Marge nette</span>
                <span className="text-nexora-accent font-bold">72.6%</span>
              </div>
              <div className="w-full h-2 bg-nexora-primary rounded-full overflow-hidden">
                <div className="h-full w-[72.6%] bg-gradient-to-r from-nexora-accent to-blue-500"></div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-nexora-primary/50 border border-slate-700/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-400 text-sm">Santé financière</span>
                <span className="text-green-400 font-bold">Excellent</span>
              </div>
              <p className="text-xs text-slate-400">Bénéfice net en croissance</p>
            </div>
            <div className="p-3 rounded-lg bg-nexora-primary/50 border border-slate-700/30">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Statut NEXORA Core</span>
                <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Opérationnel</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recommendations */}
      <Card>
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="text-nexora-accent" size={20} />
          <h2 className="text-xl font-bold">Recommandations de NEXORA Core</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700/30">
                <th className="px-4 py-3 text-left font-semibold text-slate-300">Recommandation</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-300">Raison</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-300">Impact</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-300">Coût</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-300">Risque</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-300">Priorité</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((rec, i) => (
                <tr key={i} className="border-b border-slate-700/30 hover:bg-nexora-primary/50 transition-all">
                  <td className="px-4 py-3 font-medium text-nexora-accent">{rec.title}</td>
                  <td className="px-4 py-3 text-slate-300">{rec.reason}</td>
                  <td className="px-4 py-3 text-green-400 font-semibold">{rec.impact}</td>
                  <td className="px-4 py-3 text-slate-300">{rec.cost}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      rec.risk === 'Faible' ? 'bg-green-500/20 text-green-300' :
                      rec.risk === 'Moyen' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {rec.risk}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      rec.priority === 'Haute' ? 'bg-red-500/20 text-red-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {rec.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;