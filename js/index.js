class Portfolio extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            DataFetched: false,
            projects: []
        };
    }

    render() {
        if (!this.state.DataFetched)
        {
            return (
                <h2>Loading...</h2>
            )
        }
        if (this.state.projects)
        {
        return(
            <>
                {this.state.projects.map((project) => (
                    <ExperienceCard name = {project.name} description = {project.description} html_url = {project.html_url} id = {project.id} key={project.id}/>
                ))}
            </>
        )}
    }
    componentDidMount() {
        var urls = [
            'https://api.github.com/repos/TeamMossen/TeamMossenWebApp',
            'https://api.github.com/repos/alexmar000/alarm_gui',
            'https://api.github.com/repos/alexmar000/survey-form'
        ];
        
        const requests = urls.map((url) => fetch(url))
        Promise.all(requests)
        .then((resps) => Promise.all(resps.map((response) => response.json())))
        .then((jsons) => {
            const fetchedProjs = jsons;
            this.setState({
                    projects: fetchedProjs,
                    DataFetched: true
                    })
            })
    } 
}
class ExperienceCard extends React.Component {
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


