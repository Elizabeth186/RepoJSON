var frequent_questions = [
    {
        question: "Where can I buy Wait N 'Rest products?",
        answer: "You will find a touch screen inside your room that will allow you to purchase any of our products. On our shop you will find sleepwear, blankets, pillows and the coolest merch you have ever seen.<br><br>Choose what you like the most and our staff will take it to your room."
    },
    {
        question: "How many people can use the room at the same time?",
        answer: "Our rooms are only for one (01) person. Failure to comply with this rule will result in a <label id='pen-multi'></label> fine that will be charged to the registered payment method."
    },
    {
        "question": "How much does it cost?",
        "answer": "The Wait N' Rest rate is per hour or fraction and is <label class='answer' id='price-questions'></label> USD. If you register between 6:00 AM and 18:00 PM, you will have access to an exclusive offer of 3hours for 16.98 USD (33% OFF of the regular price). Time starts running from the moment you check-in and stops when you check-out on the touch screen outside your room.<br><br>You will have 5 minutes after each hour to check-out without being charged for the additional hour."
    },
    {
        question: "How do you charge me?",
        answer: "During your check-in, we carry out a pre-authorization equivalent to 8 hours of stay (maximum time allowed) through our STRIPE payment gateway to your debit or credit card. <br><br>When you finished the check-out process for your room, our system only captured the amount corresponding to the time of your stay. The release of the remaining 'frozen' balance will depend on your bank's authorization retention policies. It usually takes between 2 to 20 business days. Remember a pre-authorization is a 'charge pending confirmation', and although it may be shown on your account statement as a deduction; it is not."
    },
    {
        question: "How do I do my check-out?",
        answer: "Use the touch screen outside your room and press the check-out button. Put the password for your room, close the door and follow the instructions. It is a very easy process."
    },
    {
        question: "What are your protocols against COVID-19?",
        answer: "Your room is disinfected after each use by our staff. We use the latest guidelines from the Colombian government to combat COVID-19.<br><br>We inject each room with fresh air purified by HEPA H13 filters. HEPA filters are nearly 100% efficient at capturing the spectrum of particles down to the very smallest airborne particles. We use an air renewal system similar to the ones used at operating rooms in hospitals or in airplanes."
    },
    {
        question: "Can I check flight information inside my room?",
        answer: "Yes. Your room is equipped with a touch screen where you can check the status of your flight in real time, control the temperature of your room, lighting and purchase any of our products."
    },
    {
        question: "Can I reserve a room in advance for a specific date?",
        answer: "Yes. Go to our website <label class='l-bold'>www.waitnrest.com</label> and reserve your room. We only accept reservations 24 hours before your arrival date and for a minimum stay of 4 hours."
    },
    {
        question: "Are they available 24/7?",
        answer: "Yes. Wait N 'Rest rooms are available to you 24 hours a day."
    },
    {
        question: "Can I go in and out of the premises or my room as many times as I want?",
        answer: "Yes. Use the 're-enter' button found on the touchscreens at our check-in area to get back inside.<br><br>Search for your room and press the re-enter button found on the touch screen outside your room. To get inside you will need to put the password you registered with us at your check-in.<br><br>As long as you are not in your room, your room remains locked."
    },
    {
        question: "How does it work?",
        answer: "Register on the check-in screens outside our headquarters. You must enter a password for your room, your card details and an email to be able to send you the invoice when you finish the service. We will assign you a room number and you will be able to enter our headquarters. The Wait N' Rest rate is per hour or fraction or per package. If you register between 6:00 AM and 18:00 PM, you will have access to an 6-hour offer for USD 16.98 (33% discount). <br><br>Time starts counting from the moment you check-in and stops when you successfully check-out. For your check-out you only have to follow the instructions on the touch screen located outside your room"
    },
    // {
    //     question: "How does it work?",
    //     answer: "Register on the check-in screens outside our headquarters. <br><br> You must enter a password for your room, your card details and an email to be able to send you the invoice when you finish the service. <br><br> We will assign you a room number and you will be able to enter our headquarters. <br><br> The Wait N' Rest rate is per hour or fraction and is dynamic. From 8:01 a.m. to 8:59 p.m. the price per hour or fraction is <label  id='price-tarifa-reducida-1'></label> and from 6:00 p.m. to 8:00 a.m., our price per hour or fraction is <label  id='price-tarifa-regular-1'></label>. <br><br> If within your stay you have an hour in which minutes are shared between both slots, don't worry! For that hour you will pay the lowest rate. <br><br> Time starts counting from the moment you check-in and stops when you successfully check-out. For your check-out you only have to follow the instructions on the touch screen located outside your room. <br><br>You will have 5 minutes after each hour to check-out without being charged for the additional hour."
    // },
    // {
    //     question: "How does the dynamic rate work?",
    //     answer: "In low demand periods, we reduce the rate so you can stay longer.<br><br>Our price per hour or fraction will change according to the time slot in which the customer stays with us. These are the two time slots we have:<br><br><ul><li>Reduced rate time slot: 8:01 AM to 8:59 PM <ul><li>Hourly or fraction rate: 8.49 USD</li></ul></li><br><li>Regular rate time slot: 6:00 PM to 8:00 AM</li> <ul><li>Hourly or fraction rate: 8.49 USD</li></ul></ul><br>Don't forget that we give you 5 minutes after each hour to check out without charging you for the next hour of stay.<br><br>Remember, if within your stay you have an hour in which minutes are shared between both time slots, don't worry! For that hour you will pay the lowest rate.<br><br>Example:<br>If you want to stay 5 hours with us and enter your room at 8:30 PM, your first hour of stay (8:30 PM to 9:30 PM) will be charged at reduced rate as you share minutes between both time slots. The rest of the 4 hours will be charged at regular rate.<br><br>The extra 5 minutes after each hour to check out do not count as stay, that is, they do not affect the rate you will pay. If you have doubts, we recommend using our <label class='l-bold'>stay calculator.</label>"
    // },
    // {
    //     question:"If I check in during a reduced rate time period, does my entire stay get charged at that same rate?",
    //     answer:"Not necessarily. The price charged for your stay will depend on which time period all the hours you stayed with us belong to. It can happen that in a 3hour stay, 3 hours belong to the reduced rate time period, and the other 3 to the regular rate time period. <br><br>Remember that our rate is by hour or fraction. Do not forget that we give you 5 extra minutes after each hour so you can check out without being charged for the next hour of stay. <br><br>Example: <br><ul><li>Reduced rate time period: 8:01 AM to 8:59 PM</li><li>Regular rate time period: 6:00 PM to 8:00 AM <br><br>Once upon a time, there was a traveler named Juan, who was very tired after a long trip. At 6:00 AM, Juan checked in with us during the regular rate time period. Juan was so tired that he fell asleep deeply after checking in and did not wake up until 1:00 PM. Although Juan stayed with us for 7 hours, he did not have to pay as much money for his stay. He only paid for 2 hours of regular rate (6:00 AM to 8:00 AM) and 5 hours of reduced rate (8:01 AM – 1:00 PM). </li></ul>"
    // },
    // {
    //     question:"What happens if my first or last hour of stay shares minutes between the reduced rate time slot and the regular rate time slot?",
    //     answer:"If within your stay you have an hour in which minutes are shared between both slots, don't worry! For that hour you will pay the lowest rate. Remember that the 5 minutes that we give you to do your checkout before the next hour is charged, are not considered as part of your stay; that is, they do not affect the rate you will pay. <br><br>For example: <br><ul><li>Reduced rate time slot: 8:01 AM to 8:59 PM</li><li>Regular rate time slot: 6:00 PM to 8:00 AM</li></ul>Suppose that Juan, a tired traveler, decides to check in to our service at 7:00 AM and wants his stay to be one (1) hour (Juan is entering a regular price time slot). <br><br> Juan knows that he will have until 8:05 AM to checkout without being charged for the second hour of stay. Juan did not understand the previous message and thinks that those 5 minutes of gift to do his checkout are part of his stay. <br><br> Juan wants to claim that since he stayed 5 minutes within the reduced rate time slot, we should charge him the reduced rate for his stay. <br><br>Juan, we told you that the 5 free minutes are not part of your stay, therefore, you did not share minutes between the two slots. <br><br>Juan, we try to explain here, in the previous screens and in the Terms and Conditions that those 5 minutes are not part of your stay and do not affect the rate you will pay. <br><br> Juan, if you had doubts, why didn’t you use our stay calculator? <br><br> Don't be like John. <br><br> But … <br><br> What would happen if Juan had stayed from 7:00 AM to 8:10 AM with us? <br><br> Juan would have had to pay for 2 hours of stay because Juan knows that our service is charged by the hour or fraction, and Juan exceeded the free 5 minutes to do his check out. Juan would have paid for the first hour at a regular rate and the second at a reduced rate."
    // }
    

]