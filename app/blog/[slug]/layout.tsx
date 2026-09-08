export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4 py-8">
      {children}
    </div>
  );
}
