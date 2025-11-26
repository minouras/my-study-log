import type { ReactNode } from 'react';

interface BlockProps {
  children: ReactNode;
}

export default function Block({ children }: BlockProps) {
  return (
    <div className="bg-blue-100 p-6">
      {children}
    </div>
  );
}