// src/pages/index.tsx
export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
          AdminSchool
        </h1>

        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Usuário</label>
          <input
            type="text"
            placeholder="Digite seu usuário"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>


        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 transform transition duration-300 hover:scale-105">
          Entrar
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          Sistema de Gestão Escolar Infantil
        </p>
      </div>
    </div>
  );
}
