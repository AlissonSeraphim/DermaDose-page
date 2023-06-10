import logo from '../img/logo.png'

function Header() {
  return (
    <nav class="bg-white shadow">
      <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
        <a href='home' class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">
          Home
        </a>

        <a href='problema' class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">
          Problema
        </a>

        <a href='solução' class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">
          Solução
        </a>

        <a href='home' class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">
          <img src={ logo } alt='logo img' className='min-[701px]:object-fill h-10 w-25 max-[700px]:h-8 max-[700px]:w-14'/>
        </a>
      </div>
    </nav>
  );
}

export default Header;
