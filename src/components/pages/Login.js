import React from "react";
import classes from "./Login.module.css";

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            role : 'Athlete',
            email : '',
            password : '',
            rememberMe : false
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(){
        alert('Login submitted: Role:' + this.state.role + 'Email:' + this.state.email + 'Password:' +this.state.password + 'Remember:' + this.state.rememberMe);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={classes.loginForm}>
                <br/>
                <div className={classes.form}>
                <div className={classes.radioDiv}>
                    <input
                        name="role"
                        id={classes["athlete"]}
                        className={classes.athleteRadio}
                        type ="radio"
                        value ="Athlete"
                        onChange = {this.handleChange}
                        defaultChecked/>
                    <label for={classes["athlete"]} id={classes["athlete"]} className={classes.athleteLabel}>
                        
                        Athlete
                    </label>
                    <input
                        name="role"
                        id={classes["coach"]}
                        className={classes.coachRadio}
                        type ="radio"
                        value ="Coach"
                        onChange = {this.handleChange} />
                    <label for={classes["coach"]} id={classes["coach"]} className={classes.coachLabel}>
                        
                        Coach
                    </label>
                </div>
                <h3>LOGIN</h3>
                    
                <div>
                    <input
                        className={classes.entries}
                        placeholder="EMAIL"
                        name="email"
                        type="email"
                        value = {this.state.email}
                        onChange = {this.handleChange} />
                    <br/>
                    <input
                        className={classes.entries}
                        placeholder="PASSWORD"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange = {this.handleChange} />
                    <br/>
                    <label>
                        <input
                            name="rememberMe"
                            type="checkbox"
                            checked={this.state.rememberMe}
                            onChange={this.handleChange} />
                        REMEMBER ME
                    </label>
                </div>
                <br/>
                <input type="submit" value="LOGIN" className={classes.submitBtn}/>
                <div className={classes.createAccount}>
                    <p>DON'T HAVE AN ACCOUNT?
                    <a href="">CREATE AN ACCOUNT</a>
                    </p>
                </div>
                </div>
            </form>
        )
    }
}

export default LoginForm;