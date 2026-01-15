import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableCardProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  icon?: React.ReactNode;
}

export function ExpandableCard({ title, children, defaultExpanded = false, icon }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-pale-blue/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-navy">{icon}</div>}
          <h4 className="text-navy text-left">{title}</h4>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-navy flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-navy flex-shrink-0" />
        )}
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6 pt-2 text-grey-dark">
          {children}
        </div>
      )}
    </div>
  );
}
