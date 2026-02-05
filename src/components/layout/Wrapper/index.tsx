import type { ReactNode } from 'react';
/**
 * ラッパー
 * */

interface BlockProps {
  children: ReactNode;
  size?: 'default' | 'narrow' | 'full';
  className?: string;
}

export default function Block({ children, size = 'default', className = '' }: BlockProps) {
  const sizeStyles = {
    default: 'max-w-[1200px]',
    narrow: 'max-w-[980px]',
    full: 'max-w-full',
  };
  const baseStyle = 'w-full mx-auto';
  const paddingStyle = size === 'full' ? '' : 'px-[clamp(1rem,4vw,2rem)]';

  const styles = [baseStyle, sizeStyles[size], paddingStyle, className].filter(Boolean).join(' ');

  return <div className={styles}>{children}</div>;
}
