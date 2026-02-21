import Link from "next/link";

export default function Sidebar() {
  return (
    <div style={{width:"200px",padding:"20px",background:"#111",color:"#fff"}}>
      <h2>VC Scout</h2>

      <Link href="/companies">Companies</Link><br/>
      <Link href="/lists">Lists</Link>
    </div>
  );
}