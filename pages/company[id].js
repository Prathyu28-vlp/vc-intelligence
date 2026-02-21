import {useRouter} from "next/router";
import companies from "../../data/companies.json";
import {useState} from "react";
import Sidebar from "../../components/Sidebar";

export default function Profile(){

const router = useRouter();

const {id} = router.query;

const company = companies.find(c=>c.id===id);

const [data,setData]=useState(null);

async function enrich(){

const res = await fetch("/api/enrich",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

url:company.website

})

});

const result = await res.json();

setData(result);

}

if(!company) return "Loading";

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={{padding:"20px"}}>

<h1>{company.name}</h1>

<button onClick={enrich}>
Enrich
</button>

{data && (

<div>

<h3>Summary</h3>

<p>{data.summary}</p>

<h3>Keywords</h3>

<p>{data.keywords.join(",")}</p>

<h3>Source</h3>

<p>{data.source}</p>

</div>

)}

</div>
</div>
)
}