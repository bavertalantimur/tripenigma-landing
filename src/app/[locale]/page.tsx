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
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4 sm:px-6 md:px-8">
            <div className="max-w-2xl w-full text-center py-12 sm:py-16 md:py-24 space-y-8">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    {t('title')}
                </h1>

                <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 max-w-xl mx-auto">
                    {t('tagline')}
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6">
                    {(os === 'android' || os === 'other') && (
                        <a
                            href="https://play.google.com/store/apps/details?id=com.tripenigma.app"
                            className="flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-4 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition text-base sm:text-lg font-semibold w-full sm:w-auto justify-center"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src="/playstore.svg" className="w-6 h-6" alt="Play Store" />
                            {t('downloadAndroid')}
                        </a>
                    )}
                    {(os === 'ios' || os === 'other') && (
                        <a
                            href="https://apps.apple.com/app/tripenigma/id[APP_ID]"
                            className="flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-4 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition text-base sm:text-lg font-semibold w-full sm:w-auto justify-center"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src="/apple.svg" className="w-6 h-6" alt="App Store" />
                            {t('downloadIos')}
                        </a>
                    )}
                </div>
            </div>
        </main>
    );
}
