import { Calendar, ArrowRight } from "lucide-react";

const eventos = [
  { data: "18 Mai", mes: "2026", titulo: "Conferência de Jovens — FIRE", desc: "Um fim de semana transformador de pregação, louvor e comunhão para a juventude.", tag: "Jovens" },
  { data: "01 Jun", mes: "2026", titulo: "Culto de Pentecostes", desc: "Celebração especial do Pentecostes com toda a família da Igreja Ressoar.", tag: "Culto Especial" },
  { data: "15 Jun", mes: "2026", titulo: "Encontro de Casais", desc: "Tarde especial para fortalecer os casamentos com a Palavra e comunhão.", tag: "Família" },
  { data: "29 Jun", mes: "2026", titulo: "Missão Local", desc: "Ação social e evangelismo no bairro. Venha servir e alcançar vidas!", tag: "Missões" },
];

const tagColors: Record<string, string> = {
  "Jovens": "bg-purple-100 text-purple-700",
  "Culto Especial": "bg-orange-100 text-orange-700",
  "Família": "bg-pink-100 text-pink-700",
  "Missões": "bg-green-100 text-green-700",
};

export default function Eventos() {
  return (
    <section id="eventos" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Agenda</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Próximos eventos
            </h2>
          </div>
          <a href="#contato" className="flex items-center gap-2 text-orange-600 font-medium hover:underline self-start md:self-auto">
            Ver agenda completa <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-4">
          {eventos.map((e) => (
            <div key={e.titulo}
              className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-5 hover:border-orange-200 hover:shadow-md transition-all group">
              {/* Data */}
              <div className="w-14 shrink-0 text-center bg-orange-50 rounded-xl p-2.5 group-hover:bg-orange-600 transition-colors">
                <p className="text-xl font-bold text-orange-600 group-hover:text-white transition-colors leading-none">{e.data.split(" ")[0]}</p>
                <p className="text-xs text-orange-400 group-hover:text-orange-100 transition-colors font-medium mt-0.5">{e.data.split(" ")[1]}</p>
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-3 flex-wrap">
                  <h3 className="font-bold text-gray-900 text-base">{e.titulo}</h3>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${tagColors[e.tag]}`}>{e.tag}</span>
                </div>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{e.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-gray-300 group-hover:text-orange-500 transition-colors shrink-0 mt-1">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
