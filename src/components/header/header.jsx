import ButtonComponent from "../button/button";
import "./header.css";
export default function Header({ subHeading, heading, buttonLabel,onButtonClick }) {
	return (
		<div className="main-header">
			<div>
				<div className="subHeading">{subHeading}</div>
				<div className="heading">{heading}</div>
			</div>
            {buttonLabel && <ButtonComponent  className={'header-button'} variant="contained" value={buttonLabel} onClick={onButtonClick} />}
		</div>
	);
}
