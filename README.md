# Conversor de placa 🚗 🛵

Esse projeto pessoal é um app em React que converte a placa de carros do padrão antigo para o novo padrão adotado no Mercosul. Você pode acessá-lo [aqui](https://conversor-de-placa.netlify.app/).

## Sobre o projeto

O funcionamento do projeto é simples: um regex confere se o input é correto e uma função altera o segundo numeral da placa para uma letra correspondente (ver tabela abaixo). Os valores são guardados no state usando hooks.

Quanto à responsividade, no mobile você verá a placa para motos e no desktop verá a placa para automóveis.

## Tabela de conversão

Número | Letra
:-----:|:-----:
0      |A
1      |B
2      |C
3      |D
4      |E
5      |F
6      |G
7      |H
8      |I
9      |J

Portanto, no exemplo _AAA-0000_, a placa se torna _AAA0A00_.
