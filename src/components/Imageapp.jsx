import React, { useState } from "react";
import axios from 'axios';

import "./Imageapp.css";
// https://pixabay.com/api/?key=37248597-928aeda6430d5b98d87a18258&q=yellow+flowers&image_type=photo
function Imageapp(params) {    
        const [searchQuery, setSearchQuery] = useState('');
        const [searchResult, setSearchResults] = useState([]);
        const[loading,setLoading] = useState(false);
    const handleSearch =  async() =>   
             { 
                setLoading(true);
                try {
                        
                        const response = await axios.get(`https://pixabay.com/api/?key=37248597-928aeda6430d5b98d87a18258&q=${searchQuery}`);
                        setSearchResults(response.data.hits);
                }
                catch(error) {
                        console.log(error);   
                }
                setLoading(false);
        }                
 
            return (
                <div>          
        <div className="container">    
        <div className="img-search">

        <h1 className="img-text">Search Image..</h1> 
                        <input 
                        className="img-input"
                        type="text" 
                        placeholder="search"
                        onChange={(event) => setSearchQuery(event.target.value)}                               
                        />
                        <button className='LandingBtn' onClick={handleSearch}>Search</button>
        </div>

        {loading ? (<div>Loading...</div>) : (
                <div>
                               <div className="img-results">
                               {searchResult.map((data) => (
                                       <div key = {data.id} 
                                       className="img-item-container"
                                       >
                                                <img 
                                                  src={data.previewURL}
                                                  alt={data.tags}
                                                  className="img-item"
                                                  />

                                           </div>     
        ))}
                                </div>         
                        </div>

) }
         </div>
</div>
)
        
}

export default Imageapp;
