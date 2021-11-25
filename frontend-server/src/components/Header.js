import { AppBar, Toolbar, Box, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react';

function Header() {
	return (
		<div className="Header">
			<Box>
				<AppBar position="static">
					<Toolbar>

						<IconButton
							size="large"
							edge="start"
							color="inherit"
							area-label="menu"
							sx={{ mr: 2 }}>
								<MenuIcon />
						</IconButton>

						<Typography
							variant="h4"
							compornent="div"
							sx={{ flexGrow: 1 }}>
						</Typography>

						<Button color="inherit">Login</Button>

					</Toolbar>
				</AppBar>
			</Box>
		</div>
	)
}

export default Header;