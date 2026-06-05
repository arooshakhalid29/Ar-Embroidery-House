import { useEffect, useRef, useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { MapPin, Phone, Settings, Zap, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import NotFound from "@/pages/not-found";

import heroImg from "@assets/WhatsApp_Image_2026-05-02_at_15.30.57_(1)_1777719163939.jpeg";
import gridImg1 from "@assets/WhatsApp_Image_2026-05-02_at_15.30.57_(1)_1777719163939.jpeg";
import gridImg2 from "@assets/WhatsApp_Image_2026-05-02_at_15.30.57_(2)_1777719163941.jpeg";
import gridImg3 from "@assets/WhatsApp_Image_2026-05-02_at_15.30.57_1777719163943.jpeg";
import gridImg4 from "@assets/WhatsApp_Image_2026-05-02_at_15.30.58_(1)_1777719163945.jpeg";
import gridImg5 from "@assets/WhatsApp_Image_2026-05-02_at_15.30.58_1777719163948.jpeg";
import gridImg6 from "@assets/WhatsApp_Image_2026-05-02_at_15.30.59_(1)_1777719163950.jpeg";
import gridImg7 from "@assets/WhatsApp_Image_2026-05-02_at_15.30.59_1777719163952.jpeg";

const queryClient = new QueryClient();

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-wider uppercase">
          AR <span className="text-primary">Embroidery</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <button onClick={() => scrollTo("production")} className="hover:text-primary transition-colors uppercase">Production</button>
          <button onClick={() => scrollTo("capabilities")} className="hover:text-primary transition-colors uppercase">Capabilities</button>
          <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors uppercase">About</button>
          <button onClick={() => scrollTo("contact")} className="bg-primary text-primary-foreground px-6 py-2 uppercase hover:bg-primary/90 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div ref={bgRef} className="absolute z-0" style={{ willChange: "transform", top: "-30%", bottom: "-30%", left: 0, right: 0 }}>
        <img
          src={heroImg}
          alt="AR Embroidery House factory floor"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 50%, rgba(13,13,13,0.97) 100%)" }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground uppercase tracking-tight leading-tight mb-6">
            AR Embroidery <br />
            <span className="text-primary">House</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mb-10"
        >
          High-Capacity Machine Embroidery for Wholesale & Bulk Orders
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-white/80 transition-all duration-300"
          >
            Get a Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryCard({
  src,
  label,
  tag,
  index,
  className = "",
}: {
  src: string;
  label: string;
  tag: string;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`relative group overflow-hidden bg-card ${className}`}
    >
      <img
        src={src}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* permanent dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {/* hover tint */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

      {/* top-left index tag */}
      <div className="absolute top-4 left-4 text-xs font-mono text-white/50 tracking-widest">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* bottom label — always visible, slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mb-1">{tag}</p>
            <h3 className="text-lg md:text-xl font-serif font-bold text-white uppercase tracking-wide leading-tight">
              {label}
            </h3>
          </div>
          <div className="w-8 h-8 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 shrink-0 ml-4">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="mt-3 h-px bg-white/0 group-hover:bg-white/30 transition-all duration-500 delay-100" />
      </div>
    </motion.div>
  );
}

function Production() {
  const stats = [
    { value: "50+", label: "Machines" },
    { value: "10K+", label: "Units / Day" },
    { value: "15+", label: "Years Active" },
    { value: "100%", label: "Wholesale" },
  ];

  return (
    <section id="production" className="bg-background relative border-t border-border">

      {/* — Section header — */}
      <div className="container mx-auto px-6 md:px-12 pt-24 pb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Inside the facility
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground uppercase leading-none">
              Production<br />Showcase
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-sm md:text-right">
            A look inside our manufacturing floor — heavy machinery running bulk orders with relentless, around-the-clock precision.
          </p>
        </div>
      </div>

      {/* — Stats bar — */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-y border-border"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((s, i) => (
              <div key={i} className="py-8 px-6 first:pl-0 last:pr-0">
                <p className="text-3xl md:text-4xl font-serif font-bold text-foreground">{s.value}</p>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* — Full-width hero image — */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden group"
      >
        <img
          src={gridImg5}
          alt="Factory floor overview"
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
        <div className="absolute bottom-8 left-8 md:left-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50 mb-2">01 / Overview</p>
          <h3 className="text-2xl md:text-4xl font-serif font-bold text-white uppercase tracking-wide">
            Industrial Scale Setup
          </h3>
        </div>
        <div className="absolute bottom-8 right-8 md:right-16 text-right hidden md:block">
          <p className="text-sm font-mono text-white/40">Lahore, Pakistan</p>
        </div>
      </motion.div>

      {/* — Asymmetric 3-column grid — */}
      <div className="container mx-auto px-6 md:px-12 py-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* tall left card */}
          <div className="md:col-span-5 h-[420px] md:h-auto md:row-span-2">
            <GalleryCard src={gridImg1} label="High-Speed Machines" tag="02 / Equipment" index={0} className="h-full" />
          </div>

          {/* top-right */}
          <div className="md:col-span-7 h-[280px]">
            <GalleryCard src={gridImg3} label="Continuous Production Line" tag="03 / Operations" index={1} className="h-full" />
          </div>

          {/* bottom-right split into two */}
          <div className="md:col-span-4 h-[260px]">
            <GalleryCard src={gridImg4} label="Precision Stitching" tag="04 / Quality" index={2} className="h-full" />
          </div>
          <div className="md:col-span-3 h-[260px]">
            <GalleryCard src={gridImg2} label="Bulk Thread Spools" tag="05 / Materials" index={3} className="h-full" />
          </div>
        </div>

        {/* — Bottom 2-column row — */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="h-[320px]">
            <GalleryCard src={gridImg6} label="Multi-Head Operations" tag="06 / Scale" index={4} className="h-full" />
          </div>
          <div className="h-[320px]">
            <GalleryCard src={gridImg7} label="24 / 7 Manufacturing" tag="07 / Capacity" index={5} className="h-full" />
          </div>
        </div>
      </div>

      <div className="pb-24" />
    </section>
  );
}

function Capabilities() {
  const capabilities = [
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Large Machine Setup",
      desc: "Extensive multi-head embroidery machines capable of handling the largest wholesale orders."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Bulk Order Handling",
      desc: "Optimized workflow for massive production runs without compromising on detail."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Consistent Output",
      desc: "Rigorous quality control processes ensure the 10,000th piece matches the first."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Fast Turnaround",
      desc: "24/7 operational capacity allows us to meet demanding industrial deadlines."
    }
  ];

  return (
    <section id="capabilities" className="py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground uppercase mb-6">
            Industrial <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engineered for scale. Built for reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background border border-border p-8 hover:border-primary/50 transition-colors duration-300 group"
            >
              <div className="mb-6 p-4 bg-card inline-block border border-border group-hover:bg-primary/10 transition-colors">
                {cap.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground uppercase mb-4">
                {cap.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const milestones = [
    { year: "2015", label: "Founded", desc: "Established in Lahore with a single production line and a clear vision — wholesale scale, zero compromise." },
    { year: "2018", label: "Expansion", desc: "Tripled machine capacity to meet growing demand from regional manufacturers and fabric exporters." },
    { year: "2021", label: "Full Scale", desc: "Reached 50+ multi-head machines running continuous shifts, serving buyers across Pakistan." },
    { year: "2025", label: "Today", desc: "A decade of production strength. Trusted by wholesalers for volume, precision, and reliability." },
  ];

  return (
    <section id="about" className="bg-background border-t border-border relative overflow-hidden">

      {/* faint background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] grayscale"
        style={{ backgroundImage: `url(${gridImg3})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />

      <div className="relative z-10">

        {/* — Top split layout — */}
        <div className="container mx-auto px-6 md:px-12 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — heading block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-5">
                Est. 2015 — Lahore, Pakistan
              </p>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground uppercase leading-none mb-8">
                A Decade of<br />
                <span className="text-foreground/50">Production</span><br />
                Strength
              </h2>
              {/* large year stamp */}
              <div className="text-[7rem] md:text-[10rem] font-serif font-bold leading-none text-foreground/5 select-none -mt-4">
                2015
              </div>
            </motion.div>

            {/* Right — text + pillars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-8 pt-2 lg:pt-16"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                AR Embroidery House is not a boutique. Founded in 2015, we built this facility from the ground up with a single purpose — to serve wholesale buyers, manufacturers, and large-scale fabric distributors who demand volume and consistency in equal measure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over ten years, we have scaled from a single line to one of Lahore's most capable embroidery operations. Our multi-head machines run around the clock. Our output is measured in thousands of units daily. Our reputation is built on one simple promise: the 10,000th piece matches the first.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-3 gap-px bg-border mt-10">
                {[
                  { value: "10+", label: "Years" },
                  { value: "50+", label: "Machines" },
                  { value: "Lahore", label: "Pakistan" },
                ].map((p, i) => (
                  <div key={i} className="bg-background px-4 py-6 text-center">
                    <p className="text-2xl md:text-3xl font-serif font-bold text-foreground">{p.value}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">{p.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* — Timeline — */}
        <div className="border-t border-border">
          <div className="container mx-auto px-6 md:px-12 py-16">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-12">Our journey</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-background p-8 group hover:bg-card transition-colors duration-300"
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-3xl font-serif font-bold text-foreground">{m.year}</span>
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{m.label}</span>
                  </div>
                  <div className="w-8 h-px bg-border group-hover:bg-foreground/40 transition-colors duration-500 mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* — Full-width image strip — */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-64 md:h-80 overflow-hidden"
        >
          <img
            src={gridImg4}
            alt="Factory interior"
            className="w-full h-full object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl md:text-3xl font-serif font-bold text-white/80 uppercase tracking-[0.15em] text-center px-6">
              Built for Volume. Trusted for Precision.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground uppercase mb-6 leading-tight">
              Ready for <br/>
              <span className="text-primary">Production?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get in touch directly to discuss wholesale pricing, bulk order capacity, and turnaround times.
            </p>
            
            <a 
              href="https://wa.me/923074677858" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-4 bg-[#25D366] text-white px-8 py-5 text-xl font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-colors"
            >
              <SiWhatsapp className="w-8 h-8" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex-1 w-full bg-background border border-border p-10 flex flex-col gap-10">
            <div>
              <div className="flex items-center gap-4 mb-4 text-primary">
                <Phone className="w-8 h-8" />
                <h3 className="text-2xl font-serif font-bold uppercase text-foreground">Phone</h3>
              </div>
              <p className="text-3xl font-mono text-muted-foreground ml-12">03074677858</p>
            </div>
            
            <div className="w-full h-[1px] bg-border" />
            
            <div>
              <div className="flex items-center gap-4 mb-4 text-primary">
                <MapPin className="w-8 h-8" />
                <h3 className="text-2xl font-serif font-bold uppercase text-foreground">Location</h3>
              </div>
              <p className="text-2xl text-muted-foreground ml-12 max-w-xs">
                Post Office Barki Road, Lahore, Pakistan
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-serif font-bold text-foreground tracking-wider uppercase">
          AR <span className="text-primary">Embroidery</span>
        </div>
        <div className="flex gap-8 text-muted-foreground font-mono text-sm">
          <span>03074677858</span>
          <span>Lahore, Pakistan</span>
        </div>
        <div className="text-muted-foreground/60 text-sm">
          &copy; {new Date().getFullYear()} AR Embroidery House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Home() {
  // Lock body to dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Production />
      <Capabilities />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
