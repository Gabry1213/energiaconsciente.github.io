import Card from '../components/Card'

const cardItems = [
    {title:"Usina hidrelétrica", subtitle: "Imagem representa uma usina hidreletrica", img: "./img/hidreletrica.jpg"},
    {title:"Carvão Mineral", subtitle: "Imagem representa um carrinho utilizado na extração de carvão das minas.", img: "./img/carvao.jpg"},
    {title:"Turbinas Aerogeradoras", subtitle: "imagem representa uma turbina Aerogeradora na produção de energia eolica.", img: "./img/turbinas.gif"},
    {title:"Biomassa", subtitle: `Imagem representa uma quantidade de material que irá ser utilizado na
    produção de energia biomassa`, img: "./img/biomassa.jpg"},
    {title:"Solar", subtitle: `Imagem representa uma estação de paineis fotossensores para capitação de
    raios solares`, img: "./img/solar.jpg"},
    {title:"Petróleo", subtitle: "imagem representa uma estação de extração de Petróleo", img: "./img/petroleo.jpg"},
    {title:"Usina Geotérmica", subtitle: "Imagem representa uma usina Geotérmica", img: "./img/geo.jpg"}
]

let cards = [];

for (const item of cardItems) {
    cards.push(<div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src={item.img} className="card-image-bg"/>
                        <div className="card-body">
                            <h4 className="text-center">{ item.title }</h4>
                            <p className="card-text">
                                { item.subtitle }
                            </p>
                        </div>
                    </div>
                </div>
    )
}


export default function  EnergiaFontes () {
    return (
        <div>
            <h2 className="font-weight-normal text-center mb-4">As fontes energéticas</h2>
            <div className="container">
                <div className="row">
                    {cards}
                </div>
            </div>
        </div>
    );
}

