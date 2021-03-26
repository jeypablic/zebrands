define({ "api": [
  {
    "type": "post",
    "url": "/tracking",
    "title": "Registrar un evento",
    "version": "0.0.1",
    "name": "Tracking",
    "group": "Tracking",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Se encarga de registrar una accion ejecutada en el sistema.</p>",
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "name",
        "description": "<p>Nombre accion</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "action",
        "description": "<p>Accion ejecutada</p>"
      },
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "product",
        "description": "<p>Id del producto</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de la ejecución</p>"
          }
        ]
      }
    },
    "filename": "src/controller/trackingController.js",
    "groupTitle": "Tracking",
    "groupDescription": "<p>API necesaria para registrar eventos.</p>",
    "sampleRequest": [
      {
        "url": "https://localhost:7000/tracking"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a new User",
    "version": "0.0.1",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>In this case &quot;apiErrorStructure&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "name",
        "description": "<p>Name of the User.</p>"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "age",
        "description": "<p>Age of the User</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The new Users-ID.</p>"
          }
        ]
      }
    },
    "filename": "src/controller/trackingController.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://localhost:7000/user"
      }
    ]
  },
  {
    "type": "post",
    "url": "/add",
    "title": "Registrar un Usuario",
    "version": "0.0.1",
    "name": "Usuario",
    "group": "Usuario",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Se encarga de registrar un usuario del sistema.</p>",
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "rut",
        "description": "<p>Rut del usuario</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "nombre",
        "description": "<p>Nombre del usuario</p>"
      },
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "perfil",
        "description": "<p>Perfil del usuario</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de la ejecución</p>"
          }
        ]
      }
    },
    "filename": "src/controller/productoController.js",
    "groupTitle": "Usuario",
    "sampleRequest": [
      {
        "url": "https://localhost:7000/add"
      }
    ]
  },
  {
    "type": "post",
    "url": "/edit",
    "title": "Editar un Usuario",
    "version": "0.0.1",
    "name": "Usuario",
    "group": "Usuario",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Se encarga de editar un usuario del sistema.</p>",
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "rut",
        "description": "<p>Rut del usuario</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "nombre",
        "description": "<p>Nombre del usuario</p>"
      },
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "perfil",
        "description": "<p>Perfil del usuario</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de la ejecución</p>"
          }
        ]
      }
    },
    "filename": "src/controller/productoController.js",
    "groupTitle": "Usuario",
    "sampleRequest": [
      {
        "url": "https://localhost:7000/edit"
      }
    ]
  },
  {
    "type": "post",
    "url": "/add",
    "title": "Registrar un Usuario",
    "version": "0.0.1",
    "name": "Usuario",
    "group": "Usuario",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Se encarga de registrar un usuario del sistema.</p>",
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "rut",
        "description": "<p>Rut del usuario</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "nombre",
        "description": "<p>Nombre del usuario</p>"
      },
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "perfil",
        "description": "<p>Perfil del usuario</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de la ejecución</p>"
          }
        ]
      }
    },
    "filename": "src/controller/productoController.js",
    "groupTitle": "Usuario",
    "sampleRequest": [
      {
        "url": "https://localhost:7000/add"
      }
    ]
  },
  {
    "type": "post",
    "url": "/findBy",
    "title": "Busca un Usuario",
    "version": "0.0.1",
    "name": "Usuario",
    "group": "Usuario",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Se encarga de buscar un usuario por algun parametro indicado</p>",
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "rut",
        "description": "<p>Rut del usuario</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "nombre",
        "description": "<p>Nombre del usuario</p>"
      },
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "perfil",
        "description": "<p>Perfil del usuario</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de la ejecución</p>"
          }
        ]
      }
    },
    "filename": "src/controller/productoController.js",
    "groupTitle": "Usuario",
    "sampleRequest": [
      {
        "url": "https://localhost:7000/findBy"
      }
    ]
  },
  {
    "type": "post",
    "url": "/add",
    "title": "Registrar un Usuario",
    "version": "0.0.1",
    "name": "Usuario",
    "group": "Usuario",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Se encarga de registrar un usuario del sistema.</p>",
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "rut",
        "description": "<p>Rut del usuario</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "nombre",
        "description": "<p>Nombre del usuario</p>"
      },
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "perfil",
        "description": "<p>Perfil del usuario</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de la ejecución</p>"
          }
        ]
      }
    },
    "filename": "src/controller/userController.js",
    "groupTitle": "Usuario",
    "sampleRequest": [
      {
        "url": "https://localhost:7000/add"
      }
    ]
  },
  {
    "type": "post",
    "url": "/edit",
    "title": "Editar un Usuario",
    "version": "0.0.1",
    "name": "Usuario",
    "group": "Usuario",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Se encarga de editar un usuario del sistema.</p>",
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "rut",
        "description": "<p>Rut del usuario</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "nombre",
        "description": "<p>Nombre del usuario</p>"
      },
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "perfil",
        "description": "<p>Perfil del usuario</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de la ejecución</p>"
          }
        ]
      }
    },
    "filename": "src/controller/userController.js",
    "groupTitle": "Usuario",
    "sampleRequest": [
      {
        "url": "https://localhost:7000/edit"
      }
    ]
  },
  {
    "type": "post",
    "url": "/add",
    "title": "Registrar un Usuario",
    "version": "0.0.1",
    "name": "Usuario",
    "group": "Usuario",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Se encarga de registrar un usuario del sistema.</p>",
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "rut",
        "description": "<p>Rut del usuario</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "nombre",
        "description": "<p>Nombre del usuario</p>"
      },
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "perfil",
        "description": "<p>Perfil del usuario</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de la ejecución</p>"
          }
        ]
      }
    },
    "filename": "src/controller/userController.js",
    "groupTitle": "Usuario",
    "sampleRequest": [
      {
        "url": "https://localhost:7000/add"
      }
    ]
  },
  {
    "type": "post",
    "url": "/findBy",
    "title": "Busca un Usuario",
    "version": "0.0.1",
    "name": "Usuario",
    "group": "Usuario",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Se encarga de buscar un usuario por algun parametro indicado</p>",
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "rut",
        "description": "<p>Rut del usuario</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "nombre",
        "description": "<p>Nombre del usuario</p>"
      },
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "perfil",
        "description": "<p>Perfil del usuario</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de la ejecución</p>"
          }
        ]
      }
    },
    "filename": "src/controller/userController.js",
    "groupTitle": "Usuario",
    "sampleRequest": [
      {
        "url": "https://localhost:7000/findBy"
      }
    ]
  }
] });
