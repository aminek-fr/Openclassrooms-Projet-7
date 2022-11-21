import '../sass/Layout/_tags.scss'

const Tag = ({tagsLodging}) => {
    return(
        <div className="containerTags">
            {tagsLodging.map(product => {
                return(
                    <div className="tags">
                        <p>{product}</p>
                    </div> 
                )
            })}
        </div>
    )
} 

export default Tag;