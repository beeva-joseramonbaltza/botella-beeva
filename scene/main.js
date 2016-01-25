
var camera, scene, renderer, mesh, mouse, controls,
	width = window.innerWidth, 
	height = window.innerHeight;

var clock = new THREE.Clock();
var mouse = new THREE.Vector2();

//var group_botella = new THREE.Object3D();
//var group_mesa = new THREE.Object3D();
	
init();
animate();

function init() {

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer( { antialias: true, preserveDrawingBuffer: true, alpha: true } );
	renderer.setSize( width, height );
	renderer.shadowMapEnabled = true;
	renderer.shadowMapType = THREE.PCFSoftShadowMap;
	renderer.setViewport( 0,0,width, height );
	renderer.getMaxAnisotropy();

	var container = document.getElementById('container');
	container.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera( 50, (width/height), 0.1, 10000000 );
	camera.position.set( 1500, 1500, 1500 );

	mouse = new THREE.Vector2();

	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.enableDamping = true;
	controls.dampingFactor = 0.25;
	controls.enableZoom = true;
	controls.target.set( 0,0,0 );

	buildShape();

	var directionalLight = new THREE.SpotLight(0xeeeeee, 1.5);
		directionalLight.position.set(2000, 3500,2500);
		//directionalLight.target.position.set( 0, 0, 0 );
		//directionalLight.shadowCameraVisible = true;
		directionalLight.castShadow = true;
		directionalLight.shadowCameraFar = 10000;
		directionalLight.shadowDarkness = 0.5;
		directionalLight.shadowMapWidth = 2048;
		directionalLight.shadowMapHeight = 2048;
		directionalLight.name = 'luzDireccional'

	scene.add( directionalLight );
	//
	window.addEventListener( 'resize', onWindowResize, false );

}


function buildShape(){
	// COPIA AQUI EL CODIGO DEL OBJETO PARA RENDERIZARLO EN ESCENA
	var TextureCylinder = THREE.ImageUtils.loadTexture( "images/logoBeeva.png" );
		TextureCylinder.wrapS = TextureCylinder.wrapT = THREE.RepeatWrapping; 
		TextureCylinder.repeat.set( 1.3, 1 );	
	var material = new THREE.MeshPhongMaterial( { map: TextureCylinder,color: 0x888888, emissive: 0x888888, specular: 0x111111, shininess: 100, metal: true, transparent: true, opacity: 1, side: THREE.DoubleSide } );

	var CYLINDERradiusTop = 150; //radio de la parte superios del cilindro
	var CYLINDERradiusBottom = 150;	//radio de la parte inferior del cilindro
	var CYLINDERheigth = 700;	//altura del cilindro
	var CYLINDERradioSegments = 32; //segmentos utilizados para dibujar el cilindro(cuantos mas segmentos mas redondo)
	var CYLINDERheigthSegments = 1;	//segmentos necesarios para dibutar la altura del cilindro
	var CYLINDERopenEnded = false;	//en off el cilindro en hueco
	var circleStartCylinder = 0; //grado desde el que empieza a dibujar la pared del cilindro
	var circleCylinder = 6.3; //grados que abarca el cilindro (360, solo 180...)

	var CYLINDERgeometry = new THREE.CylinderGeometry( CYLINDERradiusTop, CYLINDERradiusBottom, CYLINDERheigth, CYLINDERradioSegments, CYLINDERheigthSegments, CYLINDERopenEnded, circleStartCylinder, circleCylinder );
	var cylinder = new THREE.Mesh( CYLINDERgeometry, material );
		cylinder.castShadow = true;	//emitir sombras
		cylinder.receiveShadow = true;	//recibir sombras
		cylinder.position.set(0,-100,0);	//position del objeto(x,y,z)
		cylinder.rotation.set(0,0,0);	//rotacion del objeto(x,y,z)
		cylinder.scale.set(1,1,1);		//escala del objeto(x,y,z)
	//group.add( cylinder );
	scene.add(cylinder);

/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/

	var SPHEREmaterial = new THREE.MeshPhongMaterial( {color: 0x000000, emissive: 0x111111, specular: 0xFFFFFF, shininess: 100, metal: true, side: THREE.DoubleSide} );

	var SPHEREradius = 150	; //dimensiones de la esfera
	var SPHEREwidthSegments = 32;	//segmentos usados para dibujar la esfera, cuantos mas segmentos mas redonda pero mas pesada de dibujar
	var SPHEREheigthSegments = 32;	////segmentos usados para dibujar la esfera, cuantos mas segmentos mas redonda pero mas pesada de dibujar
	var SPHEREangleStart = 0; //grado desde el que empieza a dibujar la pared de la espera
	var SPHEREangleLenght = 6.3; //grados que abarca la esfera (360, solo 180...)

	var SPHEREgeometry = new THREE.SphereGeometry( SPHEREradius, SPHEREwidthSegments, SPHEREheigthSegments, SPHEREangleStart, SPHEREangleLenght );
	var sphere = new THREE.Mesh( SPHEREgeometry, SPHEREmaterial );
		sphere.castShadow = true;	//emitir sombras
		sphere.receiveShadow = true;	//recibir sombras
		sphere.position.set(0,217,0);	//position del objeto(x,y,z)
		sphere.rotation.set(0,0,0);	//rotacion del objeto(x,y,z)
		sphere.scale.set(1,1,1);	//escala del objeto(x,y,z)
	//group.add( sphere );	
	scene.add(sphere);

	/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
	var CYLINDERmaterial = new THREE.MeshPhongMaterial( {color: 0x000000, emissive: 0x111111, specular: 0xFFFFFF, shininess: 100, metal: true, side: THREE.DoubleSide} );

	var CYLINDERradiusTop = 50; //radio de la parte superios del cilindro
	var CYLINDERradiusBottom = 50;	//radio de la parte inferior del cilindro
	var CYLINDERheigth = 480;	//altura del cilindro
	var CYLINDERradioSegments = 32; //segmentos utilizados para dibujar el cilindro(cuantos mas segmentos mas redondo)
	var CYLINDERheigthSegments = 1;	//segmentos necesarios para dibutar la altura del cilindro
	var CYLINDERopenEnded = false;	//en off el cilindro en hueco
	var circleStartCylinder = 0; //grado desde el que empieza a dibujar la pared del cilindro
	var circleCylinder = 6.3; //grados que abarca el cilindro (360, solo 180...)

	var CYLINDERgeometry = new THREE.CylinderGeometry( CYLINDERradiusTop, CYLINDERradiusBottom, CYLINDERheigth, CYLINDERradioSegments, CYLINDERheigthSegments, CYLINDERopenEnded, circleStartCylinder, circleCylinder );
	var cylinder = new THREE.Mesh( CYLINDERgeometry, CYLINDERmaterial );
		cylinder.castShadow = true;	//emitir sombras
		cylinder.receiveShadow = true;	//recibir sombras
		cylinder.position.set(0,170,0);	//position del objeto(x,y,z)
		cylinder.rotation.set(0,0,0);	//rotacion del objeto(x,y,z)
		cylinder.scale.set(1,1,1);		//escala del objeto(x,y,z)
	//group.add( cylinder );
	scene.add(cylinder);


/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/

	var DONUTmaterial = new THREE.MeshPhongMaterial( {color: 0x000000, emissive: 0x111111, specular: 0xFFFFFF, shininess: 100, metal: true, side: THREE.DoubleSide} );

	var DONUTradius = 48; //radio del anillo
	var DONUTtubeWidth = 10;	//ancho del anillo
	var DONUTradialSegments = 16;	//segmentos usados para dibujar el anillo
	var DONUTtubularSegments = 100;	//segmentos utilizados para dibujar el tubo que forma el anillo
	var DONUTarcLength = 6.3;	//grados que abarca el anillo(360, solo 180...)

	var DONUTgeometry = new THREE.TorusGeometry(DONUTradius, DONUTtubeWidth, DONUTradialSegments, DONUTtubularSegments, DONUTarcLength );
	var donut = new THREE.Mesh( DONUTgeometry, DONUTmaterial );
		donut.castShadow = true;	//emitir sombras
		donut.receiveShadow = true;	//recibir sombras
		donut.position.set(0,420,0);	//position del objeto(x,y,z)
		donut.rotation.set((Math.PI)/2,0,0);	//rotacion del objeto(x,y,z)
		donut.scale.set(1,1,1);		//escala del objeto(x,y,z)
	//group.add( donut );
	scene.add(donut);

/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
	var DONUTmaterial = new THREE.MeshPhongMaterial( {color: 0x000000, emissive: 0x111111, specular: 0xFFFFFF, shininess: 100, metal: true, side: THREE.DoubleSide} );

	var DONUTradius = 40; //radio del anillo
	var DONUTtubeWidth = 15;	//ancho del anillo
	var DONUTradialSegments = 16;	//segmentos usados para dibujar el anillo
	var DONUTtubularSegments = 100;	//segmentos utilizados para dibujar el tubo que forma el anillo
	var DONUTarcLength = 6.3;	//grados que abarca el anillo(360, solo 180...)

	var DONUTgeometry = new THREE.TorusGeometry(DONUTradius, DONUTtubeWidth, DONUTradialSegments, DONUTtubularSegments, DONUTarcLength );
	var donut = new THREE.Mesh( DONUTgeometry, DONUTmaterial );
		donut.castShadow = true;	//emitir sombras
		donut.receiveShadow = true;	//recibir sombras
		donut.position.set(0,420,0);	//position del objeto(x,y,z)
		donut.rotation.set(0,0,0);	//rotacion del objeto(x,y,z)
		donut.scale.set(1,1,1);		//escala del objeto(x,y,z)
	//group.add( donut );
	scene.add(donut);

/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/****MESA*********/
/******************************************/
//group.position.set(0,0,10)
//group.scale.set(0.1,0.1,0.1)
//scene.add(group);

	var CYLINDERmaterial = new THREE.MeshPhongMaterial( {color: 0xFFFFFF, emissive: 0x000033, specular: 0x111111, shininess: 100, metal: true, side: THREE.DoubleSide} );

	var CYLINDERradiusTop = 1200; //radio de la parte superios del cilindro
	var CYLINDERradiusBottom = 1200;	//radio de la parte inferior del cilindro
	var CYLINDERheigth = 50;	//altura del cilindro
	var CYLINDERradioSegments = 32; //segmentos utilizados para dibujar el cilindro(cuantos mas segmentos mas redondo)
	var CYLINDERheigthSegments = 1;	//segmentos necesarios para dibutar la altura del cilindro
	var CYLINDERopenEnded = false;	//en off el cilindro en hueco
	var circleStartCylinder = 0; //grado desde el que empieza a dibujar la pared del cilindro
	var circleCylinder = 6.3; //grados que abarca el cilindro (360, solo 180...)

	var CYLINDERgeometry = new THREE.CylinderGeometry( CYLINDERradiusTop, CYLINDERradiusBottom, CYLINDERheigth, CYLINDERradioSegments, CYLINDERheigthSegments, CYLINDERopenEnded, circleStartCylinder, circleCylinder );
	var cylinder = new THREE.Mesh( CYLINDERgeometry, CYLINDERmaterial );
		cylinder.castShadow = true;	//emitir sombras
		cylinder.receiveShadow = true;	//recibir sombras
		cylinder.position.set(0,-450,0);	//position del objeto(x,y,z)
		cylinder.rotation.set(0,0,0);	//rotacion del objeto(x,y,z)
		cylinder.scale.set(1,1,1);		//escala del objeto(x,y,z)
	scene.add( cylinder );

/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/**********PATA*************/


	var CYLINDERmaterial = new THREE.MeshPhongMaterial( {color: 0xcccccc, emissive: 0x000033, specular: 0x111111, shininess: 100, metal: true, side: THREE.DoubleSide} );

	var CYLINDERradiusTop = 200; //radio de la parte superios del cilindro
	var CYLINDERradiusBottom = 200;	//radio de la parte inferior del cilindro
	var CYLINDERheigth = 2800;	//altura del cilindro
	var CYLINDERradioSegments = 32; //segmentos utilizados para dibujar el cilindro(cuantos mas segmentos mas redondo)
	var CYLINDERheigthSegments = 1;	//segmentos necesarios para dibutar la altura del cilindro
	var CYLINDERopenEnded = false;	//en off el cilindro en hueco
	var circleStartCylinder = 0; //grado desde el que empieza a dibujar la pared del cilindro
	var circleCylinder = 6.3; //grados que abarca el cilindro (360, solo 180...)

	var CYLINDERgeometry = new THREE.CylinderGeometry( CYLINDERradiusTop, CYLINDERradiusBottom, CYLINDERheigth, CYLINDERradioSegments, CYLINDERheigthSegments, CYLINDERopenEnded, circleStartCylinder, circleCylinder );
	var cylinder = new THREE.Mesh( CYLINDERgeometry, CYLINDERmaterial );
		cylinder.castShadow = true;	//emitir sombras
		cylinder.receiveShadow = true;	//recibir sombras
		cylinder.position.set(0,-1850,0);	//position del objeto(x,y,z)
		cylinder.rotation.set(0,0,0);	//rotacion del objeto(x,y,z)
		cylinder.scale.set(1,1,1);		//escala del objeto(x,y,z)
	scene.add( cylinder );


/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/**********base*************/


	var CYLINDERmaterial = new THREE.MeshPhongMaterial( {color: 0xcccccc, emissive: 0x000033, specular: 0x111111, shininess: 100, metal: true, side: THREE.DoubleSide} );

	var CYLINDERradiusTop = 1000; //radio de la parte superios del cilindro
	var CYLINDERradiusBottom = 1000;	//radio de la parte inferior del cilindro
	var CYLINDERheigth = 25;	//altura del cilindro
	var CYLINDERradioSegments = 32; //segmentos utilizados para dibujar el cilindro(cuantos mas segmentos mas redondo)
	var CYLINDERheigthSegments = 1;	//segmentos necesarios para dibutar la altura del cilindro
	var CYLINDERopenEnded = false;	//en off el cilindro en hueco
	var circleStartCylinder = 0; //grado desde el que empieza a dibujar la pared del cilindro
	var circleCylinder = 6.3; //grados que abarca el cilindro (360, solo 180...)

	var CYLINDERgeometry = new THREE.CylinderGeometry( CYLINDERradiusTop, CYLINDERradiusBottom, CYLINDERheigth, CYLINDERradioSegments, CYLINDERheigthSegments, CYLINDERopenEnded, circleStartCylinder, circleCylinder );
	var cylinder = new THREE.Mesh( CYLINDERgeometry, CYLINDERmaterial );
		cylinder.castShadow = true;	//emitir sombras
		cylinder.receiveShadow = true;	//recibir sombras
		cylinder.position.set(0,-3200,0);	//position del objeto(x,y,z)
		cylinder.rotation.set(0,0,0);	//rotacion del objeto(x,y,z)
		cylinder.scale.set(1,1,1);		//escala del objeto(x,y,z)
	scene.add( cylinder );


/************************************


SUELO


*****************************/
var planexAxis = 10000;//dimensiones x
var planeyAxis = 10000;//dimensiones y
var planezAxis = 10000;//dimensiones z

var PLANEmaterial = new THREE.MeshPhongMaterial( {color: 0x444444, emissive: 0x444444, specular: 0x111111, shininess: 100, metal: true, side: THREE.DoubleSide} );

var PLANEgeometry = new THREE.PlaneGeometry( planexAxis, planeyAxis, planezAxis );
var plane = new THREE.Mesh( PLANEgeometry, PLANEmaterial );
	plane.position.set(0, -3350,0);	//position del objeto(x,y,z)
	plane.rotation.set((Math.PI)/2,0,0);	//rotacion del objeto(x,y,z)
	plane.scale.set(1,1,1);		//escala del objeto(x,y,z)
scene.add( plane );




}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );

}

function movement(value, object, delay, duration){
          var tween = new TWEEN.Tween(object).to(
          	value
          	,duration).easing(TWEEN.Easing.Quadratic.Out).onUpdate(function () {
          	/*camera.position.x = valueX;
          	camera.position.y = valueY;
          	camera.position.z = valueZ;*/
          }).delay(delay).start();
}

function animate() {

	setTimeout( function() {
		requestAnimationFrame( animate );
	}, 1000/30 );

    TWEEN.update();

	render();

	//if(controls) controls.update( clock.getDelta() );
}

function render(){
	renderer.render(scene,camera);
}
