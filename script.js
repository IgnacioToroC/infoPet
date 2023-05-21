$(document).ready(function(){

    const TipoEmpresa = [
        {
            Id:1,
            Nombre:"Veterianria",
            Logo: 'veterinaria.webp'            
        },
        {
            Id:2,
            Nombre:"Mall",
            Logo:'mall.avif'            
        },
        {
            Id:3,
            Nombre:"Negocio",
            Logo:'supermarket-shop-logo-vector.jpg'            
        },
        {
            Id:4,
            Nombre:"Farmacia",
            Logo:'farmacia.png'          
        },
        {
            Id:5,
            Nombre:"Particular",
            Logo:'persona.png'            
        }
    ]

    const Empresa = [
        {
            Id:1,
            TipoEmpresa: 1,
            Nombre:"Pets",
            Direccion:"Gran Avenida José Miguel Carrera 8999, La Cisterna",
            Geolocation:"https://www.google.cl/maps/place/Gran+Av.+Jos%C3%A9+Miguel+Carrera+8999,+La+Cisterna,+Regi%C3%B3n+Metropolitana/@-33.5395176,-70.6676875,17z/data=!3m1!4b1!4m6!3m5!1s0x9662da5473f63e31:0x7ee6944c65339766!8m2!3d-33.5395221!4d-70.6651126!16s%2Fg%2F11d_5lgs6y",
            Logo: 'logo-social.png'
        },
        {
            Id:2,
            TipoEmpresa: 3,
            Nombre:"Gatoos felices",
            Direccion:"Avenida Providencia 589, Providencia",
            Geolocation:"https://www.google.cl/maps/place/Av.+Providencia+589,+7500710+Providencia,+Regi%C3%B3n+Metropolitana/@-33.4341183,-70.6290642,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c5868bd8b121:0x87a95dc0a3918922!8m2!3d-33.4341228!4d-70.6264893!16s%2Fg%2F11hbj9b9wl",
            Logo: 'logo-social.png'
        },
        {
            Id:3,
            TipoEmpresa: 1,
            Nombre:"Todo urgencia Pets",
            Direccion:"Santa Isabel 237, Providencia",
            Geolocation:"https://www.google.cl/maps/place/Sta.+Isabel+237,+7501449+Providencia,+Regi%C3%B3n+Metropolitana/@-33.4469382,-70.6305687,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c5794e55d2bb:0x6971d533b5c89658!8m2!3d-33.4469427!4d-70.6279938!16s%2Fg%2F11h2p5v7vq",
            Logo: 'logo-social.png'
        },
        {
            Id:4,
            TipoEmpresa: 2,
            Nombre:"Mall Vicuaña Mackena",
            Direccion:"Mallplaza Vespucio - Avenida Vicuña Mackenna, La Florida",
            Geolocation:"https://www.google.cl/maps/place/Mallplaza+Vespucio/@-33.5190227,-70.602873,17z/data=!3m1!4b1!4m6!3m5!1s0x9662d06757799979:0x913dd02e5daeb4b7!8m2!3d-33.5190272!4d-70.6002981!16s%2Fg%2F1v16rhwf",
            Logo: 'logo-social.png'
        },
        {
            Id:5,
            TipoEmpresa: 2,
            Nombre:"Mall Vivo",
            Direccion:"Mall Vivo Imperio - Huerfanos, Santiago",
            Geolocation:"https://www.google.cl/maps/place/Mall+Vivo+Imperio/@-33.4395197,-70.6512459,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c5a3d328af75:0xb7ca1510a2d9c55!8m2!3d-33.4395242!4d-70.648671!16s%2Fg%2F11f2cj6rcr",
            Logo: 'logo-social.png'
        },
        {
            Id:6,
            TipoEmpresa: 2,
            Nombre:"Mall San Bernardo",
            Direccion:"Mallplaza Sur - Avenida Presidente Jorge Alessandri Rodríguez, San Bernardo",
            Geolocation:"https://www.google.cl/maps/place/Mallplaza+Sur/@-33.6316731,-70.715161,17z/data=!3m1!4b1!4m6!3m5!1s0x9662d8d6f394805d:0xc48310cc7ca335b!8m2!3d-33.6316777!4d-70.7105476!16s%2Fg%2F121hfggr",
            Logo: 'logo-social.png'
        },
        {
            Id:7,
            TipoEmpresa: 3,
            Nombre:"Donde Cosota",
            Direccion:"Avenida Américo Vespucio 231, Santiago, La Cisterna",
            Geolocation:"https://www.google.cl/maps/place/Av.+Am%C3%A9rico+Vespucio+231,+7970705+Santiago,+La+Cisterna,+Regi%C3%B3n+Metropolitana/@-33.5386018,-70.6643503,17z/data=!3m1!4b1!4m6!3m5!1s0x9662da56c7f40fe7:0xf5091f57b2dd6483!8m2!3d-33.5386063!4d-70.6617754!16s%2Fg%2F11sp493xxd",
            Logo: 'logo-social.png'
        }

    ]

    const TipoProducto = [
        {
            Id:1,            
            Nombre:"Anti Pulgas"
        },
        {
            Id:2,            
            Nombre:"Shampoo"
        },
        {
            Id:3,            
            Nombre:"Comida"
        },
        {
            Id:4,            
            Nombre:"Parasitos"
        },
        {
            Id:5,            
            Nombre:"Vitaminas"
        },
        {
            Id:6,            
            Nombre:"Urgencias"
        },

    ]

    const Productos = [
        {
            Id:1,
            Empresa: 1,
            TipoProducto:1,
            Nombre:"Anti Pulgas tatata",            
            Logo: 'notFound.jpg'
        },
        {
            Id:2,
            Empresa: 1,
            TipoProducto:4,
            Nombre:"Anti parasitos bla bla bla",            
            Logo: 'notFound.jpg'
        },
        {
            Id:3,
            Empresa: 2,
            TipoProducto:2,
            Nombre:"Shampoo olor a flores",            
            Logo: 'notFound.jpg'
        },
        {
            Id:4,
            Empresa: 2,
            TipoProducto:3,
            Nombre:"Gati",            
            Logo: 'gati.jpg'
        },
        {
            Id:5,
            Empresa: 3,
            TipoProducto:3,
            Nombre:"Martes dog",            
            Logo: 'notFound.jpg'
        },
        {
            Id:6,
            Empresa: 1,
            TipoProducto:6,            
            Nombre:"Radiografías torax",            
            Logo: 'notFound.jpg'
        }
    ]

    const ProductosConNombreEmpresa = Productos.map((producto) => {    
       // console.log("producto",producto)

        const empresa = Empresa.find((e) => e.Id === producto.Empresa);
        const tipoProducto = TipoProducto.find((tp) => tp.Id === producto.TipoProducto);
        const tipoEmpresa = TipoEmpresa.find((te) => te.Id === empresa.TipoEmpresa);
        
        console.log("producto",producto)
        console.log("empresa",empresa)
        console.log("tipoProducto",tipoProducto)
        console.log("tipoEmpresa",tipoEmpresa)
        console.log("----")

        const nombreEmpresa = empresa ? empresa.Nombre : "Empresa no encontrada"; 
        const direccionEmpresa = empresa ? empresa.Direccion : "Empresa no encontrada";       
        const geolocalizacionEmpresa = empresa ? empresa.Geolocation : "Empresa no encontrada";       
        const nombreTipoProducto = tipoProducto ? tipoProducto.Nombre : "Tipo de producto no encontrado";
        const nombreTipoEmpresa = tipoEmpresa ? tipoEmpresa.Nombre : "Tipo de empresa no encontrado";
        const logoTipoEmpresa = tipoEmpresa ? tipoEmpresa.Logo : "notFound.jpg";

        return {
            ...producto,
            DireccionEmpresa :direccionEmpresa,
            GeolocalizacionEmpresa:geolocalizacionEmpresa,
            LogoTipoEmpresa: logoTipoEmpresa,
            NombreEmpresa: nombreEmpresa,
            NombreTipoProducto: nombreTipoProducto,
            NombreTipoEmpresa: nombreTipoEmpresa,
        };

    });
    
   console.log(ProductosConNombreEmpresa);


    $("#buscador").keyup(function(){

        $("#listaProductos").empty();

        let filtro =$(this).val();

        const productosFiltrados = ProductosConNombreEmpresa.filter((producto) => {
            const nombreProducto = producto.Nombre.toLowerCase();
            const nombreEmpresa = producto.NombreEmpresa.toLowerCase();
            const nombreTipoProducto = producto.NombreTipoProducto.toLowerCase();
            const nombreTipoEmpresa = producto.NombreTipoEmpresa.toLowerCase();
            const LogoTipoEmpresa = producto.LogoTipoEmpresa.toLowerCase();
            const DireccionEmpresa = producto.DireccionEmpresa.toLowerCase();
            const GeolocalizacionEmpresa = producto.GeolocalizacionEmpresa.toLowerCase();
            const LogoProducto = producto.Logo;
        
            return (
                nombreProducto.includes(filtro.toLowerCase()) ||
                nombreEmpresa.includes(filtro.toLowerCase()) ||
                nombreTipoProducto.includes(filtro.toLowerCase()) ||
                LogoTipoEmpresa.includes(filtro.toLowerCase()) ||
                DireccionEmpresa.includes(filtro.toLowerCase()) ||
                nombreTipoEmpresa.includes(filtro.toLowerCase()) 
            );
        });



        console.log(productosFiltrados);

        productosFiltrados.map((p) =>{
            $("#listaProductos").append(
                $("<div>", { "class":"containerProducto"}).append(
                    $("<div>", { "class":"empresaNombre"}).append(
                        $("<img>", { "src":"./img/"+p.LogoTipoEmpresa, "class":"iconoEmpresa"}),
                        $("<label>").text(p.NombreEmpresa)
                    ),
                    $("<div>", { "class":"tipoEmpresaNombre"}).text(p.NombreTipoEmpresa),
                    $("<div>", { "class":"empresaDireccion"}).append(
                        $("<a>", { "target":"_blank", "href":p.GeolocalizacionEmpresa}).append(
                            $("<img>", { "src":"./img/ubicacion.png", "class":"iconoMapa"}),
                            $("<label>").text(p.DireccionEmpresa) 
                        )
                    ),
                    $("<div>", { "class":"productoNombre"}).append(
                        $("<label>").text(p.Nombre),
                        $("<img>", { "style": "width: 200px; height: 200px; margin: 0 auto; display: block;", "src":"./img/"+p.Logo, "class":"iconoMapa" }).text(p.Nombre)
				
			
                    )
                )

            )    
            console.log(p.LogoTipoEmpresa)

        })

    })

});