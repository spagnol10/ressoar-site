export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-900 via-orange-700 to-orange-500" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      {/* Glow circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Cultos toda semana — Venha nos visitar!
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Ressoar a<br />
          <span className="text-yellow-300">Glória de Deus</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Uma comunidade de fé que transforma vidas pelo poder do Evangelho. 
          Você é bem-vindo aqui!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#cultos"
            className="w-full sm:w-auto bg-white text-orange-700 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-orange-50 transition-colors shadow-lg shadow-orange-900/30">
            Ver horários dos cultos
          </a>
          <a href="#sobre"
            className="w-full sm:w-auto border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
            Conhecer a igreja
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "10+", label: "Anos de história" },
            { value: "500+", label: "Membros ativos" },
            { value: "15+", label: "Ministérios" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-white">{s.value}</p>
              <p className="text-sm text-white/70 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
