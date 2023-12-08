import SocialNetworks from "./SocialNetworks"

import Avatar from "../img/eu.jpeg"

import InformationContainer from "./InformationContainer"
import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return ( <aside id="sidebar">
    <img src={Avatar} alt="Julio Cesar Duque" />
    <p className="title">Estagiario</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="" className="btn">Download Curriculo</a>
  </aside>
  )
}

export default Sidebar