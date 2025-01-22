"use client";
import { useState } from "react";

const ArticlePaper = (props) => {
    cont [el, setEl] = useState("")
    return (
        <div>
            {
                el.d.map((item) => (
                    <div className="">
                        <p> { unitData.lessons[0].articles[1].data } </p>
                    </div>
                ))
            }
            {/* <BookBarBottom paperNumber={ props.PaperNumber } /> */}
        </div>
    )
}

export default ArticlePaper;



{bookInfo.map((item, index) => (
    <div className={`paper ${item.type == "articlePaper" ? "article-paper" : "unit-paper"}`}>
        <LessonTitle lessonTitle={ unitData.lessons[item.lessonNumber].lessonName } />
        {/* <h1> { item.d } </h1> */}
        {/* { setSections(item.d) } */}
        <ArticlePaper bookSection={ item.d } />
        {/* <ArticlePaper bookSection={ [1, 2, 3, 4, 5, 7, 9, 11] } /> */}
        <BookBarBottom paperNumber={ index } />
    </div>
))}
// template components
const UnitTitle = (props) => {
    return (
        <div className="unit-title">
            { props.unitTitle }
        </div>
    )
}
/* ==================== */

/* ==================== */
const MainTitle = (props) => {
    return (
        <div className="main-title">
            {/* { props.mainTitle } */}
            "MainTitle ============"
        </div>
    )
}
/* ==================== */
const Define = (props) => {
    return (
        <div className="define">
            {/* <p><span> { props.define[0] } </span> { props.define[1] } </p> */}
            9999999999999999999999 ===== define
        </div>
    )
}
/* ==================== */
const SecondLevel = (props) => {
    return (
        <div className="second-level">
            secondLevel
        </div>
    )
}


let x = {
    "id": 1,
    "unitName": "المالمح الطبيعية لقارة إفريقيا وحضاراتها القديمة",
    "lessons": [
      {
        "id": 1,
        "lessonName": "قارة إفريقي(الموقع والكشوف الجغرافية)",
        "articles": [
          {
            "type": "articleTitle",
            "data":  ["اولًا", "قارة أفريقيا بالنسبة للعالم"]
          },
          {
            "type": "image",
            "data": ""
          },
          {
            "type": "define",
            "data": ["مساحة قارة أفريقيا", "ُتُعـد قـارة إفريقيـا ثانـي أكبـر قـارات العالم بعـد قارة آسـيا من حيـث المسـاحة، إذ تبلغ مسـاحتها حوالـي 30.4مليـون كـم2 وبهـذا تمثـل نحـو 20 %من مسـاحة قـارات العالم"]
          },
          {
            "type": "define",
            "data": ["الموقع", ".. سوف ندرس"]
          },
          {
            "type": "secondLevel",
            "data": ["الموقع الجغرافيهو الموقع بالنسبة لالماكن األخرى من بحار ومحيطات وقارات ودول مجاورة"]
          },
          {
            "type": "title",
            "data": ["أولًا", "الموقع الجغرافي"]
          },
          {
            "type": "define",
            "data": ["قارة إفريقيا ", ".. تقع في وسط قارات العالم، وتطل على مسـطحات مائيـة مهمـة"]
          },
          {
            "type": "secondLevel",
            "data": [
              "الشمال يحدها البحـر المتوسـط",
              "الشـرق يحدها البحر األحمر والمحيط الهندي",
              " الغرب يحدها المحيط األطلنطي",
              "قارة إفريقيا تقترب من قارة أوروبا عند مضيق جبل طـارق"
            ]
          },
          {
            "type": "define",
            "data": ["الحضارة", "جممـوع اإلنتاج الثقايف مثل العادات والتقاليد والعلوم والفنون والقيم، واإلنتـاج املـادي مثـل القـالع واملبانـي والقصور، وهو ما مييز جمتمعا عن غريه"]
          },
          {
            "type": "title",
            "data": ["ثانيا", "الموقع الفلكي"]
          },
          {
            "type": "point",
            "data": "تقع قارة إفريقيا بين دائرتي عرض ْ 37 30شما ًال و ْ 34 30جنوبًا، وبين خطي طولْ 51شرقا و 17غربًا."
          },
          {
            "type": "point",
            "data": ".. تمتـد القـارة بيـن أكثـر مـن 70دائرة عرضيـة، وتمـر بهـا ثالث دوائر عرض رئيسيــة هـي دائرة"
          },
          {
            "type": "secondLevel",
            "data": [
              "االسـتواء",
              "ومدار السـرطان ",
              "ومـدار الجدي",
              "خط الطول الرئيسي جرينتش في الغرب "
            ]
          },
          {
            "type": "title",
            "data": ["ثانيا", "الموقع الفلكي"]
          },
          {
            "type": "point",
            "data": "تقع قارة إفريقيا بين دائرتي عرض ْ 37 30شما ًال و ْ 34 30جنوبًا، وبين خطي طولْ 51شرقا و 17غربًا."
          },
          {
            "type": "point",
            "data": ".. تمتـد القـارة بيـن أكثـر مـن 70دائرة عرضيـة، وتمـر بهـا ثالث دوائر عرض رئيسيــة هـي دائرة"
          },
          {
            "type": "secondLevel",
            "data": [
              "االسـتواء",
              "ومدار السـرطان ",
              "ومـدار الجدي",
              "خط الطول الرئيسي جرينتش في الغرب "
            ]
          },
          {
            "type": "title",
            "data": ["ثانيا", "الموقع الفلكي"]
          },
          {
            "type": "point",
            "data": "تقع قارة إفريقيا بين دائرتي عرض ْ 37 30شما ًال و ْ 34 30جنوبًا، وبين خطي طولْ 51شرقا و 17غربًا."
          },
          {
            "type": "point",
            "data": ".. تمتـد القـارة بيـن أكثـر مـن 70دائرة عرضيـة، وتمـر بهـا ثالث دوائر عرض رئيسيــة هـي دائرة"
          },
          {
            "type": "secondLevel",
            "data": [
              "االسـتواء",
              "ومدار السـرطان ",
              "ومـدار الجدي",
              "خط الطول الرئيسي جرينتش في الغرب "
            ]
          },
          {
            "type": "benefit",
            "data": "تمتد قارة إفريقيا بين نصفي الكرة األرضية الشمالي والجنوبي، حيث يقع نحو ثلثي مساحتها في النصف الشمالي والثلث اآلخر في النصف الجنوبي."
          }
        ]
      }
    ]
  }
  
  