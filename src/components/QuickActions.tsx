import { motion } from 'motion/react';
import { Camera, GraduationCap, Wrench } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    {
      id: 'services',
      title: 'I want Drone Shooting',
      description: 'Professional aerial photography, videography, and industrial mapping services.',
      icon: Camera,
      color: 'from-primary/20 to-primary/5',
      borderColor: 'border-primary/30',
      glow: 'hover-glow',
      href: '#services'
    },
    {
      id: 'courses',
      title: 'I want to Learn Drones',
      description: 'DGCA certified pilot training, FPV racing, and commercial drone operations.',
      icon: GraduationCap,
      color: 'from-secondary/20 to-secondary/5',
      borderColor: 'border-secondary/30',
      glow: 'hover-glow-secondary',
      href: '#courses'
    },
    {
      id: 'workshops',
      title: 'I want Workshops',
      description: 'Hands-on drone building, coding, and STEM workshops for kids and engineers.',
      icon: Wrench,
      color: 'from-purple-500/20 to-purple-500/5',
      borderColor: 'border-purple-500/30',
      glow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]',
      href: '#workshops'
    }
  ];

  return (
    <section className="relative z-40 -mt-20 px-4 md:px-6 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {actions.map((action, index) => (
          <motion.a
            key={action.id}
            href={action.href}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`glass-panel rounded-2xl p-6 md:p-8 flex flex-col items-start gap-4 border bg-gradient-to-br ${action.color} ${action.borderColor} ${action.glow} transition-all duration-300 group cursor-pointer relative overflow-hidden`}
          >
            {/* Background Drone Silhouette */}
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
              <action.icon className="w-32 md:w-48 h-32 md:h-48" />
            </div>

            <div className={`p-3 md:p-4 rounded-xl bg-background/50 border ${action.borderColor} backdrop-blur-md`}>
              <action.icon className="w-6 md:w-8 h-6 md:h-8 text-foreground" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mt-2">{action.title}</h3>
            <p className="text-sm md:text-base text-muted leading-relaxed">{action.description}</p>
            
            <div className="mt-auto pt-4 md:pt-6 flex items-center gap-2 font-bold text-xs md:text-sm uppercase tracking-widest group-hover:text-secondary transition-colors">
              Explore <span className="group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
