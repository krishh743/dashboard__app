import { Button } from '@mui/material';
import './button.css'

export default function ButtonComponent({ className, value, variant, onClick, disabled, component }) {
	return (
		<Button className={className} variant={variant} onClick={onClick} disabled={disabled}>
			{value || component()}
		</Button>
	);
}
