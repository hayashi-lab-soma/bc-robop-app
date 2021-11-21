import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import React from 'react';

function Header() {
	return(
		<div className="Header">
		<Box >
			<AppBar position="staic">
				<Toolbar>
					{/* <IconButton
						size="large">
						<MenuIcon />
					</IconButton> */}
					<Typography variant="h6" compornent="div" sx={{flexGrow: 1}}>
						BC-ROBOP Cloud
					</Typography>
					{/* <Button color="inherit">Login</Button> */}
				</Toolbar>
			</AppBar>
		</Box>
	</div>
	)
}

export default Header;