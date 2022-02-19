import { Injectable } from '@angular/core';
import { Cagnotte } from 'src/models/cagnotte.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:3000/cagnotte';

@Injectable({
  providedIn: 'root'
})
export class CagnottesService {
  /*cagnottes:Cagnotte[]= [
    {
      id: 1,
      Nom_cagnotte: "cooo",
      description: "Alios autem dicere aiunt multo etiam inhumanius (quem locum breviter paulo ante perstrinxi) praesidii adiumentique causa, non benevolentiae neque caritatis, amicitias esse expetendas; itaque, ut quisque minimum firmitatis haberet minimumque virium, ita amicitias appetere maxime; ex eo fieri ut mulierculae magis amicitiarum praesidia quaerant quam viri et inopes quam opulenti et calamitosi quam ii qui putentur beati.",
      Image: "http://placehold.it/130",
      objectif: 120,
      date_cloture: new Date(2022,2,3,20,2),
      statut: true,
      don_min:1
    },
    {
      id: 2,
      Nom_cagnotte: "cooo.L",
      description: "Restabat ut Caesar post haec properaret accitus et abstergendae causa suspicionis sororem suam, eius uxorem, Constantius ad se tandem desideratam venire multis fictisque blanditiis hortabatur. quae licet ambigeret metuens saepe cruentum, spe tamen quod eum lenire poterit ut germanum profecta, cum Bithyniam introisset, in statione quae Caenos Gallicanos appellatur, absumpta est vi febrium repentina. cuius post obitum maritus contemplans cecidisse fiduciam qua se fultum existimabat, anxia cogitatione, quid moliretur haerebat.",
      Image: "http://placehold.it/130",
      objectif: 120,
      date_cloture: new Date(2022,2,3,20,2),
      statut: true,
      don_min:1

    }, {
      id: 3,
      Nom_cagnotte: "cooo.L1",
      description: "Et quoniam inedia gravi adflictabantur, locum petivere Paleas nomine, vergentem in mare, valido muro firmatum, ubi conduntur nunc usque commeatus distribui militibus omne latus Isauriae defendentibus adsueti. circumstetere igitur hoc munimentum per triduum et trinoctium et cum neque adclivitas ipsa sine discrimine adiri letali, nec cuniculis quicquam geri posset, nec procederet ullum obsidionale commentum, maesti excedunt postrema vi subigente maiora viribus adgressuri.",
      Image: "http://placehold.it/130",
      objectif: 120,
      date_cloture: new Date(2022,2,3,20,2),
      statut: true,
      don_min:1

    },
    {
      id: 4,
      Nom_cagnotte: "cooo.L9",
      description: "Ideo urbs venerabilis post superbas efferatarum gentium cervices oppressas latasque leges fundamenta libertatis et retinacula sempiterna velut frugi parens et prudens et dives Caesaribus tamquam liberis suis regenda patrimonii iura permisit.",
      Image: "http://placehold.it/130",
      objectif: 120,
      date_cloture: new Date(2,2,2023,20,2),
      statut: true,
      don_min:5

    },
    {
      id: 5,
      Nom_cagnotte: "cooo.56L",
      description: "Mox dicta finierat, multitudo omnis ad, quae imperator voluit, promptior laudato consilio consensit in pacem ea ratione maxime percita, quod norat expeditionibus crebris fortunam eius in malis tantum civilibus vigilasse, cum autem bella moverentur externa, accidisse plerumque luctuosa, icto post haec foedere gentium ritu perfectaque sollemnitate imperator Mediolanum ad hiberna discessit.",
      Image: "http://placehold.it/130",
      objectif: 120,
      date_cloture: new Date(2022,2,3,20,2),
      statut: true,
      don_min:1

    }

  ];
  getCagnotteById(id: number) {
    const cagnotte = this.cagnottes.find(
      (s) => {
        return s.id === id;
      }
    );
    return cagnotte;
}
addCagnotte(Nom_cagnotte:string,description:string,objectif:number,date_cloture:Date,don_min:number){
const cagnotteObject={
  id: 0,
      Nom_cagnotte: "",
      description: "",
      Image: "http://placehold.it/130",
      objectif: 0,
      date_cloture: new Date(),
      statut: true,
      don_min:1
}
cagnotteObject.Nom_cagnotte=Nom_cagnotte;
cagnotteObject.description=description;
cagnotteObject.date_cloture=date_cloture;
cagnotteObject.don_min=don_min;
cagnotteObject.objectif=objectif;
cagnotteObject.id=this.cagnottes[this.cagnottes.length-1].id+1
this.cagnottes.push(cagnotteObject);
}*/
  constructor(private http: HttpClient) { }
  getAll(): Observable<Cagnotte[]> {
    return this.http.get<Cagnotte[]>(baseUrl);
  }

  get(id: any): Observable<Cagnotte> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<Cagnotte> {
    return this.http.post(baseUrl, data);
  }

  update(data: any): Observable<Cagnotte> {
    return this.http.put(baseUrl, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}

