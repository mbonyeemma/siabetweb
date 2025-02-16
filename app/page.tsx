import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 flex flex-col">
      <header className="bg-emerald-600/90 backdrop-blur-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-Ns4mb4olLDDMOwY7PBInopCr0nelo6.png"
              alt="SiaBet Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-white">SiaBet</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <a href="#how-to-play" className="text-white/90 hover:text-white transition-colors">
              How to Play
            </a>
            <Link href="/privacy-policy" className="text-white/90 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto px-4 pt-24 pb-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-900 leading-tight mb-6">
              Predict & Win with <span className="text-emerald-600">Peer-to-Peer</span> Betting
            </h1>
            <p className="text-xl text-emerald-700 mb-8">
              Join the future of betting with SiaBet's decentralized platform on Stellar and Solana networks.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                  className="h-[53px] w-auto"
                />
              </Link>
              <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
                  alt="Download on the App Store"
                  width={160}
                  height={53}
                  className="h-[53px] w-auto"
                />
              </Link>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
              Buy SIA
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full max-w-[300px] mx-auto transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="absolute inset-0 bg-emerald-400 rounded-3xl blur-2xl opacity-20"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/appface-EXKXN6IFsvDBe0SnEq092oZJbJTUdA.webp"
                alt="SiaBet App Interface"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </section>

        <section id="how-to-play" className="bg-emerald-700 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">How to Play</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Create Account",
                  description: "Download the app and set up your account in seconds",
                },
                {
                  step: "2",
                  title: "Make Predictions",
                  description: "Choose from various sports events and make your predictions",
                },
                {
                  step: "3",
                  title: "Place Bets",
                  description: "Set your stake using Stellar or Solana tokens",
                },
                {
                  step: "4",
                  title: "Win & Withdraw",
                  description: "Collect your winnings directly to your wallet",
                },
              ].map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur p-6 rounded-xl text-white">
                  <div className="text-emerald-300 text-4xl font-bold mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-emerald-100">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-to-buy" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-12">How to Buy SIA</h2>

            <div className="max-w-3xl mx-auto">
              <div className="grid gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-4">Buy SIA on StellarTerm</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      SIA tokens can be purchased on StellarTerm, a decentralized exchange on the Stellar network.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="https://stellarterm.com/exchange/SIA-GD7ZM4EG65VZ6V2Q6WGUSH7XRPLUG2HCLEO2U7ZAUISOSAECB5QN5YRL/XLM-native"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-center font-semibold transition-colors"
                      >
                        Buy on StellarTerm
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      step: "1",
                      title: "Create StellarTerm Account",
                      description: "Sign up on StellarTerm and set up your Stellar wallet",
                    },
                    {
                      step: "2",
                      title: "Get XLM",
                      description: "Purchase or transfer Stellar Lumens (XLM) to your wallet",
                    },
                    {
                      step: "3",
                      title: "Exchange XLM for SIA",
                      description: "Use the StellarTerm exchange to swap XLM for SIA tokens",
                    },
                  ].map((step, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl">
                      <div className="text-emerald-600 text-3xl font-bold mb-3">{step.step}</div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center text-gray-500 text-sm">
                <p>Trading cryptocurrency assets involves risk. Please do your own research before investing.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-emerald-800 text-emerald-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-Ns4mb4olLDDMOwY7PBInopCr0nelo6.png"
                alt="SiaBet Logo"
                width={32}
                height={32}
                className="rounded-full mr-2"
              />
              <span className="text-xl font-bold">SiaBet</span>
            </div>
            <div className="flex space-x-6 items-center">
              <div className="flex items-center space-x-2">
                <Image src="/stellar-logo.png" alt="Stellar" width={24} height={24} className="rounded-full bg-white" />
                <span>Stellar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Image src="/solana-logo.png" alt="Solana" width={24} height={24} className="rounded-full bg-white" />
                <span>Solana</span>
              </div>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="text-center text-emerald-200 text-sm">
            &copy; {new Date().getFullYear()} SiaBet. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

