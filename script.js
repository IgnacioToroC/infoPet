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
            Direccion:"Esquina 4, el bosque",
            Logo: 'logo-social.png'
        },
        {
            Id:2,
            TipoEmpresa: 3,
            Nombre:"Gatoos felices",
            Direccion:"Algarobo",
            Logo: 'logo-social.png'
        },
        {
            Id:3,
            TipoEmpresa: 1,
            Nombre:"Todo urgencia Pets",
            Direccion:"El Tabo",
            Logo: 'logo-social.png'
        },
        {
            Id:4,
            TipoEmpresa: 2,
            Nombre:"Mall Vicuaña Mackena",
            Direccion:"Vicuña Mackena",
            Logo: 'logo-social.png'
        },
        {
            Id:5,
            TipoEmpresa: 2,
            Nombre:"Mall Vivo",
            Direccion:"Centro",
            Logo: 'logo-social.png'
        },
        {
            Id:6,
            TipoEmpresa: 2,
            Nombre:"Mall San Bernardo",
            Direccion:"Portales 111",
            Logo: 'logo-social.png'
        },
        {
            Id:7,
            TipoEmpresa: 3,
            Nombre:"Donde Cosota",
            Direccion:"Gran Avenida",
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
            Logo: 'notFound.jpg'
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
        const nombreTipoProducto = tipoProducto ? tipoProducto.Nombre : "Tipo de producto no encontrado";
        const nombreTipoEmpresa = tipoEmpresa ? tipoEmpresa.Nombre : "Tipo de empresa no encontrado";
        const logoTipoEmpresa = tipoEmpresa ? tipoEmpresa.Logo : "notFound.jpg";

        return {
            ...producto,
            LogoTipoEmpresa: logoTipoEmpresa,
            NombreEmpresa: nombreEmpresa,
            NombreTipoProducto: nombreTipoProducto,
            NombreTipoEmpresa: nombreTipoEmpresa,
        };

    });
    
   console.log(ProductosConNombreEmpresa);


    $("#buscador").keyup(function(){
        let filtro =$(this).val();

        const productosFiltrados = ProductosConNombreEmpresa.filter((producto) => {
            const nombreProducto = producto.Nombre.toLowerCase();
            const nombreEmpresa = producto.NombreEmpresa.toLowerCase();
            const nombreTipoProducto = producto.NombreTipoProducto.toLowerCase();
            const nombreTipoEmpresa = producto.NombreTipoEmpresa.toLowerCase();
            const LogoTipoEmpresa = producto.LogoTipoEmpresa.toLowerCase();
        
            return (
                nombreProducto.includes(filtro.toLowerCase()) ||
                nombreEmpresa.includes(filtro.toLowerCase()) ||
                nombreTipoProducto.includes(filtro.toLowerCase()) ||
                LogoTipoEmpresa.includes(filtro.toLowerCase()) ||
                nombreTipoEmpresa.includes(filtro.toLowerCase()) 
            );
        });



        console.log(productosFiltrados);

        productosFiltrados.map((p) =>{
            console.log(p.LogoTipoEmpresa)

        })

    })

});