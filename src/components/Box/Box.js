import "./Box.css";
export default function Box({id,cb,det,prc,str,dis,delite}){
    return(<>
        <div className="oc mt-2 card">
            <div className="ibdiv">
                <h4 id="fon">{id}</h4>
                <button className="btn button" onClick={delite}>x</button>
            </div>
            <div>
                <img className="img1 card-img-top" src={cb}></img>
            </div>
         
            <div className="ci card-body">
                <div className="hc1">
                    <p className="det card-text">{det}</p>
                    <img className="str" src={str}/>
                    <div className="pd d-flex mt-3 justify-content-evenly">
                        <p className="prc col-1">₹</p>
                        <a href="#" className="prc col-4 nav-link">{prc}</a>
                        <p className="dis col-7">{dis}</p>
                    </div>
                    <p className="s">Inclusive of all taxes EMI starts at ₹87.<br/>
                    No Cost EMI available EMI options </p>
                </div>
            </div>
        </div>
    </>)
}