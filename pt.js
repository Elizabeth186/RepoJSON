var frequent_questions = [
    {
        question: "Onde posso adquirir produtos Wait N 'Rest?",
        answer: "Você encontrará uma tela de toque dentro do seu quarto que permitirá a compra de qualquer um de nossos produtos. Em nossa loja você encontrará pijamas, cobertores, travesseiros e os produtos mais legais que você já viu. Escolha o que você mais gosta e nossa equipe levará para o seu quarto. "
    },
    {
        question: "Quantas pessoas podem usar a sala ao mesmo tempo?",
        answer: "Nossos quartos são para apenas 01 (uma) pessoa. O não cumprimento desta regra resultará em uma multa de <label id='pen-multi'></label> que será cobrada na forma de pagamento cadastrada."
    },
    {
        "question": "Quanto custa?",
        "answer": "A taxa Wait N' Rest é por hora ou fração e é <label class='answer' id='price-questions'></label> USD. Se você se registrar entre 06:00 e 18:00, terá acesso a uma oferta exclusiva de 3horas por 16,98 USD (33% de desconto sobre o preço normal). O tempo começa a correr a partir do momento em que você faz o check-in e para quando você faz o check-out na tela sensível ao toque do lado de fora do seu quarto.<br><br> Você terá 5 minutos após cada hora para fazer o check-out sem ser cobrado pela hora adicional."
    },
    {
        question: "Como sou cobrado?",
        answer: "Durante o seu check-in, realizamos uma pré-autorização do equivalente a 8 horas de estadia (tempo máximo permitido) através do nosso portal de pagamento STRIPE para o seu cartão de débito ou crédito. <br> <br> Quando finalizou o processo de check-out do seu quarto, o nosso sistema captou apenas o valor correspondente ao tempo da sua estadia. A liberação do saldo 'congelado' restante dependerá das políticas de retenção de autorização do seu banco. Geralmente leva de 2 a 20 dias úteis. Lembre-se de que uma pré-autorização é uma 'cobrança pendente de confirmação' e, embora possa aparecer no seu extrato como uma dedução; não é."
    },
    {
        question: "Como faço meu check-out?",
        answer: "Use a tela de toque fora do seu quarto e pressione o botão de check-out. Coloque a senha do seu quarto, feche a porta e siga as instruções. É um processo muito fácil."
    },
    {
        question: "Quais são seus protocolos contra COVID-19?",
        answer: "Seu quarto é desinfetado após cada uso por nossa equipe. Usamos as diretrizes mais recentes do governo colombiano para combater o COVID-19.<br><br>Injetamos cada sala com ar fresco purificado por filtros HEPA H13. Os filtros HEPA são quase 100% eficientes na captura do espectro de partículas até as menores partículas transportadas pelo ar. Usamos um sistema de renovação de ar semelhante aos usados ​​em salas de cirurgia em hospitais ou aviões. <br><br>O ar dentro do seu quarto é renovado a cada 2 minutos."
    },
    {
        question: "Posso verificar as informações do voo dentro do meu quarto?",
        answer: "Sim. O seu quarto está equipado com um ecrã tátil onde pode verificar o estado do seu voo em tempo real, controlar a temperatura do seu quarto, a iluminação e adquirir qualquer um dos nossos produtos."
    },
    {
        question: "Posso reservar um quarto com antecedência para uma data específica?",
        answer: "Sim. Acesse nosso site <label class='l-bold'>www.waitnrest.com</label> e reserve seu quarto. Só aceitamos reservas 24 horas antes da data de chegada e para uma estadia mínima de 4 horas."
    },
    {
        question: "Eles ficam disponíveis 24 horas por dia, 7 dias por semana?",
        answer: "Sim. Os quartos Wait N 'Rest estão disponíveis 24 horas por dia."
    },
    {
        question: "Posso entrar e sair das instalações ou do meu quarto quantas vezes quiser?",
        answer: "Sim. Use o botão 'reentrar' encontrado nas telas sensíveis ao toque em nossa área de check-in para voltar para dentro.<br><br>Procure o seu quarto e pressione o botão de reentrar que fica na tela sensível ao toque fora do seu quarto. Para entrar você precisará colocar a senha que você cadastrou conosco no momento do check-in.<br><br>Enquanto você não estiver em seu quarto, ele permanecerá trancado."
    },
    {
        "question": "Como funciona?",
        "answer": "Cadastre-se nas telas de check-in fora de nossa sede. Deve introduzir uma palavra-passe para o seu quarto, os dados do seu cartão e um e-mail para poder enviar-lhe a fatura quando terminar o serviço. Atribuiremos a você um número de quarto e você poderá entrar em nossa sede. A taxa Wait N' Rest é por hora ou fração ou por pacote. Se você se registrar entre 06:00 e 18:00, terá acesso a uma oferta de 3horas por USD 16,98 (33% de desconto). <br><br>O tempo começa a contar a partir do momento em que você faz o check-in e para quando você faz o check-out com sucesso. Para o seu check-out, você só precisa seguir as instruções na tela sensível ao toque localizada fora do seu quarto"
    },

    // {
    //     question: "Como funciona?",
    //     answer: "Deve introduzir uma palavra-passe para o seu quarto, os dados do seu cartão e um e-mail para poder enviar-lhe a fatura quando terminar o serviço. <br><br>Atribuiremos a você um número de quarto e você poderá entrar em nossa sede. <br><br> A taxa Wait N' Rest é por hora ou fração e é dinâmica. Das 8h01 às 20h59, o preço por hora ou fração é de <label  id='price-tarifa-reducida-1'></label> e das 21h00 às 8h00, nosso preço por hora ou fração é de <label  id='price-tarifa-regular-1'></label> USD. <br><br> Se dentro da sua estadia você tiver uma hora em que os minutos são compartilhados entre os dois slots, não se preocupe! Por essa hora, você pagará a taxa mais baixa. <br><br> O tempo começa a contar a partir do momento em que você faz o check-in e para quando você faz o check-out com sucesso. Para o seu check-out apenas tem de seguir as instruções no ecrã táctil localizado no exterior do seu quarto. <br><br> Você terá 5 minutos após cada hora para fazer o check-out sem ser cobrado pela hora adicional."
    // },
    // {
    //     question: "Como funciona a tarifa dinâmica?",
    //     answer: "Em períodos de baixa demanda, reduzimos a tarifa para que você possa ficar mais tempo. Nosso preço por hora ou fração mudará de acordo com o período em que o cliente ficar conosco. <br><br>Estes são os dois períodos que temos: <br><br><ul><li>Período de tarifa reduzida: 8:01 AM até 8:59 PM <ul><li>Preço por hora ou fração: 8,49 USD</li></ul></li><br><li>Período de tarifa regular: 6:00 PM até 8:00 AM</li> <ul><li>Preço por hora ou fração: 11,49 USD</li></ul></ul><br>Não se esqueça de que damos 5 minutos depois de cada hora para você fazer o check-out sem cobrar a próxima hora de estadia. <br><br>Lembre-se, se durante a sua estadia você tiver uma hora em que minutos são compartilhados entre ambos os períodos, não se preocupe! Você pagará a tarifa mais baixa por essa hora. <br><br>Exemplo:<br>Se você quer ficar 5 horas conosco e entrar em sua quarto às 8:30 PM, sua primeira hora de estadia (8:30 PM a 9:30 PM) será cobrada sob tarifa reduzida, pois você compartilha minutos entre os dois períodos. As outras 4 horas serão cobradas sob tarifa regular. <br><br>Os 5 minutos extras depois de cada hora para fazer o check-out não contam como estadia, ou seja, não afetam a tarifa que você pagará. Se você tiver dúvidas, recomendamos usar nosso <label class='l-bold'>simulador de estadia.</label>"
    // },
    // {
    //     question:"¿Se eu fizer check-in durante um período com desconto, toda a minha estadia será cobrada na mesma tarifa?",
    //     answer:"Lembre-se que nossa tarifa é por hora ou fração. Não te esqueças que te damos 5 minutos extra após cada hora para fazeres o check-out sem seres cobrado pela próxima hora de estadia. <br><br>Exemplo: <br><ul><li>Horário de tarifa reduzida: 8h01 às 20h59</li><li>Horário normal: das 21:00 às 08:00 <br><br>Era uma vez um viajante chamado João, que estava muito cansado após uma longa viagem. Às 6h, Juan fez o check-in conosco durante o horário normal. Juan estava tão cansado que caiu em sono profundo após o check-in e só acordou às 13h. Embora Juan tenha ficado conosco por 7 horas, ele não teve que pagar tanto dinheiro por sua estadia. Ele pagou apenas 2 horas de tarifa normal (6h00 às 8h00) e 5 horas de tarifa reduzida (8h01 às 13h00). Juan ficou muito feliz por ter economizado dinheiro durante sua estada e estava pronto para continuar sua aventura.</li></ul>"
    // },
    // {
    //     question:"O que acontece se a minha primeira ou última hora de permanência compartilhar minutos entre o horário de tarifa reduzida e o horário de tarifa regular?",
    //     answer:"¡Se dentro da sua estadia você tiver uma hora em que os minutos são compartilhados entre os dois slots, não se preocupe! Por essa hora, você pagará a taxa mais baixa. Lembre-se que os 5 minutos que lhe damos para fazer o seu checkout antes da próxima hora ser cobrada, não são considerados como parte da sua estadia; ou seja, eles não afetam a taxa que você pagará. <br><br>Por exemplo: <br><ul><li>Horário de tarifa reduzida: 8h01 às 20h59</li><li>Horário normal: das 21:00 às 08:00</li></ul>Suponha que Juan, um viajante cansado, decida fazer o check-in em nosso serviço às 7h e queira que sua estadia seja de uma (1) hora (Juan está entrando em um horário de preço normal). <br><br>Juan sabe que terá até 8h05 para fazer o checkout sem ser cobrado pela segunda hora de permanência. Juan não entendeu a mensagem anterior e acha que aqueles 5 minutos de brinde para fazer o checkout fazem parte da sua estadia. <br><br> Juan quer alegar que, como ele ficou 5 minutos dentro do intervalo de tempo de tarifa reduzida, devemos cobrar a tarifa reduzida por sua estadia. <br><br>Juan, avisamos que os 5 minutos gratuitos não fazem parte da sua estadia, portanto, você não dividiu os minutos entre os dois slots. <br><br>Juan, tentamos explicar aqui, nas telas anteriores e nos Termos e Condições, que esses 5 minutos não fazem parte da sua estadia e não afetam a tarifa que você pagará. <br><br>Juan, se você tinha dúvidas, ¿por que não usou nossa calculadora de permanência?<br><br>Não seja como João. <br><br>Mas …<br><br>¿O que aconteceria se Juan tivesse ficado das 7h às 8h10 conosco? <br><br>Juan teria que pagar 2 horas de permanência porque Juan sabe que nosso serviço é cobrado por hora ou fração, e Juan ultrapassou o presente de 5 minutos. Juan teria pago a primeira hora a preço normal e a segunda a preço reduzido."
    // }
    

]