
import './Navbar.css'; 
import main_logo from '../../assets/main-logo.png'; 

const Navbar = () => {
    return (
        <header className="header">
            <div className="navbar-container">
                <div className="logo">
                    <img src={main_logo} alt="Bass Travels Logo" />
                    
                </div>
                <div className="features">
                    <div className="feature">
                        <span className="checkmark">✔</span>
                        <div>
                          
                              <strong>    Corporate/Family Tours</strong>
                         
                             
                            <p>Comfort Travel Assured</p>
                        </div>
                    </div>
                    <div className="feature">
                        <span className="checkmark">✔</span>
                        <div>
                            <strong>Temple & Wedding Tours</strong>
                            <p>Organized Easily</p>
                        </div>
                    </div>
                    <div className="feature">
                        <span className="checkmark">✔</span>
                        <div>
                            <strong>Educational Tours</strong>
                            <p>Arranged Instantly</p>
                        </div>
                    </div>
                </div>
                <div className="book-now">
                    <button className="book-btn">BOOK NOW</button>
                </div>
                
            </div>
           
        </header>
    );
};

export default Navbar;

