import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX} from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:8000/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    },[]);

    const [filterData, setFilterData] = useState([]);
    const [wordEntered, setWordEntered] = useState ("");

    const handleFilter = (event) => {
       const searchWord = event.target.value;
       setWordEntered(searchWord);
       const newFilter = products.filter((value) => {
            return value.Description.toLowerCase().includes(searchWord.toLowerCase())
       });

       if (searchWord === ""){
            setFilterData([]);
       }else {
            setFilterData(newFilter);
            }
        };

        const clearInput = () => {
            setFilterData([]);
            setWordEntered("");
        }
    

  return (
    <div className="search">
      <div className="seachInputs">
        <div>
            <input type="text" value={wordEntered} placeholder="Search a product" onChange={handleFilter}/>
            {wordEntered.length === 0 ? <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-magnifying-glass" /> : <FontAwesomeIcon icon={faX} className='fa-delete' onClick={clearInput} id="clearBtn"/>}
        </div>
      </div>
      {filterData.length !== 0 && (
      <div className='dataResult'>
        {filterData.slice(0, 8).map((item) => {
            return (
                <div className='dataItemContainer'>
                    <div className='dataItem' >{ item.Description}</div>
                </div>
            )

        })}
      </div>
      )}
    </div>
  )
}

export default SearchBar