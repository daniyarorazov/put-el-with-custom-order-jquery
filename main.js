$(document).ready(() => {
    let hrLinesOrders = document.querySelectorAll('.hrTxtAdd');
    const addOptionBtn = document.querySelector("#addTxt2Edit");
    const deleteOptionBtn = document.querySelectorAll('.txtoltelsEdit');

    function updateHrLinesOrders() {
        hrLinesOrders = document.querySelectorAll('.hrTxtAdd');
        deleteButton = document.querySelectorAll('.txtoltelsEdit');
        inputCheckboxOption = document.querySelectorAll('.txtChckEdit');
        inputValueOption = document.querySelectorAll('.txtSpecEdit');
        inputHiddenDelete = document.querySelectorAll('.hidden-delete');

        for (let j = 0; j < deleteButton.length; j++) {
            let el = deleteButton[j];
            $(el).attr('id', `txtDltEdit${j+2}`);
        }


        for (let k = 0; k < inputCheckboxOption.length; k++) {
            let el = inputCheckboxOption[k];
            $(el).attr('id', `applianceTextCheckEdit${k+1}`);
            $(el).attr('value', `${k+1}`);
            $(el).attr('name', `textyEdit[${k+1}].TextNewsCheck`);
        }

        for (let k = 0; k < inputValueOption.length; k++) {
            let el = inputValueOption[k];   
            $(el).attr('id', `applianceTextEdit${k+1}`);
            $(el).attr('name', `textyEdit[${k+1}.ApplianceText`);
            $(el).attr('aria-label', `form-control-sm textyEdit[${k+1}].ApplianceText`);
        }

        

        for (let i = 0; i < hrLinesOrders.length; i++) {
            let el = hrLinesOrders[i];
            $(el).attr('data-order', i);
            el.addEventListener('click', () => {
                if ($(el).css("color") == "rgb(0, 0, 0)") {
                    
                } else {
                    $(el).css("color", "#000");
                    $(el).addClass("activeHrTxtAdd");
                    for (let j of hrLinesOrders) {
                        if(j != el) {
                            if ($(j).css("color") == "rgb(0, 0, 0)") {
                                $(j).css("color", "#fff");
                                $(j).removeClass("activeHrTxtAdd");
                            }
                        }
                    }
                }
            });
        }
      }

    updateHrLinesOrders();

    

    addOptionBtn.addEventListener('click', function() {
        const orderHr = document.querySelector('.activeHrTxtAdd');
        const enterValueInput = $('#applianceTextEdit1').val();
        const selectedActiveHr = $(orderHr).val(function() {
            return $(this).attr("data-order");
        });

        // Сделать проверку, если такой уже id существует с цифрой, то следующий с таким айди увеличить на +1 и последующие
        // Должны менять динамические id для input, a, hr
        const htmlStructureBlock = $(`<div class="input-group editTxt"><a id="txtDltEditi" class="btn btn-danger btn-sm txtoltelsEdit" data-bs-toggle="tooltip" data-bs-placement="left" title="Smazat popisek"><i class="fas fa-close"></i></a><div class="input-group-text"><input class="form-check-input mt-0 txtChckEdit" checked id="applianceTextCheckEdit4" name="textyEdit[4].TextNewsCheck" type="checkbox" value="4" aria-label="Checkbox for following text input"></div><input value="${enterValueInput}" name="textyEdit[5].ApplianceText" id="applianceTextEditi" class="form-control form-control-sm txtSpecEdit" type="text" placeholder="Zadejte text..." aria-label="form-control-sm textyEdit[5].ApplianceText"><input type="hidden" id="hiddenDelete Edit5" name="textyEdit[5].Delete" value="0"></div><hr class="my-1 hrTxtAdd" style="color: white; height: 3px;" data-bs-toggle="tooltip" data-bs-placement="right" title data-order="4">`);
        $(htmlStructureBlock).insertAfter(selectedActiveHr);
        updateHrLinesOrders();
        console.log(hrLinesOrders.length)

    });

    for (let el of deleteOptionBtn) {
        el.addEventListener('click', function() {
            alert('Danger')
        });
    }
});
