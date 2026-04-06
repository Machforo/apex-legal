import Navbar from "./Navbar";
import Footer from "./Footer";
import { WhatsAppButton, ChatBot, QuickEnquiry } from "./FloatingActions";
import ExitIntentPopup from "./ExitIntentPopup";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-gold/30">
      <Navbar />
      <main className="flex-1 w-full bg-background mt-0">{children}</main>
      <Footer />
      
      {/* Global Elements */}
      <WhatsAppButton />
      <ChatBot />
      <QuickEnquiry />
      <ExitIntentPopup />
    </div>
  );
}
