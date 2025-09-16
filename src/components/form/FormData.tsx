import { useState, useEffect } from "react"



const FormData = () => {

    const url = "https://68c8eadbceef5a150f62ae67.mockapi.io/api/userform/userdata";
    const [fetchedData, setFetchedData] = useState([]);


    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    const [userData, setUserData] = useState()

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

    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        setUserData(function(item:string){
            return {
                ...item,
                fName: fname,
                lName: lname
            }
        });

        console.log("userData", userData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name:</label>
            <input id="fname" type="text" placeholder="first name" value= {fname} onChange={(e) => setFname(e.target.value)} />

            <br />

            <label htmlFor="lname">Last Name:</label>
            <input id="lname" type="text" placeholder="last name" value={lname} onChange={(e) => setLname(e.target.value)} />

            <br />

            <label>Male</label>
            <input type="radio" value="male"/>

            <label>Female</label>
            <input type="radio" value="female"/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormData