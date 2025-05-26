import Image from "next/image"


import styles from "./header.module.css"



import Frog from "@/public/frog-prince.png"



function Header() {
    return (
        <div>
                <header>
                    
                    <div className={styles.container}>

                       <div className="logo">
                            <Image src={Frog.src} alt="frog princ" width={100} height={100}></Image>
                       </div>

                        <div className={styles.title}>
                            <h1>🔥JSON Validator🔥</h1>
                       </div>

                        <div className="logo">
                             <Image src={Frog.src} alt="frog princ" width={100} height={100}></Image>

                       </div>
                    </div>

                </header>
        </div>
    )
}

export default Header
