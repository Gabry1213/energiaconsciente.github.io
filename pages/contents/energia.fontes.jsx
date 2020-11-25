import Card from '../components/Card';
import Title from './../components/Title'
const cardItems = require('./../../public/assets/data/fontes.energeticas.json')


export default function  EnergiaFontes () {
    return (
        <div id="energia-fontes">
            <Title text="Fontes energéticas" />
            <div className="container">
                <div className="row">
                    {cardItems.map((item, index) => <Card key={index} title={item.title} subtitle={item.subtitle} img={item.img} />)}
                </div>
            </div>
        </div>
    );
}

