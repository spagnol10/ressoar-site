import { Heart, BookOpen, Users, Flame } from "lucide-react";

const valores = [
  { icon: BookOpen, title: "Bíblia", desc: "A Palavra de Deus é nossa base e fundamento para toda a vida cristã." },
  { icon: Heart, title: "Amor", desc: "Comunidade que acolhe, cuida e serve uns aos outros com amor genuíno." },
  { icon: Users, title: "Comunhão", desc: "Famílias e pessoas conectadas em relacionamentos verdadeiros." },
  { icon: Flame, title: "Missão", desc: "Comprometidos em levar o Evangelho a todas as nações." },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Quem somos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Mais que uma igreja,<br />uma família
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A Igreja Ressoar nasceu com o propósito de ser um lugar de transformação, 
            onde o Evangelho de Jesus Cristo ressoa em cada vida, família e geração.
          </p>
        </div>

        {/* Grid valores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {valores.map((v) => (
            <div key={v.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                <v.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-linear-to-br from-orange-600 to-orange-700 rounded-3xl p-10 md:p-14 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-6">
            "Ide por todo o mundo e pregai o evangelho a toda criatura."
          </blockquote>
          <cite className="text-orange-200 text-sm font-medium not-italic">Marcos 16:15</cite>
        </div>
      </div>
    </section>
  );
}
