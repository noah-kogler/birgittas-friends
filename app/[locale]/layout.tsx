import type { Metadata } from "next";
import "../globals.css";
import generateMetadataForPage, {LocaleLayoutProps} from "@/utils/generateMetadataForPage";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from 'next-intl/server';

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  return generateMetadataForPage('', props);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <body
        className={`h-full p-0 bg-black`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
