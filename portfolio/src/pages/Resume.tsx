import { useState } from "react"

const Resume = () => {
    const [cvLang, changeCvLang] = useState({ lang: 'english', btnTxt: 'Download CV' })
    const [filePath, setFilePath] = useState('/src/assets/shova-sabag-cv.pdf')
    const changeLang = (lang: string) => {
        if (lang === 'heb') changeCvLang(() => ({ lang: 'hebrew', btnTxt: 'הורד קורות חיים' }))
        else changeCvLang(() => ({ lang: 'english', btnTxt: 'Download CV' }))
    }
    const downloadCV = () => {
        if (cvLang.lang === 'hebrew') setFilePath('/src/assets/cv-files/shoval-sabag-cv-heb.pdf')
        else if (filePath !== '/src/assets/shoval-sabag-cv.pdf') setFilePath('/src/assets/cv-files/shoval-sabag-cv.pdf')
    }

    return (
        <section className="resume flex column align-center">
            <div className="lang-btns flex">
                <button className="heb-btn" onClick={() => changeLang('heb')}>עברית</button>
                <button className="eng-btn" onClick={() => changeLang('eng')}>English</button>
            </div>
            <img src={`/src/assets/pics/cv/cv-${cvLang.lang}.png`}
                alt={cvLang.lang === 'hebrew' ? 'קורות החיים של שובל סבג' : `Shoval Sabag's resume`}
                title={cvLang.lang === 'hebrew' ? 'קורות החיים של שובל סבג' : `Shoval Sabag's resume`}
            />
            <button className="download-btn">
                <a 
                href={filePath} 
                download={cvLang.lang === 'hebrew' ? 'shoval-sabag-cv-heb.pdf' : 'shoval-sabag-cv.pdf'} 
                onClick={downloadCV}
                >{cvLang.btnTxt}</a>
            </button>
        </section>
    )
}

export default Resume