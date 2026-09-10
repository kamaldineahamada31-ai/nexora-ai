import React, { useState } from 'react';
import Card from './cards/Card';
import { Package, Plus } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  type: string;
  platform: string;
  price: string;
  cost: string;
  sales: number;
  revenue: number;
  profit: number;
  margin: number;
  status: 'IDÉE' | 'PRÉPARATION' | 'TEST' | 'ACTIF' | 'À OPTIMISER' | 'À ARRÊTER';
}

const Products: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Guide IA pour débutants',
      type: 'Ebook',
      platform: 'KDP',
      price: '9.99€',
      cost: '2€',
      sales: 45,
      revenue: 450,
      profit: 315,
      margin: 70,
      status: 'ACTIF',
    },
    {
      id: 2,
      name: 'Python Automation Course',
      type: 'Formation',
      platform: 'Gumroad',
      price: '29€',
      cost: '5€',
      sales: 28,
      revenue: 812,
      profit: 672,
      margin: 82.8,
      status: 'ACTIF',
    },
    {
      id: 3,
      name: 'WhOP Membership',
      type: 'Membership',
      platform: 'WhOP',
      price: '19€/mois',
      cost: '2€',
      sales: 12,
      revenue: 228,
      profit: 204,
      margin: 89.5,
      status: 'À OPTIMISER',
    },
    {
      id: 4,
      name: 'Email Marketing Templates',
      type: 'Templates',
      platform: 'Gumroad',
      price: '49€',
      cost: '10€',
      sales: 8,
      revenue: 392,
      profit: 312,
      margin: 79.6,
      status: 'ACTIF',
    },
    {
      id: 5,
      name: 'AI Prompts Bundle',
      type: 'Bundle',
      platform: 'Lemon Squeezy',
      price: '19€',
      cost: '3€',
      sales: 15,
      revenue: 285,
      profit: 240,
      margin: 84.2,
      status: 'TEST',
    },
    {
      id: 6,
      name: 'Trading Strategy Guide',
      type: 'Guide',
      platform: 'KDP',
      price: '14.99€',
      cost: '3€',
      sales: 5,
      revenue: 75,
      profit: 45,
      margin: 60,
      status: 'IDÉE',
    },
  ]);

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'IDÉE': 'bg-slate-500/20 text-slate-300 border-slate-500/30',
      'PRÉPARATION': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'TEST': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'ACTIF': 'bg-green-500/20 text-green-300 border-green-500/30',
      'À OPTIMISER': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'À ARRÊTER': 'bg-red-500/20 text-red-300 border-red-500/30',
    };
    return colors[status] || '';
  };

  const totalRevenue = products.reduce((sum, p) => sum + p.revenue, 0);
  const totalProfit = products.reduce((sum, p) => sum + p.profit, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Produits</h1>
          <p className="text-slate-400">Gestion de tous les produits et services</p>
        </div>
        <button className="button-primary flex items-center gap-2">
          <Plus size={16} />
          CRÉER UNE IDÉE
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">PRODUITS ACTIFS</p>
            <p className="text-3xl font-bold gradient-text">{products.filter(p => p.status === 'ACTIF').length}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">REVENUS TOTAUX</p>
            <p className="text-3xl font-bold text-nexora-accent">{totalRevenue}€</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-2">BÉNÉFICE TOTAL</p>
            <p className="text-3xl font-bold text-green-400">{totalProfit}€</p>
          </div>
        </Card>
      </div>

      {/* Products Table */}
      <Card>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Package className="text-nexora-accent" size={20} />
          Tous les produits
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700/30">
                <th className="px-4 py-3 text-left font-semibold text-slate-300">Nom</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-300">Type</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-300">Plateforme</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-300">Prix</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-300">Ventes</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-300">Revenus</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-300">Bénéfice</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-300">Marge</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-300">Statut</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-slate-700/30 hover:bg-nexora-primary/50 transition-all">
                  <td className="px-4 py-3 font-medium text-nexora-accent">{product.name}</td>
                  <td className="px-4 py-3 text-slate-300">{product.type}</td>
                  <td className="px-4 py-3 text-slate-400">{product.platform}</td>
                  <td className="px-4 py-3 text-right">{product.price}</td>
                  <td className="px-4 py-3 text-right font-semibold">{product.sales}</td>
                  <td className="px-4 py-3 text-right font-semibold">{product.revenue}€</td>
                  <td className="px-4 py-3 text-right font-semibold text-green-400">{product.profit}€</td>
                  <td className="px-4 py-3 text-right font-semibold">{product.margin}%</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-semibold border ${
                      getStatusColor(product.status)
                    }`}>
                      {product.status}
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

export default Products;