
import { Button } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";

function UploadButton() {
	return (
		<div>
			<Box sx={{m: 2}}>
				<Button
					variant="contained"
					disabled={true}>
					Upload
				</Button>
			</Box>
		</div>
	)
}

export default UploadButton;