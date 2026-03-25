import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-card/95 backdrop-blur-xl border-t border-primary/20 pb-[env(safe-area-inset-bottom,1.25rem)]">
      <div className="flex items-center justify-between px-8 py-4">
        <a
          href="tel:+919876543210"
          className="flex flex-col items-center gap-1.5 text-muted hover:text-secondary transition-colors"
        >
          <Phone className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Call</span>
        </a>
        
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 text-muted hover:text-emerald-400 transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
        </a>
        
        <a
          href="#booking"
          className="flex items-center gap-2 text-white bg-primary px-6 py-3 rounded-full shadow-[0_0_20px_rgba(123,97,255,0.5)] hover:bg-primary/90 transition-all active:scale-95"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Book Now</span>
        </a>
      </div>
    </div>
  );
}
