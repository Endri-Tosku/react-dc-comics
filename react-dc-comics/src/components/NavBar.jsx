const NavBar = () => {

    const linksNav = [
        { id: 1, text: "CHARACTERS", url: "#", current: false },
    ]


    return (
        <div className="container-header">
            <figure>
                <img src="/dc-logo.png" alt="" />
            </figure>
            <nav>
                <ul>
                    <li><a href="">CHARACTERS</a></li>
                    <li><a href="" className="active">COMICS</a></li>
                    <li><a href="">MOVIES</a></li>
                    <li><a href="">TV</a></li>
                    <li><a href="">GAMES</a></li>
                    <li><a href="">COLLECTIBLES</a></li>
                    <li><a href="">VIDEOS</a></li>
                    <li><a href="">FANS</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">SHOP</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar