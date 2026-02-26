
export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      {/* Newsletter */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="font-display text-2xl md:text-3xl text-white mb-3">
            Mantente al día
          </h3>
          <p className="text-sm text-zinc-500 mb-8 max-w-md mx-auto">
            Suscríbete para recibir las últimas novedades y ofertas exclusivas.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 text-sm text-white 
                         placeholder-zinc-600 outline-none focus:border-zinc-600 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-zinc-900 text-xs font-semibold tracking-[0.15em] uppercase
                         hover:bg-zinc-200 transition-colors"
            >
              Suscribir
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      {/* 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <h4 className="font-display text-lg text-white tracking-[0.15em] mb-4">
              ESSENZA
            </h4>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Tu destino para fragancias premium. Calidad y exclusividad en cada esencia.
            </p>
          </div>

          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase text-zinc-300 font-semibold mb-4">
              Explorar
            </h5>
            <ul className="space-y-2.5">
              {["Inicio", "Catálogo", "Novedades", "Ofertas"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase text-zinc-300 font-semibold mb-4">
              Ayuda
            </h5>
            <ul className="space-y-2.5">
              {["Envíos", "Devoluciones", "Preguntas frecuentes", "Contacto"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase text-zinc-300 font-semibold mb-4">
              Contacto
            </h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-zinc-500">
                <Mail size={14} />
                hola@essenza.pe
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-500">
                <MapPin size={14} />
                Lima, Perú
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 bg-zinc-900 rounded-full flex items-center justify-center
                             text-zinc-500 hover:bg-zinc-800 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © 2026 ESSENZA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {["Privacidad", "Términos"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      */}
    </footer>
  );
}
