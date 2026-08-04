import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import LenisScroll from "@/LenisScroll";
import { AppProvider } from "@/context/AppContext";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CustomCursor from "@/components/UI/CustomCursor";
import { Gilda_Display , Lora} from 'next/font/google'
import localFont from "next/font/local";
import Loading from "@/components/SpecialComponents/Loading";

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/CabinetGrotesk-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-cabinetGrotesk",
});

const gilda = Gilda_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-gilda',
})

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
});

 




export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Show Hello/Namaste greeting every time user lands on the home page (not only on first visit)
  useEffect(() => {
    if (router.pathname === '/') {
      setIsLoading(true);
    }
  }, [router.pathname]);

  useEffect(() => {
    // Disable the default scroll restoration
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }

    // Handle scroll position on route change
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };  
  }, [router]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // The page now renders beneath the overlay, so GSAP measured its positions
    // while the overlay was up. Re-measure once it clears.
    import("gsap/dist/ScrollTrigger").then(({ ScrollTrigger }) => {
      ScrollTrigger.refresh();
    });
  };

  return (
    <AppProvider>
      <div className={`${gilda.variable} ${lora.variable} ${cabinetGrotesk.variable}`}>
        {/* Loading is an OVERLAY, not a gate.
            It used to wrap the page in {!isLoading && ...}, which meant the
            prerendered HTML for every route contained only the greeting screen:
            no copy, and critically no <SEO> <title>/og: tags, since those live
            inside the page component. Crawlers and LinkedIn/Slack link previews
            saw the word "Hello" and nothing else.
            Rendering the page underneath fixes indexing and previews; the overlay
            still covers it visually until the greetings finish. */}
        {isLoading && (
          <div className="fixed inset-0 z-[10000]">
            <Loading onComplete={handleLoadingComplete} />
          </div>
        )}
        <LenisScroll />
        <AnimatePresence mode="wait">
          <CustomCursor />
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </div>
    </AppProvider>
  );
}
