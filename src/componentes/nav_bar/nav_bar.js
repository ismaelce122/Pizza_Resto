function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-secondary">
            <div class="container-fluid">
                <a class="navbar-brand" href='/'>PIZZA RESTÔ</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href='/'>HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href='/about'>ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href='/contact'>CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar