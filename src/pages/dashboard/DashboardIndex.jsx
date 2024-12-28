import React, { useEffect, useState } from 'react';
import myaxios from '../../utils/myaxios';


const DashboardIndex = ({ isNavOpen }) => {

    const [customer, setCustomer] = useState(0);
    const [product, setProduct] = useState(0);
    const [category, setCategory] = useState(0);
    const [invoice, setInvoice] = useState(0);
    const [total, setTotal] = useState(0);
    const [vat, setVat] = useState(0);
    const [payable, setPayable] = useState(0);


    useEffect(() => {
        myaxios.get(
            "/summary"
        ).then((response) => {
            console.log(response);
            setCustomer(response.data.customer);
            setProduct(response.data.product);
            setCategory(response.data.category);
            setInvoice(response.data.invoice);
            setTotal(response.data.total);
            setVat(response.data.vat);
            setPayable(response.data.payable);

        }).catch((error) => {
            console.log("Error");
        })
    }, []);





    return (
        <div>
            <div id="contentRef" className={isNavOpen}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                            <div className="card card-plain h-100 bg-white">
                                <div className="p-3">
                                    <div className="row">
                                        <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                            <div>
                                                <h5 className="mb-0 text-capitalize font-weight-bold">
                                                    <span id="product">{product}</span>
                                                </h5>
                                                <p className="mb-0 text-sm">Product</p>
                                            </div>
                                        </div>
                                        <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                            <div className="icon icon-shape bg-gradient-primary shadow float-end border-radius-md">
                                                <img className="w-100 " src="/images/icon.svg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                            <div className="card card-plain h-100 bg-white">
                                <div className="p-3">
                                    <div className="row">
                                        <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                            <div>
                                                <h5 className="mb-0 text-capitalize font-weight-bold">
                                                    <span id="category">{category}</span>
                                                </h5>
                                                <p className="mb-0 text-sm">Category</p>
                                            </div>
                                        </div>
                                        <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                            <div className="icon icon-shape bg-gradient-primary shadow float-end border-radius-md">
                                                <img className="w-100 " src="/images/icon.svg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                            <div className="card card-plain h-100 bg-white">
                                <div className="p-3">
                                    <div className="row">
                                        <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                            <div>
                                                <h5 className="mb-0 text-capitalize font-weight-bold">
                                                    <span id="customer">{customer}</span>
                                                </h5>
                                                <p className="mb-0 text-sm">Customer</p>
                                            </div>
                                        </div>
                                        <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                            <div className="icon icon-shape bg-gradient-primary shadow float-end border-radius-md">
                                                <img className="w-100 " src="/images/icon.svg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                            <div className="card card-plain h-100  bg-white">
                                <div className="p-3">
                                    <div className="row">
                                        <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                            <div>
                                                <h5 className="mb-0 text-capitalize font-weight-bold">
                                                    <span id="invoice">{invoice}</span>
                                                </h5>
                                                <p className="mb-0 text-sm">Invoice</p>
                                            </div>
                                        </div>
                                        <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                            <div className="icon icon-shape bg-gradient-primary shadow float-end border-radius-md">
                                                <img className="w-100 " src="/images/icon.svg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                            <div className="card card-plain h-100 bg-white">
                                <div className="p-3">
                                    <div className="row">
                                        <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                            <div>
                                                <h5 className="mb-0 text-capitalize font-weight-bold">
                                                    $ <span id="total">{total}</span>
                                                </h5>
                                                <p className="mb-0 text-sm">Total Sale</p>
                                            </div>
                                        </div>
                                        <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                            <div className="icon icon-shape bg-gradient-primary shadow float-end border-radius-md">
                                                <img className="w-100 " src="/images/icon.svg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                            <div className="card card-plain h-100  bg-white">
                                <div className="p-3">
                                    <div className="row">
                                        <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                            <div>
                                                <h5 className="mb-0 text-capitalize font-weight-bold">
                                                    $ <span id="vat">{vat}</span>
                                                </h5>
                                                <p className="mb-0 text-sm">Vat Collection</p>
                                            </div>
                                        </div>
                                        <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                            <div className="icon icon-shape bg-gradient-primary shadow float-end border-radius-md">
                                                <img className="w-100 " src="/images/icon.svg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 animated fadeIn p-2">
                            <div className="card card-plain h-100  bg-white">
                                <div className="p-3">
                                    <div className="row">
                                        <div className="col-9 col-lg-8 col-md-8 col-sm-9">
                                            <div>
                                                <h5 className="mb-0 text-capitalize font-weight-bold">
                                                    $ <span id="payable">{payable}</span>
                                                </h5>
                                                <p className="mb-0 text-sm">Total Collection</p>
                                            </div>
                                        </div>
                                        <div className="col-3 col-lg-4 col-md-4 col-sm-3 text-end">
                                            <div className="icon icon-shape bg-gradient-primary shadow float-end border-radius-md">
                                                <img className="w-100 " src="/images/icon.svg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardIndex;