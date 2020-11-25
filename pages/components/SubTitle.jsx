export default function SubTitle  (props)  {
    const customClass = props.class != undefined ? props.class : " text-muted text-center";
    return (
        <p className={"font-weight-normal lead  " + customClass}>{ props.text }</p>
    );
}
