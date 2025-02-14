
import { motion } from 'framer-motion';
import { Mail, Smartphone } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = "85370611";
  const email = "shonderson7@gmail.com";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Contacto</h1>
            <p className="text-xl text-gray-600 mb-12">
              ¿Interesado en trabajar juntos? Contáctame a través de WhatsApp o correo electrónico.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center w-full px-6 py-3 mb-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </button>
              <button
                onClick={handleEmail}
                className="flex items-center justify-center w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Correo Electrónico
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
