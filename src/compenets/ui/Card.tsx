// Card component
export function Card({ children='', className = '' }) {
    return <div className={`rounded-2xl shadow-lg bg-gray-900 text-white p-6 ${className}`}>{children}</div>;
  }
  
  export function CardContent({ children='', className = '' }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
  }
  