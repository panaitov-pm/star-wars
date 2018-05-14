import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {Button, Menu, Image, Icon} from 'semantic-ui-react';

const Navigation = () => {
	return (
		<Menu>
			<Menu.Item>
				<Image src="/images/StarWars_Logo.jpg" size="small" />
			</Menu.Item>
			<Menu.Item>
				<NavLink activeClassName="active" to="/categories">Categories</NavLink>
			</Menu.Item>
			<Menu.Menu position="right">
				<Menu.Item>
					<Button animated
					        color="green">
						<Button.Content visible>
							<NavLink to="/sign-in"
							         className="nav-link">Sign In</NavLink>
						</Button.Content>
						<Button.Content hidden>
							<NavLink to="/sign-in"
							         className="nav-link">
								<Icon name="sign in"
								      size="large" />
							</NavLink>
						</Button.Content>
					</Button>
				</Menu.Item>
				<Menu.Item>
					<Button animated
					        basic
					        color=" purple">
						<Button.Content visible>
							<NavLink to="/sign-up"
							         className=" nav-link">Sign Up</NavLink>
						</Button.Content>
						<Button.Content hidden
						                purple>
							<NavLink to="/sign-up"
							         className=" nav-link">
								<Icon name=" add user"
								      size=" large" />
							</NavLink>
						</Button.Content>
					</Button>
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};

export default Navigation;
