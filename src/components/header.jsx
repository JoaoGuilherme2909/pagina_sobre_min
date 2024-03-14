export default function Header() {
    return (
        <header>
            <div className="container">
                <img src="/assets/minha_foto.jpeg" className="profile" alt="foto de joão guilherme dos Santos" />
                <section>
                    <div className="darkBackground">
                        <h2>Descrição</h2>
                        <p> Sou um desenvolvedor iniciante. Minha meta é me tornar um desenvolvedor full-stack. </p>
                        <p> Tecnologias que estou estudando:
                            <img src="/assets/CSharpLogo.svg" alt="Logo do CSharp" />
                            <img src="/assets/react.svg" alt="Logo do react" />
                            <img src="/assets/JS.svg" alt="Logo do javascript" />
                        </p>
                        <p> Tecnologias de interesse:
                            <img src="/assets/tailwind.svg" alt="logo do tailwind" />
                            <img src="/assets/SQL.svg" alt="logo do SQL Server" />
                        </p>
                        <p> Tecnologias que tenho conhecimento:
                            <img src="/assets/python.svg" alt="logo do python" />
                            <img src="/assets/html.svg" alt="logo do html" />
                            <img src="/assets/css.svg" alt="logo do css" />
                        </p>
                    </div>
                </section>
            </div>
        </header>
    )
}