import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6"

type DefaultLayoutProps = {
    children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className="h-[100dvh] flex flex-col">
            <div className="flex h-[48px] w-full bg-gray-300/20 backdrop-blur-sm px-38 py-2 fixed">
                <img src="../src/assets/logo.svg" className="h-[40px]" />
                <span className="mx-auto flex gap-12">
                    <a href="#home" className="text-2xl"> Início </a>
                    <a href="#content" className="text-2xl"> Conteúdo </a>
                    <a href="#about" className="text-2xl"> Sobre </a>
                </span>
                <button className="bg-blue-500 text-white py-1 px-3 rounded-md">Entrar</button>
            </div>

            <main className="flex-1 p-6">
                <div className="px-32">
                    {children}
                </div>
            </main>

            <footer className="bg-zinc-900 text-white px-38 py-6">
                <img src="../src/assets/logo.svg" className="h-[40px]" />
                <div className="bg-white h-0.5 w-full my-4" />
                <div className="flex flex-col text-white">
                    <p>(xx) xxxxx-xxxx</p>
                    <p>(xx) xxxxx-xxxx</p>
                    <p>exemplo@gmail.com</p>
                    <span className="flex gap-2 mt-2">
                        <FaInstagram />
                        <FaFacebook />
                        <FaWhatsapp />
                        <FaXTwitter />
                    </span>
                </div>
                <div className="bg-white h-0.5 w-full my-4" />
                <p className="text-blue-500">Feito por Maryanne Käffer</p>
            </footer>
        </div>
    )
}
