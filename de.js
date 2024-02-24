var frequent_questions = [
    {
        question: "Wo kann ich Wait N 'Rest Produkte kaufen?",
        answer: "In Ihrem Raum finden Sie einen Touchscreen, über den Sie alle unsere PRODUCTs kaufen können. In unserem Shop finden Sie Nachtwäsche, Decken, Kissen und die coolste Ware, die Sie je gesehen haben.<br><br>Wählen Sie aus, was Ihnen am besten gefällt, und unsere Mitarbeiter bringen es auf Ihr Zimmer."
    },
    {
        question: "Wie viele Personen können den Raum gleichzeitig nutzen?",
        answer: "Unsere Räume sind nur für eine (01) Person gedacht. Bei Nichteinhaltung dieser Regel wird eine Strafe von <label id='pen-multi'></label> fällig, die der registrierten Zahlungsmethode belastet wird."
    },
    {
        "question": "Wie viel kostet es?",
        "answer": "Der Wait N' Rest-Tarif gilt pro Stunde oder Bruchteil und beträgt <label class='answer' id='price-questions'></label> USD. Wenn Sie sich zwischen 06:00 und 18:00 Uhr registrieren, erhalten Sie Zugang zu einem exklusiven Angebot von 3Stunden für 16,98 USD (50 % RABATT auf den regulären Preis). Die Zeit beginnt zu laufen, sobald Sie einchecken, und stoppt, wenn Sie auf dem Touchscreen außerhalb Ihres Zimmers auschecken.<br><br>Nach jeder Stunde haben Sie 5 Minuten Zeit zum Auschecken, ohne dass Ihnen die zusätzliche Stunde in Rechnung gestellt wird."
    },
    {
        question: "Wie berechnen Sie mir das?",
        answer: "Während Ihres Check-ins führen wir über unser STRIPE-Zahlungsgateway eine Vorautorisierung Ihrer Debit- oder Kreditkarte in Höhe von 8 Stunden Aufenthalt (maximal zulässige Zeit) durch. <br><br> Wenn Sie den Check-out-Vorgang für Ihr Zimmer abgeschlossen haben, hat unser System nur den Betrag erfasst, der der Zeit Ihres Aufenthalts entspricht. Die Freigabe des verbleibenden 'eingefrorenen' Guthabens hängt von den Autorisierungsrichtlinien Ihrer Bank ab. Normalerweise dauert es 2-20 Werktage. Denken Sie daran, dass eine Vorautorisierung eine 'Bestätigung des Einzugs ausstehende' ist, und obwohl sie auf Ihrem Kontoauszug als Abzug erscheinen kann; es ist nicht."
    },
    {
        question: "Wie mache ich meinen Check-out?",
        answer: "Benutzen Sie den Touchscreen vor Ihrem Raum und drücken Sie die Check-out-Taste. Geben Sie das Passwort für Ihren Raum ein, schließen Sie die Tür und folgen Sie den Anweisungen. Es ist ein sehr einfacher Vorgang."
    },
    {
        question: "Wie sehen Ihre Protokolle gegen COVID-19 aus?",
        answer: "Ihr Raum wird nach jeder Benutzung von unserem Personal desinfiziert. Wir verwenden die neuesten Richtlinien der kolumbianischen Regierung zur Bekämpfung von COVID-19.<br><br>Wir blasen in jeden Raum frische Luft ein, die durch HEPA H13-Filter gereinigt wird. HEPA-Filter sind nahezu 100 % effizient bei der Erfassung des Partikelspektrums bis hin zu den kleinsten Schwebeteilchen in der Luft. Wir verwenden ein System zur Lufterneuerung, ähnlich dem in Operationssälen in Krankenhäusern oder in Flugzeugen.<br><br>Die Luft in Ihrem Raum wird alle 2 Minuten erneuert."
    },
    {
        question: "Kann ich in meinem Raum Fluginformationen abrufen?",
        answer: "Ja. Ihr Raum ist mit einem Touchscreen ausgestattet, auf dem Sie den Status Ihres Fluges in Echtzeit abrufen, die Temperatur Ihres Raumes und die Beleuchtung steuern und eines unserer Produkte kaufen können. "
    },
    {
        question: "Kann ich ein Zimmer im Voraus für ein bestimmtes Datum reservieren?",
        answer: "Ja. Gehen Sie auf unsere Website <label class='l-bold'>www.waitnrest.com</label> und reservieren Sie Ihr Zimmer. Wir akzeptieren Reservierungen nur 24 Stunden vor Ihrem Ankunftsdatum und für einen Mindestaufenthalt von 4 Stunden."
    },
    {
        question: "Sind sie 24/7 verfügbar?",
        answer: "Ja. Die Wait N 'Rest Räume stehen Ihnen 24 Stunden am Tag zur Verfügung."
    },
    {
        question: "Kann ich das Gelände oder meinen Raum so oft betreten und verlassen, wie ich möchte?",
        answer: "Ja.  Benutzen Sie die Taste 're-enter' auf den Touchscreens in unserem Check-in-Bereich, um wieder hineinzukommen. <br><br>Suchen Sie Ihr Zimmer und drücken Sie die Wiedereintrittstaste auf dem Touchscreen vor Ihrem Zimmer. Um ins Zimmer zu gelangen, müssen Sie das Passwort eingeben, das Sie beim Check-in bei uns registriert haben.<br><br>Solange Sie nicht in Ihrem Zimmer sind, bleibt Ihr Raum verschlossen. "
    },
    {
        "question": "Wie funktioniert es?",
        "answer": "Registrieren Sie sich an den Check-in-Bildschirmen vor unserem Hauptsitz. Sie müssen ein Passwort für Ihr Zimmer, Ihre Kartendaten und eine E-Mail-Adresse eingeben, um Ihnen nach Abschluss der Dienstleistung die Rechnung zusenden zu können. Wir weisen Ihnen eine Zimmernummer zu und Sie können unsere Zentrale betreten. Der Wait N' Rest-Tarif gilt pro Stunde, Bruchteil oder pro Paket. Wenn Sie sich zwischen 06:00 und 18:00 Uhr anmelden, erhalten Sie Zugang zu einem 6-Stunden-Angebot für 16,98 USD (50 % Rabatt). <br><br>Die Zeit beginnt mit dem Einchecken und endet mit dem erfolgreichen Auschecken. Für Ihren Check-out müssen Sie lediglich den Anweisungen auf dem Touchscreen außerhalb Ihres Zimmers folgen"
    },
    // {
    //     question: "Wie funktioniert das?",
    //     answer: "Registrieren Sie sich an den Check-in-Bildschirmen vor unserem Hauptsitz. <br><br> Sie müssen ein Passwort für Ihr Zimmer, Ihre Kartendaten und eine E-Mail eingeben, um Ihnen nach Beendigung der Dienstleistung die Rechnung zusenden zu können. <br><br> Wir weisen Ihnen eine Zimmernummer zu und Sie können unsere Zentrale betreten. <br><br> Die Wait N' Rest-Rate gilt pro Stunde oder Bruchteil und ist dynamisch. Von 8:01 Uhr bis 20:59 Uhr beträgt der Preis pro Stunde oder Bruchteil <label id='price-tarifa-reducida-1'></label> und von 21:00 Uhr bis 8:00 Uhr beträgt unser Preis pro Stunde oder Bruchteil <label id='price-tarifa-regular-1'></label>. <br><br> Wenn Sie während Ihres Aufenthalts eine Stunde Zeit haben, in der Minuten zwischen beiden Slots geteilt werden, machen Sie sich keine Sorgen! Für diese Stunde zahlen Sie den niedrigsten Tarif. <br><br> Die Zeit beginnt mit dem Check-in und endet mit dem erfolgreichen Check-out. Für Ihren Check-out müssen Sie nur den Anweisungen auf dem Touchscreen folgen, der sich außerhalb Ihres Zimmers befindet. <br><br> Nach jeder Stunde haben Sie 5 Minuten Zeit, um auszuchecken, ohne dass Ihnen die zusätzliche Stunde in Rechnung gestellt wird."
    // },
    // {
    //     question: "Wie funktioniert die dynamische Gebühr?",
    //     answer: "In Zeiten geringer Nachfrage reduzieren wir die Gebühr, damit Sie länger bleiben können.<br><br>Unser Preis pro Stunde oder Bruchteil hängt von der Tageszeit ab, zu der der Kunde bei uns bleibt. Dies sind die beiden Tageszeiten, die wir haben:<br><br><ul><li>Reduzierte Tarifzeit: 8:01 Uhr bis 8:59 Uhr <ul><li>Preis pro Stunde oder Bruchteil: 8.49 USD</li></ul></li><br><li>Reguläre Tarifzeit: 6:00 Uhr bis 8:00 Uhr</li> <ul><li>Preis pro Stunde oder Bruchteil: 8.49 USD</li></ul></ul><br>Vergessen Sie nicht, dass wir Ihnen nach jeder Stunde 5 Minuten schenken, damit Sie ohne zusätzliche Kosten für die nächste Stunde auschecken können.<br><br>Denken Sie daran, dass Sie, wenn Sie innerhalb Ihres Aufenthalts eine Stunde haben, in der Minuten zwischen beiden Tageszeiten geteilt werden, keine Sorgen haben müssen! Für diese Stunde zahlen Sie den niedrigsten Tarif.<br><br>Beispiel:<br>Wenn Sie 5 Stunden bei uns bleiben möchten und Ihr Zimmer um 8:30 Uhr betreten, wird Ihre erste Stunde (8:30 Uhr bis 9:30 Uhr) unter reduziertem Tarif berechnet, da Sie Minuten zwischen beiden Tageszeiten teilen. Die restlichen 4 Stunden werden unter regulärem Tarif berechnet.<br><br>Die 5 zusätzlichen Minuten nach jeder Stunde zum Auschecken zählen nicht als Aufenthalt, d.h. sie beeinflussen nicht den Tarif, den Sie zahlen werden. Wenn Sie Fragen haben, empfehlen wir Ihnen, unseren <label class='l-bold'>Aufenthaltsrechner zu verwenden.</label>"
    // },
    // {
    //     question: "Wenn ich während eines ermäßigten Zeitraums einchecke, wird mein gesamter Aufenthalt mit demselben Preis berechnet?",
    //     answer: "Nicht unbedingt. Der für Ihren Aufenthalt berechnete Preis hängt davon ab, zu welchem Zeitraum alle Stunden gehören, die Sie bei uns verbracht haben. Es kann vorkommen, dass bei einem 6-stündigen Aufenthalt 3 Stunden zum ermäßigten Tarifzeitraum und die anderen 3 Stunden zum regulären Tarifzeitraum gehören. <br><br>Denken Sie daran, dass unser Preis pro Stunde oder Bruchteil berechnet wird. Vergessen Sie nicht, dass wir Ihnen nach jeder Stunde 5 zusätzliche Minuten geben, damit Sie auschecken können, ohne dass Ihnen die nächste Stunde des Aufenthalts berechnet wird. <br><br> Beispiel: <br> <ul><li> Zeitraum zum ermäßigten Preis: 8:01 bis 20:59 Uhr</li><li>Zeitraum zum regulären Preis: 21:00 Uhr bis 8:00 Uhr <br><br>Es war einmal ein Reisender namens Juan, der nach einer langen Reise sehr müde war. Um 6:00 Uhr meldete sich Juan während des regulären Tarifzeitraums bei uns an. Juan war so müde, dass er nach dem Einchecken tief einschlief und erst um 13:00 Uhr aufwachte. Obwohl Juan 7 Stunden bei uns blieb, musste er für seinen Aufenthalt nicht so viel Geld bezahlen. Er zahlte nur 2 Stunden regulären Tarif (6:00 bis 8:00 Uhr) und 5 Stunden ermäßigten Tarif (8:01 – 13:00 Uhr). Juan war sehr glücklich, bei seinem Aufenthalt Geld gespart zu haben, und war bereit, sein Abenteuer fortzusetzen.</li></ul>"
    // },
    // {
    //     question:"Was passiert, wenn meine erste oder letzte Stunde Aufenthalt Minuten zwischen dem Zeitfenster zum ermäßigten Preis und dem Zeitfenster zum regulären Preis liegt?",
    //     answer:"Wenn Sie während Ihres Aufenthalts eine Stunde Zeit haben, in der Minuten zwischen beiden Slots geteilt werden, machen Sie sich keine Sorgen! Für diese Stunde zahlen Sie den niedrigsten Tarif. Denken Sie daran, dass die 5 Minuten, die wir Ihnen für Ihre Kasse geben, bevor die nächste Stunde berechnet wird, nicht als Teil Ihres Aufenthalts betrachtet werden; Das heißt, sie wirken sich nicht auf den von Ihnen zu zahlenden Satz aus. <br><br>Zum Beispiel: <br><ul><li>Zeitfenster zum ermäßigten Preis: 8:01 bis 20:59 Uhr</li><li>Zeitfenster zum regulären Preis: 21:00 bis 8:00 Uhr</li></ul>Angenommen, Juan, ein müder Reisender, beschließt, um 7:00 Uhr morgens bei unserem Service einzuchecken, und möchte, dass er eine (1) Stunde bleibt (Juan tritt in ein Zeitfenster mit regulärem Preis ein). <br><br>Juan weiß, dass er bis 8:05 Uhr Zeit hat, um auszuchecken, ohne dass ihm die zweite Stunde des Aufenthalts in Rechnung gestellt wird. Juan hat die vorherige Nachricht nicht verstanden und denkt, dass diese 5 Minuten Geschenk, um seine Kasse zu erledigen, Teil seines Aufenthalts sind. <br><br> Juan möchte geltend machen, dass wir ihm den ermäßigten Preis für seinen Aufenthalt berechnen sollten, da er 5 Minuten innerhalb des ermäßigten Zeitfensters geblieben ist. <br><br>Juan, wir haben dir gesagt, dass die 5 Freiminuten nicht Teil deines Aufenthalts sind, deshalb hast du keine Minuten zwischen den beiden Slots geteilt. <br><br> Juan, wir versuchen hier, in den vorherigen Bildschirmen und in den Allgemeinen Geschäftsbedingungen zu erklären, dass diese 5 Minuten nicht Teil Ihres Aufenthalts sind und sich nicht auf den von Ihnen zu zahlenden Preis auswirken. <br><br> Juan, wenn du Zweifel hattest, ¿warum hast du nicht unseren Aufenthaltsrechner benutzt? <br><br> Sei nicht wie John. <br><br> Aber … <br><br> Was wäre passiert, wenn Juan von 7:00 Uhr bis 8:10 Uhr bei uns geblieben wäre? <br><br> Juan hätte für 2 Stunden Aufenthalt bezahlen müssen, weil Juan weiß, dass unser Service nach Stunden oder Bruchteilen abgerechnet wird, und Juan die kostenlosen 5 Minuten für seinen Check-out überschritten hat. Juan hätte die erste Stunde regulär und die zweite zu einem ermäßigten Tarif bezahlt."
    // }
    

]