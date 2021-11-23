import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import React from 'react';

function Header() {
	return (
		<div className="Header">
			<Box >
				<AppBar position="static">
					<Toolbar>
						<Typography
							variant="h6"
							compornent="div"
							sx={{ flexGrow: 1 }}>
							BC-ROBOP Cloud
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	)
}

export default Header;