let modalQt = 1;

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

 //configuração de mapeamento de pizzas e adição de ações
pizzaJson.map((item, index) =>{
    //criando clone da configuração de pizzas
    //obs: sem o clone aparece apenas uma pizza
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    //enumera as pizzas
    pizzaItem.setAttribute('data-key', index);
    //mostrando os atributos da pizza
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    // ações de não atualização da página e aparecimento da tela de opções
    pizzaItem.querySelector('a').addEventListener('click', (e)=> {
        e.preventDefault();
        
        //armazena o valor do elemento mais próximo de a nesse caso = .pizza-item
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;

        //preenche a telinha de opções
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

        c('.pizzaInfo--size.selected').classList.remove('selected');

        //preenche os tamanhos das pizzas 
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2){
                size.classList.add('selected');
            }

            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        c('pizzaInfo--qt').innerHTML = modalQt;

        //animação de aparecimento de display none
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        //o script dá uma pausa pra acontecer a animação
        /*obs: lembrado que a animação do css é de 0.5 segundos 
        mas o script acontece mais rapidamente*/
        setTimeout(()=> {
           c('.pizzaWindowArea').style.opacity = 1; 
        }, 200); 
        
        // pizzaItem.querySelector('.pizzaInfo--cancelButton').addEventListener('click', (e)=> {
        //     e.preventDefault();
        //     c('.pizzaWindowArea').style.opacity = 1;
        //     c('.pizzaWindowArea').style.display = 'none';
        //     setTimeout(()=> {
        //         c.prototype('.pizzaWindowArea').style.opacity = 0;
        //     }, 200);
        // });
    });


    //adiciona a pizza a tela
    c('.pizza-area').append(pizzaItem);
     
});