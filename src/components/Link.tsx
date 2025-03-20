interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link = ({ href, children, className = '' }: LinkProps) => {
  return (
    <a
      href={href}
      className={`bg-vhs-blue font-light text-white px-0 py-0 rounded-xs underline font-vcr ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
