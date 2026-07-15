
import PrimaryButton from "../components/PrimaryButton";

export default function Navbar(){
    return(

        <nav className="bg-gray-800 p-4">
            <div className="flex items-center">
                <div className="text-white text-lg font-semibold">
                    🌊 LAKE STORE
                </div>
                <div className="space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">Inicio</a>
                    <a href="#" className="text-gray-300 hover:text-white">Catálogo</a>
                    <a href="#" className="text-gray-300 hover:text-white">Fútbol</a>
                    <a href="#" className="text-gray-300 hover:text-white">Running</a>
                    <a href="#" className="text-gray-300 hover:text-white">Lifestyle</a>
                </div>
                
                <div className="mt-10 flex justify-center gap-4">

                    <PrimaryButton text="Buscar un modelo"/>

                </div>
            </div>
        </nav>

    )

}