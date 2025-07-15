import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'tr', 'fr'], // desteklenecek diller
    defaultLocale: 'en'
});
