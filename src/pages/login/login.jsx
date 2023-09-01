import { useState, useEffect } from "react";
import TextFieldInput from "../../components/customInput/textInput";
import ButtonComponent from "../../components/button/button";
import loginImage from "../../assets/images/login_banner.png";
import {
	USER_ID,
	PASSWORD,
	LOGIN,
	WELCOME_TEXT,
	ACTION_TEXT,
} from "../../utils/cms";
import "./login.css";

export default function Login({setIsLogin}) {
	const [values, setValues] = useState();

	useEffect(() => {
		setIsLogin(true);
	}, []);

	return (
		<div className="page-content login">
			{/* <div className="login-header">
				<div className="welcome-text">{WELCOME_TEXT}</div>
				<div className="action-text">{ACTION_TEXT}</div>
			</div> */}
			<div className="page-body-content">
				<div className="login-form flex flex-column justify-center align-center">
					<div className="userId-input">
						<TextFieldInput
							label={USER_ID}
							name={"userId"}
							values={values}
							setValues={setValues}
						/>
					</div>
					<div className="password-input">
						<TextFieldInput
							label={PASSWORD}
							name={"password"}
							type="password"
							values={values}
							setValues={setValues}
						/>
					</div>
					<ButtonComponent
						className="save-button"
						variant="contained"
						value={LOGIN}
					/>
				</div>
				<img src={loginImage} alt="" />
			</div>
		</div>
	);
}
