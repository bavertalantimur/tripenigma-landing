import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import requestConfig from '@/i18n/request';
import { routing } from '@/i18n/routing';

export const metadata = { title: 'Tripenigma' };

export default async function LocaleLayout(props: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { children, params } = props;
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();
    const { messages } = await requestConfig({ requestLocale: Promise.resolve(locale) });

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
