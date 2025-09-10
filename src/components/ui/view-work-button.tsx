import Link from 'next/link';

interface ViewWorkButtonProps {
  href?: string;
  children?: React.ReactNode;
  target?: string;
  rel?: string;
}

export function ViewWorkButton({ href = "#", children = "View Work", target, rel }: ViewWorkButtonProps) {
  // Check if it's an external link
  const isExternal = href.startsWith('http') || href.startsWith('https');
  
  if (isExternal) {
    return (
      <div className="headline-button">
        <a 
          href={href} 
          className="button inline-block group relative"
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
        >
          <div className="button-text relative overflow-hidden">
            <div className="text-sm font-normal transform transition-transform duration-300 group-hover:-translate-y-full">
              {children}
            </div>
            <div className="button-text-absolute absolute inset-0 text-sm font-normal transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              {children}
            </div>
          </div>
          <div className="button-line h-[1px] bg-foreground mt-2" />
        </a>
      </div>
    );
  }

  return (
    <div className="headline-button">
      <Link href={href} className="button inline-block group relative">
        <div className="button-text relative overflow-hidden">
          <div className="text-sm font-normal transform transition-transform duration-300 group-hover:-translate-y-full">
            {children}
          </div>
          <div className="button-text-absolute absolute inset-0 text-sm font-normal transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            {children}
          </div>
        </div>
        <div className="button-line h-[1px] bg-foreground mt-2" />
      </Link>
    </div>
  );
}