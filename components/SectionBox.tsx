type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

/* Standard dark-on-dark card: subtle border + faint white wash. Padding is
   left to the caller so each spot can tune its own breathing room. */
export function SectionBox({ children, className = "", ...rest }: Props) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.03] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
