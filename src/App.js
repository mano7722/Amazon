import "./App.css";
import Card from "./components/Cards/Card";
import Box from "./components/Box/Box";
import { useEffect, useState } from "react";

let a=[
    {offer:"https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/tops/brands/The_Souled_Store_978x1383._SY530_QL85_FMpng_.png"},
    {offer:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Audio/push/social/MM/ab/hp/1_Tiles_440x540.jpg"},
    {offer:"https://m.media-amazon.com/images/G/31/img23/WA/december/WRS/bif/ONLY_978x1381._SX564_QL85_.jpg"},
    {offer:"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/CLP/BrandTiles/4Dec/WINTER_TOP-DEALS_3.jpg"},
    {offer:"https://images-eu.ssl-images-amazon.com/images/G/31/img23/BAU-Dec/Laptop-Days/LD_Deals_Under_50K_01.jpg"},
    {offer:"https://m.media-amazon.com/images/G/31/img23/CEPC/boat/stone352/978x900._CB576930619_.gif"},
    {offer:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/Cricket/Blackjack/1161860_sports_badminton_mobile-quad-card_420x420_1.jpg"},
    {offer:"https://m.media-amazon.com/images/G/31/img22/Toys/MayART23/Store/9-toyvehicles._CB589330137_.jpg"},
    {offer:"https://m.media-amazon.com/images/G/31/img23/CEPC/kade120/GS945_Launch_Banner._SS900_QL85_.jpg"},
    {offer:"https://m.media-amazon.com/images/I/91atn4SCGrL._AC_UL320_.jpg"},]


let b=[{
    id:1,
    product:"https://m.media-amazon.com/images/I/61ars+VGPVL._AC_UL320_.jpg",
    pdetail:"boAt Newly Launched Airdopes 141 ANC TWS in Ear Earbuds with 32 Db ANC, 42 Hrs Playback, 50Ms Low Latency Beast Mode, Iwp Tech,Quad Mics with Enx,ASAP Charge,USB Type-C Port & Ipx5(Gunmetal Black)",
    starimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoG_DUjpbxexBjen0WdKPsFoOKGpWhV2vvGw&usqp=CAU",
    price:1799,
    discount:"-70% off"},

    {
    id:2,
    product:"https://m.media-amazon.com/images/I/61K8FS335JL._SX522_.jpg",
    pdetail:"boAt Stone 352 Bluetooth Speaker with 10W RMS Stereo Sound, IPX7 Water Resistance, TWS Feature, Up to 12H Total Playtime, Multi-Compatibility Modes and Type-C Charging(Raging Black)",
    starimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoG_DUjpbxexBjen0WdKPsFoOKGpWhV2vvGw&usqp=CAU",
    price:1599,
    discount:"-54% off"},

    {
    id:3,
    product:"https://m.media-amazon.com/images/I/51+e7yrgPpL._SX679_.jpg",
    pdetail:"Noise Buds VS104 Truly Wireless Earbuds with 45H of Playtime, Quad Mic with ENC, Instacharge(10 min=200 min), 13mm Driver,Low Latency, BT v5.2 (Mint Green)",
    starimg:"https://previews.123rf.com/images/barks/barks1712/barks171200371/91718841-five-star-rating-icon-3-5.jpg",
    price:999,
    discount:"-71% off"},

    {
    id:4,
    product:"https://m.media-amazon.com/images/I/61ttQ3luL6L._SX522_.jpg",
    pdetail:"boAt Immortal 141 TWS Gaming Earbuds with Enx Tech,Up to 40 Hrs Playtime,Signature Sound,Beast Mode,Ipx4 Resistance,Iwp Tech,RBG Lights,&USB Type-C Port(Black Sabre)",
    starimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoG_DUjpbxexBjen0WdKPsFoOKGpWhV2vvGw&usqp=CAU",
    price:1499,
    discount:"-57% off"},

    {
    id:5,
    product:"https://m.media-amazon.com/images/I/31nIcqmP0zL._SX300_SY300_QL70_FMwebp_.jpg",
    pdetail:"Boult Audio AirBass Propods X Bluetooth Truly Wireless in Ear Earbuds, 32H Playtime, Fast Charging Type-C, IPX5 Water Resistant, Touch Controls and Voice Assistant (Red)",
    starimg:"https://previews.123rf.com/images/barks/barks1712/barks171200371/91718841-five-star-rating-icon-3-5.jpg",
    price:1499,
    discount:"-75% off"},

    {
    id:6,
    product:"https://m.media-amazon.com/images/I/51ljFpLWptL._SX522_.jpg",
    pdetail:"Noise Buds VS103 Pro Truly Wireless in-Ear Earbuds with ANC(Upto 25dB), 40H Playtime, Quad Mic with ENC, Instacharge(10 min=150 min), Gaming Mode, BT v5.2 (Jet Black)",
    starimg:"https://previews.123rf.com/images/barks/barks1712/barks171200372/92093475-five-star-rating-icon-4-5.jpg",
    price:1999,
    discount:"-64% off"},

    {
    id:7,
    product:"https://m.media-amazon.com/images/I/31ljv4lnPwL._SX300_SY300_QL70_FMwebp_.jpg",
    pdetail:"boAt AAVANTE Bar 3150D 260W 5.1 Channel Bluetooth Soundbar with Dolby Audio, Signature Sound,Wired Subwoofer,Multiple Connectivity,Entertainment Modes(Premium Black)",
    starimg:"https://previews.123rf.com/images/barks/barks1712/barks171200372/92093475-five-star-rating-icon-4-5.jpg",
    price:14999,
    discount:"-40% off"},

    {
    id:8,
    product:"https://m.media-amazon.com/images/I/81hWpe10SzL._SX522_.jpg",
    pdetail:"Boult Audio Ammo True Wireless in Ear Earbuds with 40ms Lowest Latency, 40H Playtime, ENC Mic, 13mm Bass Drivers, Interactive LED, Type-C Fast Charging (10Min=150min) Bluetooth Ear Buds",
    starimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoG_DUjpbxexBjen0WdKPsFoOKGpWhV2vvGw&usqp=CAU",
    price:1399,
    discount:"-72% off"},
    
    {
    id:9,
    product:"https://m.media-amazon.com/images/I/715jcYvT9pL._SX679_.jpg",
    pdetail:"Boult Audio Anchor Bluetooth Wireless Over Ear Headphones with Mic, Active noise Cancellation, 30H Playtime, AUX Option, Balanced Audio 40mm Drivers, Voice Assistant Sweatproof Gaming ANC Headphones",
    starimg:"https://previews.123rf.com/images/barks/barks1712/barks171200372/92093475-five-star-rating-icon-4-5.jpg",
    price:3999,
    discount:"-60% off"},
    
    {
    id:10,
    product:"https://m.media-amazon.com/images/I/612USxX5OkL._SX679_.jpg",
    pdetail:"Boult Audio X30 True Wireless in Ear Earbuds with 40H Playtime, Quad Mic ENC, 45ms Xtreme Low Latency, Made in India, Type-C Fast Charging, 3 Equalizer Modes (Rock, BoomX, Hi-Fi), BT 5.1 (Warm Grey)",
    starimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoG_DUjpbxexBjen0WdKPsFoOKGpWhV2vvGw&usqp=CAU",
    price:1299,
    discount:"-74% off"}];

export default function App(){

    const [id,setId]=useState();
    const [product,setProduct]=useState([""]);
    const [pdetail,setPdetail]=useState("");
    const [starimg,setStarimg]=useState([""]);
    const [price,setPrice]=useState();
    const [discount,setDiscount]=useState("");
    const [edit,setEdit]=useState(false);
    const [updatedate ,setUpdateData]=useState({});
    const [list,setList]=useState(b);
    useEffect(()=>{
        setUpdateData({id,pdetail,product,starimg,price,discount});
    },[id,product,pdetail,starimg,price,discount]);

    function change(e){
        let pri=e.target.value;
        const endrange={
            0:100000000,
            500:1000,
            1001:2000,
            2001:10000000
        }
        setList(b.filter((val)=>(val.price>pri && val.price<endrange[pri])));
    }

    function handleId(e){
        setId(e.target.value);
    }
    function handlePdetail(e){
        setPdetail(e.target.value);
    }
    function handleProduct(e){
         setProduct(e.target.value);
    }
    function handleStarimg(e){
        setStarimg(e.target.value);
    }
    function handlePrice(e){
        setPrice(e.target.value);
    }
    function handleDiscount(e){
        setDiscount(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(edit===true){ 
            console.log(updatedate);
            setList(list.map((val)=>val.id===updatedate.id?updatedate:val));
            setEdit(!edit);
            setId("");
            setPdetail("");
            setProduct("");
            setStarimg("");
            setPrice("");
            setDiscount("");
          
        }
        else{
            let temp={id,pdetail,product,starimg,price,discount};
            setList([...list,temp]);
            setId("");
            setPdetail("");
            setProduct("");
            setStarimg("");
            setPrice("");
            setDiscount("");
        }
        
    }
    
    function del(delid){
        setList(list.filter((val)=>val.id!==delid))
    }

    const handleEdit=id=>{
        setEdit(true);
        let temp=list.filter((val)=>val.id===id);
        setId(temp[0].id);
        setProduct(temp[0].product);
        setPdetail(temp[0].pdetail);
        setStarimg(temp[0].starimg);
        setPrice(temp[0].price);
        setDiscount(temp[0].discount);
    }
    
    return(<>
    <div className="by">
        <Card/>

        <form className="ms-2 mt-3">
            <select className="set" onChange={change}>
                <option value="0">All</option>
                <option value="500">500 to 1000</option>
                <option value="1001">1001 to 2000</option>
                <option value="2001">2001 and above</option>
            </select>
        </form>

        <form className="fm ms-5 mt-4" onSubmit={handleSubmit}>
            <input type="number" placeholder="Id" value={id} onChange={handleId}/>
            <input type="text" placeholder="Image" value={product} onChange={handleProduct} />
            <input type="text" placeholder="Product detail" value={pdetail} onChange={handlePdetail} />
            <input type="text" placeholder="star image" value={starimg} onChange={handleStarimg} />
            <input type="number" placeholder="Price" value={price} onChange={handlePrice}/>
            <input type="text" placeholder="Discount" value={discount} onChange={handleDiscount}/>
            <input type="submit" value={edit?"Update":"submit"}/>
        </form>

        <div className="adiv mt-4">
        
            {list.map((val)=>
            <>
            <div className="div2 mt-4 d-flex justify-content-evenly">
                <div>
                    <button onClick={()=>handleEdit(val.id)}>edit</button>
                    <Box cb={val.product} det={val.pdetail} str={val.starimg} prc={val.price} dis={val.discount} delite={()=>del(val.id)}/>
                </div>

            </div>
        </>)}
        </div>
    </div>
    </>)
}