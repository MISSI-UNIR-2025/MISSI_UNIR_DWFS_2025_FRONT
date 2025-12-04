import { Button, Card } from 'antd';
import { TeamOutlined, RocketOutlined, StarOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-indigo-600">MISSI</h1>
            <Button type="primary" size="large">Contacto</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-2 rounded-full">
              Proyecto Académico
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Grupo <span className="text-indigo-600">6</span> de MISSI
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trabajando en innovación y tecnología para crear soluciones del futuro
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card 
            className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-indigo-500"
            bodyStyle={{ padding: '32px' }}
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <TeamOutlined className="text-3xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Equipo</h3>
              <p className="text-gray-600">
                Un grupo comprometido trabajando en conjunto
              </p>
            </div>
          </Card>

          <Card 
            className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500"
            bodyStyle={{ padding: '32px' }}
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <RocketOutlined className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovación</h3>
              <p className="text-gray-600">
                Desarrollando ideas creativas y soluciones únicas
              </p>
            </div>
          </Card>

          <Card 
            className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-500"
            bodyStyle={{ padding: '32px' }}
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                <StarOutlined className="text-3xl text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excelencia</h3>
              <p className="text-gray-600">
                Buscando la calidad en cada proyecto que realizamos
              </p>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">¿Listo para conocer más?</h3>
          <p className="text-xl mb-8 text-indigo-100">
            Descubre lo que el Grupo 6 está construyendo
          </p>
          <Button type="default" size="large" className="bg-white text-indigo-600 hover:bg-gray-100 border-none font-semibold">
            Explorar Proyecto
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            © 2025 MISSI - Grupo 6. Proyecto Académico.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;