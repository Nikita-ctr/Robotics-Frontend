import Footer from "@/components/Layouts/Footer/Footer";
import Header from "@/components/Layouts/Header/Header";


interface LayoutProps {
    children: React.ReactNode,
}

const HeaderAndFooterLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <>
                {children}
            </>
            <Footer />
        </>
    )
}

export default HeaderAndFooterLayout;