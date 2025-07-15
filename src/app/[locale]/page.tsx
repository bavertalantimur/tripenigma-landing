'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('Home');
    const [os, setOs] = useState<'android' | 'ios' | 'other' | null>(null);

    useEffect(() => {
        const ua = navigator.userAgent;
        if (/iPad|iPhone|iPod/.test(ua)) setOs('ios');
        else if (/Android/.test(ua)) setOs('android');
        else setOs('other');
    }, []);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center">
                {t('title')}
            </h1>

            <p className="text-base md:text-xl text-center text-gray-600 max-w-xl">
                {t('tagline')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none sm:w-auto items-center justify-center">
                {(os === 'android' || os === 'other') && (
                    <a
                        href="https://play.google.com/store/apps/details?id=com.tripenigma.app"
                        className="flex gap-2 px-6 py-2 bg-black text-white rounded hover:bg-neutral-800 font-semibold"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img src="/playstore.svg" className="w-6 h-6" alt="" />
                        {t('downloadAndroid')}
                    </a>
                )}
                {(os === 'ios' || os === 'other') && (
                    <a
                        href="https://apps.apple.com/app/tripenigma/id[APP_ID]"
                        className="flex gap-2 px-6 py-2 bg-black text-white rounded hover:bg-neutral-800 font-semibold"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img src="/apple.svg" className="w-6 h-6" alt="" />
                        {t('downloadIos')}
                    </a>
                )}
            </div>
        </main>
    );
}
