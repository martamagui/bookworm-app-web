
export function TopBookCard({id, reviews}){
    const link = `${reviews[0].image}`
    return (
    <div>
        <p>{id}</p>
        <img src={link} alt={id} />
    </div>)
}