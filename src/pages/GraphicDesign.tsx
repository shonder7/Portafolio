import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Marca personal diseño gráfico ',
    description: '',
    image: 'https://i.imgur.com/Qn1nWs5.png',
    category: 'graphic-design'
  },
  {
    id: 2,
    title:"Golden Toad",
    description: 'Marca de ropa',
    image: 'https://i.imgur.com/Kg0iomh.png',
    category: 'graphic-design'
  },
  {
    id: 9,
    title: 'Logofolio',
    description: '',
    image: 'https://i.imgur.com/ym0y3kY.png',
    category: 'graphic-design'
  },
  {
    id: 8,
    title: 'Etiquetas para producto',
    description: 'Diseño de empaque para producto sustentable',
    image: 'https://i.imgur.com/kk4qxeW.jpeg',
    category: 'graphic-design'
  },
  {
    id: 7,
    title: 'Tarjetas de regalo ',
    description: '',
    image: 'https://i.imgur.com/sNVvdG3.png',
    category: 'graphic-design'
  },
  {
    id: 3,
    title: 'Diseño Editorial',
    description: 'ilustración y diseño de paginas de libro',
    image: 'https://i.imgur.com/T4tMivd.jpeg',
    category: 'graphic-design'
  },
  {
    id: 4,
    title: 'Restauración de fotografias ',
    description: '',
    image: 'https://i.imgur.com/H84Zx9V.jpeg',
    category: 'graphic-design'
  },
  {
    id: 5,
    title: 'Fotografias ',
    description: '',
    image: 'https://i.imgur.com/0Me0x3C.jpeg',
    category: 'graphic-design'
  },
  {
    id: 6,
    title: 'Trabajos de diseño y troquel ',
    description: '',
    image: 'https://i.imgur.com/2tiJXzN.jpeg',
    category: 'graphic-design'
  },
  
  
  // Add more projects as needed
  //{}
];

const GraphicDesign = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Diseño Gráfico</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Explora mi colección de proyectos de diseño gráfico, donde cada pieza refleja mi pasión por crear soluciones visuales impactantes y efectivas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/project/${project.category}/${project.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;