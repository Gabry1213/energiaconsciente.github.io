
export default function Footer () {
    return (<footer className="pt-4 mt-5 my-md-5 pt-md-5 border-top">
                <div className="col-12 text-center">
                    <small className="d-block mb-3 text-muted">&copy; 2020</small>
                </div>
                <div className="row text-sm-left text-center">
                    <div className="col-md-4 col-sm-12">
                        <h5>Tópicos</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#energia">Energia</a></li>
                            <li><a className="text-muted" href="#energia-eletrica">Energia elétrica</a></li>
                            <li><a className="text-muted" href="#energia-classificacao">Classificação da energia</a></li>
                            <li><a className="text-muted" href="#energia-fontes">Fontes de energia</a></li>
                            <li><a className="text-muted" href="#energia-brasil">Energia no Brasil</a></li>
                            <li><a className="text-muted" href="#energia-desperdicio">Desperdício de energia</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h5>Recursos</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Imagens</a></li>
                        <li><a className="text-muted" href="#">Fontes</a></li>
                        <li><a href="https://icons8.com/" className="text-muted"> Ilustrações por Icons 8 de Icons8</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h5>Sobre</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Time</a></li>
                        <li><a className="text-muted" href="#">Localização</a></li>
                        <li><a className="text-muted" href="#">Projeto</a></li>
                        <li><a className="text-muted" href="#">Privacidade</a></li>
                        <li><a className="text-muted" href="#">Termos</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
    );
}