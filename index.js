function SumNumber (form) {
    //  Определение переменных
    var FirstNumber = Number(form.firsNumber.value);
    var SecondNumber = Number(form.secondNumber.value);
    var Summa;

    // Проверка на NaN
    if (isNaN(FirstNumber) || isNaN(SecondNumber)) {
        alert('Не корректный ввод числа');
    } else {
        Summa = FirstNumber + SecondNumber;
        alert(+Summa.toFixed(1));
    }
    
}