function SortDropdown({sortBy,setSortBy}){

return(

<select
value={sortBy}
onChange={(e)=>setSortBy(e.target.value)}
className="border p-2 rounded"
>

<option value="newest">Newest First</option>
<option value="oldest">Oldest First</option>
<option value="highBudget">Highest Budget</option>
<option value="lowBudget">Lowest Budget</option>

</select>

)

}

export default SortDropdown