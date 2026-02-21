import companies from "../data/companies.json";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

export default function Companies(){

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={{padding:"20px"}}>

<h1>Companies</h1>

<table>

<thead>

<tr>
<th>Name</th>
<th>Industry</th>
</tr>

</thead>

<tbody>

{companies.map(company=>(
<tr key={company.id}>

<td>

<Link href={`/company/${company.id}`}>
{company.name}
</Link>

</td>

<td>{company.industry}</td>

</tr>
))}

</tbody>

</table>

</div>
</div>
)
}