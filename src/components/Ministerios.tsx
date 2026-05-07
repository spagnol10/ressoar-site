import { Music, Baby, Users, BookOpen, Heart, Mic2, Globe, Layers } from "lucide-react";

const ministerios = [
  { icon: Music, name: "Louvor e Adoração", desc: "Liderando a congregação em adoração através da música." },
  { icon: Baby, name: "Infantil", desc: "Cuidando e ensinando as crianças com amor e criatividade." },
  { icon: Users, name: "Jovens", desc: "Discipulando a nova geração para viver o Evangelho." },
  { icon: BookOpen, name: "Escola Bíblica", desc: "Estudo aprofundado da Palavra de Deus para todos." },
  { icon: Heart, name: "Diaconia", desc: "Servindo e cuidando dos que têm necessidades." },
  { icon: Mic2, name: "Mídia", desc: "Transmitindo a mensagem do Evangelho pelos canais digitais." },
  { icon: Globe, name: "Missões", desc: "Levando o Evangelho além das fronteiras locais." },
  { icon: Layers, name: "Células", desc: "Grupos de comunhão e crescimento espiritual em casas." },
];

export default function Ministerios() {
  return (
    <section id="ministerios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Ministérios</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Encontre o seu lugar
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Temos um ministério para cada dom e chamado. Venha servir com a gente!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ministerios.map((m) => (
            <div key={m.name} className="group p-5 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all cursor-default">
              <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                <m.icon className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{m.name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://servirapp.vercel.app"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
            Quero me voluntariar →
          </a>
        </div>
      </div>
    </section>
  );
}
