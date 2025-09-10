'use client';

import { cn } from '@/lib/utils';

interface GoldenButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
}

const GoldenButton = ({
  children,
  href,
  className,
  ...rest
}: GoldenButtonProps) => {
  const buttonClasses = cn('golden-btn', className);

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      {...rest}
    >
      {children}
    </button>
  );
};

export default GoldenButton;