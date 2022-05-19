import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        const konfig = {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
              }
        }
        const api = async (url)=>{
            let {data} = await axios.get(url, konfig)
            setUsers(data)
        }
        api('http://localhost:9000/users')

        return ()=>{}
    }, [users])

    return ( 
        <>
            {users && users.map((item, i)=>{
                return (
                    <div key={i}>
                        <h2>{item.name}</h2>
                    </div>
                )
            })}
        </>
     );
}
 
export default Home;