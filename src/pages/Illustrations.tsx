import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Diseño de logo e ilustración para muñecos de peluche wisart',
    description: 'Ilustraciones digitales inspiradas en la flora local',
    image: 'https://i.imgur.com/XNjKgkE.png',
    category: 'illustrations'
  },
  {
    id: 2,
    title: 'afiches para eventos.',
    description: 'Desarrollo de personajes para proyecto editorial',
    image: 'https://i.imgur.com/1YzsjBp.jpeg',
    category: 'illustrations'
  },
  {
    id: 3,
    title: 'ilustraciones',
    description: 'ilustraciones y diseños.',
    image: 'https://i.imgur.com/nXUzrM5.jpeg',
    category: 'illustrations'
  },
  {
    id: 4,
    title: 'Marca como ilustrador.',
    description: 'ilustraciones y logo de mi marca como artista.',
    image: 'https://i.imgur.com/D3ys4Hy.png',
    category: 'illustrations'
  },
  // Add more projects as needed
];

const Illustrations = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Ilustraciones</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Descubre mi mundo de ilustración, donde cada pieza cuenta una historia única a través del arte y la creatividad.
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

export default Illustrations;