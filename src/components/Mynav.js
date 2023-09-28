import { Link } from 'react-router-dom';




const Mynav = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-dark navbar-expand-sm fixed-top" style={{backgroundColor: 'darkblue'}}>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"> </span>
            </button>
            {/* <a className="navbar-brand mr-auto" href="#">    */}
           


           <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link to="/" className="nav-link"> <span className="fa fa-home fa-lg"></span> Home  </Link>
                        {/* <a className="nav-link" href="/"><span className="fa fa-home fa-lg"></span> Home</a> */}
                    </li>
                    <li className="nav-item active">
                        <Link to="/aboutus" className="nav-link"> <span className="fa fa-list fa-lg"></span> AboutUs  </Link>
                        {/* <a className="nav-link" href="/aboutus"><span className="fa fa-list fa-lg"></span>About Us</a> */}
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to='/products'>  <span className="fa fa-info fa-lg"></span>
                             Products
                             </Link>
                        {/* <a className="nav-link" href="/products">
                            <span className="fa fa-info fa-lg"></span>
                             Products</a> */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/contactus'>  <span className="fa fa-address-card fa-lg"></span>
                             Contact Us </Link>
                        {/* <a className="nav-link" href="/contactus">
                            <span className="fa fa-address-card fa-lg"></span>
                             Contact Us
                        </a> */}
                    </li>
                 </ul>    
               
               
                </div>
               
            </nav>
        </div>




     );
}
 
export default Mynav;