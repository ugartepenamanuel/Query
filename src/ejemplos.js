//....$eq....//

/*

db.consulta.find( { cantidad: { $eq: 55 } } )
Resultado= { "_id" : ObjectId("5f996ed95e4dea30a62a94fa"), "elemento" : "papel", "cantidad" : 55, "tamaño" : { "h" : 12, "w" : 15.2, "uom" : "cm" }, "estado" : "B" }


db.consulta.find( { estado: { $eq: "A"  } } )   
Resultado= { "_id" : ObjectId("5f996ed95e4dea30a62a94f5"), "elemento" : "agenda", "cantidad" : 25, "tamaño" : { "h" : 14, "w" : 21, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f6"), "elemento" : "cuaderno", "cantidad" : 50, "tamaño" : { "h" : 8.5, "w" : 11, "uom" : "en" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f9"), "elemento" : "postal", "cantidad" : 45, "tamaño" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fb"), "elemento" : "goma", "cantidad" : 60, "tamaño" : { "h" : 11, "w" : 15.26, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fc"), "elemento" : "retulador", "cantidad" : 60, "tamaño" : { "h" : 11, "w" : 15.26, "uom" : "cm" }, "estado" : "A" }


*/

//....$gt....//

/*

> db.consulta.find( { cantidad: { $gt: 20 } } )
Resultado= { "_id" : ObjectId("5f996ed95e4dea30a62a94f5"), "elemento" : "agenda", "cantidad" : 25, "tamaño" : { "h" : 14, "w" : 21, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f6"), "elemento" : "cuaderno", "cantidad" : 50, "tamaño" : { "h" : 8.5, "w" : 11, "uom" : "en" }, "estado" : "A" }      
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f7"), "elemento" : "papel", "cantidad" : 100, "tamaño" : { "h" : 8.5, "w" : 11, "uom" : "en" }, "estado" : "D" }        
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f8"), "elemento" : "planificador", "cantidad" : 75, "tamaño" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "estado" : "D" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f9"), "elemento" : "postal", "cantidad" : 45, "tamaño" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "estado" : "A" }      
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fa"), "elemento" : "papel", "cantidad" : 55, "tamaño" : { "h" : 12, "w" : 15.2, "uom" : "cm" }, "estado" : "B" }        
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fb"), "elemento" : "goma", "cantidad" : 60, "tamaño" : { "h" : 11, "w" : 15.26, "uom" : "cm" }, "estado" : "A" }        
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fc"), "elemento" : "retulador", "cantidad" : 60, "tamaño" : { "h" : 11, "w" : 15.26, "uom" : "cm" }, "estado" : "A" }  

*/

//....$gte....//

/*

db.consulta.find( { cantidad: { $gte: 20 } } )
Resultado= { "_id" : ObjectId("5f996ed95e4dea30a62a94f5"), "elemento" : "agenda", "cantidad" : 25, "tamaño" : { "h" : 14, "w" : 21, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f6"), "elemento" : "cuaderno", "cantidad" : 50, "tamaño" : { "h" : 8.5, "w" : 11, "uom" : "en" }, "estado" : "A" }      
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f7"), "elemento" : "papel", "cantidad" : 100, "tamaño" : { "h" : 8.5, "w" : 11, "uom" : "en" }, "estado" : "D" }        
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f8"), "elemento" : "planificador", "cantidad" : 75, "tamaño" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "estado" : "D" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f9"), "elemento" : "postal", "cantidad" : 45, "tamaño" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "estado" : "A" }      
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fa"), "elemento" : "papel", "cantidad" : 55, "tamaño" : { "h" : 12, "w" : 15.2, "uom" : "cm" }, "estado" : "B" }        
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fb"), "elemento" : "goma", "cantidad" : 60, "tamaño" : { "h" : 11, "w" : 15.26, "uom" : "cm" }, "estado" : "A" }        
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fc"), "elemento" : "retulador", "cantidad" : 60, "tamaño" : { "h" : 11, "w" : 15.26, "uom" : "cm" }, "estado" : "A" }  

*/

//....$in....//

/*

db.consulta.find( { cantidad: { $in: [ 55, 75 ] } } )
Resultado= { "_id" : ObjectId("5f996ed95e4dea30a62a94f8"), "elemento" : "planificador", "cantidad" : 75, "tamaño" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "estado" : "D" }
Resultado= { "_id" : ObjectId("5f996ed95e4dea30a62a94fa"), "elemento" : "papel", "cantidad" : 55, "tamaño" : { "h" : 12, "w" : 15.2, "uom" : "cm" }, "estado" : "B" }  

*/

//....$lt....//

/*

db.consulta.find( { cantidad: { $lt: 55 } } )
Resultado= { "_id" : ObjectId("5f996ed95e4dea30a62a94f5"), "elemento" : "agenda", "cantidad" : 25, "tamaño" : { "h" : 14, "w" : 21, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f6"), "elemento" : "cuaderno", "cantidad" : 50, "tamaño" : { "h" : 8.5, "w" : 11, "uom" : "en" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f9"), "elemento" : "postal", "cantidad" : 45, "tamaño" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "estado" : "A" }

*/

//....$lte....//

/*

db.consulta.find( { cantidad: { $lte: 45 } } )
Resultado= { "_id" : ObjectId("5f996ed95e4dea30a62a94f5"), "elemento" : "agenda", "cantidad" : 25, "tamaño" : { "h" : 14, "w" : 21, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f9"), "elemento" : "postal", "cantidad" : 45, "tamaño" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "estado" : "A" }

*/


//....$ne....//

/*

db.consulta.find( { cantidad: { $ne: 75 } } ) 
Resultado= { "_id" : ObjectId("5f996ed95e4dea30a62a94f5"), "elemento" : "agenda", "cantidad" : 25, "tamaño" : { "h" : 14, "w" : 21, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f6"), "elemento" : "cuaderno", "cantidad" : 50, "tamaño" : { "h" : 8.5, "w" : 11, "uom" : "en" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f7"), "elemento" : "papel", "cantidad" : 100, "tamaño" : { "h" : 8.5, "w" : 11, "uom" : "en" }, "estado" : "D" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f9"), "elemento" : "postal", "cantidad" : 45, "tamaño" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fa"), "elemento" : "papel", "cantidad" : 55, "tamaño" : { "h" : 12, "w" : 15.2, "uom" : "cm" }, "estado" : "B" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fb"), "elemento" : "goma", "cantidad" : 60, "tamaño" : { "h" : 11, "w" : 15.26, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fc"), "elemento" : "retulador", "cantidad" : 60, "tamaño" : { "h" : 11, "w" : 15.26, "uom" : "cm" }, "estado" : "A" }

*/

//....$nin....//

/*

db.consulta.find( { cantidad: { $nin: [ 60, 100 ] } } )
Resultado= { "_id" : ObjectId("5f996ed95e4dea30a62a94f5"), "elemento" : "agenda", "cantidad" : 25, "tamaño" : { "h" : 14, "w" : 21, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f6"), "elemento" : "cuaderno", "cantidad" : 50, "tamaño" : { "h" : 8.5, "w" : 11, "uom" : "en" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f8"), "elemento" : "planificador", "cantidad" : 75, "tamaño" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "estado" : "D" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f9"), "elemento" : "postal", "cantidad" : 45, "tamaño" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fa"), "elemento" : "papel", "cantidad" : 55, "tamaño" : { "h" : 12, "w" : 15.2, "uom" : "cm" }, "estado" : "B" }

*/

//....$and....//

/*

db.consulta.find( { $and: [ { cantidad: { $ne: 45 } }, { cantidad: { $exists: true } } ] } )  
Resultado= { "_id" : ObjectId("5f996ed95e4dea30a62a94f5"), "elemento" : "agenda", "cantidad" : 25, "tamaño" : { "h" : 14, "w" : 21, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f6"), "elemento" : "cuaderno", "cantidad" : 50, "tamaño" : { "h" : 8.5, "w" : 11, "uom" : "en" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f7"), "elemento" : "papel", "cantidad" : 100, "tamaño" : { "h" : 8.5, "w" : 11, "uom" : "en" }, "estado" : "D" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94f8"), "elemento" : "planificador", "cantidad" : 75, "tamaño" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "estado" : "D" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fa"), "elemento" : "papel", "cantidad" : 55, "tamaño" : { "h" : 12, "w" : 15.2, "uom" : "cm" }, "estado" : "B" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fb"), "elemento" : "goma", "cantidad" : 60, "tamaño" : { "h" : 11, "w" : 15.26, "uom" : "cm" }, "estado" : "A" }
 { "_id" : ObjectId("5f996ed95e4dea30a62a94fc"), "elemento" : "retulador", "cantidad" : 60, "tamaño" : { "h" : 11, "w" : 15.26, "uom" : "cm" }, "estado" : "A" }
*/
