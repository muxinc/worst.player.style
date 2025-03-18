interface LabelProps {
  children: React.ReactNode;
}

const Label = ({ children }: LabelProps) => {
  return (
    <div className="inline-flex p-0 bg-black text-white font-vcr leading-none uppercase">
      {children}
    </div>
  );
};

export default Label;
