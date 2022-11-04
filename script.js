const imgSlide = document.querySelectorAll(".SlideImg"); //получил массив изображений
let btnPlus = document.getElementById("btn_right"); // подключил кнопку вперёд
let btnMinus = document.getElementById("btn_left"); // подключил кнопку назад
let arrLengthImg = imgSlide.length; // узнали длину массива и изображениями
console.log(arrLengthImg);
let startImg = 0; // начальная позиция слайда

const hideImg = ()=> {
  // функция   которая спрячет все изображения
  imgSlide.forEach(function (elem, i) {
    elem.style.display = "none";
  });
}

const viewImg = () => {
  // функция устанавливающая видимость текущего изображения

  let curentImg =imgSlide[startImg]; // переменная с текущим номером изображения
  console.log(startImg);

  imgSlide.forEach((elem, i) => {
    //console.log(i);
    console.log(curentImg);
    if (startImg === i) {
      // устанавливаем для текущей позиции видимость изображения
      curentImg.style.display = "block";
    } else {
      elem.style.display = "none"; // остальные изображения прячем
    }
  });
}


hideImg(); // вызвал функцию которая спрятала все изображения

imgSlide[0].style.display = "block"; // устанавливаем показ первого слайда

btnPlus.onclick = () => { //кнопка вперёд
  if (startImg === arrLengthImg - 1) {
    // проверяем если текущий слайд равен длине массива

    startImg = 0; // сбрасываем  счётчик положения на 0

    hideImg(); // вызываем функцию которая спрячет все изображения

    imgSlide[0].style.display = "block"; // устанавливаем показ первого слайда
  } else {
    //проверяем если текущий слайд не равен длине массива

    startImg++; // при нажатии кнопки добавляем +1 к начальной позиции

    viewImg(); //вызываем функцию которая установит фидимость текущего изображения
  }
};
btnMinus.onclick = () => { //кнопка назад
  if (startImg === 0) {
    // проверяем если текущий слайд равен началу массива

    startImg = 0; // сбрасываем  счётчик положения на 0

    imgSlide[0].style.display = "block"; // устанавливаем показ первого слайда
  } else {
    //проверяем если текущий слайд не равен длине массива

    startImg--; // при нажатии кнопки добавляем -1 к начальной позиции

    viewImg(); //вызываем функцию которая установит фидимость текущего изображения
  }
};

