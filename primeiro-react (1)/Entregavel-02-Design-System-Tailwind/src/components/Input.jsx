export function Input({ label, placeholder, type = 'text', value, onChange, error }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-3 py-2 bg-white border rounded-lg text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:ring-2 transition-all
          ${error 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
            : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'
          }`}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}