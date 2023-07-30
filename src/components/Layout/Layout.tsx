// components/Layout/Layout.tsx
import Header from "./Header/Header"


const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout