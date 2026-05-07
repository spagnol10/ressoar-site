import { Clock, MapPin, Calendar } from "lucide-react";

const cultos = [
  { dia: "Domingo", horario: "09h00", tipo: "Culto da Manhã", desc: "Culto de celebração e adoração com toda a família.", destaque: false },
  { dia: "Domingo", horario: "19h00", tipo: "Culto da Noite", desc: "Momento especial de adoração e pregação da Palavra.", destaque: true },
  { dia: "Quarta-feira", horario: "19h30", tipo: "Culto de Oração", desc: "Reunião de intercessão e estudo bíblico em comunidade.", destaque: false },
  { dia: "Sexta-feira", horario: "20h00", tipo: "Culto de Jovens", desc: "Encontro especial para a juventude com louvor e Palavra.", destaque: false },
];

export default function Cultos() {
  return (
    <section id="cultos" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Programação</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Nossos cultos
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Venha encontrar Deus conosco. Todos são bem-vindos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cultos.map((c) => (
            <div key={`${c.dia}-${c.horario}`}
              className={`relative p-6 rounded-2xl border transition-all ${
                c.destaque
                  ? "bg-orange-600 border-orange-600 text-white shadow-xl shadow-orange-200"
                  : "bg-white border-gray-100 hover:border-orange-200 hover:shadow-md"
              }`}>
              {c.destaque && (
                <span className="absolute top-4 right-4 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Principal
                </span>
              )}
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${c.destaque ? "bg-white/20" : "bg-orange-100"}`}>
                  <Calendar className={`w-6 h-6 ${c.destaque ? "text-white" : "text-orange-600"}`} />
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${c.destaque ? "text-white" : "text-gray-900"}`}>{c.tipo}</h3>
                  <div className={`flex items-center gap-4 text-sm mb-3 ${c.destaque ? "text-orange-100" : "text-gray-400"}`}>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{c.dia}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{c.horario}</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${c.destaque ? "text-orange-100" : "text-gray-500"}`}>{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Endereço */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
            <MapPin className="w-7 h-7 text-orange-600" />
          </div>
          <div className="text-center md:text-left flex-1">
            <h3 className="font-bold text-gray-900 text-lg mb-1">Onde nos encontrar</h3>
            <p className="text-gray-500">Rua Exemplo, 123 — Bairro, Cidade — SP</p>
            <p className="text-gray-400 text-sm mt-0.5">Estacionamento gratuito disponível</p>
          </div>
          <a href="https://maps.google.com" target="_blank"
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap">
            Ver no mapa
          </a>
        </div>
      </div>
    </section>
  );
}
