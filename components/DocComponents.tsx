import React from 'react';

export const DocContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="max-w-4xl mx-auto px-6 py-10 space-y-8 animate-fade-in">
    {children}
  </div>
);

export const DocTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className="text-3xl md:text-4xl font-bold text-white border-b border-gray-700 pb-4 mb-6">
    {children}
  </h1>
);

export const DocHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
    {children}
  </h2>
);

export const DocSubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-medium text-gray-200 mt-6 mb-3">
    {children}
  </h3>
);

export const DocText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-gray-300 leading-7 mb-4">
    {children}
  </p>
);

export const DocList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="list-disc list-outside ml-6 space-y-2 text-gray-300 mb-4">
    {children}
  </ul>
);

export const DocListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="pl-1">
    {children}
  </li>
);

export const CodeBlock: React.FC<{ code: string; language?: string }> = ({ code }) => (
  <div className="bg-[#161b22] border border-gray-700 rounded-md p-4 my-4 overflow-x-auto">
    <pre className="text-sm text-gray-300 font-mono whitespace-pre">
      {code}
    </pre>
  </div>
);

export const Callout: React.FC<{ type?: 'info' | 'warning' | 'success'; title: string; children: React.ReactNode }> = ({ type = 'info', title, children }) => {
  const styles = {
    info: 'border-l-blue-500 bg-blue-500/10',
    warning: 'border-l-yellow-500 bg-yellow-500/10',
    success: 'border-l-green-500 bg-green-500/10'
  };

  return (
    <div className={`border-l-4 p-4 my-6 rounded-r-md ${styles[type]}`}>
      <div className="font-bold text-gray-100 mb-1">{title}</div>
      <div className="text-gray-300 text-sm">{children}</div>
    </div>
  );
};

export const Table: React.FC<{ headers: string[]; rows: string[][] }> = ({ headers, rows }) => (
  <div className="overflow-x-auto my-6 border border-gray-700 rounded-md">
    <table className="min-w-full divide-y divide-gray-700">
      <thead className="bg-[#161b22]">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-700 bg-[#0d1117]">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-4 py-3 whitespace-pre-wrap text-sm text-gray-300">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
