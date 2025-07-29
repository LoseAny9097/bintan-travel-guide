export const dialogueCategories = [
  {
    id: 'transport',
    title: '交通相关',
    icon: '🚗',
    dialogues: [
      {
        scenario: '渡轮购票',
        english: 'Two tickets to Bintan, please. We have a reservation.',
        chinese: '请给我两张去民丹岛的票，我们有预订。',
        pronunciation: 'tu ˈtɪkɪts tu ˈbɪntən pliːz wi hæv ə ˌrezərˈveɪʃən'
      },
      {
        scenario: '询问班次',
        english: 'What time does the next ferry depart?',
        chinese: '下一班渡轮什么时候出发？',
        pronunciation: 'wʌt taɪm dʌz ðə nekst ˈferi dɪˈpɑrt'
      },
      {
        scenario: '包车确认',
        english: 'Are you our driver? We booked a car service.',
        chinese: '您是我们的司机吗？我们预订了包车服务。',
        pronunciation: 'ɑr ju aʊər ˈdraɪvər wi bʊkt ə kɑr ˈsɜrvɪs'
      },
      {
        scenario: '目的地指示',
        english: 'Please take us to Kamuela Villa Lagoi Bay.',
        chinese: '请带我们去Kamuela Villa Lagoi Bay。',
        pronunciation: 'pliːz teɪk ʌs tu kəˈmjuːələ ˈvɪlə ləˈɡɔɪ beɪ'
      },
      {
        scenario: '询问车费',
        english: 'How much will it cost to go there?',
        chinese: '去那里要多少钱？',
        pronunciation: 'haʊ mʌtʃ wɪl ɪt kɔst tu ɡoʊ ðer'
      },
      {
        scenario: '等候时间',
        english: 'Can you wait for us here? We will be back in one hour.',
        chinese: '您能在这里等我们吗？我们一小时后回来。',
        pronunciation: 'kæn ju weɪt fɔr ʌs hɪr wi wɪl bi bæk ɪn wʌn aʊər'
      }
    ]
  },
  {
    id: 'hotel',
    title: '酒店相关',
    icon: '🏨',
    dialogues: [
      {
        scenario: '办理入住',
        english: 'We have a reservation under the name...',
        chinese: '我们有预订，名字是...',
        pronunciation: 'wi hæv ə ˌrezərˈveɪʃən ˈʌndər ðə neɪm'
      },
      {
        scenario: '房间问题',
        english: 'Is our room ready? If not, can we store our luggage?',
        chinese: '我们的房间准备好了吗？如果没有，可以寄存行李吗？',
        pronunciation: 'ɪz aʊər rum ˈredi ɪf nɑt kæn wi stɔr aʊər ˈlʌɡɪdʒ'
      },
      {
        scenario: '询问设施',
        english: 'What time does the restaurant open?',
        chinese: '餐厅什么时候开门？',
        pronunciation: 'wʌt taɪm dʌz ðə ˈrestərɑnt ˈoʊpən'
      },
      {
        scenario: '请求服务',
        english: 'Could you help us book a taxi to the ferry terminal?',
        chinese: '您能帮我们叫一辆去码头的出租车吗？',
        pronunciation: 'kʊd ju help ʌs bʊk ə ˈtæksi tu ðə ˈferi ˈtɜrmɪnəl'
      },
      {
        scenario: '办理退房',
        english: 'We would like to check out, please. Room number is...',
        chinese: '我们要退房，房间号是...',
        pronunciation: 'wi wʊd laɪk tu tʃek aʊt pliːz rum ˈnʌmbər ɪz'
      },
      {
        scenario: '延迟退房',
        english: 'Can we have a late checkout? We need to leave at 3 PM.',
        chinese: '我们可以延迟退房吗？我们需要下午3点离开。',
        pronunciation: 'kæn wi hæv ə leɪt ˈtʃekaʊt wi nid tu liv æt θri pi em'
      }
    ]
  },
  {
    id: 'restaurant',
    title: '餐厅相关',
    icon: '🍽️',
    dialogues: [
      {
        scenario: '要求座位',
        english: 'Table for two, please. Do you have a table with a sea view?',
        chinese: '请给我们两人桌，有海景位置吗？',
        pronunciation: 'ˈteɪbəl fɔr tu pliːz du ju hæv ə ˈteɪbəl wɪð ə si vju'
      },
      {
        scenario: '询问推荐',
        english: 'What do you recommend? We would like to try local food.',
        chinese: '您推荐什么？我们想尝试当地菜。',
        pronunciation: 'wʌt du ju ˌrekəˈmend wi wʊd laɪk tu traɪ ˈloʊkəl fud'
      },
      {
        scenario: '询问辣度',
        english: 'Is this dish spicy? We prefer mild food.',
        chinese: '这道菜辣吗？我们喜欢不太辣的。',
        pronunciation: 'ɪz ðɪs dɪʃ ˈspaɪsi wi prɪˈfɜr maɪld fud'
      },
      {
        scenario: '特殊要求',
        english: 'Can you make it without pork? We don\'t eat pork.',
        chinese: '可以不放猪肉吗？我们不吃猪肉。',
        pronunciation: 'kæn ju meɪk ɪt wɪˈθaʊt pɔrk wi doʊnt it pɔrk'
      },
      {
        scenario: '要求买单',
        english: 'Could we have the bill, please?',
        chinese: '请给我们账单。',
        pronunciation: 'kʊd wi hæv ðə bɪl pliːz'
      },
      {
        scenario: '支付方式',
        english: 'Do you accept credit cards? Or cash only?',
        chinese: '你们接受信用卡吗？还是只收现金？',
        pronunciation: 'du ju ækˈsept ˈkredɪt kɑrdz ɔr kæʃ ˈoʊnli'
      }
    ]
  },
  {
    id: 'shopping',
    title: '购物相关',
    icon: '🛍️',
    dialogues: [
      {
        scenario: '询问价格',
        english: 'How much is this? Can you give me a better price?',
        chinese: '这个多少钱？能便宜一点吗？',
        pronunciation: 'haʊ mʌtʃ ɪz ðɪs kæn ju ɡɪv mi ə ˈbetər praɪs'
      },
      {
        scenario: '砍价',
        english: 'This is too expensive. Can you give me a discount?',
        chinese: '这太贵了，能给我打个折吗？',
        pronunciation: 'ðɪs ɪz tu ɪkˈspensɪv kæn ju ɡɪv mi ə ˈdɪskaʊnt'
      },
      {
        scenario: '询问特产',
        english: 'What are the local specialties here?',
        chinese: '这里有什么当地特产？',
        pronunciation: 'wʌt ɑr ðə ˈloʊkəl ˈspeʃəltiz hɪr'
      },
      {
        scenario: '试穿/试用',
        english: 'Can I try this on? Where is the fitting room?',
        chinese: '我可以试穿吗？试衣间在哪里？',
        pronunciation: 'kæn aɪ traɪ ðɪs ɑn wer ɪz ðə ˈfɪtɪŋ rum'
      },
      {
        scenario: '包装要求',
        english: 'Can you wrap this for me? It\'s a gift.',
        chinese: '您能帮我包装一下吗？这是礼物。',
        pronunciation: 'kæn ju ræp ðɪs fɔr mi ɪts ə ɡɪft'
      },
      {
        scenario: '退换货',
        english: 'Can I return this if it doesn\'t fit?',
        chinese: '如果不合适可以退货吗？',
        pronunciation: 'kæn aɪ rɪˈtɜrn ðɪs ɪf ɪt ˈdʌzənt fɪt'
      }
    ]
  },
  {
    id: 'emergency',
    title: '紧急情况',
    icon: '🆘',
    dialogues: [
      {
        scenario: '寻求帮助',
        english: 'Excuse me, can you help me? I\'m lost.',
        chinese: '不好意思，您能帮助我吗？我迷路了。',
        pronunciation: 'ɪkˈskjuːz mi kæn ju help mi aɪm lɔst'
      },
      {
        scenario: '询问方向',
        english: 'How do I get to the ferry terminal?',
        chinese: '去码头怎么走？',
        pronunciation: 'haʊ du aɪ ɡet tu ðə ˈferi ˈtɜrmɪnəl'
      },
      {
        scenario: '身体不适',
        english: 'I don\'t feel well. Is there a hospital nearby?',
        chinese: '我感觉不舒服，附近有医院吗？',
        pronunciation: 'aɪ doʊnt fil wel ɪz ðer ə ˈhɑspɪtəl ˈnɪrbaɪ'
      },
      {
        scenario: '物品丢失',
        english: 'I lost my wallet. Can you help me call the police?',
        chinese: '我的钱包丢了，您能帮我报警吗？',
        pronunciation: 'aɪ lɔst maɪ ˈwɑlɪt kæn ju help mi kɔl ðə pəˈlis'
      },
      {
        scenario: '联系领事馆',
        english: 'I need to contact the Chinese consulate. Do you have the phone number?',
        chinese: '我需要联系中国领事馆，您有电话号码吗？',
        pronunciation: 'aɪ nid tu ˈkɑntækt ðə tʃaɪˈniz ˈkɑnsələt du ju hæv ðə foʊn ˈnʌmbər'
      },
      {
        scenario: '语言障碍',
        english: 'Sorry, I don\'t speak Indonesian. Do you speak English?',
        chinese: '对不起，我不会说印尼语，您会说英语吗？',
        pronunciation: 'ˈsɑri aɪ doʊnt spik ˌɪndoʊˈniʒən du ju spik ˈɪŋɡlɪʃ'
      }
    ]
  }
]
