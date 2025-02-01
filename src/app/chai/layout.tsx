//copied from layout.tsx in app directory, removed all metadata related stuff as it is only required in main directory, remove other unnecessaary stuff like body, html etc tags
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>inner layout item</h1>
      {children}
    </>
  );
}
