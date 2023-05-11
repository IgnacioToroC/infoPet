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

    console.log(TipoEmpresa, Empresa, TipoProducto, Productos)
})