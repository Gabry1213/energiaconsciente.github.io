import { Container }  from 'react-bootstrap';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';

export default function EnergiaClassificacao() {
    return (
        <div id="energia-classificacao" className="jumbotron m-0">
            <div className="text-center">
                <Title text="Classificação das fontes energéticas" margin="" />
                <SubTitle text="Cada fonte energética existente possui sua classificação, seja ela renovável ou não
                    renovável." />
            </div>
            <div className="row d-flex  justify-content-around mt-1">
                <div className="col-md-6  col-sm-12">
                    <div className="p-2 lead">
                        <SubTitle text="Fontes renováveis" class="text-center font-weight-bold"/>
                        <p className="text-justify">As fontes renováveis são aquelas que em particular, podem se auto regenerar ou por ações humanasos recursos naturais. Podem ser considerados como fontes energéticas limpas.</p>
                        <p>Usina Hidrelétrica<br/>
                        Solar<br/>
                        Geotérmica<br/>
                        Biomassa<br/>
                        Eólica</p>
                        <img src="./assets/img/pablo-636.png" className="mr-2" style={{width: "220px", float: "right", bottom: "120px", position: "relative"}} />
                    </div>
                </div>
                <div className="col-md-6  col-sm-12">
                    <div className="p-2  lead">
                        <SubTitle text="Fontes não renováveis"  class="text-center font-weight-bold"/>
                        <p className="text-justify">As fontes não renováveis são aquelas que se encontram na natureza em grandes quantidades, mas uma vez esgotadas, não podem mais ser regeneradas.</p>
                        <p>Unisa Nuclear<br/>
                        Petróleo<br/>
                        Carvão Mineral</p>
                        <img src="./assets/img/taxi-419.png" className="mr-2" style={{width: "150px", float: "right", bottom: "80px",  position: "relative"}} />
                    </div>
                </div>
            </div>
        </div>
    );
}