import { Badge } from './Badge';

export function Card({ titulo, descricao, categoria, badgeColor = 'blue', footer }) {
  return (
    <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {categoria && (
          <div className="mb-3">
            <Badge color={badgeColor}>{categoria}</Badge>
          </div>
        )}
        <h2 className="text-lg font-bold text-slate-900 mb-2">{titulo}</h2>
        <p className="text-sm text-slate-600 leading-relaxed">{descricao}</p>
      </div>
      
      {footer && (
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
          {footer}
        </div>
      )}
    </article>
  );
}