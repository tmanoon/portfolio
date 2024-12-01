import { useState } from "react"

const Home = () => {
    const [selectedPic, setSelectedPic] = useState('me')

    function changePic() {
        if(selectedPic === 'me') setSelectedPic('me-edited')
        else setSelectedPic('me')
    }

    return (
        <section className="home">
            <div className="txt-and-img grid">
                <div className="txt grid center">
                    <h1>Shoval Sabag</h1>
                    <h3>Full Stack Developer</h3>
                    <p>From pixel to server, <br />
                        driven by a relentless pursuit of excellence in web development</p>
                </div>
                <img onClick={() => changePic()} src={`/src/assets/pics/${selectedPic}.jpg`} />
            </div>
        </section>
    )
}

export default Home