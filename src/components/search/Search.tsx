import React, { useEffect, useState, type BaseSyntheticEvent } from 'react'

const Search = () => {

    const [valueSearch, setVal] = useState('')
    const url = "https://dummyjson.com/carts";

    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetch(url);
                const resp = await data.json();
                setFetchedData(resp.carts);
                console.log("fetchedData", fetchedData)
            } catch (error) {
                console.log("Error is", error)
            }
        }
        getData()
    }, [])


    console.log("fetchedData", fetchedData)
    const allData = fetchedData || [];



        let ele = allData.map(function(item:any){
        return (
            <div key={item.id}>
                <h3>{item.title}</h3>
            </div>
        )
    })



    function handleSubmit(e:BaseSyntheticEvent){
        e.preventDefault();
        const searchedData = fetchedData.filter((item) => {
            return item.title.toLowerCase().includes((valueSearch));
        });
        setFetchedData(searchedData)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='Search for item...' value={valueSearch} onChange={e => setVal(e.target.value)}/>
            <button type='submit'>Search</button>
        </form>

        <div>
            {ele}
        </div>
    </div>
  )
}

export default Search