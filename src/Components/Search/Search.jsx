import React , {useState} from 'react';
import "./Search.css"


const Search = () => {


    const [loc , setloc] = useState(0);
    const [exp , setexp] = useState("Experience");
    const [locitems , setlocitems] = useState(false);
    const [expitems , setexpitems] = useState(false);

    const changelocation = () => {
        setexpitems(false);
        setlocitems(!locitems);
    }

    const check = (e) => {
        if(e.target.checked){
            const l = loc+1;
            setloc(l);
        }
        else{
            const l = loc-1;
            setloc(l);
        }

    }

    const changeexperience = () => {
        setlocitems(false);
        setexpitems(!expitems);
    }


    const experiencelabel = (e) => {
        setexp(e.target.innerText);

    }

   

  return (
    <div className='search-con'>
        <p>Inspiring Youths To Get Hired</p>
        <div className='searching'>
            
            <div className='search'>
                <input id="q" type="text" name=""  placeholder='Search Jobs' />
                <i htmlFor="q" className="fa-solid fa-magnifying-glass" style={{color: "#ccd2db"}}></i>
            </div>
            <div className='locations' >
                {
                    loc == 0 ? "Locations" : <>{loc} selected</>

                }
                <i className="fa-solid fa-angle-down" onClick={changelocation} style={{color:"gray"}}></i>
                {
                    locitems && <>
                                    <div className='location-items '>
                                        <i className="fa-solid fa-caret-up fa-xl up-arrow-location"  style={{color:"rgb(221,221,221"}}></i>
                                        <div className='location-search'>
                                            <i className="fa-solid fa-magnifying-glass" style={{color: "#ccd2db"}}></i>
                                            <input type="text" name="" id="" placeholder='Search Jobs Locations...' />
                                        </div>
                                        <div className='location-checkboxes'>
                                            <input type="checkbox" name='cities' onChange={check}/><label htmlFor="">Delhi NCR</label>
                                        </div>
                                        <div className='location-checkboxes'>
                                            <input type="checkbox" name='cities' onChange={check}/><label htmlFor="">Ahmedabad</label>
                                        </div>
                                        <div className='location-checkboxes'>
                                            <input type="checkbox" name='cities' onChange={check}/><label htmlFor="">Andhra Pradesh</label>
                                        </div>
                                        <div className='location-checkboxes'>
                                            <input type="checkbox" name='cities' onChange={check}/><label htmlFor="">Bhubaneshwar</label>
                                        </div>
                                        <div className='location-checkboxes'>
                                            <input type="checkbox" name='cities' onChange={check}/><label htmlFor="">Chandigarh</label>
                                        </div>
                                        <div className='location-checkboxes'>
                                            <input type="checkbox" name='cities' onChange={check}/><label htmlFor="">Gandhinagar</label>
                                        </div>
                                        <div className='location-checkboxes'>
                                            <input type="checkbox" name='cities' onChange={check}/><label htmlFor="">Jammu & Kashmir</label>
                                        </div>
                                        
                                    </div>
                                </>
                }  
            </div>
           
            <div className='experience ' >
                {
                    exp

                }
                <i className="fa-solid fa-angle-down" onClick={changeexperience} style={{color:"gray"}}></i>
                {
                    expitems && <>
                                    <div className='experience-items '>
                                    <i className="fa-solid fa-caret-up fa-xl up-arrow-exp"   style={{color:"rgb(221,221,221"}}></i>
                                        <div className='exp-box'>
                                            Any Experience Level
                                        </div>
                                        <div onClick={experiencelabel} className='exp-box'>
                                            0-1 Yrs
                                        </div>
                                        <div onClick={experiencelabel} className='exp-box'>
                                            1-3 Yrs
                                        </div>
                                        <div onClick={experiencelabel} className='exp-box'>
                                            6-7 Yrs
                                        </div>
                                        <div onClick={experiencelabel} className='exp-box'>
                                            8-9 Yrs
                                        </div>
                                        
                                        
                                        
                                        
                                    </div>
                                </>
                }
            </div>

            <div className='sea-btn'>
                <button >Go</button>
            </div>
        </div>
    </div>
  )
}

export default Search;