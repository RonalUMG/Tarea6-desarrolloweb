

const Persona1= {Nombre:'juan',nota: 10};
const Persona2= {Nombre:'maria',nota: 30};
const Persona3= {Nombre:'carlos',nota: 20};
const Persona4= {Nombre:'karla',nota: 40};


const Persona5= {Nombre:'Lili',nota: 30};
const Persona6= {Nombre:'Cleo',nota: 40};
const Persona7= {Nombre:'Pedro',nota: 33};
const Persona8= {Nombre:'Marco',nota: 21};



    

   

    function userTemplate(Persona) {
        var color ="";
        if(parseInt(Persona.nota) <= 10){ color = "red";}
        else if(parseInt(Persona.nota) >= 21){ color = "blue";}
        else {color ="green"}  
        return `        
            <p> ${Persona.Nombre} &nbsp;&nbsp;&nbsp;<FONT COLOR="${color}">${Persona.nota} </FONT><br></p>
        `;
      }
      document.write(`<br><br><br>`);

    document.write(`Desarrollo web <br>`);
    document.write(userTemplate( Persona1));
    document.write(userTemplate( Persona2));
    document.write(userTemplate( Persona3));
    document.write(userTemplate( Persona4));
    document.write(`<br><br><br>`)
    document.write(`Programacion 2 <br>`);
    document.write(userTemplate( Persona5));
    document.write(userTemplate( Persona6));
    document.write(userTemplate( Persona7));
    document.write(userTemplate( Persona8));

