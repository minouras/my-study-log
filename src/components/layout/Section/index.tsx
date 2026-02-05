import type { ReactNode } from 'react';

interface SectionProps {
  size?: 'default' | 'l' | 's' | '0';
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div' | 'article' | 'main';
}

export default function Section({
  size = 'default',
  children,
  className = '',
  as: Tag = 'section',
}: SectionProps) {
  const sizeClasses = {
    l: 'py-24 md:py-32',
    default: 'py-16 md:py-24',
    s: 'py-8 md:py-12',
    '0': 'py-0',
  };

  const classes = [sizeClasses[size], className].filter(Boolean).join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
