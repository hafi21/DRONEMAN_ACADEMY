import { motion } from 'motion/react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

export default function Booking() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready to <span className="text-gradient">Take Flight?</span>
            </h3>
            <p className="text-lg text-muted mb-12 leading-relaxed">
              Whether you need professional drone services, want to enroll in a course, or have a general inquiry, our team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Call Us</h4>
                  <p className="text-muted mb-2">Mon-Sat, 9AM to 6PM</p>
                  <a href="tel:+919876543210" className="text-lg font-semibold text-foreground hover:text-secondary transition-colors">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email Us</h4>
                  <p className="text-muted mb-2">We'll reply within 24 hours</p>
                  <a href="mailto:hello@droneman.in" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">hello@droneman.in</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Visit Academy</h4>
                  <p className="text-muted mb-2">Tech Park, Phase 2</p>
                  <p className="text-lg font-semibold text-foreground">Chennai, Tamil Nadu 600001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Booking Form */}
          <motion.div
            id="booking"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl border-primary/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <h4 className="text-3xl font-bold mb-8 relative z-10">Book a Consultation</h4>
              
              <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted">I am interested in</label>
                  <select defaultValue="" className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                    <option value="" disabled>Select a service or course</option>
                    <option value="shooting">Drone Shooting Service</option>
                    <option value="mapping">Industrial Mapping</option>
                    <option value="course_dgca">DGCA Pilot Course</option>
                    <option value="course_fpv">FPV Racing Course</option>
                    <option value="workshop">STEM Workshop</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted">Message (Optional)</label>
                  <textarea
                    rows={4}
                    className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity hover-glow"
                >
                  Send Request <Send className="w-5 h-5" />
                </button>
                
                <p className="text-center text-sm text-muted mt-4">
                  Or connect instantly via <a href="#" className="text-emerald-400 font-semibold hover:underline">WhatsApp</a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
