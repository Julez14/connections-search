import React from "react";

function Footer(){

    return(
        <div>
            <footer>
                <div class="footer-container">
                    
                    <div class="footer-section">
                        <h3>Connections-search</h3>
                        <p>Helping you find a sense of community</p>
                    </div>

           
                    <div class="footer-section">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Email: connections-search@gmail.com</li>
                            <li>Phone: +123 456 7890</li>
                            <li>Address: 123 Main Street, City, Country</li>
                    </ul>
                </div>

            
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-icons">
                        <a href="#"><img  alt="Facebook"/></a>
                        <a href="#"><img src="twitter-icon.png" alt="Twitter"/></a>
                        <a href="#"><img src="instagram-icon.png" alt="Instagram"/></a>
                        <a href="#"><img src="linkedin-icon.png" alt="LinkedIn"/></a>
                    </div>
                </div>
            </div>

        <div class="footer-bottom">
            <p>&copy; 2024 MacroHard. All Rights Reserved.</p>
        </div>
    </footer>
        </div>
    )
}
export default Footer