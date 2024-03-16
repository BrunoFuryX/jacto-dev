import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { instance } from '../utils/api'
import { DetailsComponent } from './details/details.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FooterComponent, ListComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jacto-dev';
  loading: boolean = false;
  searchInput: string = "a";
  response: any = {
    page: 0, total_pages: 0, total_results: 20, results: [{
      "adult": false,
      "backdrop_path": "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
      "genre_ids": [
        12,
        28,
        878
      ],
      "id": 299536,
      "original_language": "en",
      "original_title": "Avengers: Infinity War",
      "overview": "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.",
      "popularity": 184.593,
      "poster_path": "/rkHe0BfOo1f5N2q6rxgdYac7Zf6.jpg",
      "release_date": "2018-04-25",
      "title": "Vingadores: Guerra Infinita",
      "video": false,
      "vote_average": 8.248,
      "vote_count": 28612
    },
    {
      "adult": false,
      "backdrop_path": "/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
      "genre_ids": [
        878,
        28,
        12
      ],
      "id": 24428,
      "original_language": "en",
      "original_title": "The Avengers",
      "overview": "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.",
      "popularity": 122.627,
      "poster_path": "/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg",
      "release_date": "2012-04-25",
      "title": "Os Vingadores: The Avengers",
      "video": false,
      "vote_average": 7.713,
      "vote_count": 29811
    },
    {
      "adult": false,
      "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      "genre_ids": [
        12,
        878,
        28
      ],
      "id": 299534,
      "original_language": "en",
      "original_title": "Avengers: Endgame",
      "overview": "Após os eventos devastadores de \"Vingadores: Guerra Infinita\", o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.",
      "popularity": 110.456,
      "poster_path": "/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg",
      "release_date": "2019-04-24",
      "title": "Vingadores: Ultimato",
      "video": false,
      "vote_average": 8.256,
      "vote_count": 24600
    },
    {
      "adult": false,
      "backdrop_path": "/6YwkGolwdOMNpbTOmLjoehlVWs5.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 99861,
      "original_language": "en",
      "original_title": "Avengers: Age of Ultron",
      "overview": "Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron. Com o destino da Terra em jogo, os Vingadores terão que se unir para mais uma vez salvar a raça humana da extinção.",
      "popularity": 105.882,
      "poster_path": "/vGIIl89vglo66yUfbuTxzNAs4y5.jpg",
      "release_date": "2015-04-22",
      "title": "Vingadores: Era de Ultron",
      "video": false,
      "vote_average": 7.273,
      "vote_count": 22259
    },
    {
      "adult": false,
      "backdrop_path": "/uR952NrgispGuyqIdUbkR24vE0u.jpg",
      "genre_ids": [
        878
      ],
      "id": 1003596,
      "original_language": "en",
      "original_title": "Avengers 5",
      "overview": "Um próximo filme da Fase 6 do Universo Cinematográfico Marvel e parte da Saga Multiverso",
      "popularity": 28.9,
      "poster_path": "/lfE1GkxqoNaGqajRDCTYw5erBSo.jpg",
      "release_date": "2026-04-29",
      "title": "Vingadores: Dinastia Kang",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/oFSQEG1lJTTISj3QKB7cJ9ANkFw.jpg",
      "genre_ids": [
        16,
        28,
        10751
      ],
      "id": 1154598,
      "original_language": "en",
      "original_title": "LEGO Marvel Avengers: Code Red",
      "overview": "Os Vingadores se reúnem para comemorar sua última vitória, mas a comemoração é rapidamente interrompida pelo misterioso desaparecimento do pai da Viúva Negra, o Guardião Vermelho.  À medida que os Vingadores investigam, eles descobrem que o Guardião Vermelho não é o único desaparecido quando encontram um novo inimigo perigoso, muito diferente de tudo que já encontraram antes.",
      "popularity": 29.434,
      "poster_path": "/bhs2CZWqoee3JFMvSZd1Vg7HLfL.jpg",
      "release_date": "2023-10-26",
      "title": "LEGO Marvel Vingadores: Código Vermelho",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 77
    },
    {
      "adult": false,
      "backdrop_path": "/1r42uwYTbX7aOWxtS1qPCAdOBQJ.jpg",
      "genre_ids": [
        16,
        878,
        28
      ],
      "id": 257346,
      "original_language": "ja",
      "original_title": "アベンジャーズ コンフィデンシャル：ブラック・ウィドウ ＆ パニッシャー",
      "overview": "O Justiceiro é levado sob custódia para S.H.I.E.L.D. depois de ter interferido em uma missão secreta. Para se redimir, Nick Fury o envia para combater a organização Leviatã, que roubou uma tecnologia da agência e pretende vende-la, ao lado da Viúva Negra.",
      "popularity": 49.989,
      "poster_path": "/jwsHJrUsmRY8f8DPvGAxmtnxYhb.jpg",
      "release_date": "2014-04-19",
      "title": "Os Vingadores Confidencial: Viúva Negra & Justiceiro",
      "video": false,
      "vote_average": 6.372,
      "vote_count": 234
    },
    {
      "adult": false,
      "backdrop_path": "/8NPs9xKPO5Or77wVfbRU6Ja2rfe.jpg",
      "genre_ids": [
        28,
        53,
        35,
        18
      ],
      "id": 9618,
      "original_language": "en",
      "original_title": "Tango & Cash",
      "overview": "Tango é um agente da polícia de narcóticos que possui métodos frios e calculistas. Cash faz parte da mesma divisão, mas atua de forma bem mais explosiva. Agindo separadamente eles espalham terror no submundo do crime e das drogas. Mas agora apesar de não morrerem de amores um pelo outro, terão que se unir para escapar do inferno que acabaram se metendo.",
      "popularity": 32.16,
      "poster_path": "/34eICraXrXH84mjPPIVvaK1ZR4X.jpg",
      "release_date": "1989-12-22",
      "title": "Tango & Cash: Os Vingadores",
      "video": false,
      "vote_average": 6.436,
      "vote_count": 1791
    },
    {
      "adult": false,
      "backdrop_path": "/fryen9fnjlm0YibKTDNGzWNBOSo.jpg",
      "genre_ids": [
        28,
        12,
        53,
        878
      ],
      "id": 9320,
      "original_language": "en",
      "original_title": "The Avengers",
      "overview": "O espião John Steed foi chamado pelo Ministério, uma agência britânica ultra-secreta, para investigar alguns estranhos acontecimentos. O clima aparenta estar fora de controle, com a ocorrência de fortes tempestades de neve, chuvas de granizo e mudanças drásticas de temperatura. O maior suspeito de ser o autor destes eventos é Sir August de Wynter, um ex-membro do Ministério que é muito rico e também bizarro. Juntamente com Emma Peel, uma expert em jiu-jitsu e em meteorologia, Steed precisa eliminar a ameaça.",
      "popularity": 27.905,
      "poster_path": "/6BAOyAqnBlAnw1CGLfUJXQhiWzW.jpg",
      "release_date": "1998-08-13",
      "title": "Os Vingadores",
      "video": false,
      "vote_average": 4.354,
      "vote_count": 666
    },
    {
      "adult": false,
      "backdrop_path": "/jqFC2WjYF07hx2X7cs0XmY9jBX6.jpg",
      "genre_ids": [
        878
      ],
      "id": 1003598,
      "original_language": "en",
      "original_title": "Avengers: Secret Wars",
      "overview": "Futuro filme da fase 6 do Universo Cinematográfico Marvel que marcará o final da Saga do Multiverso. Informações da história ainda não reveladas.",
      "popularity": 17.943,
      "poster_path": "/8chwENebfUEJzZ7sMUA0nOgiCKk.jpg",
      "release_date": "2027-05-06",
      "title": "Vingadores: Guerras Secretas",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/8N91uYwrr1uepEKbmym1tgfXlzS.jpg",
      "genre_ids": [
        16,
        10751,
        28,
        12,
        878
      ],
      "id": 14613,
      "original_language": "en",
      "original_title": "Next Avengers: Heroes of Tomorrow",
      "overview": "Os filhos dos Vingadores originais se unem para derrotar Ultron, o invencível robô que matou seus pais. Para esses jovens heróis vencerem, eles devem encontrar o Hulk e se juntar como os Novos Vingadores!",
      "popularity": 26.773,
      "poster_path": "/aSizHhORXh25Ltfu9VRmPtsOt1C.jpg",
      "release_date": "2008-09-02",
      "title": "Os Novos Vingadores: Heróis do Amanhã",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 245
    },
    {
      "adult": false,
      "backdrop_path": "/qzzAt0GakCZzbCeCJ0sFGhMIcdv.jpg",
      "genre_ids": [
        28,
        14
      ],
      "id": 323660,
      "original_language": "en",
      "original_title": "Avengers Grimm",
      "overview": "Quando Rumpelstiltskin destrói o espelho mágico e foge para o mundo moderno, as quatro princesas de \"Once Upon a Time\" -Cinderella, Bela Adormecida, Branca de Neve, Rapunzel e-são sugados através do portal também. Bem treinado e dotado de poderes mágicos, as quatro mulheres devem lutar Rumpelstiltskin e seu exército de escravos antes que ele escraviza todos na Terra.",
      "popularity": 18.314,
      "poster_path": "/b6eLRanmkrffTOSL0dHVaqlvtdr.jpg",
      "release_date": "2015-03-17",
      "title": "Vingadores do Passado",
      "video": false,
      "vote_average": 3.9,
      "vote_count": 118
    },
    {
      "adult": false,
      "backdrop_path": "/sORO7a1cSghfWE5GD4cSJ0qTN8O.jpg",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 521720,
      "original_language": "en",
      "original_title": "Avengers Grimm: Time Wars",
      "overview": "When Rumpelstiltskin tries to take over Earth once and for all, The Avengers Grimm must track him down through time in order to defeat him.",
      "popularity": 17.718,
      "poster_path": "/xfAcu74DRQXeM9XqFcE5MrSRzYP.jpg",
      "release_date": "2018-05-01",
      "title": "Vingadores do Passado: Guerras do Tempo",
      "video": false,
      "vote_average": 4.6,
      "vote_count": 56
    },
    {
      "adult": false,
      "backdrop_path": "/rGGRv7XXpDBVGD2BtbKWENfZOkf.jpg",
      "genre_ids": [
        10751,
        16
      ],
      "id": 368304,
      "original_language": "en",
      "original_title": "LEGO Marvel Super Heroes: Avengers Reassembled!",
      "overview": "Quando Ultron se apodera da armadura do Homem de Ferro, os Vingadores correm contra o tempo para ajudar o amigo e evitar que o mundo caia nas mãos do inimigo.",
      "popularity": 21.678,
      "poster_path": "/xUBZNoY7idPfqKZepnDEv7Qc8GC.jpg",
      "release_date": "2015-11-16",
      "title": "LEGO Super-Heróis da Marvel: Vingadores Reunidos!",
      "video": false,
      "vote_average": 6.504,
      "vote_count": 127
    },
    {
      "adult": false,
      "backdrop_path": "/yFuKvT4Vm3sKHdFY4eG6I4ldAnn.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 1771,
      "original_language": "en",
      "original_title": "Captain America: The First Avenger",
      "overview": "Durante a Segunda Guerra Mundial, Steve Rogers é um homem doente, do Brooklyn, que se transforma no super soldado Capitão América para ajudar nos esforços de guerra. Rogers deve parar o Caveira Vermelha, o implacável chefe de armas de Adolf Hitler e líder de uma organização que pretende usar um misterioso mecanismo de incalculáveis poderes para dominar o mundo.",
      "popularity": 50.284,
      "poster_path": "/f976JQnjMhCTa1yLXz7UH1pV4DG.jpg",
      "release_date": "2011-07-22",
      "title": "Capitão América: O Primeiro Vingador",
      "video": false,
      "vote_average": 6.999,
      "vote_count": 20756
    },
    {
      "adult": false,
      "backdrop_path": "/r5uAQQahZzcTYyPdlomDggyxHkV.jpg",
      "genre_ids": [
        35,
        14,
        28
      ],
      "id": 538153,
      "original_language": "en",
      "original_title": "Avengers of Justice: Farce Wars",
      "overview": "Longe dos dias de glória, Superbat agora é um herói aposentado e com seus poderes adormecidos, que faz de tudo para ser um bom pai e marido. Mas, quando os vilões Coringão e Lisp Luthor reaparecem com um plano de congelar o planeta, Superbat precisa convencer os Vingadores da Justiça a saírem da aposentadoria para salvar a humanidade.",
      "popularity": 9.823,
      "poster_path": "/dSOaNS7gFUtJxqcQGksXLejNKkQ.jpg",
      "release_date": "2018-07-20",
      "title": "Os Novos Vingadores",
      "video": false,
      "vote_average": 4.133,
      "vote_count": 15
    },
    {
      "adult": false,
      "backdrop_path": "/cE9Gtz5KEVkien4VDSgXjtwfcs.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 861,
      "original_language": "en",
      "original_title": "Total Recall",
      "overview": "No ano de 2084, o operário Doug Quaid recorre a um implante de memória para poder simular uma viagem a Marte. Mas algo sai errado e ele começa a se lembrar de quem realmente era e de fatos que, até então, desconhecia. Agora, Quaid quer vingança contra aqueles que o enganaram.",
      "popularity": 47.08,
      "poster_path": "/sFk3iW5ZvkAV7ZrNPYitB0sSxbw.jpg",
      "release_date": "1990-06-01",
      "title": "O Vingador do Futuro",
      "video": false,
      "vote_average": 7.298,
      "vote_count": 5467
    },
    {
      "adult": false,
      "backdrop_path": "/uBHeAB2Ug9ELBzkMyls8CUjzn4i.jpg",
      "genre_ids": [
        28,
        878,
        53
      ],
      "id": 64635,
      "original_language": "en",
      "original_title": "Total Recall",
      "overview": "Doug Quaid (Colin Farrell) leva uma vida pacata. Ele mora na Colônia, trabalha em uma fábrica na Bretanha Unida e é casado com a bela Lori (Kate Beckinsale). Um dia, resolve visitar a Rekall, uma empresa que oferece aos clientes a inserção de memórias no cérebro, simulando viagens que não aconteceram de verdade. Doug se submete ao tratamento, mas durante a inserção algo dá errado e ele logo se vê cercado por policiais, os quais mata sem dó nem piedade. Sem saber o que está acontecendo, Doug foge para casa. Lá descobre que Lori também está contra ele e deseja matá-lo. Após escapar da esposa, Doug começa a decifrar o enigma: No passado ele foi um importante agente do chanceler Cohaagen (Bryan Cranston), com ligações entre os rebeldes que desejam a liberdade da Colônia.",
      "popularity": 50.737,
      "poster_path": "/q7SpzrOBAJPbGoqp6sOaowbTnsn.jpg",
      "release_date": "2012-08-02",
      "title": "O Vingador do Futuro",
      "video": false,
      "vote_average": 6.009,
      "vote_count": 5246
    },
    {
      "adult": false,
      "backdrop_path": "/n2yv4KNOIeneb6zVzjbT9iLvnPE.jpg",
      "genre_ids": [
        28,
        18
      ],
      "id": 63441,
      "original_language": "zh",
      "original_title": "叉手",
      "overview": "Um grupo de artistas marciais chega a uma pequena cidade para investigar uma gangue de assassinos mascarados que vem aterrorizando a zona rural utilizando a técnica do tridente para matar, roubar, realizar estupros e pilhagem. Mas quem seriam esses homens por trás das máscaras, e quais são as identidades dos três chefes com a máscara de ouro.  Masked Avengers é mais um filme que consegue criar um grande impacto emocional.  As coreografias das lutas são incríveis, embora o confronto final seja um pouco longo demais, mas a audiência é mantida até o final para se descobrir quem é o líder da Gangue de mascarados.",
      "popularity": 14.322,
      "poster_path": "/mv7kdfkagr4u16V7fOwBEWmFxUI.jpg",
      "release_date": "1981-05-15",
      "title": "Os Vingadores Mascarados",
      "video": false,
      "vote_average": 6.2,
      "vote_count": 18
    },
    {
      "adult": false,
      "backdrop_path": "/oMVqG3v5higxMwEnm8DTxRaaQsp.jpg",
      "genre_ids": [
        53
      ],
      "id": 717634,
      "original_language": "en",
      "original_title": "Girl",
      "overview": "Uma jovem volta à sua cidade natal com a intenção de matar seu pai abusivo apenas para descobrir que alguém o assassinou no dia anterior. Enquanto ela procura respostas, descobre um legado familiar mais perigoso do que havia imaginado.",
      "popularity": 37.769,
      "poster_path": "/xsi8n1TVWwCq5XmID3ia0lIfTUG.jpg",
      "release_date": "2020-12-11",
      "title": "A Vingadora",
      "video": false,
      "vote_average": 6.178,
      "vote_count": 194
    }]
  }
  onKey(event: any) {
    this.searchInput = event.target.value
  }
  page: any = 1;

  Search() {
    this.loading = true
    instance.get(`/3/search/movie?query=${this.searchInput}&include_adult=false&language=pt-BR&page=${this.page}`)
      .then(response => {
        this.response = response.data
        this.loading = false
      })
      .catch(err => {
        console.error(err)
        this.loading = false
      });
  }

  receivePage($event: any) {
    this.page = $event
    this.Search()
  }

  ngOnInit() {
    this.Search()
  }
}
