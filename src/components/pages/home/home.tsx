import { CodeBlock, Keyword, Paragraph, Subtitle, Title } from "../../atoms";

export default () => {
  const example1 = [
    {
      keyword: "var",
    },
    { keyword: "let" },
    { keyword: "const" },
  ];

  const example2 = [
    {
      keyword: "var",
      return1: "mostra undefined no console",
      return2: "mostra joão no console",
    },
    {
      keyword: "let",
      return1: `mostra um erro no console "cannot access variable before initialization" ou seja      
      "não é possível acessar a variável antes dela ser declarada" e para de executar o código.`,
      return2: "",
    },
  ];
  const example3 = [
    {
      keyword: "var",
      return1: "mostra undefined no console",
      return2: "mostra joão no console",
    },
    {
      keyword: "let",
      return1: `mostra um erro no console "cannot access variable before initialization" ou seja      
    "não é possível acessar a variável antes dela ser declarada" e para de executar o código.`,
      return2: "",
    },
  ];
  return (
    <section className="flex flex-col gap-2">
      <div className="w-1/2">
        <Title>Como declarar uma variável em JS?</Title>
        <Paragraph>
          <>
            Para declarar uma variável usamos as palavras-chave
            <Keyword>var</Keyword>,<Keyword>let</Keyword> ou
            <Keyword>const</Keyword>. As diferenças entre cada uma serão
            abordadas no próximo tópico.
          </>
        </Paragraph>

        <Subtitle>
          <>
            Exemplo com as palavras-chave :<Keyword>var</Keyword>,
            <Keyword>let</Keyword> e <Keyword>const </Keyword> respectivamente:
          </>
        </Subtitle>
      </div>
      <div className="flex gap-4">
        {example1.map((example, index) => (
          <CodeBlock
            key={index}
            text={`${example.keyword} teste = "fernando";
console.log(teste)       // mostra fernando no console`}
          />
        ))}
      </div>
      <div className="w-1/2">
        <Title>var, let ou const, qual usar?</Title>
        <Paragraph>
          <>
            Cada palavra-chave tem sua peculiaridade, com a chegada do ES6 que
            trouxe as novas formas <Keyword>let</Keyword> e
            <Keyword>const</Keyword>, se tornou melhor usar apenas
            <Keyword>let</Keyword> e<Keyword>const</Keyword>. <br /> A seguir
            vamos entender as diferenças entre as formas de se declarar uma
            variável e porque usar uma ou outra em alguns cenários.
          </>
        </Paragraph>
        <Subtitle>
          <>
            Abaixo vemos um exemplo de :<Keyword>var</Keyword> vs
            <Keyword>let</Keyword>
          </>
        </Subtitle>
      </div>
      <div className="flex gap-4">
        {example2.map((example, index) => (
          <CodeBlock
            key={index}
            text={`console.log(pessoa); /* ${example.return1} */    
${example.keyword} pessoa = "joão";
console.log(pessoa); ${example.return2 ? "//" : ""} ${example.return2} `}
          />
        ))}
      </div>
      <div className="w-1/2">
        <Paragraph>
          <>
            Ao usar <Keyword>var</Keyword> o debugging da aplicação fica muito
            mais difícil pois nenhum erro é retornado mesmo se você escreveu o
            nome da variável errado, já com let você recebe o erro e só consegue
            acessar variáveis que existem.
          </>
        </Paragraph>
        <Subtitle>Mais exemplos :</Subtitle>
      </div>
      <div className="flex gap-4">
        {example3.map((example) => (
          <CodeBlock text={`teste`} />
        ))}
      </div>
    </section>
  );
};
