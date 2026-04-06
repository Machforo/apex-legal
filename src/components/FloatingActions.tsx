import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Phone, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
  const phoneNumber = "919569394675";
  const message = encodeURIComponent("I want to inquire more about IIMT");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute left-16 bg-navy text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap shadow-xl border border-white/10"
          >
            WhatsApp Click to Chat
            <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-navy rotate-45 border-l border-b border-white/10" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center justify-center transition-shadow hover:shadow-[0_15px_35px_rgba(37,211,102,0.5)]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </motion.a>
    </div>
  );
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Namaste! Welcome to IIMT. How can I assist you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");

    // Simple bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thank you for your message. An admissions counselor will get back to you shortly. For immediate assistance, please call 8448797700.", 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-navy text-white rounded-full shadow-lg flex items-center justify-center border border-white/10"
      >
        {isOpen ? <X size={24} /> : <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}><MessageCircle size={28} /></motion.div>}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, originY: 1 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-card border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: '500px' }}
          >
            <div className="bg-navy p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <MessageCircle size={18} className="text-navy" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm">IIMT Assistant</h3>
                  <p className="text-[10px] opacity-70">Online | Click to chat</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                title="Close Chat"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] bg-muted/30">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isBot ? 'bg-white text-navy shadow-sm rounded-tl-none border' : 'bg-gold text-navy font-medium rounded-tr-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t flex gap-2 bg-card">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-all"
              />
              <button type="submit" className="w-11 h-11 bg-gold text-navy rounded-xl flex items-center justify-center shrink-0 shadow-lg hover:shadow-gold/20 transition-all active:scale-[0.98]">
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function QuickEnquiry() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-[65%] -translate-y-1/2 z-[55]">
      {!isOpen ? (
        <motion.button
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          onClick={() => setIsOpen(true)}
          className="bg-gold text-foreground py-4 px-2 rounded-l-xl shadow-xl flex flex-col items-center gap-4 group"
        >
          <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-widest font-bold text-sm">Quick Enquiry</span>
          <Phone size={18} />
        </motion.button>
      ) : (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          className="bg-card border-l shadow-2xl w-80 p-6 rounded-l-3xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-bold text-navy">Quick Enquiry</h3>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-2.5 text-sm rounded-lg border bg-muted outline-none" />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2.5 text-sm rounded-lg border bg-muted outline-none" />
            <textarea placeholder="Your Question" rows={3} className="w-full px-4 py-2.5 text-sm rounded-lg border bg-muted outline-none resize-none" />
            <button className="w-full py-2.5 bg-navy text-white text-sm font-semibold rounded-lg">Send Enquiry</button>
          </form>
        </motion.div>
      )}
    </div>
  );
}
