function SearchBar({search,setSearch}){

return(

<div className="flex gap-2 mb-4">

<input
type="text"
placeholder="Search gigs..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="border p-2 rounded w-full"
/>

{search && (

<button
onClick={()=>setSearch("")}
className="bg-gray-200 px-3 rounded"
>
X
</button>

)}

</div>

)

}

export default SearchBar