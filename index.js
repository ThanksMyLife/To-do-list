'use strict!'

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#input');
    const addBTN = document.querySelector('#addBTN');
    const todoList = document.querySelector('.todo-list')
    const alert = document.querySelector('span');

    const addToDo = (e) => {
        e.preventDefault()
        if(input.value !== '') {
            alert.textContent = '';
            const item = document.createElement('div')
            const checkBox = document.createElement('input')
            checkBox.type = 'checkbox'
            const text = document.createElement('span');
            const deleteBTN = document.createElement('button')
            deleteBTN.textContent = "x"

            text.textContent = input.value
            input.value='';

            item.appendChild(checkBox)
            item.appendChild(text)
            item.appendChild(deleteBTN)
            todoList.appendChild(item)
        } else {
            alert.textContent = '할 일을 입력하세요 :)';
        }
    }
    addBTN.addEventListener('click', addToDo)

})



// 1. + 버튼을 눌렀을 때 user가 입력창에 작성한 내용을 체크박스 형태의 list로 출력해준다.
