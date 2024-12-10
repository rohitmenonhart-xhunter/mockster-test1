import React from 'react';
import { domains } from '../data/domains';
import { Domain } from '../types';
import { Cpu, Brain } from 'lucide-react';

interface DomainSelectionProps {
  onSelectDomain: (domain: Domain) => void;
  selectedDomain: Domain | null;
  completedDomains: Domain[];
}

export function DomainSelection({ onSelectDomain, selectedDomain, completedDomains }: DomainSelectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {domains.map((domain) => {
        const isCompleted = completedDomains.includes(domain.id);
        const isSelected = selectedDomain === domain.id;
        
        return (
          <button
            key={domain.id}
            onClick={() => onSelectDomain(domain.id)}
            className={`
              p-6 rounded-lg transition-all duration-300
              ${isSelected ? 'bg-blue-600' : 'bg-gray-800'}
              ${isCompleted ? 'border-2 border-green-500' : ''}
              hover:bg-blue-700 flex flex-col items-center gap-4
            `}
          >
            {domain.id === 'general' ? (
              <Brain className="w-12 h-12 text-blue-400" />
            ) : (
              <Cpu className="w-12 h-12 text-blue-400" />
            )}
            <h3 className="text-xl font-semibold text-white">{domain.label}</h3>
            {isCompleted && (
              <span className="text-green-400 text-sm">Completed</span>
            )}
          </button>
        );
      })}
    </div>
  );
}