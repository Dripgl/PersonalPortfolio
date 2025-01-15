import React from "react";




function Home() {

    return (
        <div className="welcome">
            <h1 className="system-output">
                <span className="keyword">System</span>
                <span className="dot">.</span>
                <span className="object">out</span>
                <span className="dot">.</span>
                <span className="method">println</span>(
            </h1>

            <div className="string">
                <h1 className="greeting en">Hello World!</h1>
                <h1 className="greeting es">¡Hola Mundo!</h1>
                <h1 className="greeting de">Hallo Welt!</h1>
                <h1 className="greeting it">Ciao Mondo!</h1>
            </div>
            <h1 className="closure">");</h1>
        </div>
    )
}

export default Home;