function alertPopup(msg, header, onClose, param) {
    $('.modal').modal('hide');
    if ($("#popupDisplayAlert").length === 0) {
        let popup =
            `<div id="popupDisplayAlert" Class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-hidden="true">
            <div Class="modal-dialog modal-sm">
                <div Class="modal-content">
                    <div Class="modal-header modal-colored-header bg-primary">
                        <h4 Class="modal-title" id="popupDisplayAlertHeader">Header</h4>
                    </div>
                    <div Class="modal-body">
                        <div class="card card-body row">
                            <div class="form-group col-md-12" id="popupDisplayAlertMsg">Message</div>
                        </div>
                    </div>
                    <div Class="modal-footer d-flex justify-content-end">
                        <div class="row">
                            <button id="ButtonOk" class="btn btn-primary form-control-sm" data-bs-dismiss="modal">
                                <span class="fa-regular fa-check"></span>
                                <span class="hidden-on-mobile" langKey="ok">ตกลง</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        $("#testContent").append(popup);
    }


    /*bindEventButtonOnPopup("popupDisplayAlert", "ButtonOk", onClose, param);*/

    if (header) {
        $("#popupDisplayAlertHeader").text(header);
    } else {
        $("#popupDisplayAlertHeader").text('Test Header');
    }

    if (msg) {
        $("#popupDisplayAlertMsg").text(msg);
    } else {
        $("#popupDisplayAlertMsg").text('This is default msg.');
    }
    $("#popupDisplayAlert").modal('show');
}