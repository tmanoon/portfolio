import { useState } from "react"

const Home = () => {

    const [selectedPic, setSelectedPic] = useState(1)

    const changePic = () => {
        if (selectedPic === 7) setSelectedPic(1)
        else setSelectedPic(selectedPic + 1)
    }

    return (
        <section className="home">
            <div className="txt-and-img grid justify-center">
                <div className="txt grid justify-center">
                    <h1>Shoval Sabag</h1>
                    <h3>Full Stack Developer</h3>
                    <p>From pixel to server, <br />
                        driven by a relentless pursuit of excellence in Web Development</p>
                </div>
                <div className="pics">
                    <span>🪺</span>
                    <img onClick={() => changePic()} src={`/src/assets/pics/me/${selectedPic}.png`} />
                </div>
            </div>
        </section>
    )
}

export default Home