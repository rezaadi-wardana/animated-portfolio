import { motion } from "framer-motion"
import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"


const Navbar = () => {
    return (
        <div className="navbar">
          {/* Sidebar */}
          <Sidebar/>
          <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Reza Dev</motion.span>
            <div className="social">
                <a href="https://www.facebook.com/share/8FaxozLS7rWLEwB6/?mibextid=qi2Omg" target="blank"><img src="./facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/rezaadi_wardana?igsh=cHB4bWV3a3c1eHY=" target="blank"><img src="./instagram.png" alt="" /></a>
                <a href="https://youtube.com/@rezaadi_wardana?si=RjxSVL3btckLGQN6" target="blank"><img src="./youtube.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/muhammad-reza-adi-wardana-87b791282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><img src="./linkedin.png" alt="" /></a>
            </div>
          </div>
        </div>
      )
}

export default Navbar
