var frequent_questions = [
    {
        question: "Où puis-je acheter les produits Wait N 'Rest ?",
        answer: "Vous trouverez un écran tactile à l'intérieur de votre chambre qui vous permettra d'acheter n'importe lequel de nos produits. Sur notre boutique, vous trouverez des vêtements de nuit, des couvertures, des oreillers et le merchandising le plus cool que vous ayez jamais vu.<br><br>Choisissez ce qui vous plaît le plus et notre personnel l'apportera dans votre chambre."
    },
    {
        question: "Combien de personnes peuvent utiliser la chambre en même temps ?",
        answer: "Nos chambres ne sont prévues que pour une (01) personne. Le non-respect de cette règle entraînera une amende de <label id='pen-multi'></label> qui sera débitée sur le mode de paiement enregistré."
    },
    {
        "question": "Combien ça coûte?",
        "answer": "Le tarif Wait N' Rest est par heure ou fraction et est de <label class='answer' id='price-questions'></label> USD. Si vous vous inscrivez entre 09h00 et 12h00, vous aurez accès à une offre exclusive de 3heures pour 16,98 USD (33% de réduction sur le prix régulier). Le temps commence à courir à partir du moment où vous vous enregistrez et s'arrête à votre départ sur l'écran tactile à l'extérieur de votre chambre.<br><br>Vous disposerez de 5 minutes après chaque heure pour partir sans être facturé pour l'heure supplémentaire."
    },
    {
        question: "Comment me facturez-vous ?",
        answer: "Lors de votre enregistrement, nous effectuons une pré-autorisation de l'équivalent de 8 heures de séjour (durée maximale autorisée) via notre passerelle de paiement STRIPE sur votre carte de débit ou de crédit. <br><br>Lorsque vous avez terminé le processus de départ de votre chambre, notre système n'a saisi que le montant correspondant à la durée de votre séjour. La libération du solde 'gelé' restant dépendra des politiques de retenue d'autorisation de votre banque. Cela prend généralement 2 à 20 jours ouvrables. N'oubliez pas qu'une préautorisation est une 'collection en attente de confirmation', et bien qu'elle puisse apparaître sur votre relevé comme une déduction ; ce n'est pas."
    },
    {
        question: "Comment puis-je procéder à mon départ ?",
        answer: "Utilisez l'écran tactile à l'extérieur de votre chambre et appuyez sur le bouton de départ. Entrez le mot de passe de votre chambre, fermez la porte et suivez les instructions. C'est un processus très simple."
    },
    {
        question: "Quels sont vos protocoles contre le COVID-19 ?",
        answer: "Votre chambre est désinfectée après chaque utilisation par notre personnel. Nous utilisons les dernières directives du gouvernement colombien pour lutter contre le COVID-19.<br><br>Nous injectons dans chaque chambre de l'air frais purifié par des filtres HEPA H13. Les filtres HEPA sont efficaces à près de 100% pour capturer le spectre des particules jusqu'aux plus petites particules en suspension dans l'air. Nous utilisons un système de renouvellement de l'air similaire à ceux utilisés dans les salles d'opération des hôpitaux ou dans les avions.<br><br>L'air à l'intérieur de votre chambre est renouvelé toutes les 2 minutes."
    },
    {
        question: "Puis-je consulter les informations sur les vols dans ma chambre ?",
        answer: "Oui. Votre chambre est équipée d'un écran tactile où vous pouvez vérifier le statut de votre vol en temps réel, contrôler la température de votre chambre, l'éclairage et acheter l'un de nos produits."
    },
    {
        question: "Puis-je réserver une chambre à l'avance pour une date précise ?",
        answer: "Oui. Rendez-vous sur notre site web <label class='l-bold'>www.waitnrest.com</label> et réservez votre chambre. Nous n'acceptons les réservations que 24 heures avant votre date d'arrivée et pour un séjour minimum de 4 heures."
    },
    {
        question: "Les chambres sont-elles disponibles 24 heures sur 24 et 7 jours sur 7 ?",
        answer: "Oui. Les chambres Wait N 'Rest sont à votre disposition 24 heures sur 24."
    },
    {
        question: "Puis-je entrer et sortir des locaux ou de ma chambre autant de fois que je le souhaite ?",
        answer: "Oui. Oui. Utilisez le bouton « réentrée » qui se trouve sur les écrans tactiles de notre zone d'enregistrement pour retourner à l'intérieur.<br><br>Cherchez votre chambre et appuyez sur le bouton de réentrée qui se trouve sur l'écran tactile à l'extérieur de votre chambre. Pour entrer, vous devrez utiliser le mot de passe que vous avez enregistré lors de votre enregistrement.<br><br>Tant que vous n'êtes pas dans votre chambre, celle-ci reste verrouillée."
    },
    {
        "question": "Comment ça marche?",
        "answer": "Enregistrez-vous sur les écrans d'enregistrement à l'extérieur de notre siège social. Vous devez entrer un mot de passe pour votre chambre, les détails de votre carte et un e-mail pour pouvoir vous envoyer la facture lorsque vous avez terminé le service. Nous vous attribuerons un numéro de chambre et vous pourrez entrer dans notre siège. Le tarif Wait N' Rest est par heure ou fraction ou par forfait. Si vous vous inscrivez entre 09h00 et 12h00, vous aurez accès à une offre de 3heures pour 16,98 USD (33% de réduction). <br><br>Le temps commence à compter à partir du moment où vous vous enregistrez et s'arrête lorsque vous quittez avec succès. Pour votre check-out vous n'avez qu'à suivre les instructions sur l'écran tactile situé à l'extérieur de votre chambre"
    },
    // {
    //     question: "Comment cela fonctionne-t-il ?",
    //     answer: "Enregistrez-vous sur les écrans d'enregistrement à l'extérieur de notre siège social. <br> <br>Vous devez entrer un mot de passe pour votre chambre, les détails de votre carte et un e-mail pour pouvoir vous envoyer la facture lorsque vous avez terminé le service. <br><br> Nous vous attribuerons un numéro de chambre et vous pourrez entrer dans notre siège. <br><br> Le tarif Wait N' Rest est par heure ou fraction et est dynamique. De 8h01 à 20h59, le prix par heure ou fraction est de <label  id='price-tarifa-reducida-1'></label> et de 21h00 à 8h00, notre prix par heure ou fraction est de <label  id='price-tarifa-regular-1'></label>. <br><br> Si dans votre séjour vous disposez d'une heure où les minutes sont partagées entre les deux créneaux, ne vous inquiétez pas ! Pour cette heure, vous paierez le tarif le plus bas. <br><br>Le temps commence à compter à partir du moment où vous vous enregistrez et s'arrête lorsque vous quittez avec succès. Pour votre check-out, vous n'avez qu'à suivre les instructions sur l'écran tactile situé à l'extérieur de votre chambre. <br><br>Vous disposerez de 5 minutes après chaque heure pour partir sans être facturé pour l'heure supplémentaire."
    // },
    // {
    //     question: "Comment fonctionne le taux dynamique ?",
    //     answer: "En période de faible demande, nous réduisons le tarif afin que vous puissiez rester plus longtemps.<br><br>Notre prix par heure ou fraction changera en fonction du créneau horaire dans lequel le client reste avec nous. Voici les deux créneaux horaires que nous avons :<br><br><ul><li>Créneau horaire à tarif réduit : de 8h01 à 20h59 <ul><li>Taux horaire ou fractionné : 8.49 USD</li></ul></li><br><li>Créneau horaire à tarif normal : de 21 h 00 à 8 h 00</li> <ul><li>Taux horaire ou fractionné : 11,49 USD</li></ul></ul><br>N'oubliez pas que nous vous accordons 5 minutes après chaque heure pour partir sans vous facturer l'heure de séjour suivante.<br><br>N'oubliez pas que si, dans votre séjour, vous disposez d'une heure pendant laquelle les minutes sont partagées entre les deux plages horaires, ne vous inquiétez pas ! Pour cette heure, vous paierez le tarif le plus bas.<br><br>Exemple:<br>Si vous souhaitez rester 5 heures avec nous et entrer dans votre chambre à 20h30, votre première heure de séjour (20h30 à 21h30) sera facturée à tarif réduit car vous partagerez les minutes entre les deux plages horaires. Le reste des 4 heures sera facturé au tarif régulier.<br><br>Les 5 minutes supplémentaires après chaque heure de départ ne comptent pas comme un séjour, c'est-à-dire qu'elles n'affectent pas le tarif que vous paierez. Si vous avez des doutes, nous vous recommandons d'utiliser notre <label class='l-bold'>calculateur de séjour.</label>"
    // },
    // {
    //     question:"¿Si je m’inscris pendant une période de tarif réduit, est-ce que mon séjour entier sera facturé à ce même tarif?",
    //     answer: "Pas nécessairement. Le prix facturé pour votre séjour dépendra de la période à laquelle appartiennent toutes les heures où vous êtes resté avec nous. Il peut arriver qu'au cours d'un séjour de 3heures, 3 heures appartiennent à la période de tarif réduit et les 3 autres à la période de tarif régulier. <br><br>Exemple: <br> <ul><li>Période de tarif réduit : 8h01 à 20h59</li><li>Période de tarif régulier : 21h00 à 8h00 <br><br>Il était une fois un voyageur nommé Juan, qui était très fatigué après un long voyage. À 6h00, Juan s'est enregistré avec nous pendant la période de tarif régulier. Juan était si fatigué qu'il s'est endormi profondément après s'être enregistré et ne s'est réveillé qu'à 13h00. Bien que Juan soit resté avec nous pendant 7 heures, il n'a pas dû payer autant d'argent pour son séjour. Il a payé seulement 2 heures de tarif régulier (6h00 à 8h00) et 5 heures de tarif réduit (8h01 à 13h00). Juan était très heureux d'avoir économisé de l'argent sur son séjour et était prêt à continuer son aventure.</li></ul>"
    // }
    

]