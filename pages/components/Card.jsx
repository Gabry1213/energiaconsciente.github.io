export default function Card (title, subtitle, img) {
    return <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={img} className="card-image-bg"/>
                <div className="card-body">
                    <h4 className="text-center">{{ title }}</h4>
                    <p className="card-text">
                        {{ subtitle }}
                    </p>
                </div>
            </div>
        </div>;
}