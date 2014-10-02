function pokemon(nombre,numero,tipo,tipo2,debilidad,vida,ataque,defensa,info) {
	this.pokemonN = nombre;
	this.pokemonNu = numero;
	this.pokemonT = tipo;
	this.pokemonT2= tipo2;
	this.pokemonDe = debilidad;
	this.pokemonV = vida;
	this.pokemonA = ataque;
	this.pokemonD = defensa;
	this.pokemonI = info;
	


}
var P1 = new pokemon("Bulbasaur",1,"Planta","Veneno","Fuego Volador Hielo Psíquico",20,30,20,"Una rara semilla le fue plantada en el lomo al nacer. La planta brota y crece con este Pokémon.");
var P2 = new pokemon("Ivysaur",2,"Planta","Veneno","Fuego Volador Hielo Psíquico",30,30,30,"Este Pokémon tiene un bulbo en el lomo. Dicen que, al absorber nutrientes, el bulbo se transforma en una flor grande.");
var P3 = new pokemon("Venusaur",3,"Planta","Veneno","Fuego Volador Hielo Psíquico",30,40,40,"Llena su cuerpo de energía con los rayos solares que captan los anchos pétalos de su flor.");
var P4 = new pokemon("Charmander",4,"Fuego"," ","Tierra Roca Agua",20,30,20,"La llama de su cola indica la fuerza vital de Charmander. Será brillante si está sano.");
var P5  = new pokemon("Charmeleon ",5,"Fuego"," ","Tierra Roca Agua",30,30,30,"Suele usar la cola para derribar a su rival. Cuando lo tira, se vale de sus afiladas garras para acabar con él.");
var P6 = new pokemon("Charizard",6,"Fuego","Volador","Tierra Roca Agua",30,40,30,"Cuando lanza una descarga de fuego supercaliente, la roja llama de su cola brilla más intensamente.");
var P7 = new pokemon("Squirtle",7,"Agua"," ","Electrico Planta",20,30,30,"Se protege con su caparazón y luego contraataca lanzando agua a presión cuando tiene oportunidad.");
var P8 = new pokemon("Wartortle",8,"Agua"," ","Electrico Planta",30,30,40,"Si es golpeado, esconderá su cabeza. Aun así, su cola puede seguir golpeando.");
var P9 = new pokemon("Blastoise",9,"Agua"," ","Tierra Roca Agua",30,40,40,"Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.");
var P10 = new pokemon("Caterpie",10,"Bicho"," ","Fuego Volador Roca",20,20,20,"Para protegerse despide un hedor horrible de sus antenas, con el que repele a sus enemigos.");
var P11 = new pokemon("Metapod",11,"Bicho"," ","Fuego Volador Roca",20,10,30,"Su frágil cuerpo está recubierto de una coraza dura como el acero. Permanece quieto en su desarrollo.");
var P12 = new pokemon("Butterfree",12,"Bicho","Volador","Roca Electrico Fuego Volador Hielo",30,20,20,"Adora el néctar de las flores. Puede localizar hasta las más pequeñas cantidades de polen.");
var P13 = new pokemon("Weedle",13,"Bicho","Veneno","Fuego Volador Psíquico Roca",20,20,20,"Suele habitar bosques y praderas. Tiene un afilado y venenoso aguijón de unos 5 cm encima de la cabeza.");
var P14 = new pokemon("Kakuna",14,"Bicho","Veneno","Fuego Volador Psíquico Roca",20,10,20,"Casi incapaz de moverse, este Pokémon solo puede endurecer su caparazón para protegerse.");
var P15  = new pokemon("Beedrill",15,"Bicho","Veneno","Fuego Volador Psíquico Roca",30,60,20,"Tiene 3 aguijones venenosos en sus patas y cola. Suelen pinchar a sus enemigos repetidas veces.");
var P16 = new pokemon("Pidgey",16,"Normal","Volador","Electrico Hielo Roca",20,20,20,"Muy común en bosques y selvas. Aletea al nivel del suelo para levantar la gravilla.");
var P17 = new pokemon("Pidgeotto",17,"Normal","Volador","Electrico Hielo Roca",30,30,30,"Tiene unas garras desarrolladas. Puede atrapar un Exeggcute y transportarlo desde una distancia de casi 100 km.");
var P18 = new pokemon("Pidgeot",18,"Normal","Volador","Electrico Hielo Roca",30,40,30,"Cuando caza, vuela muy deprisa a ras del agua y sorprende a inocentes presas como Magikarp.");
var P19 = new pokemon("Rattata",19,"Normal"," ","Lucha",20,40,40,"Tiene unos largos y afilados colmillos que no dejan de crecer. Le resultan muy útiles para destruir cosas.");
var P20 = new pokemon("Raticate",20,"Normal","Volador","Electrico Hielo Roca",40,60,40,"Lima sus colmillos royendo objetos duros. Con ellos puede destruir incluso paredes de hormigón.");
var P21 = new pokemon("Spearow",21,"Normal","Volador","Lucha",20,30,20,"Muy protector de su territorio, mueve sus cortas alas sin descanso para lanzarse a toda velocidad.");
var P22 = new pokemon("Fearow",22,"Normal","Volador","Electrico Hielo Roca",30,60,30,"Con sus enormes y magníficas alas, puede seguir volando sin tener que aterrizar para descansar.");
var P23 = new pokemon("Ekans",23,"Veneno"," ","Tierra Psíquico",20,30,20,"Cuanto más viejo, más crece este Pokémon. Por la noche, descansa en las ramas de los árboles.");
var P24 = new pokemon("Arbok",24,"Veneno"," ","Tierra Psíquico",30,40,30,"Para intimidar a sus enemigos, hincha el pecho y echa aire por la boca emitiendo sonidos.");
var P25 = new pokemon("Pikachu",25,"Electrico"," ","Tierra",20,30,20,"Las bolsas de las mejillas están llenas de electricidad, que libera cuando se siente amenazado.");
var P26 = new pokemon("Raichu",26,"Electrico"," ","Tierra",30,60,30,"Cuando se carga de electricidad, sus músculos se tensan y se vuelve más agresivo de lo normal.");
var P27 = new pokemon("Sandshrew",27,"Tierra"," ","Planta Hielo Agua",20,40,40,"Este Pokémon permanece bajo tierra. Si se siente amenazado, se enrosca para defenderse.");
var P28 = new pokemon("Sandslash",28,"Tierra"," ","Planta Hielo Agua",30,60,60,"Ante el peligro, se acurruca en un espinoso ovillo. De esta forma puede rodar para atacar o escapar.");
var P29 = new pokemon("Nidoran♀",29,"Veneno"," ","Tierra Psíquico",20,30,20,"Aunque pequeñas, sus venenosas púas son muy peligrosas. Tienen un cuerno más pequeño que los machos.");
var P30 = new pokemon("Nidorina",30,"Veneno"," ","Tierra Psíquico",30,30,30,"Tiene un carácter afable. Emite ondas ultrasónicas para confundir al enemigo.");
var P31 = new pokemon("Nidoqueen",31,"Veneno","Tierra","Tierra Hielo Psíquico Agua",40,60,40,"Usa su cuerpo duro y escamoso para sellar la entrada a su madriguera y protegerse de los depredadores.");
var P32 = new pokemon("Nidoran♂",32,"Veneno"," ","Tierra Psíquico",20,30,20,"Saca las orejas por encima de la hierba para explorar el territorio. Le protege su cuerno venenoso.");
var P33 = new pokemon("Nidorino",33,"Veneno"," ","Tierra Psíquico",30,40,30,"Levanta sus grandes orejas para vigilar. Si detecta algo, atacará de inmediato.");
var P34 = new pokemon("Nidoking",34,"Veneno","Tierra","Tierra Hielo Psíquico Agua",30,60,30,"Es fácil reconocerlo por tener una dura piel y un gran cuerno lleno de peligrosísimo veneno.");
var P35 = new pokemon("Clefairy",35,"Hada"," ","Acero Veneno",60,40,40,"Se dice que la felicidad llegará a quien vea a un grupo de Clefairy bailando a la luz de la luna llena.");
var P36 = new pokemon("Clefable",36,"Hada"," ","Acero Veneno",80,60,60,"Su oído es tan agudo que puede oír una aguja caer a 1 km. Vive en montañas solitarias.");
var P37 = new pokemon("Vulpix",37,"Fuego"," ","Tierra Roca Agua",20,40,40,"Cuando nace solo tiene una cola, pero a medida que crece, esta se va dividiendo desde la punta.");
var P38 = new pokemon("Ninetales",38,"Fuego"," ","Tierra Roca Agua",60,60,60,"Tiene nueve colas y un pelaje de color dorado. Dicen que este Pokémon llega a vivir 1000 años.");
var P39 = new pokemon("Jigglypuff",39,"Normal","Hada","Acero Veneno",60,20,10,"Cautiva con la mirada a su enemigo y hace que se quede profundamente dormido mientras entona una dulce melodía.");
var P40 = new pokemon("Wigglytuff",40,"Normal","Hada","Acero Veneno",60,40,20,"Su piel es tan suave que si dos de ellos se acurrucan juntos, no querrán separarse nunca.");
var P41 = new pokemon("Zubat",41,"Veneno","Volador","Electrico Hielo Psíquico Roca",20,20,20,"Aunque carezca de ojos, puede detectar obstáculos con las ondas ultrasónicas que emite su boca.");
var P42 = new pokemon("Golbat",42,"Veneno","Volador","Electrico Hielo Psíquico Roca",30,40,30,"Cuando ataque, seguirá chupando energía de su víctima, aunque pese tanto que ya no pueda volar.");
var P43 = new pokemon("Oddish",43,"Planta","Veneno","Fuego Volador Hielo Psíquico",20,30,30,"Durante el día, se agazapa en el frío subsuelo huyendo del sol. La luz de la luna le hace crecer mucho.");
var P44 = new pokemon("Gloom",44,"Planta","Veneno","Fuego Volador Hielo Psíquico",30,30,30,"¡Huele bastante mal! De todas formas, una de cada mil personas aprecian su fétido olor.");
var P45 = new pokemon("Vileplume",45,"Planta","Veneno","Fuego Volador Hielo Psíquico",30,40,40,"CCuanto mayores son sus pétalos, más tóxico es su polen. Le pesa la cabeza y le cuesta mantenerla erguida.");
var P46 = new pokemon("Paras",46,"Bicho","Planta","Fuego Volador Bicho Hielo Veneno Roca",20,60,40,"Lleva en el lomo dos setas parásitas llamadas tochukaso, que crecen con él.");
var P47 = new pokemon("Parasect",47,"Bicho","Planta","Fuego Volador Bicho Hielo Veneno Roca",40,80,60,"Parasect está dominado por una seta parásita mayor que él. Dispersa esporas venenosas.");
var P48 = new pokemon("Venonat",48,"Bicho","Veneno","Fuego Volador Psíquico Roca",30,30,30,"Sus grandes ojos son en realidad grupos de ojos diminutos. Por la noche se siente atraído por la luz.");
var P49 = new pokemon("Venomoth",49,"Bicho","Veneno","Fuego Volador Psíquico Roca",60,60,40,"Lanza unas escamas que paralizan a cualquiera. Quien las toque, no podrá ni ponerse de pie.");
var P50 = new pokemon("Diglett",50,"Tierra"," ","Planta Hielo Agua",10,30,10,"Vive un metro por debajo del suelo, donde se alimenta de raíces. También aparece en la superficie.");
var P51 = new pokemon("Dugtrio",51,"Tierra"," ","Planta Hielo Agua",20,40,20,"En combate, cava la tierra, se esconde y sale de repente para golpear a su rival. Nunca se sabe por dónde puede aparecer.");
var P52 = new pokemon("Meowth",52,"Normal"," ","Lucha",20,40,40,"Es de naturaleza nocturna. Le atraen los objetos brillantes.");
var P53 = new pokemon("Persian",53,"Normal"," ","Lucha",40,60,30,"Aunque es muy admirado por el pelo, es difícil de entrenar como mascota, porque es un poco travieso.");
var P54 = new pokemon("Psyduck",54,"Agua"," ","Electrico Planta",20,30,20,"Padece continuamente dolores de cabeza. Cuando son muy fuertes, empieza a usar misteriosos poderes.");
var P55 = new pokemon("Golduck",55,"Agua"," ","Electrico Planta",30,40,30,"Aparece en ríos al anochecer. Puede usar poderes telequinéticos si su frente brilla misteriosamente.");

var P= [];
 P[1]=P1;
P[2]=P2;
P[3]=P3;
P[4]=P4;
P[5]=P5;
P[6]=P6;
P[7]=P7;
P[8]=P8;
P[9]=P9;
P[10]=P10;
P[11]=P11;
P[12]=P12;
P[13]=P13;
P[14]=P14;
P[15]=P15;
P[16]=P16;
P[17]=P17;
P[18]=P18;
P[19]=P19;
P[20]=P20;
P[21]=P21;
P[22]=P22;
P[23]=P23;
P[24]=P24;
P[25]=P25;
P[26]=P26;
P[27]=P27;
P[28]=P28;
P[29]=P29;
P[30]=P30;
P[31]=P31;
P[32]=P32;
P[33]=P33;
P[34]=P34;
P[35]=P35;
P[36]=P36;
P[37]=P37;
P[38]=P38;
P[39]=P39;
P[40]=P40;
P[41]=P41;
P[42]=P42;
P[43]=P43;
P[44]=P44;
P[45]=P45;
P[46]=P46;
P[47]=P47;
P[48]=P48;
P[49]=P49;
P[50]=P50;
P[51]=P51;
P[52]=P52;
P[53]=P53;
P[54]=P54;
P[55]=P55;


function pokedex(nombre){
	
	if(nombre.pokemonNu<10){
	var pG = '<audio autoplay> <source src="audio/00'+nombre.pokemonNu+'.mp3" type="audio/mpeg"><source src="audio/00'+nombre.pokemonNu+'.ogg" type="audio/ogg"> </audio>';
	document.getElementById('imagen').innerHTML = '<img src="img/00'+nombre.pokemonNu+'.png">'
	document.getElementById('nombre').innerHTML = nombre.pokemonN+" <span>#00"+nombre.pokemonNu+"</span>";

	}
	else if(nombre.pokemonNu<100){
	var pG = '<audio autoplay> <source src="audio/0'+nombre.pokemonNu+'.mp3" type="audio/mpeg"><source src="audio/0'+nombre.pokemonNu+'.ogg" type="audio/ogg"> </audio>';
	document.getElementById('imagen').innerHTML = '<img src="img/0'+nombre.pokemonNu+'.png">'
	document.getElementById('nombre').innerHTML = nombre.pokemonN+" <span>#0"+nombre.pokemonNu+"</span>";

	}else{
	var pG = '<audio autoplay> <source src="audio/'+nombre.pokemonNu+'.mp3" type="audio/mpeg"><source src="audio/'+nombre.pokemonNu+'.ogg" type="audio/ogg"> </audio>';
	document.getElementById('imagen').innerHTML = '<img src="img/'+nombre.pokemonNu+'.png">'
	document.getElementById('nombre').innerHTML = nombre.pokemonN+" <span>#"+nombre.pokemonNu+"</span>";

	}
	document.getElementById('grito').innerHTML =pG;
	document.getElementById('tipo').innerHTML = '<h2>Tipo</h2><span class="'+nombre.pokemonT+'">'+nombre.pokemonT+'</span><span class="'+nombre.pokemonT2+'">'+nombre.pokemonT2+'</span>';
	document.getElementById('debilidad').innerHTML='<h2>Debilidad</h2><span class="debil">'+nombre.pokemonDe+'</span>'
	document.getElementById('vad').innerHTML='<h2>Puntos</h2><span class="v">Vida '+nombre.pokemonV+'</span><span class="a">Ataque '+nombre.pokemonA+'</span><span class="d">Defensa '+nombre.pokemonD+'</span>';
	document.getElementById('pinf').innerHTML='<h2>Informacion</h2><p class="i">'+nombre.pokemonI+'</p>';
	document.getElementById('pokemon').style.display = "block";
	if((nombre.pokemonNu+1)<10 && (nombre.pokemonNu-1)<1){
	document.getElementById('mas').innerHTML='<img class="menos" onclick="pokedex(P55);" src="img/055.png"/><span onclick="pokedex(P55);" class="menos"># 0'+P55.pokemonNu+'</span><span onclick="pokedex(P'+(nombre.pokemonNu+1)+');" class="mas"># 00'+(nombre.pokemonNu+1)+'</span><img onclick="pokedex(P'+(nombre.pokemonNu+1)+');" class="mas" src="img/00'+(nombre.pokemonNu+1)+'.png"/>'
	
	}else if((nombre.pokemonNu+1)<10 && (nombre.pokemonNu-1)<=9){
	document.getElementById('mas').innerHTML='<img  onclick="pokedex(P'+(nombre.pokemonNu-1)+');" class="menos" src="img/00'+(nombre.pokemonNu-1)+'.png"/><span onclick="pokedex(P'+(nombre.pokemonNu-1)+');" class="menos"># 00'+(nombre.pokemonNu-1)+'</span><span onclick="pokedex(P'+(nombre.pokemonNu+1)+');" class="mas"># 00'+(nombre.pokemonNu+1)+'</span><img onclick="pokedex(P'+(nombre.pokemonNu+1)+');" class="mas" src="img/00'+(nombre.pokemonNu+1)+'.png"/>'
	
	}
	else if((nombre.pokemonNu+1)<20 && (nombre.pokemonNu-1)<=9){
	document.getElementById('mas').innerHTML='<img  onclick="pokedex(P'+(nombre.pokemonNu-1)+');" class="menos" src="img/00'+(nombre.pokemonNu-1)+'.png"/><span onclick="pokedex(P'+(nombre.pokemonNu-1)+');" class="menos"># 00'+(nombre.pokemonNu-1)+'</span><span onclick="pokedex(P'+(nombre.pokemonNu+1)+');" class="mas"># 0'+(nombre.pokemonNu+1)+'</span><img onclick="pokedex(P'+(nombre.pokemonNu+1)+');" class="mas" src="img/0'+(nombre.pokemonNu+1)+'.png"/>'
	
	}
	else if((nombre.pokemonNu+1)>55 ){
	document.getElementById('mas').innerHTML='<img  onclick="pokedex(P'+(nombre.pokemonNu-1)+');" class="menos" src="img/0'+(nombre.pokemonNu-1)+'.png"/><span onclick="pokedex(P'+(nombre.pokemonNu-1)+');" class="menos"># 0'+(nombre.pokemonNu-1)+'</span><span onclick="pokedex(P1);" class="mas"># 001</span><img onclick="pokedex(P1);" class="mas" src="img/001.png"/>'

	}

	else if((nombre.pokemonNu+1)<100 && (nombre.pokemonNu-1)<100){
	document.getElementById('mas').innerHTML='<img  onclick="pokedex(P'+(nombre.pokemonNu-1)+');" class="menos" src="img/0'+(nombre.pokemonNu-1)+'.png"/><span onclick="pokedex(P'+(nombre.pokemonNu-1)+');" class="menos"># 0'+(nombre.pokemonNu-1)+'</span><span onclick="pokedex(P'+(nombre.pokemonNu+1)+');" class="mas"># 0'+(nombre.pokemonNu+1)+'</span><img onclick="pokedex(P'+(nombre.pokemonNu+1)+');" class="mas" src="img/0'+(nombre.pokemonNu+1)+'.png"/>'
	
	}
	else{
	document.getElementById('mas').innerHTML='<img  onclick="pokedex(P'+(nombre.pokemonNu-1)+');" class="menos" src="img/'+(nombre.pokemonNu-1)+'.png"/><span onclick="pokedex(P'+(nombre.pokemonNu-1)+');" class="menos"># '+(nombre.pokemonNu-1)+'</span><span onclick="pokedex(P'+(nombre.pokemonNu+1)+');" class="mas"># '+(nombre.pokemonNu+1)+'</span><img onclick="pokedex(P'+(nombre.pokemonNu+1)+');" class="mas" src="img/'+(nombre.pokemonNu+1)+'.png"/>'

	}
}

//funcion que crea un menu pokemon
function GenerarMenuPekemon()
{
		for(var i=0;i<P.length;i++)
		{
			var menu=document.getElementById("menupokemon").innerHTML;
			document.getElementById("menupokemon").innerHTML=menu+"<li onclick='pokedex(P"+(i+1)+");'>"+P[i+1].pokemonN+"</li>"
		}
}