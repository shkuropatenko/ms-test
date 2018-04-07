import React, { Component } from 'react';
import logoImgFooter from '../images/footer-logo.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
      	<div className="footer-holder">
      		<div className="text">
      			<p>365 Freebies. 007/365</p>
      		</div>
			<div className="footer-logo">
				<a href="#">
					<img src={logoImgFooter} alt="UX NAVY" />
				</a>
			</div>
			<div className="link">
				<a href="mailto:&#064;&#097;&#110;&#097;&#107;&#097;&#114;&#101;&#110;&#097;&#114;&#116;">&#064;&#097;&#110;&#097;&#107;&#097;&#114;&#101;&#110;&#097;&#114;&#116;</a>
			</div>
      	</div>
      </footer>
    );
  }
}

export default Footer;