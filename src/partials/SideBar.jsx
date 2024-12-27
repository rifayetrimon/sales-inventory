import { Link } from "react-router-dom";

const SideBar = ({ isNavOpen }) => {
    return (
        <div>
            <div id="sideNavRef" className={isNavOpen}>
                <a href="/dashboard" className="side-bar-item">
                    <i className="bi bi-graph-up"></i>
                    <span className="side-bar-item-caption">Dashboard</span>
                </a>
                
                <a href="customerPage.html" className="side-bar-item">
                    <i className="bi bi-people"></i>
                    <span className="side-bar-item-caption">Customer</span>
                </a>
                
                <a href="categoryPage.html" className="side-bar-item">
                    <i className="bi bi-list-nested"></i>
                    <span className="side-bar-item-caption">Category</span>
                </a>
                
                <a href="productPage.html" className="side-bar-item">
                    <i className="bi bi-bag"></i>
                    <span className="side-bar-item-caption">Product</span>
                </a>
                
                <a href="salePage.html" className="side-bar-item">
                    <i className="bi bi-currency-dollar"></i>
                    <span className="side-bar-item-caption">Create Sale</span>
                </a>
                
                <a href="invoicePage.html" className="side-bar-item">
                    <i className="bi bi-receipt"></i>
                    <span className="side-bar-item-caption">Invoice</span>
                </a>
                
                <a href="reportPage.html" className="side-bar-item">
                    <i className="bi bi-file-earmark-bar-graph"></i>
                    <span className="side-bar-item-caption">Report</span>
                </a>
            </div>
        </div>
    );
};

export default SideBar;