//criptografar as palavras em zeta poloc
function cripto(){
    // o que ta no  "textarea id" vai se tranformar em um valor
    let text=document.getElementById('text').value
    // para a criptografia ficar forte ela precisa de varias camadas (splits)
   let split=text.split("")
   //depois de fatiado o texto vamos contar quantas caracteres existem
   let chars=split.length
   // vamos cria um array constante pre determinanto para colocar os caracteres que iremos utilazar na criptografia
   const pre=['Z','E','N','I' ,'T','P','O','L','A','R','A','z','e','n','i','t','p','o','l','a','r']
   // vamos criar um array pos determinante colocando na ordem inversa do array pre determinate (exemplo se começamos no array pre com letras mauiscula entao começamos no pos com letra minuscula) quanto mais embaralhado os array mais fote a criptografia
   const pos=['P','O','L','A','R','Z','E','N','I','T','p','o','l','a','r','z','e','n','i','t']
   // depois de embaralhados  os caracteres vem os resultados
   let rslt=document.getElementById('result')
   //começa pelo 0 toda vez que ele recebe um novo caracter pre ele vai colocando no i+++ 
   for (i = 0; i < chars; i++) {
        let index = pre.indexOf(split[i])
    //quando chega o -1 ele faz outro split e do split vai para o index
        if(index === -1) {
         spliti[i] = split [i]
    //começa pelo 0 toda vez que ele recebe um novo caracter pos e 
        } else { 
            split[i] = pos[index]
        }
   // quado os juntam os  splits vao para o join
   const toString = split.join('')
   //depos do join vao para o rslt 
   rslt.innerText = toString
   }
}