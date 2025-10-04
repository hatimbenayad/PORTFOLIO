import { useState, useEffect } from 'react';

export default function HealthCheck() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const checkAPI = async () => {
      try {
        const response = await fetch('/api');
        const result = await response.json();
        setData(result);
        setStatus('success');
      } catch (error) {
        console.error('API health check failed:', error);
        setStatus('error');
      }
    };

    checkAPI();
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null; // Don't show in production
  }

  return (
    <div className="fixed bottom-4 right-4 p-3 bg-white shadow-lg rounded-lg border text-sm">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${
          status === 'loading' ? 'bg-yellow-500' :
          status === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`} />
        <span>
          API Status: {status === 'loading' ? 'Checking...' : 
                      status === 'success' ? 'Connected' : 'Failed'}
        </span>
      </div>
      {status === 'success' && data && (
        <div className="mt-1 text-xs text-gray-600">
          Version: {data.version}
        </div>
      )}
    </div>
  );
}