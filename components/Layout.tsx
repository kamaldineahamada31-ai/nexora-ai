import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useAppStore } from '@/store/appStore';
import { useState } from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { darkMode, toggleDarkMode } = useAppStore();

  const menuItems = [
    { label: 'ACCUEIL', href: '/' },
    { label: 'NEXORA CORE', href: '/nexora-core' },
    { label: 'OPPORTUNITÉS', href: '/opportunities' },
    { label: 'REVENUS', href: '/revenues' },
    { label: 'PRODUITS', href: '/products' },
    { label: 'EXPÉRIENCES', href: '/experiments' },
    { label: 'ACTIONS', href: '/actions' },
    { label: 'FINANCE', href: '/finance' },
    { label: 'RECHERCHE', href: '/research' },
    { label: 'MÉMOIRE', href: '/memory' },
    { label: 'CONTRÔLE', href: '/control' },
    { label: 'PARAMÈTRES', href: '/settings' },
  ];

  const isActive = (href: string) => router.pathname === href;

  return (
    <div className="min-h-screen bg-nexora-primary text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-700/30 bg-nexora-primary/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-nexora-accent to-blue-500"></div>
              <div>
                <div className="text-xl font-bold gradient-text">NEXORA AI</div>
                <div className="text-xs text-slate-400">Internal BI</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-nexora-accent/20 text-nexora-accent'
                      : 'text-slate-300 hover:text-nexora-accent hover:bg-nexora-secondary/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-nexora-secondary/50 hover:bg-nexora-secondary transition-all"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-nexora-secondary/50 hover:bg-nexora-secondary transition-all"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-2 border-t border-slate-700/30 pt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-nexora-accent/20 text-nexora-accent'
                      : 'text-slate-300 hover:text-nexora-accent hover:bg-nexora-secondary/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>

      {/* Footer */}
      <footer className="border-t border-slate-700/30 bg-nexora-secondary/30 py-8 mt-16">
        <div className="mx-auto max-w-7xl px-4 text-center text-slate-400 text-sm">
          <p>NEXORA AI © 2026 • Powered by NEXORA Core</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;