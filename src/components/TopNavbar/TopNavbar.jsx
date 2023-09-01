import React from "react";
import {
	HI,
	SIGN_OUT
} from '../../utils/cms'
import vinyanLogo from "../../assets/images/comlogo.png";
import "./TopNavbar.css";

const TopNavbar = ({ isLogin }) => {
	return (
		<div className={"top-nav-root"+(isLogin?"hide":"")}>
			<img className="logo" src={vinyanLogo} alt="vinayan" />
			{!isLogin && (
				<div className="align-center">
					<div className="profile-image"></div>
					<p>
						{HI} Admin | <span>{SIGN_OUT}</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default TopNavbar;
