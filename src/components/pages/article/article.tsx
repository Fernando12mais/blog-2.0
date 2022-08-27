import { ReactNode } from "react";
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
      return1: "redeclara a variável teste criada anteriormente",
      return2: "retorna fernando no console",
    },
    {
      keyword: "let",
      return1: `cria uma variável que só pode ser acessada dentro da função fazAlgo`,
      return2: "retorna 15 no console",
    },
  ];
  const example4 = [
    {
      keyword: "const",
      return1: `retorna um erro no console  "Uncaught TypeError: Assignment to constant variable.
Para de executar o código."
Significa que não podemos atribuir um novo valor a uma constante.
Uma vez declarado o valor deve sempre se manter o mesmo;`,
      return2: "",
    },
    {
      keyword: "let",
      return1: `a variável pode receber um novo valor`,
      return2: "",
    },
  ];
  const ContainerCodeBlock = ({ children }: { children: ReactNode }) => (
    <div className="w-full flex flex-col gap-4 md:flex-row lg:text-lg xl:text-xl">
      {children}
    </div>
  );
  const ContainerText = ({ children }: { children: ReactNode }) => (
    <div className="flex flex-col gap-4 md:px-8 lg:w-3/4">{children}</div>
  );
  return (
    <section className=" flex flex-col gap-8 p-4 px-2 bg-[#2E2B2B] lg:shadow-[inset_0_0_45px_-15px_rgba(3,188,300,1)]">
      <ContainerText>
        <Title>Como declarar uma variável em JS?</Title>
        <Paragraph>
          <>
            Para declarar uma variável usamos as palavras-chave
            <Keyword>var</Keyword>,<Keyword>let</Keyword>ou
            <Keyword>const</Keyword>.As diferenças entre cada uma serão
            abordadas no próximo tópico.
          </>
        </Paragraph>

        <Subtitle>
          <>
            Exemplo com as palavras-chave:<Keyword>var</Keyword>,
            <Keyword>let</Keyword>e<Keyword>const</Keyword>respectivamente:
          </>
        </Subtitle>
      </ContainerText>
      <ContainerCodeBlock>
        {example1.map((example, index) => (
          <CodeBlock
            key={index}
            text={`${example.keyword} teste = "fernando";
console.log(teste);
// mostra fernando no console`}
          />
        ))}
      </ContainerCodeBlock>
      <ContainerText>
        <Title>Var, let ou const, qual usar?</Title>
        <Paragraph>
          <>
            Cada palavra-chave tem sua peculiaridade, com a chegada do ES6 que
            trouxe as novas formas<Keyword>let</Keyword>e
            <Keyword>const</Keyword>,se tornou melhor usar apenas
            <Keyword>let</Keyword> e<Keyword>const</Keyword>.<br />A seguir
            vamos entender as diferenças entre as formas de se declarar uma
            variável e porque usar uma ou outra em alguns cenários.
          </>
        </Paragraph>
        <Subtitle>
          <>
            Abaixo vemos um exemplo de :<Keyword>var</Keyword>vs
            <Keyword>let</Keyword>
          </>
        </Subtitle>
      </ContainerText>
      <ContainerCodeBlock>
        {example2.map((example, index) => (
          <CodeBlock
            key={index}
            text={`console.log(pessoa);
/* ${example.return1} */    
${example.keyword} pessoa = "joão";
console.log(pessoa);
${example.return2 ? "//" : ""} ${example.return2} `}
          />
        ))}
      </ContainerCodeBlock>
      <ContainerText>
        <Paragraph>
          <>
            Ao usar <Keyword>var</Keyword>o debugging da aplicação fica muito
            mais difícil pois nenhum erro é retornado mesmo se você escreveu o
            nome da variável errado, já com let você recebe o erro e só consegue
            acessar variáveis que existem.
          </>
        </Paragraph>
        <Subtitle>Mais exemplos :</Subtitle>
      </ContainerText>
      <ContainerCodeBlock>
        {example3.map((example) => (
          <CodeBlock
            text={`${example.keyword} teste = 15;
console.log(teste) // retorna 15 no console
function fazAlgo (){
${example.keyword} teste = "fernando";
// ${example.return1};
}  
fazAlgo() // executa a função
console.log(teste) // ${example.return2}
`}
          />
        ))}
      </ContainerCodeBlock>
      <ContainerText>
        <Paragraph>
          <>
            Como vimos no exemplo acima,<Keyword>var</Keyword>cria uma variável
            de escopo global, que altera o valor criado anteriormente
            independente do escopo, então fica muito perigoso usar
            <Keyword>var</Keyword>, numa aplicação com 1000 linhas de código
            fica muito fácil acabar repetindo um nome de variável e redeclarando
            ela por acidente,causando muitos bugs. mais um motivo pra se usar
            <Keyword>let</Keyword>ao invés de
            <Keyword>var</Keyword>.
          </>
        </Paragraph>

        <Subtitle>
          <>
            A seguir vemos a diferença entre <Keyword>const</Keyword> e
            <Keyword>let</Keyword>:
          </>
        </Subtitle>
      </ContainerText>
      <ContainerCodeBlock>
        {example4.map((example) => (
          <CodeBlock
            text={`${example.keyword} teste = 15;
teste="fer";
/*${example.return1}*/`}
          />
        ))}
      </ContainerCodeBlock>
      <ContainerText>
        <Paragraph>
          <>
            Por enquanto é isso que tenho pra mostrar sobre
            <Keyword>const</Keyword>,<Keyword>let</Keyword> e
            <Keyword>var</Keyword>, espero ter contribuido para que você leitor
            tenha um melhor entendimento sobre variáveis em Javascript
          </>
        </Paragraph>
      </ContainerText>
    </section>
  );
};
