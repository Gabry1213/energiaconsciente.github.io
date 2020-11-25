import SubTitle from './../components/SubTitle'
import Title from './../components/Title'

const bgImage = {
    backgroundImage: "url('./assets/img/pale-127.png')", 
    backgroundPosition: "right top",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat"
}

const EnergiaBrasil = () => {
    return (
        <div id="energia-brasil" className="mb-5 jumbotron text-dark text-justify ">
            <Title text="Fontes energéticas existentes no Brasil"/>
            <p className="lead">No Brasil existem cinco fontes energéticas, porém a predominante entre o território nacional
                são
                as Usinas hidrelétricas. As quatro outras fontes energéticas são elas: Energia
                Termoelétrica,
                Eólica, Nuclear e Solar.</p>
            <div className="row d-flex justify-content-around mt-5" >
                <div className="col-md-6 col-sm-12">
                    <div>
                    <SubTitle text="Amazonas"  class="text-center font-weight-bold"/>
                    <p className="lead">As fontes energéticas implantadas pelo estado do Amazonas são bem diversificadas. Sendo
                        constituído de: Energia Solar, Hidrelétrica, Biomassa, Gás
                        Natural e Combustível Fóssil.</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div>
                    <SubTitle text="Presidente Figueiredo"  class="text-center font-weight-bold"/>
        
                    <p className="lead">No município de Presidente Figueiredo, 107KM da capital do Estado. Possui uma fonte
                        energética
                        considerada limpa e renovável. A Usina hidreletrica do município está localizado na Vila de
                        Balbina. Onde é concentrado a produção de energia eletrica do município.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EnergiaBrasil;
