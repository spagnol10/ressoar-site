export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <p className="text-white font-bold">Igreja Ressoar</p>
              <p className="text-xs text-gray-500">Transformando vidas pelo Evangelho</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            {["Sobre", "Cultos", "Ministérios", "Eventos", "Contato"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="hover:text-orange-400 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Igreja Ressoar. Todos os direitos reservados.</p>
          <a href="https://servirapp.vercel.app"
            className="text-orange-500 hover:text-orange-400 transition-colors font-medium">
            Área do Voluntário →
          </a>
        </div>
      </div>
    </footer>
  );
}
