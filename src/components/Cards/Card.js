import "./Card.css";
import Logo from "../Logo/Logo";
import Deliadd from "../DAddress/Deliadd";
import Search from "../Searches/Search";
import Cart from "../Carts/Cart";
import Acctlist from "../Account/Acctlist";
import Rtnord from "../Returns/Rtnord";
import Lang from "../Lang/Lang";
export default function Card(){
    return(<>
    <div className="cad justify-content-evenly">
        <Logo/>
        <Deliadd/>
        <Search/>
        <Lang/>
        <Acctlist/>
        <Rtnord/>
        <Cart/>
    </div>
    </>)
}