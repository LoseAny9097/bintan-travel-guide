export const timelineData = [
  {
    day: 1,
    date: "2024-08-03",
    title: "Day 1 - 抵达与海滩休闲",
    timeline: [
      {
        time: "07:00",
        title: "新加坡出发",
        location: "丹那美拉渡轮码头",
        gps: "1.3274,103.9462",
        description: "提前30分钟到达码头办理登船手续",
        actions: ["check-in", "boarding"],
        dialogues: [
          {
            scenario: "购票确认",
            english: "Two tickets to Bintan, please. We have a reservation.",
            chinese: "请给我两张去民丹岛的票，我们有预订。",
            pronunciation: "tu ˈtɪkɪts tu ˈbɪntən pliːz wi hæv ə ˌrezərˈveɪʃən"
          },
          {
            scenario: "询问登船",
            english: "What time does the ferry depart?",
            chinese: "渡轮什么时候出发？",
            pronunciation: "wʌt taɪm dʌz ðə ˈferi dɪˈpɑrt"
          }
        ],
        tips: ["携带护照和STP", "准备现金支付", "确认包车司机联系方式"],
        nextStep: "08:10"
      },
      {
        time: "08:10",
        title: "搭乘渡轮",
        location: "BRF渡轮",
        gps: "",
        description: "55分钟航程，欣赏海景，确认包车司机联系",
        actions: ["boarding", "sailing"],
        dialogues: [
          {
            scenario: "询问座位",
            english: "Excuse me, is this seat taken?",
            chinese: "不好意思，这个座位有人吗？",
            pronunciation: "ɪkˈskjuːz mi ɪz ðɪs sit ˈteɪkən"
          }
        ],
        tips: ["船上有WiFi", "可以休息或欣赏海景"],
        nextStep: "09:05"
      },
      {
        time: "09:05",
        title: "抵达民丹岛",
        location: "班达班丹特拉尼码头",
        gps: "1.1547,104.3189",
        description: "包车司机接机，办理落地签证",
        actions: ["arrival", "visa", "meet-driver"],
        dialogues: [
          {
            scenario: "寻找司机",
            english: "Excuse me, are you our driver? We booked a car service.",
            chinese: "不好意思，您是我们的司机吗？我们预订了包车服务。",
            pronunciation: "ɪkˈskjuːz mi ɑr ju aʊər ˈdraɪvər wi bʊkt ə kɑr ˈsɜrvɪs"
          },
          {
            scenario: "办理签证",
            english: "I need a 7-day visa, please. How much does it cost?",
            chinese: "我需要办理7天签证，请问多少钱？",
            pronunciation: "aɪ nid ə ˈsevən deɪ ˈvizə pliːz haʊ mʌtʃ dʌz ɪt kɔst"
          }
        ],
        tips: ["司机举牌等候", "选择7天签证更便宜", "准备250,000印尼盾现金"],
        nextStep: "10:00"
      },
      {
        time: "10:00",
        title: "前往酒店",
        location: "Kamuela Villa Lagoi Bay",
        gps: "1.1389,104.3167",
        description: "包车前往酒店，15分钟车程，与司机确认行程",
        actions: ["transport", "hotel-checkin"],
        dialogues: [
          {
            scenario: "与司机沟通",
            english: "Could you please take us to Kamuela Villa Lagoi Bay?",
            chinese: "请带我们去Kamuela Villa Lagoi Bay酒店。",
            pronunciation: "kʊd ju pliːz teɪk ʌs tu kəˈmjuːələ ˈvɪlə ləˈɡɔɪ beɪ"
          },
          {
            scenario: "酒店入住",
            english: "We have a reservation under the name...",
            chinese: "我们有预订，名字是...",
            pronunciation: "wi hæv ə ˌrezərˈveɪʃən ˈʌndər ðə neɪm"
          }
        ],
        tips: ["确认司机明天接车时间", "如房间未准备好可先寄存行李"],
        nextStep: "11:00"
      },
      {
        time: "11:00",
        title: "周边游览",
        location: "Treasure Bay & Plaza Lagoi",
        gps: "1.1547,104.3189",
        description: "包车游览周边景点，熟悉环境",
        actions: ["sightseeing", "shopping"],
        dialogues: [
          {
            scenario: "询问景点",
            english: "How long should we spend here?",
            chinese: "我们应该在这里待多长时间？",
            pronunciation: "haʊ lɔŋ ʃʊd wi spend hɪr"
          },
          {
            scenario: "购物询价",
            english: "How much is this? Can you give me a better price?",
            chinese: "这个多少钱？能便宜一点吗？",
            pronunciation: "haʊ mʌtʃ ɪz ðɪs kæn ju ɡɪv mi ə ˈbetər praɪs"
          }
        ],
        tips: ["司机可以等候或回酒店休息", "熟悉购物中心位置"],
        nextStep: "12:30"
      },
      {
        time: "12:30",
        title: "包车前往午餐",
        location: "The Cove 或司机推荐的当地餐厅",
        gps: "1.1392,104.3170",
        description: "司机推荐当地美食，价格更实惠",
        actions: ["lunch", "local-food"],
        dialogues: [
          {
            scenario: "点餐",
            english: "What do you recommend? We'd like to try local food.",
            chinese: "您推荐什么？我们想尝试当地菜。",
            pronunciation: "wʌt du ju ˌrekəˈmend wid laɪk tu traɪ ˈloʊkəl fud"
          },
          {
            scenario: "询问辣度",
            english: "Is this dish spicy? We prefer mild food.",
            chinese: "这道菜辣吗？我们喜欢不太辣的。",
            pronunciation: "ɪz ðɪs dɪʃ ˈspaɪsi wi prɪˈfɜr maɪld fud"
          }
        ],
        tips: ["相信司机推荐", "价格更实惠", "体验当地文化"],
        nextStep: "13:30"
      },
      {
        time: "13:30",
        title: "返回酒店入住",
        location: "Kamuela Villa Lagoi Bay",
        gps: "1.1389,104.3167",
        description: "办理正式入住，短暂休息，准备下午活动",
        actions: ["transport", "hotel-checkin", "rest"],
        dialogues: [
          {
            scenario: "办理入住",
            english: "We'd like to check in now. Our room should be ready.",
            chinese: "我们现在想办理入住，房间应该准备好了。",
            pronunciation: "wid laɪk tu tʃek ɪn naʊ aʊər rum ʃʊd bi ˈredi"
          }
        ],
        tips: ["房间应该已准备好", "可以短暂休息", "准备下午活动"],
        nextStep: "14:30"
      },
      {
        time: "14:30",
        title: "海滩水上活动",
        location: "Lagoi Bay Beach水上运动中心",
        gps: "1.1380,104.3158",
        description: "体验刺激的水上运动，享受热带海滩乐趣",
        actions: ["water-sports", "beach-activities"],
        dialogues: [
          {
            scenario: "预订水上活动",
            english: "We'd like to try banana boat and jet ski. How much does it cost?",
            chinese: "我们想尝试香蕉船和摩托艇，多少钱？",
            pronunciation: "wid laɪk tu traɪ bəˈnænə boʊt ænd dʒet ski haʊ mʌtʃ dʌz ɪt kɔst"
          },
          {
            scenario: "安全询问",
            english: "Is it safe? Do you provide life jackets?",
            chinese: "安全吗？你们提供救生衣吗？",
            pronunciation: "ɪz ɪt seɪf du ju prəˈvaɪd laɪf ˈdʒækɪts"
          }
        ],
        tips: ["香蕉船200,000印尼盾/人", "摩托艇300,000印尼盾/30分钟", "记得涂防晒霜"],
        nextStep: "15:45"
      },
      {
        time: "15:45",
        title: "SPA放松体验",
        location: "酒店SPA中心",
        gps: "1.1389,104.3167",
        description: "享受专业的热带SPA护理，缓解旅途疲劳",
        actions: ["spa", "relaxation"],
        dialogues: [
          {
            scenario: "预订SPA",
            english: "We'd like a couples massage. What packages do you have?",
            chinese: "我们想要情侣按摩，你们有什么套餐？",
            pronunciation: "wid laɪk ə ˈkʌpəlz məˈsɑʒ wʌt ˈpækɪdʒɪz du ju hæv"
          },
          {
            scenario: "选择服务",
            english: "How long is the treatment? We have dinner plans at 7 PM.",
            chinese: "护理需要多长时间？我们晚上7点有晚餐安排。",
            pronunciation: "haʊ lɔŋ ɪz ðə ˈtritmənt wi hæv ˈdɪnər plænz æt ˈsevən pi em"
          }
        ],
        tips: ["情侣SPA套餐约400,000印尼盾", "建议提前预约", "60-90分钟疗程"],
        nextStep: "17:00"
      },
      {
        time: "17:00",
        title: "Lagoi Bay购物漫步",
        location: "Plaza Lagoi & 周边商店",
        gps: "1.1405,104.3195",
        description: "轻松购物，寻找纪念品，体验当地商业文化",
        actions: ["shopping", "souvenir-hunting"],
        dialogues: [
          {
            scenario: "寻找纪念品",
            english: "Do you have any local souvenirs? Something unique to Bintan?",
            chinese: "你们有当地纪念品吗？民丹岛特有的东西？",
            pronunciation: "du ju hæv ˈeni ˈloʊkəl ˌsuvəˈnɪrz ˈsʌmθɪŋ juˈnik tu ˈbɪntən"
          },
          {
            scenario: "比较价格",
            english: "I saw this in another shop for less. Can you match the price?",
            chinese: "我在另一家店看到这个更便宜，你能给同样的价格吗？",
            pronunciation: "aɪ sɔ ðɪs ɪn əˈnʌðər ʃɑp fɔr les kæn ju mætʃ ðə praɪs"
          }
        ],
        tips: ["可以砍价", "比较不同店铺价格", "注意商品质量"],
        nextStep: "18:00"
      },
      {
        time: "18:00",
        title: "日落观赏 & 下午茶",
        location: "The Cove海景露台",
        gps: "1.1392,104.3170",
        description: "在最佳位置欣赏民丹岛日落，享受浪漫下午茶",
        actions: ["sunset-viewing", "afternoon-tea"],
        dialogues: [
          {
            scenario: "预订日落位置",
            english: "Can we have a table with the best sunset view?",
            chinese: "我们能要一个看日落最好的位置吗？",
            pronunciation: "kæn wi hæv ə ˈteɪbəl wɪð ðə best ˈsʌnset vju"
          },
          {
            scenario: "点下午茶",
            english: "What do you recommend for afternoon tea? Something light.",
            chinese: "下午茶您推荐什么？要清淡一点的。",
            pronunciation: "wʌt du ju ˌrekəˈmend fɔr ˌæftərˈnun ti ˈsʌmθɪŋ laɪt"
          }
        ],
        tips: ["日落时间约18:30", "提前占位置", "适合拍照留念"],
        nextStep: "19:00"
      },
      {
        time: "19:00",
        title: "酒店休息准备",
        location: "Kamuela Villa房间",
        gps: "1.1389,104.3167",
        description: "回房间洗澡换装，为浪漫晚餐做准备",
        actions: ["rest", "preparation"],
        dialogues: [
          {
            scenario: "询问晚餐推荐",
            english: "Can you recommend a good restaurant for dinner tonight?",
            chinese: "您能推荐一个今晚吃晚餐的好餐厅吗？",
            pronunciation: "kæn ju ˌrekəˈmend ə ɡʊd ˈrestərɑnt fɔr ˈdɪnər təˈnaɪt"
          }
        ],
        tips: ["为晚餐做准备", "可以小憩一下", "确认晚餐预订"],
        nextStep: "19:30"
      },
      {
        time: "19:30",
        title: "海滩浪漫晚餐",
        location: "FlyBoyz Beach Bar",
        gps: "1.1385,104.3165",
        description: "在海滩享受浪漫晚餐，聆听海浪声",
        actions: ["dinner", "romantic-time"],
        dialogues: [
          {
            scenario: "预订海滩位置",
            english: "We'd like a table on the beach, please. Something romantic.",
            chinese: "我们想要海滩上的位置，要浪漫一点的。",
            pronunciation: "wid laɪk ə ˈteɪbəl ɑn ðə bitʃ pliːz ˈsʌmθɪŋ roʊˈmæntɪk"
          },
          {
            scenario: "点餐",
            english: "What's your signature dish? We want to try something special.",
            chinese: "你们的招牌菜是什么？我们想尝试特别的。",
            pronunciation: "wʌts jʊr ˈsɪɡnətʃər dɪʃ wi wɑnt tu traɪ ˈsʌmθɪŋ ˈspeʃəl"
          }
        ],
        tips: ["海滩BBQ特色", "鸡尾酒推荐", "现场音乐表演"],
        nextStep: "21:00"
      },
      {
        time: "21:00",
        title: "夜间海滩漫步",
        location: "Lagoi Bay海滩",
        gps: "1.1378,104.3156",
        description: "在星空下漫步海滩，享受宁静的夜晚",
        actions: ["beach-walk", "stargazing"],
        dialogues: [
          {
            scenario: "询问安全",
            english: "Is it safe to walk on the beach at night?",
            chinese: "晚上在海滩散步安全吗？",
            pronunciation: "ɪz ɪt seɪf tu wɔk ɑn ðə bitʃ æt naɪt"
          }
        ],
        tips: ["注意安全，结伴而行", "欣赏星空", "拍照留念"],
        nextStep: "22:00"
      }
    ]
  },
  {
    day: 2,
    date: "2024-08-04",
    title: "Day 2 - 深度游览与返程",
    timeline: [
      {
        time: "08:00",
        title: "酒店早餐",
        location: "Kamuela Villa餐厅",
        gps: "1.1389,104.3167",
        description: "享用酒店早餐，欣赏最后的海景",
        actions: ["breakfast"],
        dialogues: [
          {
            scenario: "早餐点餐",
            english: "What do you recommend for breakfast?",
            chinese: "您推荐什么早餐？",
            pronunciation: "wʌt du ju ˌrekəˈmend fɔr ˈbrekfəst"
          }
        ],
        tips: ["选择靠窗位置", "与司机确认9:00接车"],
        nextStep: "09:00"
      },
      {
        time: "09:00",
        title: "包车接车",
        location: "酒店大堂",
        gps: "1.1389,104.3167",
        description: "司机准时接车，确认全天行程安排",
        actions: ["meet-driver", "confirm-itinerary"],
        dialogues: [
          {
            scenario: "确认行程",
            english: "Today we want to visit the Golden Sand Hill, then shopping, and finally go to the ferry terminal.",
            chinese: "今天我们想去黄金山丘，然后购物，最后去码头。",
            pronunciation: "təˈdeɪ wi wɑnt tu ˈvɪzɪt ðə ˈɡoʊldən sænd hɪl ðen ˈʃɑpɪŋ ænd ˈfaɪnəli ɡoʊ tu ðə ˈferi ˈtɜrmɪnəl"
          }
        ],
        tips: ["确认返程渡轮时间17:00", "行李可放车上"],
        nextStep: "09:15"
      },
      {
        time: "10:15",
        title: "黄金山丘",
        location: "Gurun Pasir Bintan",
        gps: "0.9167,104.4500",
        description: "游览网红景点，拍照打卡，司机等候",
        actions: ["sightseeing", "photography"],
        dialogues: [
          {
            scenario: "购买门票",
            english: "Two tickets, please. How much is it?",
            chinese: "请给我两张票，多少钱？",
            pronunciation: "tu ˈtɪkɪts pliːz haʊ mʌtʃ ɪz ɪt"
          },
          {
            scenario: "拍照请求",
            english: "Could you please take a photo of us?",
            chinese: "您能帮我们拍张照片吗？",
            pronunciation: "kʊd ju pliːz teɪk ə ˈfoʊtoʊ ʌv ʌs"
          }
        ],
        tips: ["门票50,000印尼盾/人", "上午光线最佳", "游览时间2小时"],
        nextStep: "12:30"
      },
      {
        time: "12:30",
        title: "当地午餐",
        location: "司机推荐餐厅",
        gps: "1.1200,104.3000",
        description: "体验地道印尼菜，司机推荐当地美食",
        actions: ["lunch", "local-food"],
        dialogues: [
          {
            scenario: "点餐",
            english: "What do you recommend? We'd like to try local food.",
            chinese: "您推荐什么？我们想尝试当地菜。",
            pronunciation: "wʌt du ju ˌrekəˈmend wid laɪk tu traɪ ˈloʊkəl fud"
          },
          {
            scenario: "询问辣度",
            english: "Is this dish spicy? We prefer mild food.",
            chinese: "这道菜辣吗？我们喜欢不太辣的。",
            pronunciation: "ɪz ðɪs dɪʃ ˈspaɪsi wi prɪˈfɜr maɪld fud"
          }
        ],
        tips: ["相信司机推荐", "价格更实惠", "体验当地文化"],
        nextStep: "13:30"
      },
      {
        time: "13:30",
        title: "购物时间",
        location: "Plaza Lagoi",
        gps: "1.1405,104.3195",
        description: "最后购物机会，买纪念品和特产",
        actions: ["shopping", "souvenirs"],
        dialogues: [
          {
            scenario: "砍价",
            english: "This is too expensive. Can you give me a discount?",
            chinese: "这太贵了，能给我打个折吗？",
            pronunciation: "ðɪs ɪz tu ɪkˈspensɪv kæn ju ɡɪv mi ə ˈdɪskaʊnt"
          },
          {
            scenario: "询问特产",
            english: "What are the local specialties here?",
            chinese: "这里有什么当地特产？",
            pronunciation: "wʌt ɑr ðə ˈloʊkəl ˈspeʃəltiz hɪr"
          }
        ],
        tips: ["咖啡豆是好选择", "可以砍价", "司机在停车场等候"],
        nextStep: "14:30"
      },
      {
        time: "14:30",
        title: "酒店退房",
        location: "Kamuela Villa",
        gps: "1.1389,104.3167",
        description: "快速办理退房，行李直接放车上",
        actions: ["checkout"],
        dialogues: [
          {
            scenario: "退房",
            english: "We'd like to check out, please. Room number is...",
            chinese: "我们要退房，房间号是...",
            pronunciation: "wid laɪk tu tʃek aʊt pliːz rum ˈnʌmbər ɪz"
          }
        ],
        tips: ["检查房间遗漏物品", "司机在大堂等候"],
        nextStep: "15:00"
      },
      {
        time: "15:00",
        title: "前往码头",
        location: "班达班丹特拉尼码头",
        gps: "1.1547,104.3189",
        description: "包车送到码头，与司机告别",
        actions: ["transport", "farewell"],
        dialogues: [
          {
            scenario: "感谢司机",
            english: "Thank you so much for these two days. You've been very helpful.",
            chinese: "非常感谢这两天的服务，您帮了我们很多。",
            pronunciation: "θæŋk ju soʊ mʌtʃ fɔr ðiz tu deɪz juv bin ˈveri ˈhelpfəl"
          },
          {
            scenario: "给小费",
            english: "This is a small tip for you. Thank you again.",
            chinese: "这是给您的小费，再次感谢。",
            pronunciation: "ðɪs ɪz ə smɔl tɪp fɔr ju θæŋk ju əˈɡen"
          }
        ],
        tips: ["给司机小费50,000-100,000印尼盾", "合影留念", "提前1小时到码头"],
        nextStep: "17:00"
      },
      {
        time: "17:00",
        title: "返程渡轮",
        location: "BRF渡轮",
        gps: "",
        description: "搭乘渡轮返回新加坡，结束愉快旅程",
        actions: ["departure", "sailing"],
        dialogues: [
          {
            scenario: "登船确认",
            english: "Here are our return tickets to Singapore.",
            chinese: "这是我们返回新加坡的船票。",
            pronunciation: "hɪr ɑr aʊər rɪˈtɜrn ˈtɪkɪts tu ˈsɪŋəpɔr"
          }
        ],
        tips: ["整理照片", "分享朋友圈", "55分钟后抵达新加坡"],
        nextStep: "18:00"
      }
    ]
  }
]
