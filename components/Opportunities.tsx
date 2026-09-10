import React, { useState } from 'react';
import Card from './cards/Card';
import { Lightbulb, TrendingUp } from 'lucide-react';

interface Opportunity {
  id: number;
  name: string;
  description: string;
  market: string;
  potential: string;
  cost: string;
  difficulty: string;
  risk: string;
  margin: string;
  score: number;
  status: 'TESTER' | 'ATTENDRE' | 'ABANDONNER';
}

const Opportunities: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([
    {
      id: 1,
      name: 'Produit numérique KDP',
      description: 'Ebooks et guides sur l\'IA et développement',
      market: 'Digital Products',
      potential: '500-1000€/mois',
      cost: '0€',
      difficulty: 'Facile',
      risk: 'Faible',
      margin: '65%+',
      score: 85,
      status: 'TESTER',
    },
    {
      id: 2,
      name: 'Formation en ligne',
      description: 'Masterclass sur automisation avec IA',
      market: 'Nouveau marché',
      potential: '800-1500€/mois',
      cost: '100€',
      difficulty: 'Moyen',
      risk: 'Moyen',
      margin: '70%+',
      score: 78,
      status: 'ATTENDRE',
    },
    {
      id: 3,
      name: 'Distribution numérique',
      description: 'Agrégation de contenu numériques',
      market: 'Distribution numérique',
      potential: '300-600€/mois',
      cost: '50€',
      difficulty: 'Moyen',
      risk: 'Moyen',
      margin: '55%+',
      score: 72,
      status: 'TESTER',
    },
    {
      id: 4,
      name: 'Niche produit émergente',
      description: 'Produits pour marché Gen-Z',
      market: 'Nouvelle niche',
      potential: '400-900€/mois',
      cost: '75€',
      difficulty: 'Difficile',
      risk: 'Élevé',
      margin: '60%+',
      score: 68,
      status: 'ATTENDRE',
    },
  ]);

  const updateStatus = (id: number, newStatus: 'TESTER' | 'ATTENDRE' | 'ABANDONNER') => {
    setOpportunities(opportunities.map(opp => opp.id === id ? { ...opp, status: newStatus } : opp));
  };

  const statusColor = (status: string) => {
    switch (status) {
      case 'TESTER':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'ATTENDRE':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'ABANDONNER':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold gradient-text">Opportunités</h1>
        <p className="text-slate-400">Détection et analyse des nouvelles activités potentielles</p>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {opportunities.map((opp) => (
          <Card key={opp.id}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-nexora-accent">{opp.name}</h3>
                  <p className="text-sm text-slate-400 mt-1">{opp.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-nexora-accent">{opp.score}</div>
                  <div className="text-xs text-slate-400">Score</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <StatItem label="Marché" value={opp.market} />
                <StatItem label="Potentiel" value={opp.potential} />
                <StatItem label="Coût" value={opp.cost} />
                <StatItem label="Difficulté" value={opp.difficulty} />
                <StatItem label="Risque" value={opp.risk} />
                <StatItem label="Marge" value={opp.margin} />
              </div>

              {/* Status Buttons */}
              <div className="flex gap-2 pt-4 border-t border-slate-700/30">
                {(['TESTER', 'ATTENDRE', 'ABANDONNER'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => updateStatus(opp.id, status)}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all border ${
                      opp.status === status
                        ? statusColor(status)
                        : 'bg-nexora-primary/50 text-slate-400 border-slate-700/30 hover:border-slate-600'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const StatItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="p-2 rounded-lg bg-nexora-primary/50 border border-slate-700/30">
    <div className="text-xs text-slate-400">{label}</div>
    <div className="text-sm font-semibold text-slate-200 mt-1">{value}</div>
  </div>
);

export default Opportunities;