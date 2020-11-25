import Title from './../components/Title'
import SubTitle from './../components/SubTitle'

const EnergiaDesperdicio = () => {
    return (
        <div id="energia-desperdicio" className="row featurette">
          <div className="col-md-7 col-sm-12">
            <Title text="Desperdício de energia elétrica" />
            <SubTitle class="text-justify" text="O desperdício de energia deveria ser uma das maiores preocupações da atualidade, uma vez que a falta de compromisso com o seu uso racional e econômico, aponta a necessidade de novos meios para gerar maior quantidade de energia. Para atender a essa demanda, novas usinas hidrelétricas são criadas e embora façam parte de fontes renováveis, trazem consigo grandes destruições da fauna e da flora, processos estes já bastante conhecidos na região de Presidente Figueiredo, município onde se localiza a Usina Hidrelétrica de Balbina"/>
          </div>
          <div className="col-md-5 col-sm-12">
            <img src="./assets/img/abstract-84.png" width="300"/>
          </div>
        </div>
    );
}

export default EnergiaDesperdicio;
