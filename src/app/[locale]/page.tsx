'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
    const t = useTranslations('Home');

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4 sm:px-6 md:px-8">
            <div className="max-w-5xl w-full text-center py-0 sm:py-6 md:py-10 space-y-8">
                <div className="space-y-4 text-white">
                    <div className="flex justify-center mb-6">
                        <Image 
                            src="/logo.png" 
                            alt="TripEnigma Logo" 
                            width={224}
                            height={224}
                            className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain bg-white rounded-full p-2 shadow-lg"
                        />
                    </div>
                    
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                        {t('title')}
                    </h1>

                    <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-normal">
                        {t('tagline')}
                    </p>
                </div>

                <div className="inline-block mx-auto">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 mt-0">
                    <div className="w-full sm:w-auto relative">
                        <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 bg-white text-black border-[3px] border-black rounded-[14px] transition motion-reduce:transition-none text-sm font-semibold w-full sm:w-64 md:w-72 justify-start pl-4 sm:pl-5 md:pl-6">
                            <div className="flex items-center gap-2 px-1 h-12 sm:h-14 md:h-16">
                                <Image src="/apple.svg" width={40} height={40} className="w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10" alt="App Store" />
                                <div className="flex flex-col items-start leading-tight">
                                    <span className="font-normal text-xs sm:text-sm md:text-base uppercase text-gray-500">{t('downloadIos')}</span>
                                    <span className="font-bold text-lg sm:text-xl md:text-2xl uppercase">{t('downloadIosBold')}</span>
                                </div>
                            </div>
                        </div>
                        <a
                            href="https://apps.apple.com/app/tripenigma/id[APP_ID]"
                            target="_blank" rel="noopener noreferrer"
                            className="absolute inset-0"
                        >
                        </a>
                    </div>
                    <div className="w-full sm:w-auto relative">
                        <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 bg-white text-black border-[3px] border-black rounded-[14px] transition motion-reduce:transition-none text-sm font-semibold w-full sm:w-64 md:w-72 justify-start pl-4 sm:pl-5 md:pl-6">
                            <div className="flex items-center gap-2 px-1 h-12 sm:h-14 md:h-16">
                                <Image src="/playstore.svg" width={40} height={40} className="w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10" alt="Play Store" />
                                <div className="flex flex-col items-start leading-tight">
                                    <span className="font-normal text-xs sm:text-sm md:text-base uppercase text-gray-500">{t('downloadAndroid')}</span>
                                    <span className="font-bold text-lg sm:text-xl md:text-2xl uppercase">{t('downloadAndroidBold')}</span>
                                </div>
                            </div>
                        </div>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.tripenigma.app"
                            target="_blank" rel="noopener noreferrer"
                            className="absolute inset-0"
                        >
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </main>
    );
}
