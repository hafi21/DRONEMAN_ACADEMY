import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Cinematic Wedding',
      category: 'Event Coverage',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
      colSpan: 'md:col-span-2',
      rowSpan: 'md:row-span-2'
    },
    {
      id: 2,
      title: 'Industrial Inspection',
      category: 'Mapping & Survey',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
      colSpan: 'md:col-span-1',
      rowSpan: 'md:row-span-1'
    },
    {
      id: 3,
      title: 'Real Estate Showcase',
      category: 'Drone Shooting',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      colSpan: 'md:col-span-1',
      rowSpan: 'md:row-span-1'
    },
    {
      id: 4,
      title: 'FPV Racing Event',
      category: 'Sports Coverage',
      image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=800&auto=format&fit=crop',
      colSpan: 'md:col-span-2',
      rowSpan: 'md:row-span-1'
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-gradient-to-t from-card/30 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">
              Featured <span className="text-gradient">Projects</span>
            </h3>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-foreground font-semibold transition-all border border-border/50 hover:border-primary/50"
          >
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group rounded-3xl overflow-hidden cursor-pointer ${project.colSpan} ${project.rowSpan}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <PlayCircle className="w-12 h-12 text-secondary" />
                </div>
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{project.category}</p>
                <h4 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
