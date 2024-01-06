

const Chip = ({title}:{ title: string})=>{
    return (
        <div className="rounded-3xl flex text-xs justify-center bg-slate-600 text-primary px-8 py-1 mx-2">
            <p>{title}</p>
        </div>
    )
}

export default Chip