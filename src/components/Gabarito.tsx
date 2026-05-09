import React from 'react';

interface GabaritoProps {
  resposta: string;
  children: React.ReactNode;
}

export const Gabarito = ({ resposta, children }: GabaritoProps) => {
  return (
    <details className="my-6 border-l-4 border-primary bg-primary/5 rounded-r-lg group">
      <summary className="font-bold p-4 cursor-pointer text-primary list-none flex items-center">
        <span className="group-open:rotate-90 transition-transform mr-2">
          ▶
        </span>
        ✅ Ver Gabarito
      </summary>
      <div className="px-8 pb-4">
        <div className="bg-white p-4 rounded border border-primary/20 shadow-sm">
          <p className="font-bold text-lg mb-2">Resposta: {resposta}</p>
          <div className="text-gray-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </details>
  );
};
