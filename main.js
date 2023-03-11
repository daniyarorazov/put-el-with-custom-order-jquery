$(document).ready(() => {
    const updateHrLinesOrders = () => {
        // Variables
        let hrLinesOrders = document.querySelectorAll('.hrTxtAdd');
        deleteButton = document.querySelectorAll('.txtoltelsEdit');
        inputCheckboxOption = document.querySelectorAll('.txtChckEdit');
        inputValueOption = document.querySelectorAll('.txtSpecEdit');
        inputHiddenDelete = document.querySelectorAll('.hidden-delete');

        // Adding for each element id as attribute of html-element
        for (let j = 0; j < deleteButton.length; j++) {
            let el = deleteButton[j];
            $(el).attr('id', `txtDltEdit${j+1}`);
        }

        for (let j = 0; j < inputHiddenDelete.length; j++) {
            let el = inputHiddenDelete[j];
            $(el).attr('id', `hiddenDeleteEdit${j+1}`);
            $(el).attr('name', `textyEdit[${j+1}].Delete`);
        }

        for (let k = 0; k < inputCheckboxOption.length; k++) {
            let el = inputCheckboxOption[k];
            $(el).attr('id', `applianceTextCheckEdit${k}`);
            $(el).attr('name', `textyEdit[${k}].TextNewsCheck`);
        }

        for (let k = 0; k < inputValueOption.length; k++) {
            let el = inputValueOption[k];   
            $(el).attr('id', `applianceTextEdit${k}`);
            $(el).attr('name', `textyEdit[${k}].ApplianceText`);
            $(el).attr('aria-label', `form-control-sm textyEdit[${k}].ApplianceText`);
        }


        // Add for each hr element "click" event listener
        hrLinesOrders.forEach((el, key) => {
            $(el).attr('data-order', key);
            let element = $(el)[0]; 
            let data = $._data(element); 
            
            // Checking, if element have already click event listener
            // If element doesn't have, so add listener
            if (!(data.events && data.events.click)) {
                    $(el).click(() => {
                        const htmlStructureBlock = $(`<div class="input-group editTxt"><a id="txtDltEdit" class="btn btn-danger btn-sm txtoltelsEdit" data-bs-toggle="tooltip" data-bs-placement="left" title="Smazat popisek"><i class="fas fa-close"></i></a><div class="input-group-text"><input class="form-check-input mt-0 txtChckEdit" checked id="applianceTextCheckEdit4" name="textyEdit[4].TextNewsCheck" type="checkbox" value="1" aria-label="Checkbox for following text input"></div><input name="textyEdit[5].ApplianceText" id="applianceTextEdit5" class="form-control form-control-sm txtSpecEdit" type="text" placeholder="Zadejte text..." aria-label="form-control-sm textyEdit[5].ApplianceText"><input type="hidden" id="hiddenDeleteEdit5" class="hidden-delete" name="textyEdit[5].Delete" value="0"></div><hr class="my-1 hrTxtAdd" style="color: white; height: 3px;" data-bs-toggle="tooltip" data-bs-placement="right" title data-order="4">`);
                        $(htmlStructureBlock).insertAfter(el);

                        if (key != 0 && $(el).attr("class") != "activeHrTxtAdd") {
                            $(el).addClass("activeHrTxtAdd");
                            for (let j of hrLinesOrders) {
                                if(j != el && ($(j).attr("class")).includes("activeHrTxtAdd")) {
                                    $(j).removeClass("activeHrTxtAdd");
                                }
                            }
                        }
                        updateHrLinesOrders();
                    });
                }     
        });
    }

    updateHrLinesOrders();
});
