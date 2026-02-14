export default function ListingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This page has its own header, so we bypass the dashboard layout
  return <>{children}</>;
}
