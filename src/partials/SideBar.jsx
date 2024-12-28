import { Link } from "react-router-dom";

const SideBar = ({ isNavOpen }) => {
    return (
        <div>
            <div id="sideNavRef" className={isNavOpen}>
                <Link to={"/dashboard/index"} className="side-bar-item">
                    <i className="bi bi-graph-up"></i>
                    <span className="side-bar-item-caption">Dashboard</span>
                </Link>
                
                <Link to={"/dashboard/customer"} className="side-bar-item">
                    <i className="bi bi-people"></i>
                    <span className="side-bar-item-caption">Customer</span>
                </Link>
                
                <Link to={"/dashboard/category"} className="side-bar-item">
                    <i className="bi bi-list-nested"></i>
                    <span className="side-bar-item-caption">Category</span>
                </Link>
                
                <Link to={"/dashboard/product"} className="side-bar-item">
                    <i className="bi bi-bag"></i>
                    <span className="side-bar-item-caption">Product</span>
                </Link>
                
                <a href="salePage.html" className="side-bar-item">
                    <i className="bi bi-currency-dollar"></i>
                    <span className="side-bar-item-caption">Create Sale</span>
                </a>
                
                <Link to={"/dashboard/invoice"} className="side-bar-item">
                    <i className="bi bi-receipt"></i>
                    <span className="side-bar-item-caption">Invoice</span>
                </Link>
                
                <a href="reportPage.html" className="side-bar-item">
                    <i className="bi bi-file-earmark-bar-graph"></i>
                    <span className="side-bar-item-caption">Report</span>
                </a>
            </div>
        </div>
    );
};

export default SideBar;