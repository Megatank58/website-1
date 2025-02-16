import VercelLogo from '@assets/VercelLogo';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@routing/Link';
import { GithubUrl, NpmOrgUrl, ServerURL, VercelUrl } from '@utils/constants';
import React, { memo } from 'react';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			padding: '10px 0px',
			background: theme.palette.secondary.main,
			marginTop: 'auto'
		},
		container: {
			display: 'flex',
			justifyContent: 'space-around',
			alignContent: 'center',
			alignItems: 'center',
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'column',
				alignContent: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				alignItems: 'center',

				'& > *:not(:first-of-type)': {
					marginTop: 20
				}
			}
		}
	})
);

const Left = () => (
	<Box textAlign="left" display="flex" flexDirection="column">
		<Link href="https://sapphirejs.dev/kofi" text="Ko-fi" />
		<Link href="https://sapphirejs.dev/paypal" text="PayPal" />
		<Link href="https://sapphirejs.dev/patreon" text="Patreon" />
		<Link href="https://sapphirejs.dev/opencollective" text="Open Collective" />
	</Box>
);
const Right = () => (
	<Box textAlign="right" display="flex" flexDirection="column">
		<Link href={VercelUrl} text="Vercel" />
		<Link href={ServerURL} text="Support Server" />
		<Link href={NpmOrgUrl} text="NPM Organization" />
		<Link href={GithubUrl} text="GitHub Organization" />
	</Box>
);

const Middle = () => (
	<Box display="flex" flexDirection="column" alignItems="center" alignContent="center">
		<Typography variant="caption" align="center">
			Copyright © 2020 The Sapphire Community and its contributors.
		</Typography>
		<Link href={VercelUrl}>
			<VercelLogo style={{ marginTop: 15, cursor: 'pointer' }} />
		</Link>
	</Box>
);

const Footer = () => {
	const classes = useStyles();

	return (
		<Box component="footer" className={classes.root}>
			<Container maxWidth="md">
				<Hidden xsDown>
					<Box className={classes.container}>
						<Left />
						<Middle />
						<Right />
					</Box>
				</Hidden>
				<Hidden smUp>
					<Box className={classes.container}>
						<Box display="flex" justifyContent="space-between" width="100%" px={3}>
							<Left />
							<Right />
						</Box>
						<Middle />
					</Box>
				</Hidden>
			</Container>
		</Box>
	);
};

export default memo(Footer);
