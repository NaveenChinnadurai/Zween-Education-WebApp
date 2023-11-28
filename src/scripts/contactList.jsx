import { FaLocationDot as Location } from "react-icons/fa6";
import { FaPhone as Phone } from "react-icons/fa";
import { MdOutlineEmail as Email } from "react-icons/md";

const contactList = [
    {
        id: 1,
        icon: <Location />,
        title: 'Address',
        para: '1234 Main Street Bronx, NY 10456  Nearest of New York City.',
        para1: ''
    },
    {
        id: 2,
        icon: <Phone />,
        title: 'Phone',
        para: 'Head Office +880 1234 5555',
        para1: 'Branch office +880 6665 4321'
    },
    {
        id: 3,
        icon: <Email />,
        title: 'E-mail',
        para: 'demo@example.com',
        para1: 'support@example.com'
    }
]

export default contactList
