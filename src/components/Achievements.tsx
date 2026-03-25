import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users, Award, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Achievements() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { id: 1, label: 'Projects Completed', value: 300, suffix: '+', icon: Briefcase, color: 'text-primary' },
    { id: 2, label: 'Pilots Trained', value: 1500, suffix: '+', icon: GraduationCap, color: 'text-secondary' },
    { id: 3, label: 'Happy Clients', value: 250, suffix: '+', icon: Users, color: 'text-purple-400' },
    { id: 4, label: 'Industry Awards', value: 15, suffix: '', icon: Award, color: 'text-emerald-400' },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 glass-panel rounded-2xl border-border/30 hover:border-primary/30 transition-colors group"
            >
              <div className={`p-4 rounded-full bg-background/50 mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-2 text-foreground">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  '0'
                )}
                <span className={stat.color}>{stat.suffix}</span>
              </h3>
              <p className="text-sm md:text-base text-muted font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
