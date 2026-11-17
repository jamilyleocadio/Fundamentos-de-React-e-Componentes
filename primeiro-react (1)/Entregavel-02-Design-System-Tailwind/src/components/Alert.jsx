export function Alert({ variant = 'success', title, message }) {
  const variants = {
    success: {
      container: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      title: 'text-emerald-900',
      icon: '✓',
    },
    warning: {
      container: 'bg-amber-50 border-amber-200 text-amber-800',
      title: 'text-amber-900',
      icon: '⚠',
    },
    error: {
      container: 'bg-red-50 border-red-200 text-red-800',
      title: 'text-red-900',
      icon: '✕',
    },
  };

  const current = variants[variant] || variants.success;

  return (
    <div className={`p-4 rounded-lg border flex items-start gap-3 ${current.container}`} role="alert">
      <span className="font-bold text-lg leading-none mt-0.5">{current.icon}</span>
      <div>
        {title && <h4 className={`font-semibold text-sm ${current.title}`}>{title}</h4>}
        <p className="text-sm mt-1 opacity-90">{message}</p>
      </div>
    </div>
  );
}