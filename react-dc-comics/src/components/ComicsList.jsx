import comics from "./comics"
import ComicsCards from "./ComicsCard"

const ComicsList = () => {

    // funzione di rendering delle cards
    const renderComicsCards = comics.map((comic) => (

        <ComicsCards
            key={comic.id}
            title={comic.title}
            thumb={comic.thumb}
        />
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