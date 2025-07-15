import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    // requestLocale bir Promise olabilir; güvenli tarafta bekleyelim
    const rawLocale = await requestLocale;
    const locale = hasLocale(routing.locales, rawLocale)
        ? rawLocale
        : routing.defaultLocale;

    return {
        locale, // Artık her zaman string
        messages: (
            await import(`../../messages/${locale}.json`)
        ).default
    };
});
