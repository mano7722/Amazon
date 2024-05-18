import "./Search.css";
export default function Search(){
    return(<>
    <div className="d-flex sdv">
        <button className="btn abn">Amazon Fashion</button>
        <input type="text" id="tt" placeholder="Search Amazon.in"/>
        <button className="btn b"><img className="imag" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQql0NY7tSohgJfrXrdHRI_bd9iH63E-neXfQ&usqp=CAU"/></button>
    </div>
    </>)
}