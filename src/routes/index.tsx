import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
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
} from "lucide-react";
import realBarra from "@/assets/real/maruxa-barra.jpg";
import realComedor from "@/assets/real/maruxa-comedor.jpg";
import realInterior from "@/assets/real/maruxa-interior.jpg";
import realMejillones from "@/assets/real/maruxa-mejillones.jpg";
import realPulpo from "@/assets/real/maruxa-pulpo.jpg";
import realZamburinas from "@/assets/real/maruxa-zamburinas.jpg";
import brandLogo from "@/assets/brand/maruxa-logo-lockup.jpg";
import { BranchDivider } from "@/components/maruxa/BranchDivider";

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
const PRICE_RANGE = "10 - 20 €";
const RATING = 4.5;
const REVIEWS = 312;

const REAL_PHOTOS = [
  {
    src: realInterior,
    alt: "Comedor real de Tapería Maruxa con papel vegetal y luz cálida",
    label: "Comedor",
  },
  {
    src: realBarra,
    alt: "Detalle de la barra de Tapería Maruxa con flores y lámparas",
    label: "Barra",
  },
  {
    src: realZamburinas,
    alt: "Zamburiñas a la plancha de Tapería Maruxa",
    label: "Zamburiñas",
  },
  {
    src: realPulpo,
    alt: "Pulpo con pimentón servido en Tapería Maruxa",
    label: "Pulpo",
  },
  {
    src: realMejillones,
    alt: "Mejillones preparados en Tapería Maruxa",
    label: "Producto",
  },
  {
    src: realComedor,
    alt: "Vista amplia del comedor de Tapería Maruxa",
    label: "Ambiente",
  },
];

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
        content: "Tapas, raciones y momentos para compartir en el corazón de Nigrán.",
      },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:image", content: realComedor },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", type: "image/jpeg", href: "/maruxa-logo.jpg" },
      { rel: "apple-touch-icon", href: "/maruxa-logo.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: NAME,
          servesCuisine: ["Tapas", "Gallega", "Española"],
          priceRange: "€€",
          image: realComedor,
          telephone: "+34623501651",
          url: "/",
          address: {
            "@type": "PostalAddress",
            streetAddress: ADDRESS_LINE,
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

export function MaruxaHome() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background pb-20 text-foreground md:pb-0">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <PhotoRail />
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
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-[color:var(--peach)]/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="#inicio" className="flex min-w-0 items-center">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm uppercase text-ink/75 transition-colors hover:text-terracotta"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm uppercase text-cream transition-colors hover:bg-terracotta md:inline-flex"
          >
            Reservar mesa
          </a>
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((s) => !s)}
            className="rounded-full p-2 text-ink transition-colors hover:bg-cream/50 lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-[color:var(--peach)] lg:hidden">
          <div className="flex flex-col px-4 py-3 sm:px-6">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-3 text-sm uppercase text-ink"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm uppercase text-cream"
            >
              <MessageCircle size={16} /> Reservar mesa
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative scroll-mt-20 overflow-hidden bg-cocoa text-cream">
      <div className="absolute inset-0">
        <img
          src={realComedor}
          alt="Comedor real de Tapería Maruxa"
          className="h-full w-full object-cover object-center"
          width={1200}
          height={600}
        />
        <div className="absolute inset-0 bg-cocoa/62" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/45 via-cocoa/28 to-wine/60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cream/25 bg-cream/12 px-4 py-1.5 text-xs uppercase text-cream backdrop-blur">
            <MapPin size={13} className="shrink-0 text-[color:var(--peach-deep)]" />
            <span className="truncate">Nigrán · Pontevedra</span>
          </div>

          <p className="mt-6 font-script text-3xl text-[color:var(--peach)] sm:text-4xl">
            tapería gallega
          </p>
          <h1 className="mt-2 font-display text-7xl leading-none text-cream sm:text-8xl lg:text-9xl">
            MARUXA
          </h1>
          <BranchDivider className="mt-5 text-cream" />

          <p className="mt-7 max-w-2xl text-2xl font-light leading-snug sm:text-3xl">
            Tapas, raciones y momentos para compartir.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-cream/82 sm:text-lg">
            Una tapería con sabor de casa, producto cercano y ambiente acogedor en el corazón de
            Nigrán.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#carta"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm uppercase text-ink transition-colors hover:bg-[color:var(--peach-deep)] sm:w-auto"
            >
              Ver carta <ArrowRight size={16} />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm uppercase text-cream transition-colors hover:bg-terracotta-deep sm:w-auto"
            >
              <MessageCircle size={16} /> Reservar por WhatsApp
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3 rounded-lg border border-cream/18 bg-ink/28 p-3 backdrop-blur md:hidden">
            <div className="flex gap-0.5 text-[color:var(--peach)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="currentColor"
                  strokeWidth={0}
                  className={i === 4 ? "opacity-60" : ""}
                />
              ))}
            </div>
            <p className="text-sm text-cream/90">
              {RATING.toFixed(1).replace(".", ",")} en Google · {REVIEWS} opiniones
            </p>
          </div>
        </div>

        <HeroPhotoStack />
      </div>

      <div className="relative border-y border-cream/10 bg-ink text-cream/90">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-cream/10 px-0 sm:grid-cols-4 lg:px-8">
          <Feature icon={<Sun size={17} />} label="Terraza" />
          <Feature icon={<Wine size={17} />} label="Comedor privado" />
          <Feature icon={<Baby size={17} />} label="Tronas" />
          <Feature icon={<UtensilsCrossed size={17} />} label={`${PRICE_RANGE} · pers.`} />
        </div>
      </div>
    </section>
  );
}

function HeroPhotoStack() {
  return (
    <aside className="hidden lg:block">
      <div className="relative h-[520px]">
        <div className="absolute right-0 top-0 h-72 w-72 overflow-hidden rounded-lg border border-cream/18 shadow-2xl">
          <img
            src={realInterior}
            alt="Comedor real de Tapería Maruxa"
            className="h-full w-full object-cover"
            width={900}
            height={1200}
          />
        </div>

        <div className="absolute bottom-10 left-0 h-64 w-52 overflow-hidden rounded-lg border border-cream/18 shadow-2xl">
          <img
            src={realZamburinas}
            alt="Zamburiñas servidas en Tapería Maruxa"
            className="h-full w-full object-cover"
            width={900}
            height={1200}
          />
        </div>

        <div className="absolute bottom-0 right-8 h-48 w-64 overflow-hidden rounded-lg border border-cream/18 shadow-2xl">
          <img
            src={realBarra}
            alt="Detalle de la barra de Tapería Maruxa"
            className="h-full w-full object-cover"
            width={900}
            height={1200}
          />
        </div>

        <div className="absolute left-8 top-20 max-w-[270px] rounded-lg border border-cream/18 bg-cream p-5 text-ink shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink font-display text-lg text-cream">
              G
            </div>
            <div>
              <p className="text-xs uppercase text-ink/58">Google Reseñas</p>
              <p className="font-display text-lg text-ink">
                {RATING.toFixed(1).replace(".", ",")} · {REVIEWS} opiniones
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-1 text-terracotta">
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
          <p className="mt-4 font-script text-xl leading-snug text-terracotta">
            "Sitio con encanto, tapas ricas y trato cercano."
          </p>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm uppercase text-ink transition-colors hover:text-terracotta"
          >
            Ver en Google Maps <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </aside>
  );
}

function Feature({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex min-h-20 flex-col items-center justify-center gap-1 bg-ink px-2 py-3 text-center sm:min-h-16 sm:flex-row sm:gap-2 sm:px-3 sm:text-left lg:px-0">
      <span className="shrink-0 text-[color:var(--olive)]">{icon}</span>
      <span className="text-[0.7rem] uppercase leading-tight sm:text-xs">{label}</span>
    </div>
  );
}

function PhotoRail() {
  const rail = [...REAL_PHOTOS, ...REAL_PHOTOS];

  return (
    <section className="overflow-hidden border-y border-ink/10 bg-cream py-5">
      <div className="flex w-max animate-photo-rail gap-4 px-4">
        {rail.map((photo, i) => (
          <figure
            key={`${photo.label}-${i}`}
            className="group relative h-56 w-72 shrink-0 overflow-hidden rounded-lg bg-muted shadow-sm sm:h-64 sm:w-96"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-3 bottom-3 rounded-full bg-ink/72 px-4 py-2 text-center text-xs uppercase text-cream backdrop-blur">
              {photo.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "tapas",
    "raciones",
    "sobremesa",
    "pulpo",
    "vinos gallegos",
    "padrón",
    "empanada",
    "para compartir",
  ];
  const row = [...words, ...words];

  return (
    <div className="overflow-hidden border-y border-ink/10 bg-[color:var(--peach)]">
      <div className="flex animate-marquee whitespace-nowrap py-4">
        {row.map((w, i) => (
          <div key={i} className="flex items-center gap-5 px-5">
            <span className="font-display text-2xl uppercase text-ink md:text-3xl">{w}</span>
            <span className="font-script text-2xl text-wine">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Story() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-background py-20 paper-grain md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16 lg:px-8">
        <figure className="order-1 lg:order-2">
          <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
            <img
              src={realInterior}
              alt="Comedor real de Tapería Maruxa en Nigrán"
              loading="lazy"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 flex flex-col gap-3 border-l-4 border-terracotta bg-cream px-4 py-3 text-sm text-ink/70 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-display uppercase text-ink">Terraza y comedor privado</span>
            <span>Un comedor cálido, reconocible y pensado para sobremesas tranquilas.</span>
          </figcaption>
        </figure>

        <div className="order-2 lg:order-1">
          <p className="font-script text-2xl text-terracotta">sobre Maruxa</p>
          <BranchDivider className="mt-3 text-ink" />
          <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-ink md:text-6xl">
            Un lugar para comer sin prisa
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink/75">
            En Maruxa apostamos por una cocina sencilla, sabrosa y pensada para compartir: tapas,
            raciones, platos de temporada y ese ambiente de tapería al que siempre apetece volver.
          </p>
          <p className="mt-4 leading-7 text-ink/70">
            Estamos en la Rúa Telleira, en Nigrán. Con terraza para los días buenos, comedor privado
            para celebraciones y tronas para los más pequeños. Aquí cabe todo el mundo.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { t: "Tapas y raciones", d: "Para picotear y compartir." },
              { t: "Producto cercano", d: "De mercado, con mimo." },
              { t: "Ambiente familiar", d: "Como en casa de Maruxa." },
            ].map((it) => (
              <div key={it.t} className="rounded-lg border border-border bg-cream p-5">
                <p className="font-display text-sm uppercase text-ink">{it.t}</p>
                <p className="mt-1 text-sm leading-6 text-ink/65">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="carta" className="scroll-mt-20 bg-[color:var(--peach)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-2xl text-terracotta-deep">la carta</p>
          <BranchDivider className="mx-auto mt-3 text-ink" />
          <h2 className="mt-5 font-display text-4xl leading-tight text-ink md:text-6xl">
            Nuestra carta
          </h2>
          <p className="mx-auto mt-6 leading-7 text-ink/75">
            Una propuesta corta, honesta y pensada para compartir. Cambia con el producto y la
            temporada.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <article
              key={c.name}
              className="group rounded-lg border border-ink/10 bg-cream p-6 transition-all hover:-translate-y-1 hover:border-terracotta"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-script text-2xl text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="shrink-0 rounded-full bg-[color:var(--olive-soft)] px-3 py-1 text-xs uppercase text-ink">
                  {c.price}
                </span>
              </div>
              <h3 className="mt-4 font-display text-3xl uppercase text-ink">{c.name}</h3>
              <div className="mt-3 h-px w-12 bg-terracotta" />
              <p className="mt-4 min-h-14 leading-7 text-ink/70">{c.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm uppercase text-terracotta">
                Ver detalle
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={PHONE_TEL}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm uppercase text-cream transition-colors hover:bg-terracotta sm:w-auto"
          >
            <Phone size={16} /> Consultar carta completa
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink bg-transparent px-6 py-3.5 text-sm uppercase text-ink transition-colors hover:bg-ink hover:text-cream sm:w-auto"
          >
            <MessageCircle size={16} /> Preguntar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Recommendations() {
  const items = [
    { img: realPulpo, name: "Pulpo a feira", note: "Clásico gallego con pimentón y aceite." },
    { img: realZamburinas, name: "Zamburiñas", note: "Plancha, producto y ese punto de costa." },
    { img: realMejillones, name: "Mejillones", note: "Una ración para empezar compartiendo." },
    { img: realBarra, name: "Barra Maruxa", note: "Detalles del local que hacen ambiente." },
  ];

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-script text-2xl text-terracotta">imprescindibles</p>
            <BranchDivider className="mt-3 text-ink" />
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-ink md:text-6xl">
              Lo que no puede faltar en la mesa
            </h2>
          </div>
          <p className="max-w-md leading-7 text-ink/65">
            Recetas que se piden una y otra vez. Hay quien viene a Maruxa solo por ellas y vuelve
            por todo lo demás.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <article key={it.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-cream/95 font-display text-sm text-ink">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <h3 className="mt-5 font-display text-2xl uppercase text-ink">{it.name}</h3>
              <p className="mt-1 text-sm leading-6 text-ink/65">{it.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section
      id="galeria"
      className="scroll-mt-20 overflow-hidden bg-[color:var(--cocoa)] py-20 text-cream md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-2xl text-[color:var(--peach-deep)]">galería</p>
          <BranchDivider className="mx-auto mt-3 text-cream" />
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">Ambiente Maruxa</h2>
          <p className="mx-auto mt-6 leading-7 text-cream/72">
            Un vistazo al local, la terraza, la barra y los platos que salen cada día.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[220px]">
          <img
            src={realInterior}
            alt="Comedor real de Tapería Maruxa"
            loading="lazy"
            className="h-full min-h-64 w-full rounded-lg object-cover md:row-span-2"
          />
          <img
            src={realBarra}
            alt="Detalle de la barra de Tapería Maruxa"
            loading="lazy"
            className="h-full min-h-52 w-full rounded-lg object-cover md:col-span-2"
          />
          <img
            src={realPulpo}
            alt="Pulpo de Tapería Maruxa"
            loading="lazy"
            className="h-full min-h-52 w-full rounded-lg object-cover"
          />
          <img
            src={realZamburinas}
            alt="Zamburiñas de Tapería Maruxa"
            loading="lazy"
            className="h-full min-h-52 w-full rounded-lg object-cover"
          />
          <img
            src={realComedor}
            alt="Vista amplia del comedor de Tapería Maruxa"
            loading="lazy"
            className="h-full min-h-52 w-full rounded-lg object-cover md:col-span-2"
          />
          <img
            src={realMejillones}
            alt="Mejillones de Tapería Maruxa"
            loading="lazy"
            className="h-full min-h-52 w-full rounded-lg object-cover"
          />
        </div>

        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm uppercase text-ink transition-colors hover:bg-[color:var(--peach-deep)] sm:w-auto"
          >
            <Instagram size={16} /> Síguenos @taperiamaruxa
          </a>
        </div>
      </div>
    </section>
  );
}

function Reservas() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 overflow-hidden py-20 text-cream md:py-28"
    >
      <div className="absolute inset-0">
        <img
          src={realBarra}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-cocoa/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/65 via-cocoa/48 to-wine/50" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-script text-2xl text-[color:var(--peach-deep)]">te esperamos</p>
        <BranchDivider className="mx-auto mt-3 text-cream" />
        <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">Reserva tu mesa</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-cream/82">
          Escríbenos por WhatsApp o llámanos y te confirmamos disponibilidad. Para grupos y comedor
          privado, mejor con un poco de antelación.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm uppercase text-ink transition-colors hover:bg-[color:var(--peach-deep)] sm:w-auto"
          >
            <MessageCircle size={16} /> Reservar por WhatsApp
          </a>
          <a
            href={PHONE_TEL}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/45 bg-cream/10 px-6 py-3.5 text-sm uppercase text-cream backdrop-blur transition-colors hover:bg-cream hover:text-ink sm:w-auto"
          >
            <Phone size={16} /> Llamar al {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <div>
          <p className="font-script text-2xl text-terracotta">dónde estamos</p>
          <BranchDivider className="mt-3 text-ink" />
          <h2 className="mt-5 font-display text-4xl leading-tight text-ink md:text-6xl">
            Ven a visitarnos
          </h2>

          <ul className="mt-9 divide-y divide-border text-ink">
            <InfoRow icon={<MapPin size={20} />} title="Dirección">
              <p className="text-lg">{ADDRESS_LINE}</p>
              <p className="text-ink/70">{ADDRESS_CITY}</p>
            </InfoRow>
            <InfoRow icon={<Clock size={20} />} title="Horario">
              <p className="text-lg">Mié - Dom · 12:00 - cierre</p>
              <p className="text-sm text-ink/60">Consulta horario actualizado en Google</p>
            </InfoRow>
            <InfoRow icon={<Phone size={20} />} title="Teléfono">
              <a href={PHONE_TEL} className="text-lg transition-colors hover:text-terracotta">
                {PHONE}
              </a>
            </InfoRow>
            <InfoRow icon={<Instagram size={20} />} title="Instagram">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg transition-colors hover:text-terracotta"
              >
                @taperiamaruxa
              </a>
            </InfoRow>
          </ul>

          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm uppercase text-cream transition-colors hover:bg-terracotta-deep sm:w-auto"
          >
            Cómo llegar <ArrowRight size={16} />
          </a>
        </div>

        <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted shadow-xl lg:aspect-square">
          <iframe
            title="Ubicación Tapería Maruxa"
            src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-4 py-5 first:pt-0">
      <span className="mt-1 shrink-0 text-terracotta">{icon}</span>
      <div>
        <p className="font-display text-sm uppercase text-ink/58">{title}</p>
        <div className="mt-1">{children}</div>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <BrandLogo placement="footer" />
          </div>
          <p className="mt-6 max-w-sm leading-7 text-cream/60">
            Tapas, raciones y buenos momentos en Nigrán.
          </p>
        </div>

        <div>
          <p className="mb-4 font-display text-sm uppercase text-cream">Visítanos</p>
          <ul className="space-y-2 text-sm leading-6">
            <li>{ADDRESS_LINE}</li>
            <li>{ADDRESS_CITY}</li>
            <li>
              <a
                className="transition-colors hover:text-[color:var(--peach-deep)]"
                href={PHONE_TEL}
              >
                {PHONE}
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-[color:var(--peach-deep)]"
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
          <p className="mb-4 font-display text-sm uppercase text-cream">Enlaces</p>
          <ul className="space-y-2 text-sm leading-6">
            <li>
              <a href="#carta" className="transition-colors hover:text-[color:var(--peach-deep)]">
                Carta
              </a>
            </li>
            <li>
              <a href="#galeria" className="transition-colors hover:text-[color:var(--peach-deep)]">
                Galería
              </a>
            </li>
            <li>
              <a
                href="#ubicacion"
                className="transition-colors hover:text-[color:var(--peach-deep)]"
              >
                Ubicación
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[color:var(--peach-deep)]"
              >
                Reservas
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-cream/50 sm:px-6 md:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} {NAME}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="#" className="transition-colors hover:text-cream">
              Aviso legal
            </a>
            <a href="#" className="transition-colors hover:text-cream">
              Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-cream">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function BrandLogo({ placement = "header" }: { placement?: "header" | "footer" }) {
  const size = placement === "footer" ? "h-28 w-64" : "h-11 w-32 sm:h-12 sm:w-36";
  const frame = placement === "footer" ? "border-cream/15 shadow-none" : "border-ink/10 shadow-sm";

  return (
    <img
      src={brandLogo}
      alt={NAME}
      width={960}
      height={960}
      className={`${size} shrink-0 rounded-lg border bg-[color:var(--peach)] object-contain object-center ${frame}`}
    />
  );
}

function MobileCta() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 flex gap-2 md:hidden">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm uppercase text-cream shadow-2xl"
      >
        <MessageCircle size={16} /> Reservar
      </a>
      <a
        href={PHONE_TEL}
        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta text-cream shadow-2xl"
        aria-label="Llamar"
      >
        <Phone size={17} />
      </a>
    </div>
  );
}
