import { useRef } from "react";
import myaxios from "../../utils/myaxios";
import { errorToast, successToast } from "../../utils/toast";

const CatgoryCreateModel = ({ loadAllData }) => {

    const closeBtn = useRef(null);  

    const handleCreate = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        myaxios.post("/create-category", formDataObj)
            .then((response) => {
                if (response.status === 201) {
                    e.target.reset();
                    successToast("Category created successfully");
                    closeBtn.current.click();
                    loadAllData();
                }else{
                    console.error(response);
                    errorToast("Failed to create category");
                }
            })
            .catch((error) => {
                console.error(error);
                errorToast("Failed to create category");
            });
    }




    return (
        <div>
            <div className="modal animated zoomIn" id="create-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel">Create Category</h6>
                        </div>
                        <div className="modal-body">
                            <form id="save-form" onSubmit={handleCreate}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 p-1">
                                            <label className="form-label">Category Name *</label>
                                            <input name='name' type="text" className="form-control" id="categoryName"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button id="modal-close" className="btn bg-gradient-primary" data-bs-dismiss="modal" aria-label="Close" ref={closeBtn}>Close</button>
                            <button type="submit" form='save-form' id="save-btn" className="btn bg-gradient-success" >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatgoryCreateModel;