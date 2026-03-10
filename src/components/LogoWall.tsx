import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];

export default function LogoWall() {
  return (
    <div className="bg-primary py-20 border-y border-white/5 overflow-hidden relative">
      {/* Subtle radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

      <section className="relative mx-auto max-w-6xl px-4 md:px-8 z-10">
        <h2 className="mb-12 text-center font-display font-medium text-white/90 text-lg md:text-2xl tracking-tight">
          <span className="text-hushed font-sans text-sm md:text-base tracking-widest uppercase mb-3 block">Tecnologia de Ponta</span>
          <span className="text-white/60">Integrados com as melhores</span>{' '}
          <span className="font-semibold text-white">ferramentas do mercado.</span>
        </h2>
        
        <div className="mx-auto my-6 h-px max-w-lg bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <LogoCloud logos={logos} className="brightness-150 opacity-70 hover:opacity-100 transition-opacity duration-700" />

        <div className="mt-6 h-px max-w-lg mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>
    </div>
  );
}
