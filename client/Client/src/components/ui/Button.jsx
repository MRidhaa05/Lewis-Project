// src/components/ui/Button.jsx
export default function Button({ children, variant = 'primary', className, ...props }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded font-medium transition-colors',
        {
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
          'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}