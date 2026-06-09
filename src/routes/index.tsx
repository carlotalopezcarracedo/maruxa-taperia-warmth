import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Instagram,
  Clock,
  MessageCircle,
  ArrowRight,
  Star,
  Sun,
  Baby,
  Wine,
  UtensilsCrossed,
  Heart,
} from "lucide-react";
import logoAsset from "@/assets/maruxa-logo.png.asset.json";
import heroImg from "@/assets/hero-taperia.jpg";
import terrazaImg from "@/assets/terraza.jpg";
import storyImg from "@/assets/story-share.jpg";
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

/* ---------- Real data ---------- */
const NAME = "Tapería Maruxa";
const PHONE = "623 50 16 51";
const PHONE_TEL = "tel:+34623501651";
const WHATSAPP =
  "https://wa.me/34623501651?text=Hola%20Maruxa%2C%20me%20gustar%C3%ADa%20reservar%20mesa";
const INSTAGRAM = "https://www.instagram.com/taperiamaruxa/";
const ADDRESS_LINE = "Rúa Telleira, 33";
const ADDRESS_CITY = "36350 Nigrán, Pontevedra";
const MAPS_QUERY = encodeURIComponent("Tapería Maruxa, Rúa Telleira 33, Nigrán");
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const PRICE_RANGE = "10 – 20 €";
const RATING = 4.5;
const REVIEWS = 312;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tapería Maruxa | Tapas y raciones en Nigrán, Pontevedra" },
      {
        name: "description",
        content:
          "Tapería Maruxa en Nigrán (Pontevedra). Tapas, raciones y comida para compartir con terraza y comedor privado. Reserva mesa por WhatsApp o llámanos al 623 50 16 51.",
      },
      { property: "og:title", content: "Tapería Maruxa | Nigrán" },
      {
        property: "og:description",
        content:
          "Tapas, raciones y momentos para compartir en el corazón de Nigrán.",
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
          name: NAME,
          servesCuisine: ["Tapas", "Gallega", "Española"],
          priceRange: "€€",
          image: heroImg,
          telephone: "+34623501651",
          url: "/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rúa Telleira, 33",
            postalCode: "36350",
            addressLocality: "Nigrán",
            addressRegion: "Pontevedra",
            addressCountry: "ES",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: RATING,
            reviewCount: REVIEWS,
          },
          sameAs: [INSTAGRAM],
        }),
      },
    ],
  }),
  component: MaruxaHome,
});

function MaruxaHome() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Carta />
        <Recommendations />
        <Gallery />
        <Reservas />
        <Ubicacion />
      </main>
      <Footer />
      <MobileCta />
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
          <img
            src={logoAsset.url}
            alt={NAME}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-ink/10"
          />
          <span className="font-display tracking-[0.28em] text-ink text-lg hidden sm:inline">
            MARUXA
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-xs uppercase tracking-[0.22em] text-ink/80 hover:text-terracotta transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-ink text-cream px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.22em] hover:bg-terracotta transition-colors"
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
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-ink uppercase tracking-[0.22em] text-sm border-b border-ink/10"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-ink text-cream px-5 py-3 rounded-full text-center text-sm uppercase tracking-[0.22em]"
            >
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
    <section
      id="inicio"
      className="relative overflow-hidden bg-[color:var(--peach-deep)]"
    >
      {/* background image with strong warm overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior cálido de Tapería Maruxa"
          className="w-full h-full object-cover"
          width={1792}
          height={1216}
        />
        <div className="absolute inset-0 bg-[color:var(--peach-deep)]/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--peach-deep)]/40 via-transparent to-ink/70" />
      </div>

      {/* decorative floating logo */}
      <img
        src={logoAsset.url}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute -right-16 top-16 w-[420px] opacity-25 rounded-full animate-float blur-[1px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-24 md:pt-32 pb-28 md:pb-40">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="text-cream animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-cream/15 backdrop-blur px-4 py-1.5 rounded-full border border-cream/25 text-xs uppercase tracking-[0.25em]">
              <MapPin size={12} /> Nigrán · Pontevedra
            </div>
            <p className="font-script text-3xl md:text-4xl text-[color:var(--peach)] mt-6">
              · tapería ·
            </p>
            <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-[0.06em] mt-2">
              MARUXA
            </h1>
            <BranchDivider className="text-cream mt-6" />
            <p className="mt-7 text-xl md:text-2xl font-light tracking-wide max-w-xl">
              Tapas, raciones y momentos para compartir.
            </p>
            <p className="mt-3 max-w-xl text-cream/80">
              Una tapería con sabor de casa, producto cercano y ambiente
              acogedor en el corazón de Nigrán.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="#carta"
                className="inline-flex items-center justify-center gap-2 bg-cream text-ink px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-medium hover:bg-[color:var(--peach-deep)] transition-colors"
              >
                Ver carta
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-terracotta text-cream px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-medium hover:bg-terracotta-deep transition-colors"
              >
                <MessageCircle size={16} /> Reservar por WhatsApp
              </a>
            </div>
          </div>

          {/* rating card */}
          <div className="lg:justify-self-end animate-fade-up [animation-delay:200ms]">
            <div className="bg-cream text-ink rounded-3xl p-7 shadow-2xl max-w-sm border border-ink/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ink text-cream flex items-center justify-center font-display text-lg">
                  G
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink/60">
                    Google Reseñas
                  </p>
                  <p className="font-display tracking-wider text-ink">
                    {RATING.toFixed(1).replace(".", ",")} · {REVIEWS} opiniones
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mt-3 text-terracotta">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    strokeWidth={0}
                    className={i === 4 ? "opacity-60" : ""}
                  />
                ))}
              </div>
              <div className="my-5 h-px bg-ink/10" />
              <p className="font-script text-terracotta text-lg leading-tight">
                "Sitio con encanto, tapas ricas y trato cercano."
              </p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-ink hover:text-terracotta"
              >
                Ver en Google Maps <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* feature strip */}
      <div className="relative bg-ink text-cream/90 border-y border-cream/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Feature icon={<Sun size={16} />} label="Terraza" />
          <Feature icon={<Wine size={16} />} label="Comedor privado" />
          <Feature icon={<Baby size={16} />} label="Tronas" />
          <Feature icon={<UtensilsCrossed size={16} />} label={PRICE_RANGE + " · pers."} />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 justify-center md:justify-start">
      <span className="text-terracotta">{icon}</span>
      <span className="text-xs uppercase tracking-[0.22em]">{label}</span>
    </div>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const words = [
    "tapas",
    "raciones",
    "sobremesa",
    "pulpo",
    "vinos gallegos",
    "tabla de ibéricos",
    "padrón",
    "empanada",
    "buen rollo",
    "para compartir",
  ];
  const row = [...words, ...words];
  return (
    <div className="bg-[color:var(--peach)] border-y border-ink/10 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-5">
        {row.map((w, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="font-display tracking-[0.25em] uppercase text-2xl md:text-3xl text-ink">
              {w}
            </span>
            <span className="text-terracotta font-script text-2xl">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- STORY (zigzag) ---------------- */
function Story() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background paper-grain">
      <div className="mx-auto max-w-7xl px-5 md:px-8 space-y-24">
        {/* row 1 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="font-script text-2xl text-terracotta">· sobre maruxa ·</p>
            <BranchDivider className="text-ink mt-3" />
            <h2 className="font-display text-4xl md:text-6xl tracking-wide text-ink mt-5">
              Un lugar para comer sin prisa
            </h2>
            <p className="mt-6 text-lg text-ink/75 leading-relaxed">
              En Maruxa apostamos por una cocina sencilla, sabrosa y pensada para
              compartir: tapas, raciones, platos de temporada y ese ambiente de
              tapería al que siempre apetece volver.
            </p>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Estamos en la Rúa Telleira, en Nigrán. Con terraza para los días
              buenos, comedor privado para celebraciones y tronas para los más
              pequeños. Aquí cabe todo el mundo.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                { t: "Tapas y raciones", d: "Para picotear y compartir." },
                { t: "Producto cercano", d: "De mercado, con mimo." },
                { t: "Ambiente familiar", d: "Como en casa de Maruxa." },
              ].map((it) => (
                <div
                  key={it.t}
                  className="bg-cream border border-border rounded-2xl p-5"
                >
                  <p className="font-display tracking-wider uppercase text-sm text-ink">
                    {it.t}
                  </p>
                  <p className="text-sm text-ink/65 mt-1">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={terrazaImg}
                alt="Terraza de Tapería Maruxa en Nigrán"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-terracotta text-cream rounded-2xl p-5 shadow-xl hidden sm:block max-w-[210px]">
              <p className="font-script text-xl leading-tight">Con terraza</p>
              <p className="text-xs uppercase tracking-widest mt-1 opacity-80">
                para los días buenos
              </p>
            </div>
            <div className="absolute -top-5 -right-5 bg-cream text-ink rounded-full px-4 py-3 shadow-xl hidden sm:flex items-center gap-2 border border-ink/5">
              <Heart size={16} className="text-terracotta" />
              <span className="text-xs uppercase tracking-widest">
                desde Nigrán
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARTA ---------------- */
function Carta() {
  const categories = [
    {
      name: "Tapas",
      desc: "Pequeños bocados para abrir boca y conversación.",
      price: "desde 3 €",
    },
    {
      name: "Raciones",
      desc: "Para compartir mesa, sin pelearse demasiado.",
      price: "desde 9 €",
    },
    {
      name: "Platos de temporada",
      desc: "Lo que el mercado y la temporada nos regalan.",
      price: "consultar",
    },
    {
      name: "Postres",
      desc: "Casero, dulce y reconfortante. Final feliz.",
      price: "desde 4 €",
    },
    {
      name: "Bebidas",
      desc: "Vinos gallegos, cervezas y referencias para acompañar.",
      price: "carta amplia",
    },
    {
      name: "Menús grupo",
      desc: "Para celebraciones en nuestro comedor privado.",
      price: "a consultar",
    },
  ];
  return (
    <section id="carta" className="py-24 md:py-32 bg-[color:var(--peach)]">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center">
          <p className="font-script text-2xl text-terracotta-deep">· la carta ·</p>
          <BranchDivider className="text-ink mt-3 flex justify-center" />
          <h2 className="font-display text-4xl md:text-6xl tracking-wide text-ink mt-5">
            Nuestra carta
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-ink/75">
            Una propuesta corta, honesta y pensada para compartir. Cambia con el
            producto y la temporada.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c, i) => (
            <article
              key={c.name}
              className="group bg-cream rounded-2xl p-8 border border-ink/10 hover:border-terracotta hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-script text-terracotta text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-script text-terracotta whitespace-nowrap">
                  {c.price}
                </span>
              </div>
              <h3 className="font-display text-3xl tracking-wider text-ink uppercase mt-4">
                {c.name}
              </h3>
              <div className="mt-3 h-px w-12 bg-terracotta" />
              <p className="mt-4 text-ink/70">{c.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-terracotta">
                Ver detalle{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:+34623501651`}
            className="inline-flex items-center justify-center gap-2 bg-ink text-cream px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] hover:bg-terracotta transition-colors"
          >
            <Phone size={16} /> Consultar carta completa
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-ink text-ink px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] hover:bg-ink hover:text-cream transition-colors"
          >
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
    { img: dish3, name: "Croquetas de la casa", note: "Crujientes fuera, cremosas dentro." },
    { img: dish4, name: "Tabla de ibéricos", note: "Jamón, queso y pan. Sencillez bien hecha." },
    { img: dish1, name: "Surtido de tapas", note: "Lo mejor de la barra en una sola tabla." },
  ];
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="font-script text-2xl text-terracotta">· imprescindibles ·</p>
            <BranchDivider className="text-ink mt-3" />
            <h2 className="font-display text-4xl md:text-6xl tracking-wide text-ink max-w-2xl mt-5">
              Lo que no puede faltar en la mesa
            </h2>
          </div>
          <p className="text-ink/65 max-w-sm">
            Recetas que se piden una y otra vez. Hay quien viene a Maruxa solo
            por ellas (y vuelve por todo lo demás).
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <article key={it.name} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted relative">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-cream/95 text-ink rounded-full w-9 h-9 flex items-center justify-center font-display text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-wider text-ink uppercase">
                {it.name}
              </h3>
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
    <section
      id="galeria"
      className="py-24 md:py-32 bg-[color:var(--cocoa)] text-cream relative overflow-hidden"
    >
      <img
        src={logoAsset.url}
        alt=""
        aria-hidden="true"
        className="absolute -left-32 -bottom-32 w-[480px] opacity-10 rounded-full"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <p className="font-script text-2xl text-[color:var(--peach-deep)]">
            · galería ·
          </p>
          <BranchDivider className="text-cream mt-3 flex justify-center" />
          <h2 className="font-display text-4xl md:text-6xl tracking-wide mt-5">
            Ambiente Maruxa
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-cream/70">
            Un vistazo al local, la terraza, la barra y los platos que salen
            cada día.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[220px]">
          <img src={gal1} alt="Barra de la tapería" loading="lazy" className="w-full h-full object-cover rounded-xl row-span-2" />
          <img src={storyImg} alt="Compartiendo tapas" loading="lazy" className="w-full h-full object-cover rounded-xl col-span-2" />
          <img src={gal3} alt="Pimientos de padrón" loading="lazy" className="w-full h-full object-cover rounded-xl" />
          <img src={gal4} alt="Copa de vino" loading="lazy" className="w-full h-full object-cover rounded-xl" />
          <img src={gal5} alt="Empanada gallega" loading="lazy" className="w-full h-full object-cover rounded-xl col-span-2" />
          <img src={gal2} alt="Brindis entre amigos" loading="lazy" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream text-ink px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] hover:bg-[color:var(--peach-deep)] transition-colors"
          >
            <Instagram size={16} /> Síguenos @taperiamaruxa
          </a>
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
        <p className="font-script text-2xl text-terracotta-deep">
          · te esperamos ·
        </p>
        <BranchDivider className="text-ink mt-3 flex justify-center" />
        <h2 className="font-display text-4xl md:text-6xl tracking-wide text-ink mt-5">
          Reserva tu mesa
        </h2>
        <p className="mt-6 text-lg text-ink/75 max-w-xl mx-auto">
          Escríbenos por WhatsApp o llámanos y te confirmamos disponibilidad.
          Para grupos y comedor privado, mejor con un poco de antelación.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-ink text-cream px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] hover:bg-terracotta transition-colors"
          >
            <MessageCircle size={16} /> Reservar por WhatsApp
          </a>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-ink text-ink px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] hover:bg-ink hover:text-cream transition-colors"
          >
            <Phone size={16} /> Llamar al {PHONE}
          </a>
        </div>
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
          <p className="font-script text-2xl text-terracotta">· dónde estamos ·</p>
          <BranchDivider className="text-ink mt-3" />
          <h2 className="font-display text-4xl md:text-6xl tracking-wide text-ink mt-5">
            Ven a visitarnos
          </h2>
          <ul className="mt-10 space-y-5 text-ink">
            <li className="flex gap-4">
              <MapPin className="text-terracotta shrink-0 mt-1" size={20} />
              <div>
                <p className="font-display tracking-widest uppercase text-sm text-ink/60">
                  Dirección
                </p>
                <p className="text-lg">{ADDRESS_LINE}</p>
                <p className="text-ink/70">{ADDRESS_CITY}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="text-terracotta shrink-0 mt-1" size={20} />
              <div>
                <p className="font-display tracking-widest uppercase text-sm text-ink/60">
                  Horario
                </p>
                <p className="text-lg">Mié – Dom · 12:00 – cierre</p>
                <p className="text-ink/60 text-sm">
                  Consulta horario actualizado en Google
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="text-terracotta shrink-0 mt-1" size={20} />
              <div>
                <p className="font-display tracking-widest uppercase text-sm text-ink/60">
                  Teléfono
                </p>
                <a href={PHONE_TEL} className="text-lg hover:text-terracotta">
                  {PHONE}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Instagram className="text-terracotta shrink-0 mt-1" size={20} />
              <div>
                <p className="font-display tracking-widest uppercase text-sm text-ink/60">
                  Instagram
                </p>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-terracotta"
                >
                  @taperiamaruxa
                </a>
              </div>
            </li>
          </ul>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-terracotta text-cream px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] hover:bg-terracotta-deep transition-colors"
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
            <img
              src={logoAsset.url}
              alt={NAME}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="font-display tracking-[0.28em] text-cream text-xl">
                MARUXA
              </p>
              <p className="font-script text-[color:var(--peach-deep)]">
                · tapería ·
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-cream/60">
            Tapas, raciones y buenos momentos en Nigrán.
          </p>
        </div>
        <div>
          <p className="font-display tracking-widest uppercase text-cream mb-4 text-sm">
            Visítanos
          </p>
          <ul className="space-y-2 text-sm">
            <li>{ADDRESS_LINE}</li>
            <li>{ADDRESS_CITY}</li>
            <li>
              <a className="hover:text-[color:var(--peach-deep)]" href={PHONE_TEL}>
                {PHONE}
              </a>
            </li>
            <li>
              <a
                className="hover:text-[color:var(--peach-deep)]"
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                @taperiamaruxa
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display tracking-widest uppercase text-cream mb-4 text-sm">
            Enlaces
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#carta" className="hover:text-[color:var(--peach-deep)]">
                Carta
              </a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-[color:var(--peach-deep)]">
                Galería
              </a>
            </li>
            <li>
              <a
                href="#ubicacion"
                className="hover:text-[color:var(--peach-deep)]"
              >
                Ubicación
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--peach-deep)]"
              >
                Reservas
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>
            © {new Date().getFullYear()} {NAME}. Todos los derechos reservados.
          </p>
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

/* ---------------- MOBILE CTA ---------------- */
function MobileCta() {
  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-40 flex gap-2">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-ink text-cream px-5 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] shadow-2xl"
      >
        <MessageCircle size={16} /> Reservar
      </a>
      <a
        href={PHONE_TEL}
        className="inline-flex items-center justify-center gap-2 bg-terracotta text-cream px-5 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] shadow-2xl"
        aria-label="Llamar"
      >
        <Phone size={16} />
      </a>
    </div>
  );
}
