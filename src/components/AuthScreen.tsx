import React, { useState } from 'react';
import { Brain } from 'lucide-react';

interface AuthScreenProps {
  onAuthenticate: (uniqueKey: string) => void;
}

const VALID_KEYS = [
  'MOCK2024A1', 'MOCK2024A2', 'MOCK2024A3', 'MOCK2024A4', 'MOCK2024A5',
  'MOCK2024B1', 'MOCK2024B2', 'MOCK2024B3', 'MOCK2024B4', 'MOCK2024B5'
];

export function AuthScreen({ onAuthenticate }: AuthScreenProps) {
  const [uniqueKey, setUniqueKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (VALID_KEYS.includes(uniqueKey.trim().toUpperCase())) {
      onAuthenticate(uniqueKey.trim().toUpperCase());
    } else {
      setError('Invalid access key. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-xl">
        <div className="flex flex-col items-center mb-8">
          <Brain className="w-12 h-12 text-blue-500 mb-4" />
          <h1 className="text-3xl font-bold text-white text-center">
            ⭐ Mockster ⭐
          </h1>
          <p className="text-gray-400 mt-2">Aptitude Training Platform</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Access Key</label>
            <input
              type="text"
              value={uniqueKey}
              onChange={(e) => {
                setUniqueKey(e.target.value);
                setError('');
              }}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              placeholder="Enter your access key"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Enter Platform
          </button>
        </form>
      </div>
    </div>
  );
} 