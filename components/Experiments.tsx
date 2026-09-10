import React, { useState } from 'react';
import Card from './cards/Card';
import { Beaker, BarChart3 } from 'lucide-react';

interface Experiment {
  id: number;
  hypothesis: string;
  activity: string;
  budget: string;
  duration: string;
  kpi: string;
  objective: string;
  expectedResult: string;
  actualResult: string;
  roi: string;
  decision: string;
  status: 'À VALIDER' | 'EN PRÉPARATION' | 'EN COURS' | 'TERMINÉE' | 'RÉUSSIE' | 'ÉCHEC' | 'À AMÉLIORER';
}

const Experiments: React.FC = () => {
  const [experiments] = useState<Experiment[]>([
    {
      id: 1,
      hypothesis: 'Augmenter prix KDP améliorera marge',
      activity: 'KDP',
      budget: '0€',
      duration: '14 jours',
      kpi: 'Marge nette %',
      objective: 'Atteindre 65% marge',
      expectedResult: 'Marge 68%',
      actualResult: 'Marge 72%',
      roi: '+350%',
      decision: 'Valider',
      status: 'RÉUSSIE',
    },
    {
      id: 2,
      hypothesis: 'Landing page génère 10 leads',
      activity: 'Formation en ligne',
      budget: '25€',
      duration: '7 jours',
      kpi: 'Leads générés',
      objective: '10 leads minimum',
      expectedResult: '8-12 leads',
      actualResult: '6 leads',
      roi: '+85%',
      decision: 'Améliorer',
      status: 'À AMÉLIORER',
    },
    {
      id: 3,
      hypothesis: 'Lancer WhOP produit crée revenu',
      activity: 'WHOP',
      budget: '50€',
      duration: '21 jours',
      kpi: 'Revenue mensuel',
      objective: '300€ revenue',
      expectedResult: '200-400€',
      actualResult: '460€',
      roi: '+920%',
      decision: 'Dupliquer',
      status: 'RÉUSSIE',
    },
  ]);

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'À VALIDER': 'bg-slate-500/20 text-slate-300 border-slate-500/30',
      'EN PRÉPARATION': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'EN COURS': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'TERMINÉE': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      'RÉUSSIE': 'bg-green-500/20 text-green-300 border-green-500/30',
      'ÉCHEC': 'bg-red-500/20 text-red-300 border-red-500/30',
      'À AMÉLIORER': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    };
    return colors[status] || '';
  };

  const successRate = Math.round((experiments.filter(e => e.status === 'RÉUSSIE').length / experiments.length) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold gradient-text">Expériences</h1>
        <p className="text-slate-400">Tester et valider les nouvelles idées</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">EXPÉRIENCES LANCÉES</p>
            <p className="text-3xl font-bold gradient-text">{experiments.length}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">TAUX DE SUCCÈS</p>
            <p className="text-3xl font-bold text-green-400">{successRate}%</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">ROI MOYEN</p>
            <p className="text-3xl font-bold text-nexora-accent">+452%</p>
          </div>
        </Card>
      </div>

      {/* Experiments Grid */}
      <div className="space-y-4">
        {experiments.map((exp) => (
          <Card key={exp.id}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-nexora-accent mb-1">{exp.hypothesis}</h3>
                  <p className="text-sm text-slate-400">Activité: {exp.activity}</p>
                </div>
                <span className={`px-3 py-1 rounded text-xs font-semibold border whitespace-nowrap ml-4 ${
                  getStatusColor(exp.status)
                }`}>
                  {exp.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <DetailItem label="Budget" value={exp.budget} />
                <DetailItem label="Durée" value={exp.duration} />
                <DetailItem label="KPI" value={exp.kpi} />
                <DetailItem label="ROI" value={exp.roi} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-slate-700/30">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Objectif:</p>
                  <p className="text-sm text-slate-300">{exp.objective}</p>
                  <p className="text-xs text-slate-500 mt-1">Attendu: {exp.expectedResult}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Résultat réel:</p>
                  <p className="text-sm font-semibold text-green-400">{exp.actualResult}</p>
                  <p className="text-xs text-slate-500 mt-1">Décision: {exp.decision}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const DetailItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="p-2 rounded-lg bg-nexora-primary/50 border border-slate-700/30">
    <div className="text-xs text-slate-400">{label}</div>
    <div className="text-sm font-semibold text-slate-200 mt-1">{value}</div>
  </div>
);

export default Experiments;