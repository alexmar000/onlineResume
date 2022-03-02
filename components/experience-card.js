import React from 'react';
import ReactDOM from "react-dom";
export class ExperienceCard extends React.Component {
    constructor(props){
            super(props)
    };
    render(props) {
        return(
            <div>
                <div className="row project" key={this.props.id}>
                    <div className="col-sm">
                        <a href={this.props.html_url}>
                            <div className="card">
                                <h2>{this.props.name}</h2>
                                <p>{this.props.description}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
};
export default ExperienceCard;