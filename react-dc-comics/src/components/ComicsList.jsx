import comics from "./comics"


const ComicsList = () => {

    // funzione di rendering delle cards
    const renderComicsCards = comics.map((comic) => (
        <div className="prod-card" key={comic.id}>
            <img src={comic.thumb} />
            <h3>{comic.title}</h3>
        </div>

    ))


    return (
        <div className="container-main">
            <div className="container-content-main card-container">

                {renderComicsCards}

            </div>
        </div>
    )
}

export default ComicsList