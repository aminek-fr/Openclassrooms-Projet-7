import '../styles/Layout/_tags.scss'

const Tag = ({tagsLodging}) => {
    return(
        <div className="containerTags">
            {tagsLodging.map((product, index) => {
                return(
                    <div key={index} className="tags">
                        <p>{product}</p>
                    </div> 
                )
            })}
        </div>
    )
} 

export default Tag;