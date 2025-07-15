import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // API, _next, dosyalar vb. hariç tüm isteklerde çalış
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
