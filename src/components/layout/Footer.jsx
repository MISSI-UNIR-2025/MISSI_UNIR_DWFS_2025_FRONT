import { Footer } from "antd/es/layout/layout"



const FooterApp = () => {
    return (
        <Footer className="text-center bg-white text-gray-500 border-t border-gray-100">
            BookStore ©{new Date().getFullYear()} Created by DWFS 2025 Grupo 6
        </Footer>
    )
}

export default FooterApp