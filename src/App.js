import React,{useState,useEffect} from "react";
import Header from './componentes/Header';
import Corpo from './componentes/Corpo';
import './App.css';
import Relogio from "./componentes/Relogio";
import Numero from "./componentes/Numero";
import ledVerde from './componentes/imgs/led_verde.jpg';
import ledVermelho from './componentes/imgs/led_vermelho.png';
import Led from "./componentes/Led";
import Cumprimento from "./componentes/Cumprimento";
import Log from "./componentes/Log";
import Cor from "./componentes/Cor";
import Cor2 from "./componentes/Cor2";
import Map from "./componentes/Map";
import Formulario from "./componentes/Formulario";
import Formulario2 from "./componentes/Formulario2";
import Nota from "./componentes/Nota";
import Resultado from "./componentes/Resultado";
import Caixa from "./componentes/Caixa";
import Canal from "./componentes/Canal";
import Contagem from "./componentes/Contagem";
import Storage from "./componentes/Storage";
import Classe from "./componentes/Classe";
import Car from "./componentes/Car";
import BaseClass from "./componentes/BaseClass";
import Globais from "./componentes/Globais";
import Info from "./componentes/Info";
import Pagina1 from "./componentes/Pagina1";
import Pagina2 from "./componentes/Pagina2";
import Tabela from "./componentes/Tabela";
import Imc from "./componentes/Imc";
import Imc2 from "./componentes/Imc2";
import peso from "./componentes/Peso";
import Altura from "./componentes/Altura";
import CalcularIMC from "./componentes/CalcularIMC";
import ResultadoIMC from "./componentes/ResultadoIMC";
import Peso from "./componentes/Peso";





export default function App(){
   const [num,setNum]=useState(0)
   const [ligado,setLigado]=useState(false)
   //const cancelar =()=>{return false}
   const cancelar =(obj)=>{return obj.preventDefault()}
   const textoDestaque={
    color:'#00f',
    fontSize: '3em',
    textAlign: 'center' } 
   const[notas,setNotas]=useState({'nota1':'0','nota2':'0','nota3':'0','nota4':'0'})  
   const handleSetNotas=(e)=>{
    if(e.target.getAttribute('name')=='nota1'){
       setNotas({'nota1':e.target.value,'nota2':notas.nota2,'nota3':notas.nota3,'nota4':notas.nota4})
    }else if(e.target.getAttribute('name')=='nota2'){
      setNotas({'nota1':notas.nota1,'nota2':e.target.value,'nota3':notas.nota3,'nota4':notas.nota4})

    }else if(e.target.getAttribute('name')=='nota3'){
      setNotas({'nota1':notas.nota1,'nota2':notas.nota2,'nota3':e.target.value,'nota4':notas.nota4})
       
       
    }else if(e.target.getAttribute('name')=='nota4'){
      setNotas({'nota1':notas.nota1,'nota2':notas.nota2,'nota3':notas.nota4,'nota4':e.target.value})
    }


    
   }
   const [car,setCar]=useState(true)
   const mostrarOcultarCar = ()=>{
      setCar(!car)
   }
   const [resumo,setResumo]=useState(Globais.resumo)

   const gravarResumo=()=>{
      Globais.resumo=resumo;
   }
    const verResumo=()=>{
    alert(Globais.resumo)
   }
   const [Pagina,setPagina]= useState()

   useEffect(
      ()=>{
         const url=window.location.href
         const res = url.split('?')
         setPagina(res[1])
      }
   )
   const LinksPagina=(p)=>{
   if(p==1){
      window.open('http://localhost:3000?1','_self')
   }else if(p==2){
      window.open('http://localhost:3000?2','_self')
   }
}

   const retornarPagina=()=>{
   if(Pagina==1){
      return <Pagina1/>
   }else if(Pagina==2){
      return <Pagina2/>

   }else{
      return( <div>
      
            <button onClick={()=>LinksPagina(1)}>Pagina 1</button>
            <button onClick={()=>LinksPagina(2)}>Pagina 2</button>
            </div>)
   }

}

   const [peso,setPeso]=useState(0)
   const [altura,setAltura]=useState(0)
   const [resultado,setResultado]=useState(0)
      
 


  

   return(

    <> 
       <section className="box">
         <Cumprimento/>
         <hr/>
         <Relogio/>
         <hr/>
         <Log/>
         <hr/>
         <h1 style={{color:'#f00',fontSize: '5em',textAlign: 'center'}} >Curso</h1>
         <hr/>
         <h2 style={textoDestaque}>React</h2>
         <Header/> 
         <hr/>
         <Corpo/>
         <p>Valor do state num em App.js:{num}</p>
         <hr/>
         <button className="btn" onClick={()=>setNum(num+10)}>Bot??o soma 10 no App.js</button>
         <hr/>
         <Numero num={num} setNum={setNum}/>

         <img alt='' src={ligado?ledVerde:ledVermelho}/>
         <hr/>
         <button className="btn" onClick={()=>setLigado(!ligado)}>{ligado?'Desligar':'Ligar'}</button>
         <hr/>
         <Led ligado={ligado} setLigado={setLigado}/>
         
            <a href="https://youtube.com"
            target='blank'
            onClick={(e)=>cancelar(e)}>Teste</a>
                 
            <Cor />
            <hr/>
         <Cor2/>
         <hr/>
         <Map/>
         <hr/>
         <Formulario/>
         <hr/>
         <Formulario2/>

         <Nota num={1} nome={'nota1'} nota={notas.nota1} setNota={handleSetNotas}/>
         <Nota num={2} nome={'nota2'} nota={notas.nota2} setNota={handleSetNotas}/>
         <Nota num={3} nome={'nota3'} nota={notas.nota3} setNota={handleSetNotas}/>
         <Nota num={4} nome={'nota4'} nota={notas.nota4} setNota={handleSetNotas}/>
         <Resultado somaNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>

         <Caixa site='www.youtube.com'>
            <h1> Conten????o</h1>
            <p>Aprendendo sobre conten????o</p>
            <hr/>
            <Canal/>

         </Caixa>
         <hr/>
         <Contagem/>
         <hr/>
         <Storage/>
         <hr/>
         
         <Classe canal="Conte??do da propriedade CANAL la no arquivo pai(App.js) carregado em (Contructor) e (super) no arquivo filho com auxilio do props" curso='Conte??do da propriedade CURSO la no arquivo pai(App.js) carregado em (Contructor) e (super) no arquivo filho com auxilio do props'/>
         {car ? <Car fator={2}/> : ''}
         <button onClick={()=>mostrarOcultarCar()}>{car ?"Ocultar" : "Mostrar"}</button>

         <BaseClass/>
         <hr/>

         <Info/>
         <hr/>
         
         <p>canal: {Globais.canal} </p>
         <p>curso: {Globais.curso} </p>
         <p>ano: {Globais.ano} </p>
         <hr/>
         <label>Insira o resumo: </label>
         <input type='text' size={100}  value={resumo} onChange={(r)=>setResumo(r.target.value)}/>
         <hr/>
         <button onClick={()=>gravarResumo()}>Gravar resumo</button>
         <hr/>
         <button onClick={()=>verResumo()}>Ver resumo</button>
         <hr/>
         {retornarPagina()}
         <hr/>
        <Tabela/>
        <hr/>
        <Imc/>
        <hr/>
        <Peso p={peso} sp={setPeso}/>
        <Altura a={altura} sa={setAltura}/>
        <CalcularIMC p={peso} a={altura} sr={setResultado}/>
        <ResultadoIMC r={resultado}/>
        <Imc2/>

        
        
  
        


      
       </section>
    
    </>
  )
}

     /*COMENT??RIOS
     1:O mesmo nome dado depois do IMPORT ter?? que ser usado 
     na chamada  da fun????o no caso o HEADER
     2:Sempre dar o IMPORT chamando o componente no arquivo APP.JS ap??s criar um componente
     3:Sempre inserir o componente dentro da export default function APP()
     4:inserir componente dentro da TAG < componente/>


     5:Os atributos passados no props do arquivo Dados.JS tem que ser os mesmos inseridos na TAG correpondente no arquivo Corpo.js 
     6:Os valores dos atributos tambem podem ser passados em constantes e em seguidas chamados na fun????o dentro de {}
     7:a TAG <Dados/> foi transferidas pra o arquivo Corpo.js
     
     8:Na aula 7 aprendemos a enviar fun????es do tipo Arrow function atraves dos componetes para o arquivo Corpo.js

     9:Na aula 8 aplicamos elementos css da linha da TAG,  tambem na const no cabe??alho, separando as palavra de comando css por uma letra mai??scula n??o por h??fen e os comando por ,(virgula) e n??o ;(ponto e virgula por se tratar de uma esfera JS e n??o CSS.
     J?? no CSS externo a a regra do CSS volta a valer e ao inves do comando style={} na linha, usamos o className"nomeDaClasse"
     10: Pra redimencionar a imagen cria uma Tag div em torno da tag IMG e inseri uma className= 'container'. e no arquivo app.css formata a tag a class container com IMG como filho EX: .container IMG {width:300px; height: 300px;}

     11:Na aula 9 criamos um novo arquivo componente : Relogio.js
     nele criamos uma fun????o nwew Date().toLocaleTimeString, importamos pra o arquivo App.js e chamamos na TAG <section>
     12:NO arquivo index.js encapsulei  o root.render dentro da fun????o tick() logo em seguida chamei ela fora do bloco.
     OBS: deixar a constante: const root = ReactDOM.createRoot(document.getElementById('root')); fora da fun????o tick() se n??o dar erro.
     12: logo em seguida usei a fun????o setInterval(tick,1000) com a fun????o tick como  primeiro par??metro e o numero 1000 como segundo par??mentro
     pra atualizar o time a cada um milisegundo.

     13: Na aula 10 importamos o state com : import React,{useState} from "react"; depois atribu??mos uma constante  a ela: const [num,setNum]=useState(0) com um numero inicial 0. depois chamamos ela em uma tag <p> : 
     <p>Valor do state num:{num}</p> em seguida um bot??o com o evento onCLick:<button onClick={()=>setNum(num+10)}>Bot??o</button> usando um arrow function com setNum pra adcionar +10 a cada vez que clica no bot??o.
     14: ainda na aula 10 criamos um componente Numero.js e criamos uma fun????o Numero com par??metro props criamos uma tag<p> com {props.num} dentro dela em seguida uma tag Button com evento onClick a difern??a entre os dois modelos ?? que um ?? interno sem props e outro ?? externo com props:
       <p>Valor do state em Numeros.js: {props.num}</p>
            <button onClick={()=>props.setNum(props.num+10)}>Bot??o</button>

      15:Na aula 11 aprendemos eventos, primeiramente importamos duas imagens de leds vermelho e verde pra pasta componentes/img, em seguida crimaos um state:
      const [ligado,setLigado]=useState(true) depois chamamos a img com um oderador t??rnario:<img src={ligado?ledVerde:ledVermelho}/> pra uma condicional e por ultimo criamos um button com o evento onClick associado a uma arrow function:   <button className="btn" onClick={()=>setLigado(!ligado)}>Ligar/Desligar</button>
     OBS:  o parametro de setLigado(!ligado)  tem que estar em nega????o ou seja tem que ter exclama????o(!) 
     16: para mostrar o texto do bot??o de acordo com o state usar o mesmo princ??pio da img com os operdores t??rnarios:
     <button className="btn" onClick={()=>setLigado(!ligado)}>{ligado?'Ligado':'Desligado'}</button> ou mostrar inverso indicando uma a????o: <button className="btn" onClick={()=>setLigado(!ligado)}>{ligado?'Desligar':'Ligar'}</button>.
     17:Pra fazer o processo externo ?? exatamente a mesma coisa do proocesso interno a diferen??a ?? que depois vc dever?? importar o arquivo Led.js a chamr ele <Led/> no return.
     18:Outra forma de fazer ?? deixar o componente filho(Led.js)somente pra carregar os elementos visuais, deixando o state mo componete pai(App.js) usando o props ou seja do componente filho tira o: import React,{useState} from "react"; e tambem tira o:const [ligado,setLigado]=useState(false); e na chamada no componete pai vc declara: 
     <Led ligado={ligado} setLigado={setLigado}/> ao inves de <Led/> OBS: DESSA FORMA OS LEDS DEIXAM DE SER INDEPENDENTES E AMBOS ATERAR??O AO CLICK DO BOT??O
     19: pra criar uma tag link em React sem retorno siga esses passos: 1 criar fun????o:const cancelar =()=>{return false}
     2: criar chamada :  <a 
            href="https://youtube.com"
            target='blank'
            onClick={()=>cancelar()}

         >Teste</a>
      3:criar um par??metro e dpois dar retorno .preventDefaut():
      const cancelar =(obj)=>{return obj.preventDefault()}
      4: em seguida passar par??metro e para a chamada no return:
         <a 
            href="https://youtube.com"
            target='blank'
            onClick={(e)=>cancelar(e)}

         >Teste</a>
         4:OBS NO PARAMETRO onClick a letra (e) n??o ?? obrigatoria somnente asegunda letra tem que ser igual a primeira igualmente o paramtro (obj) pode ser qualquer nome.

         20: Na aula 12 crimaos o comoponente cumprimento com o uso da fun????o new date pra dar o bom dia boa tarde ou boa noite de acordo com a hora do dia 
         21: ainda na aula 12 crimaos o componete Log com uso do state para informar se o us??ario est?? logado ou nao de acordo com a tag <buttos > e o evento onClick
         22: ainda na aula 12 criamos o componmente Cor.js uma aplica????o para mudar a cor do texto em decorrencia do click do mouse usando state, tambem criamos o setInterval(mudaCor,1000) pra que a cores mudem a cada 1000 mili segundo.

         23: Na aula 13 criamos o componente Map.js nele usamos o .map pra gerar uma lista de arrays automaticamente
         no arquivo Map.js tem mais detalhes sobre a aula.

         24:Na aula 14 criamos o componente Formulario.js
         manipulamos tano o INPUT para formularios, e tambem o SELECT

         25: Na aula 15 criamos o arquivo Formulario2.js com intuito de criar varios elementos usando apenas um state atribuinto classe de objetos a ele, detalhes da aula no arquivo Formulario2.js!

         26: na Aula 16 evoluimos o uso do state criamos dois arquivos filhos o Nota.js e o Resultado.js ambos crimaos com props com as fun????es no arquivo PAi(App.js)
         27: no arquivo Nota.js criamos a tag <legend> e O <input> pra gerar o rotilo e o campo onde os dados ser??o digitados ;
         28: no arquivo Resultado.js criamos uma tag <p> mostrando a soma das notas e uma tag <p> com a fun????o ternaria prq dar o retrono da m??dia aprovado ou reprovado
         29: no arquivo pai App.js crimaos a const da linha 29:32 e chamamos o return dos componetes filhos da linha 67:71

         30: Na aula 17 refizemos o exerc??cio da aula 16so que usando state com objeto usando o arquivo App.js pra escrever todas as fun????es e usando o arquivo Notas.js apenas para manda o input e e o legend 

         31: na aula 18 aprendemos sobre CONTEN????O como inserir <tag> com conte??do dentro dos componetes importados com o auxilio do props inserimos um par??metrop site na tag <Caixa site=""> um <h1> e um <p> pra que os 3 manifestem o navegador ?? necessario insrir um props no componente filho Caixa.js
         32: ainda na aula 18... podemos tambem jogar um componente diferente  dentro da <TAG> <Caixa><Canal/></Caixa> o conte??do do componete Canal.js vai passar pelo componente Caixa.js e aproveitar o props em seguida imprimir o conte??do na tela

         33:Na aula 19 crimaos o componente Contagem.js nele usamos o useEffect pra imprimir uma mensagem no console e mostrar a contagem na aba do navegador toda vez que o bot??o com o evento onClick for ativado

         33.2:Na aula 20 crimaos o arquivo storage e aprendemos como criar chave, ver chave e deletar chave
         
         34: AULA 21 INICIO DE COMPONENTES DE CLASSES!
         criamos o componente Classe.js e inserimos a sintxe de class com um <h1> no return e chammos no App.js da forma convencional
         35: ainda na aula 21 vimos que pra inserirmos um conte??do no arquivo pai(App.js) que veio do arquivo filho(Classe.js) no arquivo filho temor que gerar um constructor e um super com o par??metro props.

         36: Na aula 22 criamos o arquivo filho Car.js usando o modelo de componente de classe com um bot??o pra alterar o estado do carro de ligado pra desligado.

         37: Na aula 23  ainda no componente Car.js vimos 3 fomas de manipular um setState
         usando ele puro, com arrow function e fun????o tradicional.
         38: ainda na aula 23 criamos uma fun????o acelerar() no arquivo Car.js, unserimos uma propriedade fator na tag <Car fator={1} /> e adicionamos um button pra que a cada click adicionte 1 no componente velAtual

         39:na aula 24 aprendemos a usar o Bind pra lincar duas fun????es. As instru????es est??o no arquivo Car.js

         40: na aula 25 aprendemos sobre ciclo de vida dos componente react,  as fun????es a serem usadas pra exercer uma a????o quando carrega o componente, quando atualiza o coponente e quando remove um componete.

         41: Na aula 26 criamos o arquivo BaseClass.js nele temos um manula de todos os componentes b??sicos que necessitam pra ser criada uma classe dentro de react 

         42: Na aula 27 criamos dois componente o Globais.js e o Info.js. no globais.js inserimos apenas as vari??veis sem return, ja no info.js importamos o arquivo Globais.js e crmos conteudo no return  em uma fun????o export default no arquivo pai App.js importamos ambos os arquivos e no retunr do app.js inserimos um cont??udo carregando o valor das vari??veis do arquivo Globais.js e tambem chamamos a tag <Info/> que contem os valores do Globais.js sendo assim uma altrra????o em Globais.js ira altrar o cont??udo dos dois arquivos tanto o App.js qunato o do Info.js
         43: ainda na aula 27 criamos um setState pra a variavel resumo em Globais.js : const [resumo,setResumo]=useState(Globais.resumo) pra poder manifestar a????es na tela. Em seguida criamos duas fun????es:   
         const gravarResumo=()=>{Globais.resumo=resumo;}
         const verResumo=()=>{alert(Globais.resumo)
         } e depois crimos dois buttom um pra gravar o resumo e o outro pra da o alert:<button onClick={()=>gravarResumo()}>Gravar resumo</button> e <button onClick={()=>verResumo()}>Ver resumo</button> .Dessa forma podemos ver que temos acesso as vari??veis Globais da Globais.js

         44:Na aula 28 criamos dois componentes Pagina1.js e Pagina2.js pra simular duas pagins distintas no navedor,
         importamos os componetes pagina 1 e pagina 2 pra o arquivo pai(App.js), crimaos um state: const [Pagina,setPagina]= useState(0), em seguida na linha 75 criamos um useEffect com  java script pra manipular o url em seguida uma fun????o linkPagina com condicionais window,open e por ultimo um fun????o retornarPagiana com condicionais e TAG button da linha 73:102 fazem parte da fun????o nativa react de carregaamento de componete

         45: Na aula 29 crimaos um Arquivo Tabela.js, com componete fun????o. primeiro crimaso um const carros com varios {}objetos com categoria pre??o e nome do ve??culo, depois criamos um fun????o tabelaCarro(cat) com um parametro categoria e com uma TABLE dentro dela, em seguida criamos um state categoria, criamos tambem uma fun????o linhas(cat) com o par??metro cat, dentro dela uma const LI=[] e depois ainda dentro dela um carros.forEach() pra percorrer o arrey carros.mais detalhes no arquvio filho Tabela.js

         46: Na aula 30 criamos o arquivo filho Imc.js
         nele criamos tabelas e fun????es pra retornar o IMC indice de massa corporal. os passo a passo da calculadora est??o comentado no arquivo Imc.js

         47: Na aula 31 faremos a calculadora imc novamente agora com os componentes separados em arquivos diferentes. Criamos os arquivos Ims2.js, Peso.js, Altura.js,Calcular.js e Resultado.js cada um com sua respectiva fun????o com parametro props. pois usaremos os states no arquivo pai(App.js) . Declaramos os states na linha 114:116  os imports da linha 32:37 e da linha 211:215 retonamos os comoponete declarando seus respectivos props
         
         48: Na aula 32 convertemos os componetes externos usados pra criar a calculadora IMC( Ims2.js, Peso.js, Altura.js, CalcularIMC.js e ResultadoIMC.js) convertemos de componete fun????o pra componete class de forma comentada. OBS: SEMPRE QUE O COMPONETE TIVER O STATE NO ARQUIVO PAI E FOR COMPONETE FUN????O USAR O : PROPS.A OBS2:SEMPRE QUE FOR COMPONETE CLASS USAR O THIS.PROPS.A  OBS3: E SEMPRE QUE HOUER UMA FUN????O NO COMPONENTE CLASS USAR O BIND PRA FUNDIR A FUN????O!
     
     
     
     
     





























     
     */