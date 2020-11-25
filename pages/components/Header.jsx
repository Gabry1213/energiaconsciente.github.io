import './../../style/header.module.css';




export default function Header () {
    return (
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="text-muted" href="#"></a>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href="#">Energia</a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="text-muted" href="#"></a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 text-muted" href="#energia">Energia</a>
            <a className="p-2 text-muted" href="#energia-eletrica">Energia elétrica</a>
            <a className="p-2 text-muted" href="#energia-classificacao">Classificação da energia</a>
            <a className="p-2 text-muted" href="#energia-fontes">Fontes de energia</a>
            <a className="p-2 text-muted" href="#energia-brasil">Energia no Brasil</a>
            <a className="p-2 text-muted" href="#energia-desperdicio">Desperdício de energia</a>
          </nav>
        </div>
      </div>
      
    );
}

