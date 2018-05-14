import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Grid, Label} from 'semantic-ui-react';

class SignIn extends Component {
	state = {
		data  : {
			email   : '',
			password: ''
		},
		errors: {}
	};
	handleChange = ({target}) => this.setState({
		data  : {...this.state.data, [target.name]: target.value},
		errors: {...this.state.errors, [target.name]: ''}
	});

	render() {
		const {errors, data} = this.state;
		const {isLoading} = this.state;
		return (
			<Grid centered columns={2}>
				<Grid.Column>
					<Form>
						<Form.Field error={!!errors.email}>
							<label htmlFor="email">Email</label>
							<input
								name="email"
								value={data.email}
								onChange={this.handleChange}
								type="email" />
							{(!!errors.email) && <Label basic color="red" pointing="left">{errors.email}</Label>}
						</Form.Field>
						<Form.Field error={!!errors.password}>
							<label htmlFor="password">Password</label>
							<input
								name="password"
								value={data.password}
								onChange={this.handleChange}
								type="password" />
							{(!!errors.password) && <Label basic color="red" pointing="left">{errors.password}</Label>}
						</Form.Field>
						<Button type="submit" primary loading={isLoading}>Submit</Button>
					</Form>
				</Grid.Column>
			</Grid>
		);
	};
}

SignIn.propTypes = {
	isAuth   : PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
	user     : PropTypes.object.isRequired,
	errors   : PropTypes.object.isRequired
};

SignIn.defaultProps = {
	isAuth   : false,
	isLoading: false,
	user     : {},
	errors   : {}
};


export default SignIn;
