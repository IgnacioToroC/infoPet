$(document).ready(function(){

    const TipoEmpresa = [
        {
            Id:1,
            Nombre:"Veterianria"            
        },
        {
            Id:2,
            Nombre:"Mall"            
        },
        {
            Id:3,
            Nombre:"Negocio"            
        },
        {
            Id:4,
            Nombre:"Farmacia"            
        },
        {
            Id:5,
            Nombre:"Particular"            
        }
    ]

    const Empresa = [
        {
            Id:1,
            TipoEmpresa: 1,
            Nombre:"Pets",
            Direccion:"Esquina 4, el bosque",
            Logo: 'imagen'
        },
        {
            Id:2,
            TipoEmpresa: 1,
            Nombre:"Gatoos felices",
            Direccion:"Algarobo",
            Logo: 'imagen'
        },
        {
            Id:3,
            TipoEmpresa: 1,
            Nombre:"Todo urgencia Pets",
            Direccion:"El Tabo",
            Logo: 'imagen'
        },
        {
            Id:4,
            TipoEmpresa: 2,
            Nombre:"Mall Vicuaña Mackena",
            Direccion:"Vicuña Mackena",
            Logo: 'imagen'
        },
        {
            Id:5,
            TipoEmpresa: 2,
            Nombre:"Mall Vivo",
            Direccion:"Centro",
            Logo: 'imagen'
        },
        {
            Id:6,
            TipoEmpresa: 2,
            Nombre:"Mall San Bernardo",
            Direccion:"Portales 111",
            Logo: 'imagen'
        },
        {
            Id:7,
            TipoEmpresa: 3,
            Nombre:"Donde Cosota",
            Direccion:"Gran Avenida",
            Logo: 'imagen'
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
            Logo: 'imagen'
        },
        {
            Id:2,
            Empresa: 1,
            TipoProducto:4,
            Nombre:"Anti parasitos bla bla bla",            
            Logo: 'imagen'
        },
        {
            Id:3,
            Empresa: 2,
            TipoProducto:2,
            Nombre:"Shampoo olor a flores",            
            Logo: 'imagen'
        },
        {
            Id:4,
            Empresa: 2,
            TipoProducto:3,
            Nombre:"Gati",            
            Logo: 'imagen'
        },
        {
            Id:5,
            Empresa: 3,
            TipoProducto:3,
            Nombre:"Martes dog",            
            Logo: 'imagen'
        },
        {
            Id:6,
            Empresa: 1,
            TipoProducto:6,
            Nombre:"Radiografías torax",            
            Logo: 'imagen'
        }
    ]

    const ProductosConNombreEmpresa = Productos.map((producto) => {
        const empresa = Empresa.find((e) => e.Id === producto.Empresa);
        const tipoProducto = TipoProducto.find((tp) => tp.Id === producto.TipoProducto);
        const tipoEmpresa = TipoEmpresa.find((te) => te.Id === empresa.TipoEmpresa);

        const nombreEmpresa = empresa ? empresa.Nombre : "Empresa no encontrada";
        const nombreTipoProducto = tipoProducto ? tipoProducto.Nombre : "Tipo de producto no encontrado";
        const nombreTipoEmpresa = tipoEmpresa ? tipoEmpresa.Nombre : "Tipo de empresa no encontrado";

        return {
            ...producto,
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
        
            return (
                nombreProducto.includes(filtro.toLowerCase()) ||
                nombreEmpresa.includes(filtro.toLowerCase()) ||
                nombreTipoProducto.includes(filtro.toLowerCase()) ||
                nombreTipoEmpresa.includes(filtro.toLowerCase())
            );
        });

        console.log(productosFiltrados);

    })

});