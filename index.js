const form = document.getElementById('form');
const annual_amt = document.getElementById('grossIncome');
const extra_amt = document.getElementById('extraIncome');
const deductions = document.getElementById('deductions');
const age = document.getElementById('age');
(document.querySelectorAll('.avatar')).forEach(element => {
    element.style.opacity =0;
});


form.addEventListener('submit', e => {
    e.preventDefault();

    const isvalid=validateInputs();
    console.log(isvalid);
    if(isvalid)
    {calculateTax();
        const options={
            backdrop:true,
            keyboard:true,
            focus:true,
            show:true
        }
        $('#taxModal').modal(options)    
    }
    // document.getElementById('taxModal').style.display = 'block';
    // document.body.classList.add('modal-open');
    // document.getElementsByClassName('modal-backdrop')[0].style.display = 'block';}

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    console.log(inputControl);
    const errorDisplay = inputControl.querySelector('.avatar');

    errorDisplay.setAttribute('data-tooltip', message);
    errorDisplay.style.opacity=1
    inputControl.classList.add('error');
    // inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.avatar');
    errorDisplay.style.opacity=0
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.avatar');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validate=(input)=>{
    // console.log(1);
    const inputValue = input.value.trim();
    if(isNaN(inputValue))
        {   
            setError(input, 'Please enter a valid number');
        }
        else
        setSuccess(input)
    // console.log(element);
}

const validateInputs = () => {
    const annual_amt_val = annual_amt.value.trim();
    const extra_amt_val = extra_amt.value.trim();
    const deductions_val = deductions.value.trim();
    const age_val = age.value.trim();
    let isValid=true;

    if(annual_amt_val === '') {
        setError(annual_amt, 'Please Enter this field');
        isValid=false;
    } else 
        if(isNaN(annual_amt_val))
        {   isValid=false;
            setError(annual_amt, 'Please enter a valid number');
        }
        else setSuccess(annual_amt)

    
    

    if(extra_amt_val === '') {
        setError(extra_amt, 'Please Enter this field');
        isValid=false;
    } else if(isNaN(extra_amt_val))
       {
        setError(extra_amt, 'Please enter a valid number'); 
        isValid=false;
       } 
       else setSuccess(extra_amt)
    
       if(deductions_val === '') {
        {
            setError(deductions, 'Please Enter this field');
            isValid=false;
        }
    } else if(isNaN(deductions_val))
       {
        setError(deductions, 'Please enter a valid number');
        isValid=false;
       }
       else setSuccess(deductions)


    if(age_val === '') {
        setError(age, 'Please Enter this field');
        isValid=false;
    }
    else setSuccess(age)

    return isValid
    
};

function calculateTax() {
    const grossIncome = parseFloat(document.getElementById('grossIncome').value);
    const extraIncome = parseFloat(document.getElementById('extraIncome').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
    const age = document.getElementById('age').value;

    let tax = 0;
    if (grossIncome + extraIncome - deductions > 800000) {
        if (age === '<40') {
            tax = 0.3 * (grossIncome + extraIncome - deductions - 800000);
        } else if (age === '≥ 40 &lt; 60') {
            tax = 0.4 * (grossIncome + extraIncome - deductions - 800000);
        } else if (age === '≥ 60') {
            tax = 0.1 * (grossIncome + extraIncome - deductions - 800000);
        }
    }

    document.getElementById('taxAmount').textContent = tax.toFixed(2);
}

