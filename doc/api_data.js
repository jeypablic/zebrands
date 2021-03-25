define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "Inicio de la API",
    "name": "/",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Mensaje.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Usuario"
  }
] });
