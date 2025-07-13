export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Tripenigma</h1>
      <p className="text-lg text-center text-gray-600 mb-4 max-w-xl">
        Discover more, stress less. Get the TripEnigma app today and simplify your travel plans!
      </p>
      <div className="flex gap-4">
        <a
          href="https://play.google.com/store/apps/details?id=com.tripenigma.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded hover:bg-neutral-800 transition-colors font-semibold"
        >
          <img src="/playstore.svg" alt="Play Store" className="w-6 h-6" />
          Download for Android
        </a>
        <a
          href="https://apps.apple.com/app/tripenigma/id[APP_ID]"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded hover:bg-neutral-800 transition-colors font-semibold"
        >
          <img src="/apple.svg" alt="Apple Store" className="w-6 h-6" />
          Download for iOS
        </a>
      </div>
    </main>
  );
}
