import React from 'react';
import { Layers, ArrowRight, Lock } from 'lucide-react';
import { Button } from './Button';

interface TabLockModalProps {
  onTakeover: () => void;
}

export const TabLockModal: React.FC<TabLockModalProps> = ({ onTakeover }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
        <div className="bg-white dark:bg-[#0F0F0F] border border-slate-200 dark:border-neutral-800 w-full max-w-md rounded-3xl shadow-2xl p-8 text-center animate-slide-up relative overflow-hidden">
             {/* Decorative top bar */}
             <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500" />
             
             <div className="mx-auto w-20 h-20 bg-slate-50 dark:bg-neutral-900 rounded-full flex items-center justify-center mb-6 relative border border-slate-100 dark:border-neutral-800">
                <Layers className="w-10 h-10 text-slate-400 dark:text-slate-500" />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white dark:bg-[#0F0F0F] rounded-full flex items-center justify-center">
                   <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center border-2 border-white dark:border-[#0F0F0F]">
                      <Lock className="w-3 h-3 text-white" />
                   </div>
                </div>
             </div>

             <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Tab Conflict Detected</h2>
             <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed text-sm">
                NW Share is active in another browser tab. To prevent connection conflicts and ensure data integrity, please use one tab at a time.
             </p>

             <div className="space-y-3">
                 <Button onClick={onTakeover} className="w-full py-3.5 text-base shadow-xl shadow-violet-500/20 hover:shadow-violet-500/30 rounded-2xl">
                    Use Here Instead <ArrowRight className="w-4 h-4" />
                 </Button>
                 <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Session Preserved
                 </div>
             </div>
        </div>
    </div>
  );
};
