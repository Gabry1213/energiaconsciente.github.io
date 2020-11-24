import React from 'react';
import './../../style/cover.module.css'

const Cover = () => {
    return (
        <div className="bodyCover">
             <div classname="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header classname="masthead mb-auto">
                    <div classname="inner">
                    <h3 classname="masthead-brand">Cover</h3>
                    <nav classname="nav nav-masthead justify-content-center">
                        <a classname="nav-link active" href="#">Home</a>
                        <a classname="nav-link" href="#">Features</a>
                        <a classname="nav-link" href="#">Contact</a>
                    </nav>
                    </div>
                </header>

                <main role="main" classname="inner cover">
                    <h1 classname="cover-heading">Cover your page.</h1>
                    <p classname="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p classname="lead">
                    <a href="#" classname="btn btn-lg btn-secondary">Learn more</a>
                    </p>
                </main>

                <footer classname="mastfoot mt-auto">
                    <div classname="inner">
                    <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Cover;
