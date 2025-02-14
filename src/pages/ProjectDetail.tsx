import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Datos de proyectos
const projectsData = {
  'graphic-design': {
    2: {
      title: 'Golden Toad ',
      description: 'Proyecto de marca de ropa',
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      process: '',
      images: [
        'https://i.imgur.com/Kg0iomh.png',
        'https://i.imgur.com/eLw1FUH.png',
        'https://i.imgur.com/aNAe9Gt.png'
      ]
    },
    8: {
      title: 'Etiquetas para productos',
      description: 'En este trabajo elaboré unas etiquetas para productos de cocina.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      process: 'El proceso comenzó con una extensa investigación con shon comiéndose el gallito',
      images: [
        'https://i.imgur.com/kk4qxeW.jpeg',
        'https://i.imgur.com/0BM7aYO.png',
        'https://i.imgur.com/eDd05aG.png'
      ]
    },
    3: {
      title: 'Trabajo editorial',
      description: 'Trabajos de diseño editorial.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
      process: 'El proceso comenzó con una extensa investigación con shon comiéndose el gallito',
      images: [
        'https://i.imgur.com/V0FqdVN.png',
        'https://i.imgur.com/V0FqdVN.png',
        'https://i.imgur.com/T4tMivd.jpeg'
      ]
    },
    4: {
      title: 'Restauración de fotos',
      description: '.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      process: 'El proceso comenzó con una extensa investigación con shon comiéndose el gallito',
      images: [
        'https://i.imgur.com/Q68YoKU.png',
        'https://i.imgur.com/H84Zx9V.jpeg',
        'https://i.imgur.com/Q68YoKU.png'
      ]
    },
    5: {
      title: 'Trabajos de fotografía',
      description: '.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      process: '',
      images: [
        'https://i.imgur.com/WGJy5xw.png',
        'https://i.imgur.com/0Me0x3C.jpeg',
        'https://i.imgur.com/DinXaj0.jpeg'
      ]
    },
    6: {
      title: 'Trabajos de diseño y troquel',
      description: '.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      process: '',
      images: [
        'https://i.imgur.com/2tiJXzN.jpeg',
        'https://i.imgur.com/i8PZvDO.png',
        'https://i.imgur.com/wQQBXlj.png'
      ]
    },
    7: {
      title: 'Tarjetas de regalo',
      description: '.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      process: '',
      images: [
        'https://i.imgur.com/7zAmovA.png',
        'https://i.imgur.com/sNVvdG3.png',
        'https://i.imgur.com/sNVvdG3.png'
      ]
    },
    1: {
      title: 'Marca personal de diseño gráfico',
      description: '.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      process: '',
      images: [
        'https://i.imgur.com/bq7EVAj.png',
        'https://i.imgur.com/WYl5blp.jpeg',
        'https://i.imgur.com/Qn1nWs5.png'
      ]
    },
    9: {
      title: 'Logofolio',
      description: '.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      process: '',
      images: [
        'https://i.imgur.com/OFX9Wku.png',
        'https://i.imgur.com/gMpGqwg.png',
        'https://i.imgur.com/qdALmgB.png',
        'https://i.imgur.com/CYeZUw8.png',
        'https://i.imgur.com/ALq8Fb8.png',
        'https://i.imgur.com/iPdTggw.png',
        'https://i.imgur.com/NqRwQtD.png',
        'https://i.imgur.com/YJwAaXt.png',
        'https://i.imgur.com/oYZlsZq.png',
        'https://i.imgur.com/qnhSIxe.png',
        'https://i.imgur.com/QLvGAOi.png',
        'https://i.imgur.com/lqWrBxM.png',
        'https://i.imgur.com/svJWjU6.png',
      ]
    },
  },
  'illustrations': {
    1: {
      title: 'Diseño de logo e ilustracion para muñecos de peluche wisart ',
      description: 'Colección de ilustraciones de muñecos de peluche y logo.',
      tools: ['Adobe illustrator', 'Adobe Photoshop'],
      process: 'Cada ilustración comenzó con bocetos del natural...',
      images: [
        'https://i.imgur.com/XFEytdt.png',
        'https://i.imgur.com/XNjKgkE.png',
        'https://i.imgur.com/VJzaGvI.jpeg'
      ]
    },
    2: {
      title: 'Afiches para eventos',
      description: 'Trabajos de illustración y diseño para afiches.',
      tools: ['Adobe illustrator', 'Adobe Photoshop'],
      process: 'Cada ilustración comenzó con bocetos del natural...',
      images: [
        'https://i.imgur.com/Qff6xhG.png',
        'https://i.imgur.com/TxxN3of.jpeg',
        'https://i.imgur.com/UJlmvfI.jpeg',
      ]
    },
    3: {
      title: 'Afiches para eventos',
      description: 'Trabajos de illustración y diseño para afiches.',
      tools: ['Adobe illustrator', 'Adobe Photoshop'],
      process: 'Cada ilustración comenzó con bocetos del natural...',
      images: [
        'https://i.imgur.com/Y8uMp57.jpeg',
        'https://i.imgur.com/3YRJKiU.jpeg',
        'https://i.imgur.com/rdTH4R9.jpeg',
        'https://i.imgur.com/gzavCPs.png',  
        'https://i.imgur.com/bWHlwIp.png',
        'https://i.imgur.com/bda78YY.jpeg',
        'https://i.imgur.com/iqHyeRf.png'
      ]
    }, 
    4: {
      title: '',
      description: 'Marca como ilustrador.',
      tools: ['Adobe illustrator', 'Adobe Photoshop'],
      process: 'Cada ilustración comenzó con bocetos del natural...',
      images: [
        'https://i.imgur.com/mo4umpV.png',
        'https://i.imgur.com/0aPuCWi.png',
        'https://i.imgur.com/H4l7XHS.png'
      ]
    }, 
  }
};

// Componente de Detalles del Proyecto
const ProjectDetail = () => {
  const { category, id } = useParams();
  const project = category && id ? projectsData[category][parseInt(id)] : null;

  if (!project) {
    return <div className="pt-20 text-center">Proyecto no encontrado</div>;
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
          
          {/* Imagen Principal */}
          <div className="mb-12">
          <img
              src={project.images[0]}
              alt={project.title}
              className=" object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Información del Proyecto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Sobre el Proyecto</h2>
              <p className="text-gray-600 mb-6">{project.description}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Herramientas Utilizadas</h3>
              <ul className="space-y-2">
                {project.tools.map((tool, index) => (
                  <li key={index} className="text-gray-600">{tool}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Imágenes del proceso */}
          <h2 className="text-2xl font-bold mb-6">Proceso y Resultados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.slice(1).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={typeof image === "string" ? image : (image as string)}
                alt={`${project.title} - Proceso ${index + 1}`}
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
