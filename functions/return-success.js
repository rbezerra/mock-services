exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      title: "Nome do produto 10",
      subTitle: "309825 | 987654321654 | Mix",
      imgLink: "http://alkjlaksjdlkajskajslkdjsa.jpg",
      imgSmallLink: "http://alkjlaksjdlkajskajslkdjsa.jpg",
      info1: {
        title: "Estoque",
        subTitle: "35",
      },
      info2: {
        title: "Custo",
        subTitle: "R$ 7,59",
      },
      info3: {
        title: "Valor",
        subTitle: "R$ 263,45",
      },
      info4: {
        title: "Últ. Entrada",
        subTitle: "14/01/2021",
      },
      info5: {
        title: "Últ. Saída",
        subTitle: "05/03/2021",
      },
      info6: {
        title: "Qtd. Dias",
        subTitle: "-33",
      }
    })
};
