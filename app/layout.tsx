import "./globals.css";
import NavigatorSystem from "./navigatorSystem";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-gray-100" lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="h-full">
        <NavigatorSystem />
        {children}
      </body>
    </html>
  );
}
