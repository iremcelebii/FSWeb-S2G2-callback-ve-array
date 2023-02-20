const { fifaData } = require("./fifa.js");
//JavaScript ile Fonksiyonel Programlama: Map, Filter, Reduce, Foreach
//dizi üzerinde yapılabilecek işlemler için map, filter ve reduce gibi fonksiyonlar bulunmaktadır.
//parametre olarak fonksiyon alırlar.
//filter: orijinal arrayi değiştirmeden başka bir array veriyor. söylediğimiz koşulları uyan elemanları alarak oluşturuyor bu arrayi
//map: orijinal arrayi değiştirmeden başka bir array veriyor.bütün elemanlarda çalışıyor.
//foreach: döngü yazmamıza izin veriyor ancak herhangi bir şet return etmiyor.
//reduce: iki parametreli fonksiyonlar

/* Görev 1: 
	Verilen datayı parçalayarak aşağıdaki verileri (console.log-ing) elde ederek pratik yapın. 
	
	💡 İPUCU: Öncelikle datayı filtrelemek isteyebilirsiniz */
console.clear();
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 1: filtrelenmisData2014");

//! farklı yazım biçimleri:

//! 1) hep yazdığın gibi:--------------------------------------------------------------------------------------------------

function filtrelemeFonk(x) {
  return x.Year == 2014 && x.Stage == "Final"; //x["Stage"] olarak da yazabilirdim
}
let filtrelenmisData2014_2 = fifaData.filter(filtrelemeFonk);
//console.log(filtrelenmisData2014_2);

//! 2) başka fonksiyon tanımlamadan içinde yazma--------------------------------------------------------------------------------
let filtrelenmisData2014_3 = fifaData.filter((x) => {
  return x.Year == 2014 && x.Stage == "Final";
});
//console.log(filtrelenmisData2014_3);

//! 3)en kısa hal:tek satırda yazabiliyorsan süslü paranteze ve return yazmana gerek yok-------------------------------------------
let filtrelenmisData2014_1 = fifaData.filter(
  (x) => x.Year == 2014 && x.Stage == "Final"
);
console.log("filtrelenmisData2014:");
console.log(filtrelenmisData2014_1);
console.log("filtrelenmisData2014.length:" + filtrelenmisData2014_1.length); //dizideki obje sayısını veriyor

//?sadece parametre varsa parantezsiz yazsam da olur, indeks eklenirse parantezli
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 1a: data2014HomeTeamName");

//!(a) 2014 Dünya kupası Finali Evsahibi takım ismi (dizide "Home Team Name" anahtarı)
let data2014HomeTeamName = filtrelenmisData2014_1.map(
  (x) => x["Home Team Name"]
);
console.log(data2014HomeTeamName); //veya:
console.log(filtrelenmisData2014_1[0]["Home Team Name"]);

console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 1b: data2014AwayTeamName");

//!(b) 2014 Dünya kupası Finali Deplasman takım ismi  (dizide "Away Team Name" anahtarı)
let data2014AwayTeamName = filtrelenmisData2014_1.map(
  (x) => x["Away Team Name"]
);
console.log(data2014AwayTeamName);
console.log(filtrelenmisData2014_1[0]["Away Team Name"]);

console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 1c: data2014HomeTeamGoals");

//!(c) 2014 Dünya kupası finali Ev sahibi takım golleri (dizide "Home Team Goals" anahtarı)
let data2014HomeTeamGoals = filtrelenmisData2014_1.map(
  (x) => x["Home Team Goals"]
);
console.log(data2014HomeTeamGoals);
console.log(filtrelenmisData2014_1[0]["Home Team Goals"]);

console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 1d: data2014AwayTeamGoals");

//!(d)2014 Dünya kupası finali Deplasman takım golleri  (dizide "Away Team Goals" anahtarı)
let data2014AwayTeamGoals = filtrelenmisData2014_1.map(
  (x) => x["Away Team Goals"]
);
console.log(data2014AwayTeamGoals);
console.log(filtrelenmisData2014_1[0]["Away Team Goals"]);

console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 1e: 2014 Dünya kupası finali kazananı");

//!(e) 2014 Dünya kupası finali kazananı*/

if (
  filtrelenmisData2014_1[0]["Home Team Goals"] >
  filtrelenmisData2014_1[0]["Away Team Goals"]
) {
  console.log("Kazanan:" + filtrelenmisData2014_1[0]["Home Team Name"]);
} else if (
  filtrelenmisData2014_1[0]["Away Team Goals"] >
  filtrelenmisData2014_1[0]["Home Team Goals"]
) {
  console.log("Kazanan:" + filtrelenmisData2014_1[0]["Away Team Name"]);
} else {
  let kelime = filtrelenmisData2014_1[0]["Win conditions"].split(" ");
  console.log("Kazanan" + kelime[0]);
}

/*  Görev 2: 
	Finaller adlı fonksiyonu kullanarak aşağıdakileri uygulayın:
	1. Bir dizi(array) olan Fifa datasını fonksiyonun birinci parametresi olarak alacak
	2. Sadece final maçlarını içeren nesnenin(object) datalarını filtreleyerek, bir dizi olarak döndürecek(return)
	
	💡 İPUCU - verilen data içindeki nesnelerin(objects) "Stage" anahtarına bakmalısınız
*/

function Finaller(dizi) {
  return dizi.filter((x) => x.Stage == "Final");
}

console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 2: Finaller");

console.log(Finaller(fifaData).length + " adet final maçı var");

/*  Görev 3: 
	Bir higher-order fonksiyonu olan Yillar isimli fonksiyona aşağıdakileri uygulayın: 
	1. fifaData dizisini(array) fonksiyonun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Finaller data setindeki tüm yılları içeren "years" adındaki diziyi(array) döndürecek
	*/

//!Yüksek Mertebe Fonksiyonlar: Parametre olarak başka bir fonksiyonu alan ve/veya sonuç olarak başka bir fonksiyonu dönen fonksiyonlardır.

function Yillar(dizi, cbFinaller) {
  let yeni = cbFinaller(dizi);
  return yeni.map((x) => x.Year);
}

console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 3: Yillar");
console.log(Yillar(fifaData, Finaller));

/*  Görev 4: 
	Bir higher-order fonksiyonunu olan Kazananlar isimli fonksiyona aşağıdakileri uygulayın:  
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Her final maçının kazananını (evsahibi ya da deplasman) belirleyecek
	💡 İPUCU: Beraberlikler(ties) için şimdilik endişelenmeyin (Detaylı bilgi için README dosyasına bakabilirsiniz.)
	4. Tüm kazanan ülkelerin isimlerini içeren `kazananlar` adında bir dizi(array) döndürecek(return)  */

function Kazananlar(dizi, cbFinaller) {
  let yeni = cbFinaller(dizi);
  let kazanantakimlar = [];

  yeni.forEach((x) => {
    if (x["Home Team Goals"] > x["Away Team Goals"]) {
      kazanantakimlar.push(x["Home Team Name"]);
    } else if (x["Away Team Goals"] > x["Home Team Goals"]) {
      kazanantakimlar.push(x["Away Team Name"]);
    } else {
      let kelime = x["Win conditions"].split(" ");
      kazanantakimlar.push(kelime[0]);
    }
  });
  return kazanantakimlar;
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 4: Kazananlar");

console.log(Kazananlar(fifaData, Finaller));

/*  Görev 5: 
	Bir higher-order fonksiyonu olan YillaraGoreKazananlar isimli fonksiyona aşağıdakileri uygulayın:
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Görev 3'de yazdığınız Yillar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun üçüncü parametresi olarak alacak
	4. Görev 4'de yazdığınız Kazananlar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun dördüncü parametresi olarak alacak
	5. Her yıl için "{yıl} yılında, {ülke} dünya kupasını kazandı!" cümlesini(string) içeren bir diziyi(array) döndürecek
	
	💡 İPUCU: her cümlenin adım 4'te belirtilen cümleyle birebir aynı olması gerekmektedir.
*/

function YillaraGoreKazananlar(dizi, cbFinaller, cbYillar, cbKazananlar) {
  let metin = [];
  let yillar = cbYillar(dizi, cbFinaller);
  let kazananlar = cbKazananlar(dizi, cbFinaller);

  yillar.forEach((x, i) =>
    metin.push(`${x} yılında, ${kazananlar[i]} dünya kupasını kazandı!`)
  );
  return metin;
}

console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 5: YillaraGoreKazananlar");

console.log(YillaraGoreKazananlar(fifaData, Finaller, Yillar, Kazananlar));

/*  Görev 6: 
	Bir higher order fonksiyonu olan `OrtalamaGolSayisi` isimli fonksiyona aşağıdakileri uygulayın: 
	1. Görev 2'de yazdığınız `Finaller` fonksiyonunu birinci parametre olarak alacak; 'fifaData' dizisini argüman olarak eklediğinizden emin olun
	
	💡 İPUCU: Çağırma örneği: `OrtalamaGolSayisi(Finaller(fifaData));`
	
	2. Her maç için Ortalama toplam evsahibi gol sayısı ve toplam deplasman gol sayısını hesaplayacak (her maçta atılan toplam gol sayısı)
	
	3. Sonucun 2. ondalığını yuvarlayıp, bulunan değeri döndürecek(return)
	
	💡 İPUCU: .reduce, .toFixed (dizilim(syntax) için MDN'ye bakın) kullan, ve bunu 2 adımda yapın) 
	
*/

function OrtalamaGolSayisi(cbFinaller) {
  let HteamGoal = cbFinaller.map((x) => x["Home Team Goals"]);
  let AteamGoal = cbFinaller.map((x) => x["Away Team Goals"]);
  let ToplamH = HteamGoal.reduce((toplam, item) => toplam + item, 0);
  let ToplamA = AteamGoal.reduce((toplam, item) => toplam + item, 0);
  let sonuc = ((ToplamH + ToplamA) / HteamGoal.length).toFixed(2);
  return sonuc;
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 6: OrtalamaGolSayisi");
console.log(OrtalamaGolSayisi(Finaller(fifaData)));

/// EKSTRA ÇALIŞMALAR ///

/*  BONUS 1:  
	`UlkelerinKazanmaSayilari` isminde bir fonksiyon oluşturun, parametre olarak `data` ve `takım kısaltmalarını` alacak ve hangi ülkenin kaç dünya kupası olduğunu döndürecek
	
	İpucu: "takım kısaltmaları" (team initials) için datada araştırma yapın!
İpucu: `.reduce` Kullanın*/

function UlkelerinKazanmaSayilari(dizi, takimIsmi) {
  let kazanantakimlar = [];

  dizi.forEach((x) => {
    if (x["Home Team Goals"] > x["Away Team Goals"]) {
      kazanantakimlar.push(x["Home Team Name"]);
    } else if (x["Away Team Goals"] > x["Home Team Goals"]) {
      kazanantakimlar.push(x["Away Team Name"]);
    } else {
      let kelime = x["Win conditions"].split(" ");
      kazanantakimlar.push(kelime[0]);
    }
  });

  let newArr = kazanantakimlar.filter((x) => x === takimIsmi);
  let sayi = newArr.reduce((item) => item + 1, 0);
  return sayi;
}

console.log(
  "-------------------------------------------------------------------"
);
console.log("Bonus 1: UlkelerinKazanmaSayilari");

console.log(UlkelerinKazanmaSayilari(fifaData, "Romania"));

/*  BONUS 2:  
EnCokGolAtan() isminde bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupası finallerinde en çok gol atan takımı döndürsün */

function EnCokGolAtan(dizi, cbFinaller) {
  let finalDizisi = cbFinaller(dizi);
  let golSayilariDizisi = [];

  finalDizisi.forEach((x) => {
    if (x["Home Team Goals"] > x["Away Team Goals"]) {
      golSayilariDizisi.push({
        "Team Name": x["Home Team Name"],
        "Team Goals": x["Home Team Goals"],
      });
    } else if (x["Away Team Goals"] > x["Home Team Goals"]) {
      golSayilariDizisi.push({
        "Team Name": x["Away Team Name"],
        "Team Goals": x["Away Team Goals"],
      });
    } else {
      golSayilariDizisi.push({
        "Team Name": x["Home Team Name"],
        "Team Goals": x["Home Team Goals"],
      });
      golSayilariDizisi.push({
        "Team Name": x["Away Team Name"],
        "Team Goals": x["Away Team Goals"],
      });
    }
  });
  console.log(golSayilariDizisi);

  let maxgolsayisi = 0;
  let skorerTakim = "";
  for (let i = 0; i < golSayilariDizisi.length; i++) {
    if (golSayilariDizisi[i]["Team Goals"] > maxgolsayisi) {
      maxgolsayisi = golSayilariDizisi[i]["Team Goals"];
      skorerTakim = golSayilariDizisi[i]["Team Name"];
    }
  }

  return skorerTakim;
}

console.log(
  "-------------------------------------------------------------------"
);
console.log("Bonus 2: EnCokGolAtan");
console.log(EnCokGolAtan(fifaData, Finaller));

/*  BONUS 3: 
EnKotuDefans() adında bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupasında finallerinde en çok golü yiyen takımı döndürsün*/

function EnKotuDefans(dizi, cbFinaller) {
  let finalDizisi = cbFinaller(dizi);
  let golSayilariDizisi = [];

  finalDizisi.forEach((x) => {
    if (x["Home Team Goals"] > x["Away Team Goals"]) {
      golSayilariDizisi.push({
        "Team Name": x["Away Team Name"],
        "Team Goals": x["Home Team Goals"],
      });
    } else if (x["Away Team Goals"] > x["Home Team Goals"]) {
      golSayilariDizisi.push({
        "Team Name": x["Home Team Name"],
        "Team Goals": x["Away Team Goals"],
      });
    } else {
      golSayilariDizisi.push({
        "Team Name": x["Away Team Name"],
        "Team Goals": x["Home Team Goals"],
      });
      golSayilariDizisi.push({
        "Team Name": x["Home Team Name"],
        "Team Goals": x["Away Team Goals"],
      });
    }
  });

  let maxgolsayisi = 0;
  let enkotuTakim = "";
  for (let i = 0; i < golSayilariDizisi.length; i++) {
    if (golSayilariDizisi[i]["Team Goals"] > maxgolsayisi) {
      maxgolsayisi = golSayilariDizisi[i]["Team Goals"];
      enkotuTakim = golSayilariDizisi[i]["Team Name"];
    }
  }

  return enkotuTakim;
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Bonus 3: EnKotuDefans");
console.log(EnKotuDefans(fifaData, Finaller));

/* Hala vaktiniz varsa, README dosyasında listelenen hedeflerden istediğinizi aşağıdaki boşluğa yazabilirsiniz. */

//!denemeler

// let newArr = fifaData.map((item) => {
//   return {
//     "Home Team Name": item["Home Team Name"],
//     "Away Team Name": item["Away Team Name"],
//   };
// });
// console.log(
//   "-------------------------------------------------------------------"
// );
// console.log("Görev 0: deneme");
// console.log(newArr);

/* Bu satırın aşağısındaki kodları lütfen değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  Finaller,
  Yillar,
  Kazananlar,
  YillaraGoreKazananlar,
  OrtalamaGolSayisi,
};
