var bd = require('../bd');
var cagnotte={
  getcagnottes: function(callback){
    return bd.query('SELECT * from cagnotte ORDER BY id_cagnotte DESC', callback);
  },
  selectcagnottes: function(cagnotte,callback){
    return bd.query('SELECT * from cagnotte WHERE id_cagnotte = ?', [cagnotte.id_cagnotte], callback);
  },
  createcagnotte:function(cagnotte,callback){
    return bd.query('Insert into cagnotte(id_cagnotte,nom_cagnotte,categorie,description,montant_objectif,image,statut,date_cloture,don_min,administrateur) values(?,?,?,?,?,?,?,?,?,?)',[null,cagnotte.nom_cagnotte,cagnotte.categorie,cagnotte.description,cagnotte.montant_objectif,cagnotte.image,cagnotte.statut,cagnotte.date_cloture,cagnotte.don_min,cagnotte.administrateur],callback);
  },
  deletecagnotte: function (cagnotte, callback) {
    return bd.query('DELETE from cagnotte WHERE id_cagnotte = ?', [cagnotte.id_cagnotte], callback);
},
Updatecagnottes:function(cagnotte,callback){
  return bd.query('UPDATE cagnotte SET nom_cagnotte=?,categorie=?,description=?,montant_objectif=?,image=?,statut=?,date_cloture=?,don_min=?,administrateur=? WHERE id_cagnotte =? ',[cagnotte.nom_cagnotte,cagnotte.categorie,cagnotte.description,cagnotte.montant_objectif,cagnotte.image,cagnotte.statut,cagnotte.date_cloture,cagnotte.don_min,cagnotte.administrateur,cagnotte.id_cagnotte],callback)
},


}
module.exports= cagnotte;
