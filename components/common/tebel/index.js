const { Fragment } = require("react")

const Tebel = (props) => {
    return <Fragment>
        <strong>Test</strong>
        {props.children}
    </Fragment>;
}

export default Tebel;