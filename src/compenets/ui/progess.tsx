export function Progress({ value='', className = '' }) {
    return (
      <div className={`w-full bg-gray-700 rounded-full h-2.5 overflow-hidden ${className}`}>
        <div
          className="bg-gradient-to-r from-blue-500 to-green-500 h-2.5"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    );
  }