import { MapPin, Phone, Mail, Share2, PlayCircle, MessageCircle } from "lucide-react";

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Fale com a gente
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tem dúvidas ou quer saber mais? Entre em contato — será um prazer te atender!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: MapPin, label: "Endereço", value: "Rua Exemplo, 123 — Bairro\nCidade — SP, CEP 00000-000" },
              { icon: Phone, label: "Telefone / WhatsApp", value: "(11) 99999-9999" },
              { icon: Mail, label: "Email", value: "contato@igrejaressoar.com.br" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">{item.label}</p>
                  <p className="text-gray-800 font-medium whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Redes sociais */}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-400 font-medium mb-4">Nos acompanhe nas redes</p>
              <div className="flex gap-3">
                {[
                  { icon: Share2, label: "Instagram", href: "#", color: "hover:bg-pink-600" },
                  { icon: PlayCircle, label: "YouTube", href: "#", color: "hover:bg-red-600" },
                  { icon: MessageCircle, label: "WhatsApp", href: "#", color: "hover:bg-green-600" },
                ].map((s) => (
                  <a key={s.label} href={s.href}
                    className={`w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all ${s.color}`}>
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-bold text-gray-900 text-lg mb-6">Envie uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Nome</label>
                  <input type="text" placeholder="Seu nome"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email</label>
                  <input type="email" placeholder="seu@email.com"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Assunto</label>
                <input type="text" placeholder="Como podemos ajudar?"
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Mensagem</label>
                <textarea rows={4} placeholder="Sua mensagem..."
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white resize-none" />
              </div>
              <button type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 rounded-xl transition-colors">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
