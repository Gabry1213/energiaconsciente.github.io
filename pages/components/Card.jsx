import SubTitle from "./SubTitle";





export default function Card (props) {
    return <div id="energia" className="col-md-4">
                <div className="mb-4 shadow-sm bcard-card-2">
                    <img src={props.img} className="img img-responsive"/>
                    <div className="bcard-name">
                        <p>{ props.title }</p>
                        {/* <SubTitle text={props.title}/> */}
                    </div>
                </div>
            </div>;
}