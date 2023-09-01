/*eslint-disable react-hooks/exhaustive-deps*/import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Loader.css";
import { useState } from "react";
import ReactDOM from "react-dom";


function CircularProgressWithLabel(props) {
	return (
		<Box sx={{ position: "relative", display: "inline-flex" }}>
			<CircularProgress variant="determinate" {...props} size={80} />
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: "absolute",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography
					variant="caption"
					component="div"
					color="text.secondary"
				>
					{`${Math.round(props.value)}%`}
				</Typography>
			</Box>
		</Box>
	);
}

const Loader = ({ isLoading, interval }) => {
	const [progress, setProgress] = React.useState(5);
	const [timerReference, setTimerReference] = useState();
	useEffect(() => {
		setProgress(5);
		if (isLoading) {
			const timer = setInterval(() => {
				setProgress((prevProgress) =>
					prevProgress >= 90 ? prevProgress : prevProgress + 10
				);
			}, interval || 800);
			setTimerReference(timerReference);
			return () => {
				clearInterval(timer);
			};
		} else {
			setProgress(5);
			timerReference && clearInterval(timerReference);
		}
	}, [isLoading]);

	return  ReactDOM.createPortal(
		<>
			{isLoading && (
				<div className="loader-root-cont">
					<CircularProgressWithLabel value={progress} />
				</div>
			)}
		</> , document.getElementById("loader")
	)
};

export default Loader;
