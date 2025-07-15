import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {};          // varsa diğer Next ayarların

const withNextIntl = createNextIntlPlugin(); // i18n alias + yükleyici
export default withNextIntl(nextConfig);
