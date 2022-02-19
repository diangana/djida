var bd = require('../bd');
var article={
  getarticles: function(callback){
    return bd.query('SELECT * from article ORDER BY id_article DESC', callback);
  },
  createarticle:function(article,callback){
    return bd.query('Insert into article(id_article,nom_article,contenue,date_creation,image,video,auteur) values(?,?,?,?,?,?,?)',[null,article.nom_article,article.contenue,article.date_creation,article.image,article.video,article.auteur] ,callback);
  },
  deletearticle: function (article, callback) {
    return bd.query('DELETE from article WHERE id_article = ?', [article.id_article], callback);
},
selectarticle: function(article,callback){
  return bd.query('SELECT * from article WHERE id_article = ?', [article.id_article], callback);
},
Updatearticle:function(article,callback){
  return bd.query('UPDATE article SET nom_article=?,contenue=?,date_creation=?,image=?,video=?,auteur=? WHERE id_article=?',[article.nom_article,article.contenue,article.date_creation,article.image,article.video,article.auteur,article.id_article] ,callback);
}
}
module.exports= article;
