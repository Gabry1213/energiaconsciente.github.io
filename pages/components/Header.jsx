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
            <a className="p-2 text-muted" href="#">World</a>
            <a className="p-2 text-muted" href="#">U.S.</a>
            <a className="p-2 text-muted" href="#">Technology</a>
            <a className="p-2 text-muted" href="#">Design</a>
            <a className="p-2 text-muted" href="#">Culture</a>
            <a className="p-2 text-muted" href="#">Business</a>
            <a className="p-2 text-muted" href="#">Politics</a>
            <a className="p-2 text-muted" href="#">Opinion</a>
            <a className="p-2 text-muted" href="#">Science</a>
            <a className="p-2 text-muted" href="#">Health</a>
            <a className="p-2 text-muted" href="#">Style</a>
            <a className="p-2 text-muted" href="#">Travel</a>
          </nav>
        </div>
      </div>
        // <nav className="site-header sticky-top py-1" style={{backgroundColor: "rgba(0, 0, 0, 0.85)"}}>
        //   <div className="container d-flex flex-column flex-md-row justify-content-between">
        //     <a className="py-2 d-none d-md-inline-block" href="#">Energia</a>
        //     <a className="py-2 d-none d-md-inline-block" href="#">Product</a>
        //     <a className="py-2 d-none d-md-inline-block" href="#">Features</a>
        //     <a className="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
        //     <a className="py-2 d-none d-md-inline-block" href="#">Support</a>
        //     <a className="py-2 d-none d-md-inline-block" href="#">Pricing</a>
        //     <a className="py-2 d-none d-md-inline-block" href="#">Cart</a>
        //   </div>
        // </nav>
    );
}

