import React, { useState } from 'react';
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  Settings, 
  Bell, 
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  DollarSign
} from 'lucide-react';
import { motion } from 'framer-motion';

// Mock Data
const TRANSACTIONS = [
  { id: 1, title: "Apple Store", category: "Tech", amount: -1299, date: "24 May 2026", type: "expense" },
  { id: 2, title: "Salary Deposit", category: "Income", amount: 4500, date: "22 May 2026", type: "income" },
  { id: 3, title: "Starbucks", category: "Food", amount: -12.5, date: "21 May 2026", type: "expense" },
  { id: 4, title: "Airbnb Refund", category: "Travel", amount: 240, date: "20 May 2026", type: "income" },
];

const StatCard = ({ title, amount, icon: Icon, color, trend }: any) => (
  <div className="glass p-6 rounded-[32px] flex flex-col justify-between hover:bg-white/10 transition-all cursor-pointer group">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl bg-${color}-500/20 text-${color}-400 group-hover:scale-110 transition-transform`}>
        <Icon size={24} />
      </div>
      <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${trend > 0 ? 'green' : 'red'}-500/10 text-${trend > 0 ? 'green' : 'red'}-400`}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
    </div>
    <div>
      <p className="text-text-secondary text-sm mb-1">{title}</p>
      <h3 className="text-2xl font-bold">${amount.toLocaleString()}</h3>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8 font-['Inter']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar */}
        <aside className="lg:col-span-1 flex lg:flex-col items-center justify-between lg:justify-start gap-8 py-4 px-2 glass rounded-[40px] sticky top-8 h-fit lg:h-[calc(100vh-64px)]">
          <div className="p-3 bg-primary rounded-2xl">
            <Wallet className="text-white" />
          </div>
          <nav className="flex lg:flex-col gap-6">
            <div className="p-3 text-primary bg-white/5 rounded-2xl"><PieChart size={24} /></div>
            <div className="p-3 text-text-secondary hover:text-white transition-colors"><TrendingUp size={24} /></div>
            <div className="p-3 text-text-secondary hover:text-white transition-colors"><CreditCard size={24} /></div>
            <div className="p-3 text-text-secondary hover:text-white transition-colors"><Settings size={24} /></div>
          </nav>
          <div className="lg:mt-auto p-3 text-text-secondary hover:text-white transition-colors">
            <Bell size={24} />
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-11">
          {/* Header */}
          <header className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-1">Financial Insights</h1>
              <p className="text-text-secondary">Welcome back, Sandra</p>
            </div>
            <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover px-6 py-3 rounded-2xl font-semibold transition-all">
              <Plus size={20} />
              Add Transaction
            </button>
          </header>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <StatCard title="Total Balance" amount={12840} icon={DollarSign} color="indigo" trend={12} />
            <StatCard title="Monthly Income" amount={4500} icon={ArrowUpRight} color="green" trend={8} />
            <StatCard title="Monthly Expenses" amount={1552} icon={ArrowDownLeft} color="red" trend={-3} />
          </section>

          {/* Charts & List */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Transactions */}
            <div className="lg:col-span-2 glass rounded-[40px] p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Recent Transactions</h2>
                <button className="text-primary text-sm font-semibold hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {TRANSACTIONS.map((t) => (
                  <motion.div 
                    key={t.id} 
                    whileHover={{ x: 10 }}
                    className="flex items-center justify-between p-4 rounded-3xl hover:bg-white/5 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl ${t.type === 'income' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                        {t.type === 'income' ? <ArrowUpRight size={20} /> : <ArrowDownLeft size={20} />}
                      </div>
                      <div>
                        <p className="font-semibold">{t.title}</p>
                        <p className="text-xs text-text-secondary">{t.category} • {t.date}</p>
                      </div>
                    </div>
                    <p className={`font-bold text-lg ${t.type === 'income' ? 'text-green-400' : 'text-white'}`}>
                      {t.type === 'income' ? '+' : '-'}${Math.abs(t.amount).toLocaleString()}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Savings Goal */}
            <div className="glass rounded-[40px] p-8 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
              <div>
                <h2 className="text-xl font-bold mb-2">Savings Goal</h2>
                <p className="text-text-secondary text-sm mb-6">New Home Fund</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold">$74,000</span>
                  <span className="text-text-secondary text-sm mb-2">/ $100k</span>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full mb-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '74%' }}
                    className="h-full bg-primary rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  />
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-3xl">
                <p className="text-sm text-text-secondary mb-1">Monthly Average</p>
                <p className="font-bold">$2,400</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
