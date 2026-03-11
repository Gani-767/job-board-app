function GigModal({gig,close}){

if(!gig) return null

return(

<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

<div className="bg-white p-6 rounded w-96">

<button
onClick={close}
className="float-right"
>
X
</button>

<h2 className="text-xl font-bold">{gig.title}</h2>

<p className="mt-2">{gig.description}</p>

<p className="mt-2">Client: {gig.clientName}</p>

<p>Location: {gig.location}</p>

<p>Budget: ₹{gig.budget}</p>

</div>

</div>

)

}

export default GigModal