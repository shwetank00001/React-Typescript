import { useState, useEffect } from "react"



const FormData = () => {

    const url = "https://68c8eadbceef5a150f62ae67.mockapi.io/api/userform/userdata";
    const [fetchedData, setFetchedData] = useState([]);


    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');

    useEffect(() => {
        async function fetchData(){
            try {
                const data = await fetch(url);
                const response = await data.json();
                setFetchedData(response);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, []);

    console.log(fetchedData);

    async function handleSubmit(e:React.FormEvent){
        e.preventDefault();

        const newUser = {
            fName : fName,
            lName: lName
        }
        
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })

        const data = await res.json();

        setFetchedData(function(item){
            return [...item, data]
        })
    }


    const ele = fetchedData.map((item:any) => {
        return (
            <div>
                <h1>{item.fName}</h1>
                <h3>{item.lName}</h3>
                <p>{item.gender}</p>
            </div>
        )
    })

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name:</label>
            <input id="fname" type="text" placeholder="first name" value= {fName} onChange={(e) => setFname(e.target.value)} />

            <br />

            <label htmlFor="lname">Last Name:</label>
            <input id="lname" type="text" placeholder="last name" value={lName} onChange={(e) => setLname(e.target.value)} />

            <br />

            <label>Male</label>
            <input type="radio" value="male"/>

            <label>Female</label>
            <input type="radio" value="female"/>
            <button type="submit">Submit</button>
        </form>
        
        <div>
            {ele}
        </div>
    </div>
  )
}

export default FormData

