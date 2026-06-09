import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MapPin, Phone, Instagram, Clock, MessageCircle, ArrowRight } from "lucide-react";
import logoAsset from "@/assets/maruxa-logo.png.asset.json";
import heroImg from "@/assets/hero-taperia.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import gal5 from "@/assets/gallery-5.jpg";
import { BranchDivider } from "@/components/maruxa/BranchDivider";

const WHATSAPP = "https://wa.me/34000000000?text=Hola%20Maruxa%2C%20me%20gustar%C3%ADa%20reservar%20mesa";
const PHONE = "+34 000 000 000";
const PHONE_TEL = "tel:+34000000000";
const INSTAGRAM = "https://www.instagram.com/taperiamaruxa/";
const ADDRESS = "Tu dirección, Galicia";
const MAPS_QUERY = encodeURIComponent("Tapería Maruxa");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tapería Maruxa | Tapas y raciones" },
      {
        name: "description",
        content:
          "Tapería Maruxa, un lugar acogedor para disfrutar de tapas, raciones y comida para compartir. Consulta la carta, reserva mesa y ven a visitarnos.",
      },
      { property: "og:title", content: "Tapería Maruxa | Tapas y raciones" },
      {
        property: "og:description",
        content:
          "Tapas, raciones y momentos para compartir. Cocina cercana en un ambiente acogedor.",
      },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Tapería Maruxa",
          servesCuisine: ["Tapas", "Gallega", "Española"],
          priceRange: "€€",
          image: heroImg,
          telephone: PHONE,
          address: { "@type": "PostalAddress", streetAddress: ADDRESS },
          sameAs: [INSTAGRAM],
        }),
      },
    ],
  }),
  component: MaruxaHome,
});

function MaruxaHome() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Carta />
        <Recommendations />
        <Gallery />
        <Reservas />
        <Ubicacion />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Carta", href: "#carta" },
  { label: "Sobre Maruxa", href: "#sobre" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[color:var(--peach)]/85 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Tapería Maruxa" className="h-12 w-12 rounded-full object-cover ring-2 ring-ink/10" />
          <span className="font-display tracking-[0.25em] text-ink text-lg hidden sm:inline">MARUXA</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm uppercase tracking-widest text-ink/80 hover:text-terracotta transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-ink text-cream px-5 py-2.5 rounded-full text-sm uppercase tracking-widest hover:bg-terracotta transition-colors"
          >
            Reservar mesa
          </a>
          <button
            aria-label="Menú"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden p-2 text-ink"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-[color:var(--peach)] border-t border-border/60">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-ink uppercase tracking-widest text-sm border-b border-ink/10">
                {n.label}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-3 bg-ink text-cream px-5 py-3 rounded-full text-center text-sm uppercase tracking-widest">
              Reservar mesa
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Interior cálido de Tapería Maruxa" className="w-full h-full object-cover" width={1792} height={1216} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink/80" />
      </div>
      <div className="relative mx-auto max-w-5xl px-5 md:px-8 py-32 md:py-44 text-center text-cream">
        <p className="font-script text-2xl md:text-3xl text-[color:var(--peach-deep)] mb-3">· tapería ·</p>
        <BranchDivider className="text-cream/90 mb-6 flex justify-center" />
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-[0.08em] leading-none">
          MARUXA
        </h1>
        <p className="mt-8 text-lg md:text-2xl font-light tracking-wide">
          Tapas, raciones y momentos para compartir
        </p>
        <p className="mt-4 max-w-xl mx-auto text-cream/80">
          Una tapería con sabor de casa, producto cercano y ambiente acogedor.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#carta" className="inline-flex items-center justify-center gap-2 bg-cream text-ink px-7 py-3.5 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-[color:var(--peach-deep)] transition-colors">
            Ver carta
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-terracotta text-cream px-7 py-3.5 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-terracotta-deep transition-colors">
            <MessageCircle size={16} /> Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INTRO ---------------- */
function Intro() {
  const items = [
    { title: "Tapas y raciones", desc: "Para picotear, compartir y alargar la sobremesa." },
    { title: "Producto cercano", desc: "Materia prima de mercado, tratada con mimo." },
    { title: "Ambiente familiar", desc: "Un sitio donde uno se siente como en casa." },
  ];
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background paper-grain">
      <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
        <p className="font-script text-2xl text-terracotta mb-3">· sobre maruxa ·</p>
        <BranchDivider className="text-ink mb-6 flex justify-center" />
        <h2 className="font-display text-4xl md:text-6xl tracking-wide text-ink">
          Un lugar para comer sin prisa
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-lg text-ink/75 leading-relaxed">
          En Maruxa apostamos por una cocina sencilla, sabrosa y pensada para
          compartir: tapas, raciones, platos de temporada y ese ambiente de
          tapería al que siempre apetece volver.
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-card border border-border rounded-2xl p-8 text-left hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-full bg-terracotta/15 text-terracotta flex items-center justify-center mb-5">
                <span className="font-script text-2xl">·</span>
              </div>
              <h3 className="font-display text-2xl tracking-wider text-ink mb-2">{it.title}</h3>
              <p className="text-ink/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARTA ---------------- */
function Carta() {
  const categories = [
    { name: "Tapas", desc: "Pequeños bocados para abrir boca y conversación.", price: "desde 3 €" },
    { name: "Raciones", desc: "Para compartir mesa, sin pelearse demasiado.", price: "desde 9 €" },
    { name: "Platos de temporada", desc: "Lo que el mercado y la temporada nos regalan.", price: "consultar" },
    { name: "Postres", desc: "Casero, dulce y reconfortante. Final feliz.", price: "desde 4 €" },
    { name: "Bebidas", desc: "Vinos gallegos, cervezas y referencias para acompañar.", price: "carta amplia" },
  ];
  return (
    <section id="carta" className="py-24 md:py-32 bg-[color:var(--peach)]">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center">
          <p className="font-script text-2xl text-terracotta-deep mb-3">· la carta ·</p>
          <BranchDivider className="text-ink mb-6 flex justify-center" />
          <h2 className="font-display text-4xl md:text-6xl tracking-wide text-ink">Nuestra carta</h2>
          <p className="mt-6 max-w-xl mx-auto text-ink/75">
            Una propuesta corta, honesta y pensada para compartir. La carta cambia con
            el producto y la temporada.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <article key={c.name} className="group bg-cream rounded-2xl p-8 border border-ink/10 hover:border-terracotta transition-colors">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl tracking-wider text-ink uppercase">{c.name}</h3>
                <span className="font-script text-terracotta text-lg whitespace-nowrap">{c.price}</span>
              </div>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-ink/30 via-ink/10 to-transparent" />
              <p className="mt-4 text-ink/70">{c.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-sm uppercase tracking-widest text-terracotta">
                Ver detalle <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contacto" className="inline-flex items-center justify-center gap-2 bg-ink text-cream px-7 py-3.5 rounded-full text-sm uppercase tracking-widest hover:bg-terracotta transition-colors">
            Consultar carta completa
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-transparent border border-ink text-ink px-7 py-3.5 rounded-full text-sm uppercase tracking-widest hover:bg-ink hover:text-cream transition-colors">
            <MessageCircle size={16} /> Preguntar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- RECOMMENDATIONS ---------------- */
function Recommendations() {
  const items = [
    { img: dish2, name: "Pulpo a feira", note: "Clásico gallego con pimentón y aceite." },
    { img: dish3, name: "Croquetas de la casa", note: "Receta de toda la vida, crujiente fuera, cremoso dentro." },
    { img: dish4, name: "Tabla de ibéricos", note: "Jamón, queso y pan. Sencillez bien hecha." },
    { img: dish1, name: "Surtido de tapas", note: "Lo mejor de la barra en una sola tabla." },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <p className="font-script text-2xl text-terracotta mb-3">· imprescindibles ·</p>
          <BranchDivider className="text-ink mb-6 flex justify-center" />
          <h2 className="font-display text-4xl md:text-6xl tracking-wide text-ink max-w-3xl mx-auto">
            Lo que no puede faltar en la mesa
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <article key={it.name} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                <img src={it.img} alt={it.name} loading="lazy" width={1024} height={1280} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-wider text-ink uppercase">{it.name}</h3>
              <p className="mt-1 text-ink/65 text-sm">{it.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-[color:var(--cocoa)] text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <p className="font-script text-2xl text-[color:var(--peach-deep)] mb-3">· galería ·</p>
          <BranchDivider className="text-cream mb-6 flex justify-center" />
          <h2 className="font-display text-4xl md:text-6xl tracking-wide">Ambiente Maruxa</h2>
          <p className="mt-6 max-w-xl mx-auto text-cream/70">
            Un vistazo al local, la barra y los platos que salen cada día.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          <img src={gal1} alt="Barra de la tapería" loading="lazy" className="w-full h-full object-cover rounded-xl row-span-2" />
          <img src={gal2} alt="Brindis entre amigos" loading="lazy" className="w-full h-full object-cover rounded-xl col-span-2" />
          <img src={gal3} alt="Pimientos de padrón" loading="lazy" className="w-full h-full object-cover rounded-xl" />
          <img src={gal4} alt="Copa de vino" loading="lazy" className="w-full h-full object-cover rounded-xl" />
          <img src={gal5} alt="Empanada gallega" loading="lazy" className="w-full h-full object-cover rounded-xl col-span-2" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESERVAS ---------------- */
function Reservas() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 paper-grain bg-[color:var(--peach-deep)]" />
      <div className="relative mx-auto max-w-3xl px-5 md:px-8 text-center">
        <p className="font-script text-2xl text-terracotta-deep mb-3">· te esperamos ·</p>
        <BranchDivider className="text-ink mb-6 flex justify-center" />
        <h2 className="font-display text-4xl md:text-6xl tracking-wide text-ink">Reserva tu mesa</h2>
        <p className="mt-6 text-lg text-ink/75 max-w-xl mx-auto">
          Escríbenos por WhatsApp o llámanos y te confirmamos disponibilidad. Para
          grupos, mejor con un poco de antelación.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-ink text-cream px-7 py-3.5 rounded-full text-sm uppercase tracking-widest hover:bg-terracotta transition-colors">
            <MessageCircle size={16} /> Reservar por WhatsApp
          </a>
          <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 bg-transparent border border-ink text-ink px-7 py-3.5 rounded-full text-sm uppercase tracking-widest hover:bg-ink hover:text-cream transition-colors">
            <Phone size={16} /> Llamar ahora
          </a>
        </div>
        <p className="mt-6 text-ink/60 text-sm">
          Teléfono: <span className="font-medium text-ink">{PHONE}</span>
        </p>
      </div>
    </section>
  );
}

/* ---------------- UBICACIÓN ---------------- */
function Ubicacion() {
  return (
    <section id="ubicacion" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-script text-2xl text-terracotta mb-3">· dónde estamos ·</p>
          <BranchDivider className="text-ink mb-6" />
          <h2 className="font-display text-4xl md:text-6xl tracking-wide text-ink">
            Ven a visitarnos
          </h2>
          <ul className="mt-10 space-y-5 text-ink">
            <li className="flex gap-4">
              <MapPin className="text-terracotta shrink-0 mt-1" size={20} />
              <div>
                <p className="font-display tracking-widest uppercase text-sm text-ink/60">Dirección</p>
                <p className="text-lg">{ADDRESS}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="text-terracotta shrink-0 mt-1" size={20} />
              <div>
                <p className="font-display tracking-widest uppercase text-sm text-ink/60">Horario</p>
                <p className="text-lg">Mar – Dom · 12:30 – 16:00 / 20:00 – 23:30</p>
                <p className="text-ink/60 text-sm">Lunes cerrado</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="text-terracotta shrink-0 mt-1" size={20} />
              <div>
                <p className="font-display tracking-widest uppercase text-sm text-ink/60">Teléfono</p>
                <a href={PHONE_TEL} className="text-lg hover:text-terracotta">{PHONE}</a>
              </div>
            </li>
            <li className="flex gap-4">
              <Instagram className="text-terracotta shrink-0 mt-1" size={20} />
              <div>
                <p className="font-display tracking-widest uppercase text-sm text-ink/60">Instagram</p>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-terracotta">@taperiamaruxa</a>
              </div>
            </li>
          </ul>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-terracotta text-cream px-7 py-3.5 rounded-full text-sm uppercase tracking-widest hover:bg-terracotta-deep transition-colors"
          >
            Cómo llegar <ArrowRight size={16} />
          </a>
        </div>
        <div className="rounded-3xl overflow-hidden border border-border shadow-xl aspect-[4/5] lg:aspect-square bg-muted">
          <iframe
            title="Ubicación Tapería Maruxa"
            src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Tapería Maruxa" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="font-display tracking-[0.25em] text-cream text-xl">MARUXA</p>
              <p className="font-script text-[color:var(--peach-deep)]">· tapería ·</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-cream/60">
            Tapas, raciones y buenos momentos.
          </p>
        </div>
        <div>
          <p className="font-display tracking-widest uppercase text-cream mb-4 text-sm">Visítanos</p>
          <ul className="space-y-2 text-sm">
            <li>{ADDRESS}</li>
            <li><a className="hover:text-[color:var(--peach-deep)]" href={PHONE_TEL}>{PHONE}</a></li>
            <li><a className="hover:text-[color:var(--peach-deep)]" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@taperiamaruxa</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display tracking-widest uppercase text-cream mb-4 text-sm">Enlaces</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#carta" className="hover:text-[color:var(--peach-deep)]">Carta</a></li>
            <li><a href="#galeria" className="hover:text-[color:var(--peach-deep)]">Galería</a></li>
            <li><a href="#ubicacion" className="hover:text-[color:var(--peach-deep)]">Ubicación</a></li>
            <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--peach-deep)]">Reservas</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Tapería Maruxa. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-cream">Aviso legal</a>
            <a href="#" className="hover:text-cream">Privacidad</a>
            <a href="#" className="hover:text-cream">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
