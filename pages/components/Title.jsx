export default function Title  (props)  {
    const color = props.color == undefined ? "#000" : props.color;
    const align = props.align == undefined ? "text-center" : "text-" + props.align;
    const margin = props.margin == undefined ? "m-3" : props.margin;
    const custom = props.class == undefined ? "" : " " + props.class +" ";
    return (
        <h2 className={"font-weight-normal " + align + " " + margin + custom } style={{color: color}}>{ props.text }</h2>
    );
}



