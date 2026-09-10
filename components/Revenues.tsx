import React, { useState } from 'react';
import Card from './cards/Card';
import { DollarSign, TrendingUp } from 'lucide-react';

interface RevenueEngine {
  id: number;
  name: string;
  revenues: number;
  expenses: number;
  netProfit: number;
  margin: number;
  products: number;
  performance: string;
  trend: 'up' | 'down' | 'stable';
  status: 'ACTIF' | 'EN TEST' | 'SUSPENDU';
}

const Revenues: React.FC = () => {
  const [engines] = useState<RevenueEngine[]>([
    {
      id: 1,
      name: 'DIGITAL PRODUCTS',
      revenues: 680,
      expenses: 50,
      netProfit: 630,
      margin: 92.6,
      products: 8,
      performance: '+18%',
      trend: 'up',
      status: 'ACTIF',
    },
    {
      id: 2,
      name: 'KDP',
      revenues: 420,
      expenses: 80,
      netProfit: 340,
      margin: 80.9,
      products: 12,
      performance: '+12%',
      trend: 'up',
      status: 'ACTIF',
    },
    {
      id: 3,
      name: 'GUMROAD',
      revenues: 240,
      expenses: 60,
      netProfit: 180,
      margin: 75,
      products: 6,
      performance: '+5%',
      trend: 'stable',
      status: 'ACTIF',
    },
    {
      id: 4,
      name: 'LEMON SQUEEZY',
      revenues: 120,
      expenses: 30,
      netProfit: 90,
      margin: 75,
      products: 3,
      performance: '-2%',
      trend: 'down',
      status: 'EN TEST',
    },
    {
      id: 5,
      name: 'WHOP',
      revenues: 180,
      expenses: 20,
      netProfit: 160,
      margin: 88.8,
      products: 2,
      performance: '+25%',
      trend: 'up',
      status: 'ACTIF',
    },
    {
      id: 6,
      name: 'DISTRIBUTION NUMÉRIQUE',
      revenues: 100,
      expenses: 40,
      netProfit: 60,
      margin: 60,
      products: 4,
      performance: '+8%',
      trend: 'up',
      status: 'EN TEST',
    },
  ]);

  const totalRevenues = engines.reduce((sum, e) => sum + e.revenues, 0);
  const totalExpenses = engines.reduce((sum, e) => sum + e.expenses, 0);
  const totalNetProfit = engines.reduce((sum, e) => sum + e.netProfit, 0);
  const avgMargin = (totalNetProfit / totalRevenues) * 100;

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return '📈';
      case 'down':
        return '📉';
      default:
        return '→';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIF':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'EN TEST':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'SUSPENDU':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-slate-500/20 text-slate-300';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold gradient-text">Revenue Engines</h1>
        <p className="text-slate-400">Toutes les activités génératrices de revenus</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">CHIFFRE D'AFFAIRES</p>
            <p className="text-3xl font-bold gradient-text">{totalRevenues}€</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">DÉPENSES</p>
            <p className="text-3xl font-bold text-red-400">{totalExpenses}€</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">BÉNÉFICE NET</p>
            <p className="text-3xl font-bold text-green-400">{totalNetProfit}€</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">MARGE MOYENNE</p>
            <p className="text-3xl font-bold text-nexora-accent">{avgMargin.toFixed(1)}%</p>
          </div>
        </Card>
      </div>

      {/* Revenue Engines Table */}
      <Card>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="text-nexora-accent" size={20} />
          Moteurs de revenus
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700/30">
                <th className="px-4 py-3 text-left font-semibold text-slate-300">Activité</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-300">Revenus</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-300">Dépenses</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-300">Bénéfice</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-300">Marge</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-300">Produits</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-300">Perf.</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-300">Statut</th>
              </tr>
            </thead>
            <tbody>
              {engines.map((engine) => (
                <tr key={engine.id} className="border-b border-slate-700/30 hover:bg-nexora-primary/50 transition-all">
                  <td className="px-4 py-3 font-medium text-nexora-accent">{engine.name}</td>
                  <td className="px-4 py-3 text-right font-semibold">{engine.revenues}€</td>
                  <td className="px-4 py-3 text-right text-red-400">{engine.expenses}€</td>
                  <td className="px-4 py-3 text-right text-green-400 font-semibold">{engine.netProfit}€</td>
                  <td className="px-4 py-3 text-right font-semibold">{engine.margin.toFixed(1)}%</td>
                  <td className="px-4 py-3 text-center">{engine.products}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-lg ${
                      engine.trend === 'up' ? 'text-green-400' :
                      engine.trend === 'down' ? 'text-red-400' :
                      'text-slate-400'
                    }`}>
                      {getTrendIcon(engine.trend)} {engine.performance}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-semibold border ${
                      getStatusColor(engine.status)
                    }`}>
                      {engine.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Key Insights */}
      <Card>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="text-nexora-accent" size={20} />
          Insights clés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 rounded-lg bg-nexora-primary/50 border border-slate-700/30">
            <p className="text-slate-400 text-sm mb-2">Activité la plus rentable</p>
            <p className="text-lg font-bold text-green-400">DIGITAL PRODUCTS</p>
            <p className="text-xs text-slate-400 mt-1">630€ bénéfice net • 92.6% marge</p>
          </div>
          <div className="p-3 rounded-lg bg-nexora-primary/50 border border-slate-700/30">
            <p className="text-slate-400 text-sm mb-2">Croissance la plus rapide</p>
            <p className="text-lg font-bold text-blue-400">WHOP</p>
            <p className="text-xs text-slate-400 mt-1">+25% en 30 jours</p>
          </div>
          <div className="p-3 rounded-lg bg-nexora-primary/50 border border-slate-700/30">
            <p className="text-slate-400 text-sm mb-2">Recommandation</p>
            <p className="text-lg font-bold text-nexora-accent">Dupliquer WHOP</p>
            <p className="text-xs text-slate-400 mt-1">+250€ potentiel mensuel</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Revenues;