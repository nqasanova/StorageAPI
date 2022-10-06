function GetProducts() {
    let basket = JSON.parse(localStorage.getItem('basket'));

    let item = '';
    basket.forEach(pr => {
        let count = 0;

        let currentAmount = pr.Price;
        let switchedAmount = '';
        let total;

        for (let i = 0; i < currentAmount.length - 4; i++) {
            switchedAmount += currentAmount[i]
        }

        total = parseInt(switchedAmount) * pr.Count;

        item += `
        <tr>
        <th scope="row">${pr.Id}</th>
        <td>
        <img src=${pr.Image} alt="">
        </td>
        <td>${pr.Name}</td>
        <td>${pr.Price}</td>
        <td> <input class="inp" type="number" value=${pr.Count}></td>
        <td id=${count}>${total} AZN</td>
        </tr>
        `    
        count++;    
    });

    document.getElementById('body').innerHTML = item;
}

GetProducts();


let inputs = document.querySelectorAll('.inp')

for (let inp of inputs) {
    inp.addEventListener('change', function () {
        let basket = JSON.parse(localStorage.getItem('basket', ));
        id = inp.parentElement.parentElement.children[0].innerHTML
        let total;

        basket.forEach(pr => {
            if (id === pr.Id) {
                pr.Count = inp.value;

                if (inp.value < 0) {
                    inp.value = 0
                }

                let a = pr.Price;
                let e = '';

                for (let i = 0; i < a.length - 4; i++) {
                    e += a[i]
                }

                total = parseInt(e) * inp.value;
            }
        })

        localStorage.setItem('basket', JSON.stringify(basket))
        inp.parentElement.parentElement.children[5].innerHTML = total + ' AZN'

    })

}