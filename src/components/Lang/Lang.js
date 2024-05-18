import "./Lang.css";
export default function Lang(){
    return(<>
    <div className="lang">
        <img className="car" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png"/>
        <select className="sel">
            <option>English</option>
            <option>Tamil</option>
            <option>Telugu</option>
            <option>Hindhi</option>
            <option>Malayalam</option>
        </select>
    </div>
    </>)
}