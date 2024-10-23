import { useState } from "react"

const Resume = () => {
    const [cvLang, changeCvLang] = useState({lang: 'english', btnTxt: 'Download CV'})

    const changeLang = (lang: string) => {
        if (lang === 'heb') changeCvLang(() => ({ lang: 'עברית', btnTxt: 'הורד קורות חיים' }))
        else changeCvLang(() => ({ lang: 'english', btnTxt: 'Download CV' }))
    }

    return (
        <section className="resume">
            <div className="lang-btns">
                <button className="heb-btn" onClick={() => changeLang('heb')}>עברית</button>
                <button className="eng-btn" onClick={() => changeLang('eng')}>English</button>
            </div>
            <button className="download-btn">{cvLang.btnTxt}</button>
        </section>
    )
}

export default Resume