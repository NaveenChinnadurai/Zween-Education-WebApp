import '../../styles/compoStyles/homeStyles/logolist.css'
import img1 from '../../assets/Icons/google.png'
import img2 from '../../assets/Icons/acer.png'
import img3 from '../../assets/Icons/motorola.png'
import img4 from '../../assets/Icons/lenova.png'
import img5 from '../../assets/Icons/microsoft.jpg'
import img6 from '../../assets/Icons/Sony.png'
import img7 from '../../assets/Icons/meta.png'

function LogoDisplay() {
    const LogoList = [img1, img2, img3, img4, img5, img6, img7]
    return (
        <div className="logo-display">
            {
                LogoList.map((e, i) => {
                    return (
                        <div className="logo-div" key={i}>
                            <img src={e} alt="logo-img" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LogoDisplay;