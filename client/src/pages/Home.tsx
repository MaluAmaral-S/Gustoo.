import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  ChefHat, 
  Clock, 
  TrendingUp,
  Wifi,
  Utensils,
  Zap,
  BarChart3,
  Bell,
  QrCode,
  Star,
  Sparkles
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import restaurantInterior from "@assets/images/restaurant-interior.png";
import chefCooking from "@assets/images/chef-cooking.png";
import digitalOrdering from "@assets/images/digital-ordering.png";

const features = [
  {
    icon: Smartphone,
    title: "Cardápio Interativo",
    desc: "Fotos em alta definição e descrições que dão água na boca.",
    bg: "bg-primary",
    cardBg: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
  },
  {
    icon: Wifi,
    title: "Sincronização Real",
    desc: "Pedidos instantâneos para cozinha e bar.",
    bg: "bg-secondary",
    cardBg: "bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent"
  },
  {
    icon: Clock,
    title: "Agilidade Total",
    desc: "Reduza o tempo de espera em até 40%.",
    bg: "bg-primary",
    cardBg: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
  },
  {
    icon: QrCode,
    title: "QR Code Dinâmico",
    desc: "Atualize o cardápio em tempo real.",
    bg: "bg-secondary",
    cardBg: "bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent"
  },
  {
    icon: BarChart3,
    title: "Relatórios Inteligentes",
    desc: "Dados de vendas e performance ao vivo.",
    bg: "bg-primary",
    cardBg: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
  },
  {
    icon: Bell,
    title: "Notificações Smart",
    desc: "Alertas automáticos para sua equipe.",
    bg: "bg-secondary",
    cardBg: "bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent"
  },
  {
    icon: Zap,
    title: "Integração Rápida",
    desc: "Configure em minutos, não em dias.",
    bg: "bg-primary",
    cardBg: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
  },
  {
    icon: ChefHat,
    title: "Gestão de Cozinha",
    desc: "Organize pedidos por prioridade.",
    bg: "bg-secondary",
    cardBg: "bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      <Navigation />

      {/* HERO SECTION */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* Background with restaurant image overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
          <img 
            src={restaurantInterior} 
            alt="" 
            className="absolute top-0 right-0 w-[60%] h-full object-cover opacity-20 hidden lg:block"
            style={{ maskImage: 'linear-gradient(to left, black, transparent)' }}
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] z-0" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-orange-300/10 rounded-full blur-[80px] z-0" />
        
        {/* Floating decorative shapes */}
        <motion.div 
          className="absolute top-32 right-[15%] w-20 h-20 border-2 border-primary/20 rounded-2xl z-0 hidden lg:block"
          animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-40 right-[25%] w-12 h-12 bg-primary/10 rounded-full z-0 hidden lg:block"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-2xl"
            >
              {/* Enhanced badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-orange-400/10 text-primary font-semibold text-sm mb-8 border border-primary/25 shadow-lg shadow-primary/5"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent font-bold">
                  Revolucione seu atendimento
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-secondary leading-[1.05] mb-8">
                Transforme seu restaurante com{" "}
                <span className="relative inline-block">
                  <span className="text-primary italic">um toque</span>
                  <motion.svg 
                    className="absolute -bottom-2 left-0 w-full" 
                    viewBox="0 0 200 12" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <motion.path 
                      d="M2 8 Q50 2 100 8 T198 6" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      fill="none" 
                      className="text-primary/40"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                Cardápios digitais que fazem a diferença! Simplifique pedidos, aumente o ticket médio e encante seus clientes.
              </p>
              
              {/* Enhanced buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <ScrollLink to="pricing" smooth={true} duration={500} offset={-50}>
                  <Button size="lg" className="h-14 px-10 rounded-full text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all bg-gradient-to-r from-primary to-orange-500" data-testid="button-hero-cta">
                    Quero Transformar
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </ScrollLink>
                <ScrollLink to="features" smooth={true} duration={500} offset={-100}>
                  <Button variant="outline" size="lg" className="h-14 px-10 rounded-full text-lg border-2 border-secondary/20 hover:bg-secondary/5 hover:border-secondary/40 transition-all" data-testid="button-hero-learn-more">
                    Saber mais
                  </Button>
                </ScrollLink>
              </div>

              {/* Trust indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 flex-wrap"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-background ${i === 1 ? 'bg-primary' : i === 2 ? 'bg-secondary' : i === 3 ? 'bg-orange-400' : 'bg-amber-500'} flex items-center justify-center`}>
                        <ChefHat className="w-4 h-4 text-white" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">+500 restaurantes</span>
                </div>
                <div className="h-8 w-px bg-border hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm text-muted-foreground font-medium ml-1">4.9/5 avaliação</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Main image container with premium styling */}
              <div className="relative">
                {/* Gradient border effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-orange-400 to-secondary rounded-[2.5rem] blur-sm opacity-60" />
                
                <div className="relative bg-gradient-to-br from-white to-background p-5 rounded-[2.5rem] shadow-2xl">
                  <img 
                    src={digitalOrdering} 
                    alt="Sistema de pedidos digital Gustoo em tablet" 
                    className="rounded-[2rem] w-full shadow-inner"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-5 rounded-[2rem] bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />
                </div>

                {/* Floating stats cards */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-border/30 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-7 h-7 text-white" />
                      </div>
                      <motion.div 
                        className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Aumento médio</p>
                      <p className="text-3xl font-serif font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">+35%</p>
                      <p className="text-xs text-muted-foreground">em vendas</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-2xl border border-border/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Tempo de espera</p>
                      <p className="text-xl font-bold text-secondary">-40%</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute top-1/2 -right-8 bg-gradient-to-br from-secondary to-secondary/90 p-4 rounded-2xl shadow-2xl text-white"
                >
                  <div className="flex items-center gap-3">
                    <QrCode className="w-8 h-8" />
                    <div>
                      <p className="text-xs text-white/70">QR Code</p>
                      <p className="text-sm font-bold">Dinâmico</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - Animated Horizontal Carousel */}
      <section id="features" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-16">
          <SectionHeading 
            title="Pedidos em sincronia total"
            subtitle="Seu garçom e sua cozinha conectados em tempo real. Elimine erros e agilize a entrega."
          />
        </div>

        {/* Infinite Scrolling Cards - Row 1 */}
        <div className="relative mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div 
            className="flex gap-6"
            animate={{ x: [0, -1920] }}
            transition={{ 
              x: { 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 30, 
                ease: "linear" 
              } 
            }}
          >
            {[...features, ...features].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`flex-shrink-0 w-80 p-8 rounded-3xl ${feature.cardBg} border border-border/30 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer backdrop-blur-sm`}
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-secondary mb-3">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Infinite Scrolling Cards - Row 2 (Reverse) */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div 
            className="flex gap-6"
            animate={{ x: [-1920, 0] }}
            transition={{ 
              x: { 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 35, 
                ease: "linear" 
              } 
            }}
          >
            {[...features.slice().reverse(), ...features.slice().reverse()].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className={`flex-shrink-0 w-80 p-8 rounded-3xl ${feature.cardBg} border border-border/30 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer backdrop-blur-sm`}
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-secondary mb-3">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Management Panel Section */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="mt-24 bg-secondary rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Gestão completa em um único painel
                </h3>
                <ul className="space-y-4">
                  {[
                    "Controle de estoque em tempo real",
                    "Relatórios de vendas detalhados",
                    "Gestão de mesas e reservas",
                    "Fidelização de clientes integrada"
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 text-lg text-white/90"
                    >
                      <div className="bg-primary rounded-full p-1">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={chefCooking} 
                  alt="Chef preparando pratos" 
                  className="rounded-2xl shadow-2xl border-4 border-white/10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION - Enhanced Design */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-background to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="Seu menu na palma da mão"
            subtitle="Escolha o plano ideal para o tamanho do seu negócio. Simplifique pedidos e encante seus clientes."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "R$ 149",
                desc: "Para pequenos cafés e bistrôs",
                icon: Utensils,
                features: ["Cardápio Digital QR Code", "Até 500 pedidos/mês", "Suporte por Email", "Painel Básico"],
                gradient: "from-slate-50 to-slate-100",
                iconBg: "bg-slate-500"
              },
              {
                name: "Pro",
                price: "R$ 299",
                popular: true,
                desc: "Ideal para restaurantes em crescimento",
                icon: Star,
                features: ["Tudo do Starter", "Pedidos Ilimitados", "Gestão de Estoque", "Suporte Prioritário", "Integração WhatsApp"],
                gradient: "from-primary/5 to-primary/10",
                iconBg: "bg-primary"
              },
              {
                name: "Enterprise",
                price: "Sob Consulta",
                desc: "Redes e franquias",
                icon: Sparkles,
                features: ["Tudo do Pro", "API Dedicada", "Gerente de Conta", "Customização Total", "Treinamento Presencial"],
                gradient: "from-secondary/5 to-secondary/10",
                iconBg: "bg-secondary"
              }
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`relative p-1 rounded-[2rem] ${plan.popular ? "bg-gradient-to-br from-primary via-orange-400 to-amber-500" : "bg-transparent"}`}
              >
                <div className={`h-full p-8 rounded-[1.875rem] bg-gradient-to-br ${plan.gradient} ${plan.popular ? "bg-white" : "border border-border/50"} shadow-xl relative overflow-hidden`}>
                  
                  {plan.popular && (
                    <div className="absolute top-6 right-6">
                      <motion.div 
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      >
                        Mais Popular
                      </motion.div>
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <div className={`w-16 h-16 ${plan.iconBg} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                      <plan.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-serif font-bold text-secondary">{plan.price}</span>
                      {plan.price !== "Sob Consulta" && <span className="text-muted-foreground">/mês</span>}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <motion.div 
                        key={fIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fIdx * 0.05 + idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full ${plan.popular ? "bg-primary" : "bg-green-500"} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-secondary/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className={`w-full rounded-xl h-14 font-semibold text-base ${plan.popular ? "shadow-lg shadow-primary/25" : ""}`}
                    data-testid={`button-plan-${plan.name.toLowerCase()}`}
                  >
                    {plan.price === "Sob Consulta" ? "Falar com Especialista" : `Começar com ${plan.name}`}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-secondary pt-12 pb-8 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary p-1.5 rounded-lg text-white">
                  <Utensils size={20} />
                </div>
                <span className="text-2xl font-serif font-bold text-white">
                  Gustoo<span className="text-primary">.</span>
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Tecnologia que dá água na boca. Transformando a gestão de restaurantes em todo o Brasil.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="hover:text-primary cursor-pointer transition-colors">Recursos</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Integrações</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Preços</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Atualizações</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="hover:text-primary cursor-pointer transition-colors">Sobre Nós</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Carreiras</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Imprensa</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="hover:text-primary cursor-pointer transition-colors">Termos de Uso</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Privacidade</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Cookies</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Gustoo Co. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
