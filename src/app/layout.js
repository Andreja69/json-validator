import "./global.css"


import Header from "../../components/Header/Header"

function RootLayout({ children }) {
    return (
        <html>
            <body>

            <Header></Header>

             {children}
                
            </body>
        </html>
       
    )
}

export default RootLayout
