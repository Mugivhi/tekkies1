import "./App.css";
import pic  from './components/sideview.png';
import pic2 from './components/side2.png';
import pic3 from './components/topv.png';
import pic4 from './components/backview.png'
function Leftisite(){
    return(
        <div className='second'>
            <div className='text2'>
                NIKE AIRMAX 90
                <br/>
                <h5>ultra essentials</h5>
            </div>
            <div className='toptekkie'>
            <img src={pic}></img>
            </div>
            <div className='dowtekkies'>
            <img src={pic2}></img>
            <img src={pic3}></img>
            <img src= {pic4}></img>
            </div>
            <div className="button-add">
                <button>
                    ADD TO BASKET
                </button>
            </div>
           
        </div>
    )
}


export default Leftisite;