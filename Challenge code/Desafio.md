# Instruções gerais

## OBJETIVO
Parte integrante do processo seletivo da Tunts, o desafio de programação tem como objetivo principal a avaliação das habilidades de programação do candidato. Levando em conta não apenas o êxito de implementação da funcionalidade desejada, mas também uma análise da solução de forma estrutural, semântica e performática.

## CRITÉRIOS DE AVALIAÇÃO

* Bom entendimento do problema a ser resolvido;
* Êxito na implementação da funcionalidade;
* Estrutura do código fonte;
* Documentação e utilização de boas práticas;
* Utilização de ferramentas de desenvolvimento básicas.

## DESAFIO

*Criar uma aplicação em uma linguagem de programação de sua preferência (caso esteja se candidatando a uma vaga de linguagem de programação específica, exemplo: programador node.js, utilizar a linguagem/tecnologia específica da vaga). A aplicação deve ser capaz de ler uma planilha do google sheets, buscar as informações necessárias, calcular e escrever o resultado na planilha.*



* Primeiro passo: crie uma cópia da planilha para você acessando o link abaixo:

![download](https://user-images.githubusercontent.com/15280103/134734827-f3599014-98fa-4a45-b126-0fe395a208b5.png)

*Planilha: https://docs.google.com/spreadsheets/d/1XvWJcRLj2WAeXO3ULQ_GxGm9---3SZkjMbGcXMJtt70/edit?usp=sharing*

* Use a função de fazer cópia:

![download (1)](https://user-images.githubusercontent.com/15280103/134734842-abd70253-2111-4d76-bfa7-b102d77ae764.png)




* Modifique o nome da planilha para Engenharia de Software – Desafio [SEU NOME]:


![download (2)](https://user-images.githubusercontent.com/15280103/134734852-d6c7000f-c8e3-4f5d-8525-56560a9fc404.png)



* Depois deixe a planilha pública para edição para qualquer um com acesso ao link:

![download (3)](https://user-images.githubusercontent.com/15280103/134734858-37267950-1347-4ada-825e-cbbbb9592fd5.png)




* Utilize a planilha recém criada (cópia) para realizar o teste.



## REGRAS: 

* Calcular a situação de cada aluno baseado na média das 3 provas (P1, P2 e P3), conforme a tabela: 


* Caso o número de faltas ultrapasse 25% do número total de aulas o aluno terá a situação "Reprovado por Falta", independente da média.

* Caso a situação seja "Exame Final" é necessário calcular a "Nota para Aprovação Final"(naf) de cada aluno de acordo com seguinte fórmula: 

### 5 <= (m + naf)/2

* Caso a situação do aluno seja diferente de "Exame Final", preencha o campo "Nota para Aprovação Final" com 0.

* Arredondar o resultado para o próximo número inteiro (aumentar) caso necessário.

* Utilizar linhas de logs para acompanhamento das atividades da aplicação.

* Os textos do código fonte (atributos, classes, funções, comentários e afins) devem ser escritos em inglês, salvo os identificadores e textos pré-definidos nesse desafio.



* O candidato deve especificar os comandos que devem ser utilizados para execução da aplicação. Exemplo de uma aplicação node.js:

1.      npm install

2.      npm start



### O candidato deve publicar o código fonte em um repositório git de sua preferência (exemplo: github, gitlab, bitbucket e etc).

## ENTREGÁVEIS

* Link público do repositório git escolhido;
* Comandos para rodar a aplicação;
* Link público da planilha copiada.


## REFERÊNCIA

Documentação da Google Sheets: https://developers.google.com/sheets/api/guides/concepts

*Certifique-se de reservar tempo suficiente para fazer o teste sem interrupções. Caso você saia do teste sem finalizá-lo, será considerado como concluído e você não poderá fazer novamente.*
