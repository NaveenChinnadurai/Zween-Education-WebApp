import '../../styles/compoStyles/homeStyles/logolist.css'
import img1 from '../../assets/Icons/google.png'
import img2 from '../../assets/Icons/acer.png'
import img3 from '../../assets/Icons/motorola.png'
import img4 from '../../assets/Icons/lenova.png'
import img5 from '../../assets/Icons/microsoft.jpg'
import img6 from '../../assets/Icons/Sony.png'
import img7 from '../../assets/Icons/meta.png'

function LogoDisplay() {
    const LogoList=[
        {
            id:1,
            img:img1
        },
        {
            id:2,
            img:img2
        },
        {
            id:3,
            img:img3
        },
        {
            id:4,
            img:img4
        },
        {
            id:5,
            img:img5
        },
        {
            id:6,
            img:img6
        },
        {
            id:7,
            img:img7
        }

    ]
    return(
        <div className="row  logo-display">
            {
                LogoList.map((e)=>{
                    return(
                        <div className="logo-div" key={e.id}>
                            <img src={e.img} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LogoDisplay;