import React from 'react';
import { Instagram, Linkedin, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anderson Valverde Mena</h3>
            <p className="text-gray-400">
              Diseñador gráfico e ilustrador profesional especializado en crear experiencias visuales únicas y memorables.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/graphic-design" className="text-gray-400 hover:text-white transition-colors">
                  Diseño Gráfico
                </a>
              </li>
              <li>
                <a href="/illustrations" className="text-gray-400 hover:text-white transition-colors">
                  Ilustraciones
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Conecta Conmigo</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/a.k.a.shonder/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anderson-valverde-84031a290/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://drive.google.com/file/d/17JqkFcbR-G1NT6W4QquZfC7db3VnaL2f/view?usp=sharing"
                download
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Download className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anderson Valverde Mena. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;