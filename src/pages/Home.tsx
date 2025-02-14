import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.imgur.com/Qn1nWs5.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Anderson Valverde Mena
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Diseñador gráfico e ilustrador apasionado por crear experiencias visuales únicas y memorables
            </p>
            <div className="flex space-x-4">
              <Link
                to="/graphic-design"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center transition-colors"
              >
                Ver Proyectos <ArrowRight className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg transition-colors"
              >
                Contactar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Trabajo Destacado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/graphic-design" className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="https://i.imgur.com/ELLF0b4.png"
                  alt="Diseño Gráfico"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold mb-2">Diseño Gráfico</h3>
                  <p>Explora mis proyectos de diseño gráfico</p>
                </div>
              </motion.div>
            </Link>
            <Link to="/illustrations" className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="https://i.imgur.com/Y6k9MZI.png"
                  alt="Ilustraciones"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold mb-2">Ilustraciones</h3>
                  <p>Descubre mis trabajos de ilustración</p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;