
var bd = require('../bd');
var adherent={
  getadherents: function(callback){
    return bd.query('SELECT * from adherent', callback);
  },
  createadherent:function(adherent,callback){
    return bd.query('Insert into adherent(id_adherent,email,nom,prenom,telephone,date_adhesion,date_cotisation,password,admin) values(?,?,?,?,?,?,?,?,?)',[null,adherent.email,adherent.nom,adherent.prenom,adherent.telephone,adherent.date_adhesion,adherent.date_cotisation,adherent.password,adherent.admin] ,callback);
  },
  deleteadherent: function (adherent, callback) {
    return bd.query('DELETE  from adherent WHERE email = ?', [adherent.email], callback);
},
selectadherent: function(adherent,callback){
  return bd.query('SELECT * from adherent where email =?',[adherent.email], callback);
},
connadherent: function(adherent,callback){
  return bd.query('SELECT * from adherent where email =? and password=?',[adherent.email,adherent.password], callback);
},
Updateadherent:function(adherent,callback){
  return bd.query('UPDATE adherent SET email=?,nom=?,prenom=?,telephone=?,date_cotisation=?,password=?,admin=? where id_adherent=?',[adherent.email,adherent.nom,adherent.prenom,adherent.telephone,adherent.date_cotisation,adherent.password,adherent.admin,adherent.id_adherent ] ,callback);
}

}
module.exports= adherent;
