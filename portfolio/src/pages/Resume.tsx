import { useState } from "react"

const Resume = () => {
    const [cvLang, changeCvLang] = useState({ lang: 'english', btnTxt: 'Download CV' })

    const changeLang = (lang: string) => {
        if (lang === 'heb') changeCvLang(() => ({ lang: 'hebrew', btnTxt: 'הורד קורות חיים' }))
        else changeCvLang(() => ({ lang: 'english', btnTxt: 'Download CV' }))
    }

    return (
        <section className="resume flex column center">
            <div className="lang-btns">
                <button className="heb-btn" onClick={() => changeLang('heb')}>עברית</button>
                <button className="eng-btn" onClick={() => changeLang('eng')}>English</button>
            </div>
            <img src={`/src/assets/pics/cv-${cvLang.lang}.png`}
                alt={cvLang.lang === 'hebrew' ? 'קורות החיים של שובל סבג' : `Shoval Sabag's resume`}
                title={cvLang.lang === 'hebrew' ? 'קורות החיים של שובל סבג' : `Shoval Sabag's resume`}
            />
            <button className="download-btn">{cvLang.btnTxt}</button>
        </section>
    )
}

export default Resume