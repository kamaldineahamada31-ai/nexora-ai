import React, { useState } from 'react';
import Card from './cards/Card';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface Action {
  id: number;
  action: string;
  description: string;
  activity: string;
  impact: string;
  cost: string;
  risk: string;
  priority: 'Haute' | 'Moyenne' | 'Basse';
  status: 'PROPOSÉE' | 'À VALIDER' | 'VALIDÉE' | 'EN COURS' | 'TERMINÉE' | 'REFUSÉE';
  level: 'autonome' | 'validation';
}

const Actions: React.FC = () => {
  const [actions] = useState<Action[]>([
    {
      id: 1,
      action: 'Optimiser description KDP',
      description: 'Améliorer titres et descriptions pour SEO',
      activity: 'KDP',
      impact: '+15% ventes',
      cost: '0€',
      risk: 'Faible',
      priority: 'Moyenne',
      status: 'VALIDÉE',
      level: 'autonome',
    },
    {
      id: 2,
      action: 'Lancer campagne publicité',
      description: 'Campagne FB/Google pour formation',
      activity: 'Formation en ligne',
      impact: '+250€ revenus',
      cost: '100€',
      risk: 'Moyen',
      priority: 'Haute',
      status: 'À VALIDER',
      level: 'validation',
    },
    {
      id: 3,
      action: 'Créer nouveau produit WhOP',
      description: 'Dupliquer structure du premier WhOP',
      activity: 'WHOP',
      impact: '+300€ revenus',
      cost: '50€',
      risk: 'Moyen',
      priority: 'Haute',
      status: 'EN COURS',
      level: 'validation',
    },
    {
      id: 4,
      action: 'Réduire coût API',
      description: 'Negocier avec fournisseur API',
      activity: 'Infrastructure',
      impact: '+80€ bénéfice',
      cost: '0€',
      risk: 'Faible',
      priority: 'Moyenne',
      status: 'PROPOSÉE',
      level: 'autonome',
    },
    {
      id: 5,
      action: 'Mettre en pause produit',
      description: 'Arrêter produit non rentable',
      activity: 'KDP',
      impact: '-30€ dépenses',
      cost: '0€',
      risk: 'Faible',
      priority: 'Haute',
      status: 'À VALIDER',
      level: 'validation',
    },
  ]);

  const autonome = actions.filter(a => a.level === 'autonome');
  const needsValidation = actions.filter(a => a.level === 'validation');

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'PROPOSÉE': 'bg-slate-500/20 text-slate-300 border-slate-500/30',
      'À VALIDER': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'VALIDÉE': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'EN COURS': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'TERMINÉE': 'bg-green-500/20 text-green-300 border-green-500/30',
      'REFUSÉE': 'bg-red-500/20 text-red-300 border-red-500/30',
    };
    return colors[status] || '';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Haute':
        return 'text-red-400';
      case 'Moyenne':
        return 'text-yellow-400';
      default:
        return 'text-green-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold gradient-text">Centre d'actions</h1>
        <p className="text-slate-400">Propositions, validations et exécution</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">ACTIONS TOTALES</p>
            <p className="text-3xl font-bold gradient-text">{actions.length}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">EN ATTENTE DE VALIDATION</p>
            <p className="text-3xl font-bold text-yellow-400">{needsValidation.filter(a => a.status === 'À VALIDER').length}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">TERMINÉES</p>
            <p className="text-3xl font-bold text-green-400">{actions.filter(a => a.status === 'TERMINÉE').length}</p>
          </div>
        </Card>
      </div>

      {/* Autonomous Actions */}
      <Card>
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="text-green-400" size={20} />
          <h2 className="text-xl font-bold">🟢 Actions autonomes</h2>
        </div>
        <p className="text-sm text-slate-400 mb-4">Actions simples, réversibles, sans dépense importante</p>
        <div className="overflow-x-auto">
          <ActionTable actions={autonome} statusColorFn={getStatusColor} priorityColorFn={getPriorityColor} />
        </div>
      </Card>

      {/* Validation Required */}
      <Card>
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="text-yellow-400" size={20} />
          <h2 className="text-xl font-bold">🟠 Demandes de validation</h2>
        </div>
        <p className="text-sm text-slate-400 mb-4">Dépenses, publications importantes, changements stratégiques</p>
        <div className="overflow-x-auto">
          <ActionTable actions={needsValidation} statusColorFn={getStatusColor} priorityColorFn={getPriorityColor} />
        </div>

        {needsValidation.filter(a => a.status === 'À VALIDER').length > 0 && (
          <div className="mt-4 p-4 rounded-lg bg-nexora-primary/50 border border-yellow-500/30">
            <p className="text-sm text-yellow-300 mb-3">⚠️ Actions attendant votre validation:</p>
            <div className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 rounded-lg bg-green-500/20 text-green-300 border border-green-500/30 hover:bg-green-500/30 transition-all font-semibold">
                ✓ APPROUVER
              </button>
              <button className="px-4 py-2 rounded-lg bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30 transition-all font-semibold">
                ✗ REFUSER
              </button>
              <button className="px-4 py-2 rounded-lg bg-slate-500/20 text-slate-300 border border-slate-500/30 hover:bg-slate-500/30 transition-all font-semibold">
                ✎ MODIFIER
              </button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

const ActionTable: React.FC<{
  actions: Action[];
  statusColorFn: (status: string) => string;
  priorityColorFn: (priority: string) => string;
}> = ({ actions, statusColorFn, priorityColorFn }) => (
  <table className="w-full text-sm">
    <thead>
      <tr className="border-b border-slate-700/30">
        <th className="px-4 py-3 text-left font-semibold text-slate-300">Action</th>
        <th className="px-4 py-3 text-left font-semibold text-slate-300">Activité</th>
        <th className="px-4 py-3 text-left font-semibold text-slate-300">Impact</th>
        <th className="px-4 py-3 text-left font-semibold text-slate-300">Coût</th>
        <th className="px-4 py-3 text-left font-semibold text-slate-300">Risque</th>
        <th className="px-4 py-3 text-center font-semibold text-slate-300">Priorité</th>
        <th className="px-4 py-3 text-center font-semibold text-slate-300">Statut</th>
      </tr>
    </thead>
    <tbody>
      {actions.map((action) => (
        <tr key={action.id} className="border-b border-slate-700/30 hover:bg-nexora-primary/50 transition-all">
          <td className="px-4 py-3 font-medium text-nexora-accent">{action.action}</td>
          <td className="px-4 py-3 text-slate-300">{action.activity}</td>
          <td className="px-4 py-3 text-green-400 font-semibold">{action.impact}</td>
          <td className="px-4 py-3 text-slate-300">{action.cost}</td>
          <td className="px-4 py-3 text-slate-300">{action.risk}</td>
          <td className={`px-4 py-3 text-center font-bold ${
            priorityColorFn(action.priority)
          }`}>{action.priority}</td>
          <td className="px-4 py-3 text-center">
            <span className={`px-2 py-1 rounded text-xs font-semibold border ${
              statusColorFn(action.status)
            }`}>
              {action.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Actions;