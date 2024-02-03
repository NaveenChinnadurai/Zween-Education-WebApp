
function PageHeader(props) {
    return (
        <h1 className="align-centre pad-20" style={{ margin: "30px 0" }}>
            Home //
            <span style={{ color: "#663399" }}> {props.page}
            </span >
        </h1 >
    )
}

export default PageHeader