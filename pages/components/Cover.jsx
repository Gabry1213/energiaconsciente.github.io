import './../../style/cover.module.css'
import Title from './Title';

const jumbotronBg = {
    background: "rgb(34,66,142)",
    background: "linear-gradient(90deg, rgba(34,66,142,1) 0%, rgba(57,92,159,1) 100%)"
}

export default function Cover () {
    return (
        <div className="jumbotron p-4 p-md-5 mt-5 text-white rounded" style={jumbotronBg} >
            <div className="row flex">
                <div className="col-md-6 col-sm-12 px-0">
                    <Title text="Energia" margin="" align="left" color="white"/>
                    <p>Energia é a capacidade de algo de realizar trabalho, ou seja, gerar força num determinado corpo, substância ou sistema físico</p>
                    <button type="button" className="btn btn-warning">Conhecer mais</button>
                </div>
                <div className="col-md-6  col-sm-12 px-0 text-center">
                    <img src="./assets/img/marginalia-123.png" className="mr-2" style={{width: "120px"}} />
                </div>
            </div>
        </div>
    );
}   
