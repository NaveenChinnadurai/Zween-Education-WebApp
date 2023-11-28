import '../styles/compoStyles/pageHeader.css'

function PageHeader(props) {
    return (
        <div className="page-header">
            <h1 className="align-centre pad-20">Home // <span>{props.page}</span></h1>
        </div>
    )
}

export default PageHeader