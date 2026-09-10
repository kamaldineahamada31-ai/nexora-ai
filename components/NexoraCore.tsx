import React, { useState } from 'react';
import Card from './cards/Card';
import { Zap, Send } from 'lucide-react';

const NexoraCore: React.FC = () => {
  const [query, setQuery] = useState('');
  const [responses, setResponses] = useState<any[]>([]);

  const examples = [
    'Analyse mes activités.',
    'Trouve une nouvelle opportunité.',
    'Quels produits sont les plus rentables ?',
    'Comment améliorer mon bénéfice net ?',
    'Analyse mes dépenses.',
    'Prépare une nouvelle expérience.',
  ];

  const responseTemplates = {
    'Analyse mes activités.': {
      analysis: 'Vous opérez actuellement sur 3 canaux principaux. KDP génère 45% du bénéfice net avec une marge de 68%. Gumroad contribue 30% avec des marges plus volatiles.',
      opportunity: 'Diversifier vers niches moins concurrentielles',
      risk: 'Concentration du risque sur plateforme KDP',
      recommendation: 'Créer 2-3 nouveaux produits avant fin trimestre',
      action: 'Lancer recherche sur niches émergentes',
      impact: '+400€ bénéfice net potentiel',
    },
    'Trouve une nouvelle opportunité.': {
      analysis: 'Marché identifié: Formation en ligne niche. Demande: +340%, Concurrence: Moyenne, Potentiel: 500€+/mois',
      opportunity: 'Course Gumroad sur "développement personnel + IA"',
      risk: 'Création longue, ROI incertain au démarrage',
      recommendation: 'Tester avec landing page (1 semaine)',
      action: 'Créer expérience: Landing page + preselling',
      impact: '200-600€ potentiel mensuel',
    },
    'Quels produits sont les plus rentables ?': {
      analysis: 'Top 3: KDP "IA" (+68% marge), Gumroad "Python" (+62% marge), WhOP membership (+75% marge)',
      opportunity: 'Cloner structure WhOP vers Gumroad',
      risk: 'Produits immatériels plus fragiles',
      recommendation: 'Doubler efforts sur produits WhOP',
      action: 'Créer 1 nouveau WhOP produit',
      impact: '+250€ bénéfice net',
    },
  };

  const handleQuery = () => {
    if (!query.trim()) return;

    const template = responseTemplates[query as keyof typeof responseTemplates] || responseTemplates['Analyse mes activités.'];

    setResponses([...responses, { query, ...template }]);
    setQuery('');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold gradient-text">NEXORA Core</h1>
        <p className="text-slate-400">Centre de commande • Intelligence d'affaires interne</p>
      </div>

      {/* Query Interface */}
      <Card>
        <div className="space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Zap className="text-nexora-accent" size={20} />
            Que voulez-vous que NEXORA Core analyse ?
          </h2>

          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleQuery()}
              placeholder="Tapez votre question ou sélectionnez un exemple..."
              className="flex-1 px-4 py-3 rounded-lg bg-nexora-primary border border-slate-700/30 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-nexora-accent/50"
            />
            <button
              onClick={handleQuery}
              className="button-primary flex items-center gap-2"
            >
              <Send size={16} />
              Analyser
            </button>
          </div>

          {/* Examples */}
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Exemples:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {examples.map((example, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setQuery(example);
                  }}
                  className="px-4 py-2 text-left text-sm rounded-lg bg-nexora-primary/50 border border-slate-700/30 text-slate-300 hover:border-nexora-accent/50 hover:text-nexora-accent transition-all"
                >
                  "{example}"
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Responses */}
      {responses.map((response, idx) => (
        <Card key={idx}>
          <div className="space-y-4">
            <div className="border-b border-slate-700/30 pb-4">
              <p className="text-slate-400 text-sm">Votre question:</p>
              <p className="text-lg font-semibold text-nexora-accent">"{response.query}"</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ResponseItem title="ANALYSE" content={response.analysis} />
              <ResponseItem title="OPPORTUNITÉ" content={response.opportunity} />
              <ResponseItem title="RISQUE" content={response.risk} />
              <ResponseItem title="RECOMMANDATION" content={response.recommendation} />
              <ResponseItem title="ACTION PROPOSÉE" content={response.action} />
              <ResponseItem title="IMPACT POTENTIEL" content={response.impact} />
            </div>
          </div>
        </Card>
      ))}

      {responses.length === 0 && (
        <Card>
          <div className="text-center py-12">
            <Zap className="mx-auto mb-4 text-nexora-accent/30" size={48} />
            <p className="text-slate-400">Posez une question ou sélectionnez un exemple pour commencer</p>
          </div>
        </Card>
      )}
    </div>
  );
};

const ResponseItem: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <div className="p-4 rounded-lg bg-nexora-primary/50 border border-slate-700/30">
    <h3 className="text-sm font-bold text-nexora-accent mb-2">{title}</h3>
    <p className="text-sm text-slate-300 leading-relaxed">{content}</p>
  </div>
);

export default NexoraCore;