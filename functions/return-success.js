exports.handler = async (event, context) => {
  const body = JSON.stringify({
    listaPrincipal: [
      {
        title: "Nome do produto 1",
        subTitle: "309825 | 987654321654 | Mix",
        imgLink: "https://cdn.awsli.com.br/600x450/914/914004/produto/36238837/21a33a3709.jpg",
        imgSmallLink: "https://cdn.awsli.com.br/600x450/914/914004/produto/36238837/21a33a3709.jpg",
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
          title: "Teste",
          subTitle: "teste",
        },
      },
      {
        title: "Nome do produto 2",
        subTitle: "309825 | 987654321654 | Mix",
        imgLink: "https://cdn.awsli.com.br/600x450/914/914004/produto/36238837/21a33a3709.jpg",
        imgSmallLink: "https://cdn.awsli.com.br/600x450/914/914004/produto/36238837/21a33a3709.jpg",
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
          title: "Teste",
          subTitle: "teste",
        },
      },
      {
        title: "Nome do produto 3",
        subTitle: "309825 | 987654321654 | Mix",
        imgLink: "https://cdn.awsli.com.br/600x450/914/914004/produto/36238837/21a33a3709.jpg",
        imgSmallLink: "https://cdn.awsli.com.br/600x450/914/914004/produto/36238837/21a33a3709.jpg",
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
          title: "Teste",
          subTitle: "teste",
        },
      },
    ],
  });

  return {
    statusCode: 200,
    body,
  };
};
