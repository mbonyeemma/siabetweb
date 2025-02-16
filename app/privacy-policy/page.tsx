import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6">SiaBet Privacy Policy</h1>

        <div className="space-y-4">
          <p className="text-lg">
            At SiaBet, we are committed to protecting your privacy. As a peer-to-peer betting app using blockchain
            technology, we prioritize your data security and anonymity.
          </p>

          <h2 className="text-xl font-semibold mt-6">No Data Collection</h2>
          <p>
            SiaBet does not collect, store, or process any personal data from our users. Our blockchain-based platform
            ensures that all betting transactions are conducted in a decentralized manner, without the need for personal
            information.
          </p>

          <h2 className="text-xl font-semibold mt-6">How We Operate</h2>
          <p>
            Our app facilitates peer-to-peer betting using blockchain technology. All transactions and bets are recorded
            on the blockchain, ensuring transparency and security without compromising user privacy.
          </p>

          <h2 className="text-xl font-semibold mt-6">Your Responsibility</h2>
          <p>
            While we do not collect any data, please be aware that blockchain transactions are public by nature. We
            recommend users take necessary precautions to protect their own privacy when using blockchain-based
            services.
          </p>

          <h2 className="text-xl font-semibold mt-6">Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. Any changes will be reflected on this page.</p>

          <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
          <p>If you have any questions about our privacy practices, please contact us at privacy@siabet.com.</p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-700">Back to SiaBet</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

