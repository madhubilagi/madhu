import React, {useState} from "react";

class Stacks extends React.Component {
	constructor() {
		super();
		this.state = {
        
			stacks: {
				react: true,
				angular: false,
				vue: false,
				noBackend: true,
				nodejsTypeORM: false,
				nodejsSequeslize: false,
                postgreSQL: true,
                mySQL: false,
                aname: null
            },
		};
	}


	handleClick = (event) => {
		const { name, checked } = event.target;

		this.setState((prevState) => {
			const stacks = prevState.stacks;
			stacks[name] = checked;
			return stacks;
		});
	};

    handleOnchange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

	render() {
        const handleOnchange = Object.keys(this.state.stacks);
		const selectedStacks = Object.keys(this.state.stacks)
			.filter((key) => this.state.stacks[key])
			.join(", ");
            
        
		return (
			<div className="stacks">
				<main className="">
                    <section className="section section-2 p-0 w-100 py-4">
                        <div className="">
                            <h5 className="title position-relative">Application Name</h5>
                            <label>Name:</label><br />
                            <input onChange={this.handleOnchange} value={this.state.aname} type='text' placeholder="Enter application name" name="aname" />
                        </div>
                    </section>

					<div className="container p-0 step">
                    <h5 class="title position-relative">Stack</h5>
                        <h4 className="stack-title">Frontend</h4>
						<div className="row row-cols-3"> 
                            <div className="col">
                                <div className="card">
                                    <input checked={this.state.stacks.react} onChange={this.handleClick} type="checkbox" name="react" /> 
                                    <h5>React</h5>
                                    <p>React is a frontend library used to create stateful and reusable UI components for developing large web applications.</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <input checked={this.state.stacks.angular} onChange={this.handleClick} type="checkbox" name="angular" /> 
                                    <h5>Angular</h5>
                                    <p>Angular quickly established itself as a mainstream technology used by millions of developers.</p>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <input checked={this.state.stacks.vue} onChange={this.handleClick} type="checkbox" name="vue" /> 
                                    <h5>Vue</h5>
                                    <p>Vue.js is a progressive framework for building user interfaces. Vue was built to be incrementally adoptable for users.</p>
                                </div>  
                            </div>
                        </div>
						
                        <h4 className="stack-title">Backend <span>(Ready-to-use admin interface/CRUD app)</span></h4>
                        <div className="row row-cols-3">
                            <div className="col">
                                <div className="card">
                                    <input checked={this.state.stacks.noBackend} onChange={this.handleClick} type="checkbox" name="noBackend" /> 
                                    <h5>No Backend</h5>
                                    <p>Application without backend and database, only with front-end. 'create-react-app' for example.</p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <input checked={this.state.stacks.nodejsTypeORM} onChange={this.handleClick} type="checkbox" name="nodejsTypeORM" /> 
                                    <h5>Node js + TypeORM</h5>
                                    <p>Application without backend and database, only with front-end. 'create-react-app' for example.</p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <input checked={this.state.stacks.nodejsSequeslize} onChange={this.handleClick} type="checkbox" name="nodejsSequeslize" /> 
                                    <h5>Node js + Sequeslize</h5>
                                    <p>Application without backend and database, only with front-end. 'create-react-app' for example.</p>
                                </div>
                            </div>
                        </div>
                        
                        <h4 className="stack-title">Database</h4>
                        <div className="row row-cols-3">
                            <div className="col">
                                <div className="card">
                                    <input checked={this.state.stacks.postgreSQL} onChange={this.handleClick} type="checkbox" name="postgreSQL" /> 
                                    <h5>PostgreSQL</h5>
                                    <p>Application without backend and database, only with front-end. 'create-react-app' for example.</p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <input checked={this.state.stacks.mySQL} onChange={this.handleClick} type="checkbox" name="mySQL" /> 
                                    <h5>MySQL</h5>
                                    <p>Application without backend and database, only with front-end. 'create-react-app' for example.</p>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-orange my-4">Submit</button>
					</div>
					
                    <p>Application Name: {this.state.aname}</p>
                    <p>Your stacks are: {selectedStacks}</p> 

				</main>
			</div>
		);
	}
}

export default Stacks;