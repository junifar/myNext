const { Fragment } = require("react")
const { default: Navbar } = require("../../components/common/navbar")
const { default: DashboardPageIndex } = require("../../components/dashboard")


const DashboardPage = () => {
    return <Fragment>
        <Navbar/>
        <main>
            <DashboardPageIndex/>
        </main>
    </Fragment>;
}

export default DashboardPage