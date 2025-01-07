import { useRef, useEffect, useState } from "react";
import myaxios from "../../utils/myaxios";
import { errorToast, successToast } from "../../utils/toast";


const ProductCreateModel = ({ loadAllData }) => {

    const colseBtn = useRef(null);

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        myaxios.get("/list-category")
            .then((response) => {
                if (response.status === 200) {
                    setCategories(response.data);
                } else {
                    errorToast("Failed to load categories");
                }
            })
            .catch((error) => {
                console.error(error);
                errorToast("Failed to load categories");
            });
    }, []);



    const handleCreate = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        myaxios.post("/create-product", formDataObj)
            .then((response) => {
                if (response.status === 201) {
                    e.target.reset();
                    successToast("Product created successfully");
                    colseBtn.current.click();
                    loadAllData();
                }else{
                    console.error(response);
                    errorToast("Failed to create product");
                }
            })            
            .catch((error) => {
                console.error(error);   
                errorToast("Failed to create product");
            });
    }








    return (
        <div>
            <div className="modal animated zoomIn" id="create-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Product</h5>
                        </div>
                        <div className="modal-body">
                            <form id="save-form" onSubmit={handleCreate}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 p-1" >
                                            
                                            <label className="form-label">Category</label>
                                            <select name="category_id" className="form-control form-select" id="productCategory" required>
                                                <option value="">Select Category</option>
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                            
                                            <label className="form-label mt-2">Name</label>
                                            <input name="name" type="text" className="form-control" id="productName"/>
                                            
                                            <label className="form-label mt-2">Price</label>
                                            <input name="price" type="text" className="form-control" id="productPrice"/>
                                            
                                            <label className="form-label mt-2">Unit</label>
                                            <input name="unit" type="text" className="form-control" id="productUnit"/>
                                            
                                            <br/>
                                            <img name="img_url" className="w-15" id="newImg" src="./images/default.jpg"/>
                                            <br/>
                                            
                                            <label className="form-label">Image</label>
                                            <input name="img_url" onChange={(e) => {
                                                const imgFile = e.target.files[0];
                                                if (imgFile) {
                                                    document.getElementById("newImg").src = URL.createObjectURL(imgFile);
                                                }
                                            }}  type="file" className="form-control" id="productImg"/>
                                            
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button id="modal-close" className="btn bg-gradient-primary mx-2" data-bs-dismiss="modal" aria-label="Close" ref={colseBtn}>Close</button>
                            <button type="submit" form="save-form" id="save-btn" className="btn bg-gradient-success" >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCreateModel;