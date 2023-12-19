import React from "react";

import { Button, Img, PagerIndicator, Slider, Text } from "components";
import DesktopOneFooter from "components/DesktopOneFooter";

const DesktopOnePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <Img
              className="md:flex-1 h-[100px] sm:h-auto md:ml-[0] ml-[50px] object-cover w-[16%] md:w-full"
              src="images/img_meatavatarlogo.png"
              alt="meatavatarlogo"
            />
            <div className="bg-white-A700 flex flex-col items-center justify-end md:ml-[0] ml-[367px] p-5">
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                size="txtInterRegular24"
              >
                <>
                  About
                  <br />
                  Meat Avatar
                </>
              </Text>
            </div>
            <Button className="cursor-pointer leading-[normal] min-w-[200px] text-2xl md:text-[22px] text-center sm:text-xl">
              Our Product
            </Button>
            <Button className="cursor-pointer leading-[normal] min-w-[200px] mr-[200px] text-2xl md:text-[22px] text-center sm:text-xl">
              Follow us
            </Button>
          </header>
          <div className="flex h-[734px] justify-end md:px-5 relative w-full">
            <Text
              className="mb-[69px] ml-auto mr-[231px] mt-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
              size="txtInterSemiBold40"
            >
              About Meat Avatar
            </Text>
            <div className="absolute font-alikeangular h-[734px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[734px] m-auto object-cover w-full"
                src="images/img_image9.png"
                alt="imageNine"
              />
              <Text
                className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 top-[38%]"
                size="txtAlikeAngularRegular40"
              >
                <>
                  Meat Avatar แบรนด์ที่อยากให้คนไทย
                  <br />
                  ได้กินเนื้อจำแลงจากพืชผักในราคาไม่แพง
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-start max-w-[1231px] mt-[19px] mx-auto md:px-5 w-full">
            <Text
              className="md:ml-[0] ml-[174px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtInterRegular32"
            >
              Meat Avatar ผู้นำด้านเนื้อสัตว์จำแลง
              ตอบโจทย์ทั้งสุขภาพและสิ่งแวดล้อม
            </Text>
            <Text
              className="sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
              size="txtAlikeAngularRegular21"
            >
              <>
                Meat Avatar คือแบรนด์ที่ผลิตเนื้อสัตว์จำแลงจากพืชผัก
                (plant-based meat) โดยใช้วัตถุดิบในประเทศไทย <br />
                เพื่อให้คนไทยสามารถเข้าถึงเนื้อประเภทนี้ได้ง่ายขึ้นและดีต่อสุขภาพและสิ่งแวดล้อม
                <br />
                <br />
                จุดเด่น
                <br />
                Meat Avatar ก่อตั้งขึ้นในปี พ.ศ. 2565
                โดยสองนักธุรกิจรุ่นใหม่ที่มองเห็นโอกาสในการเติบโตของตลาดเนื้อสัตว์จำแลงในประเทศไทย
                โดยเฉพาะอย่างยิ่งในกลุ่มคนรุ่นใหม่ที่ใส่ใจสุขภาพและสิ่งแวดล้อม
                และยังเป็นแบรนด์รายแรกในประเทศไทยที่ทำ plant - based meat
                <br />
                Meat Avatar เลือกใช้วัตถุดิบคุณภาพสูงจากประเทศไทย เช่น
                ถั่วเหลือง ถั่วเขียว เห็ด งา และข้าวโพด
                โดยผ่านกระบวนการแปรรูปด้วยเทคโนโลยีชั้นสูง
                ทำให้ได้เนื้อสัตว์จำแลงที่มีรสชาติ สัมผัส
                และคุณค่าทางโภชนาการเทียบเท่าเนื้อสัตว์จริง
                <br />
                ผลิตภัณฑ์ของ Meat Avatar ประกอบด้วยหมูกรอบ หมูสับ และไข่ดาว
                ซึ่งล้วนแต่เป็นวัตถุดิบยอดนิยมในอาหารไทยและเอเชีย
                โดยผลิตภัณฑ์ทุกชิ้นมีโปรตีนสูง ไขมันต่ำ และปราศจากคอเลสเตอรอล
                <br />
                นอกจากรสชาติที่อร่อยแล้ว Meat Avatar
                ยังดีต่อสุขภาพและสิ่งแวดล้อมอีกด้วย
                เนื่องจากเนื้อสัตว์จำแลงช่วยลดการปล่อยก๊าซเรือนกระจก
                ซึ่งเป็นสาเหตุของภาวะโลกร้อน โดยการลดการบริโภคเนื้อสัตว์ 1
                กิโลกรัม เทียบเท่ากับการลดการปล่อยก๊าซเรือนกระจก 6.6 กิโลกรัม
                <br />
                <br />
                ดังนั้น Meat Avatar
                จึงเป็นทางเลือกที่ดีสำหรับผู้ที่ต้องการรับประทานอาหารที่อร่อย
                ดีต่อสุขภาพ และดีต่อสิ่งแวดล้อม
              </>
            </Text>
          </div>
          <div className="h-[1288px] mt-[33px] md:px-5 relative w-full">
            <div className="md:h-[733px] h-[735px] mb-[-2px] mx-auto w-full z-[1]">
              <Img
                className="h-[735px] m-auto object-cover w-full"
                src="images/img_unsplashimage.png"
                alt="unsplashimage"
              />
              <Text
                className="absolute bottom-[16%] inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterSemiBold25"
              >
                <span className="md:text-[38px] sm:text-4xl text-gray-700 font-inter text-left text-[40px] font-semibold">
                  <>
                    Envision the world without livestock.
                    <br />
                  </>
                </span>
                <span className="md:text-[28px] sm:text-[26px] text-white-A700 font-inter text-left text-3xl font-semibold">
                  “Former generation produces and consumes for overpopulation,
                  while the newer generation unlearns over consumption culture
                  to shift sustainably”
                </span>
              </Text>
            </div>
            <div className="bg-blue_gray-900 flex flex-col items-center justify-end mt-auto mx-auto p-[31px] sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start mb-6 mt-8 w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-600"
                  size="txtInterSemiBold40Gray600"
                >
                  FOLLOW OUR JOURNEYS
                </Text>
                <div className="md:gap-10 gap-[402px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[59px] w-[79%] md:w-full">
                  <Img
                    className="h-[90px] md:h-auto object-cover w-[90px]"
                    src="images/img_45777.png"
                    alt="45777"
                  />
                  <Img
                    className="h-[90px] md:h-auto object-cover w-[90px]"
                    src="images/img_12638.png"
                    alt="12638"
                  />
                  <Img
                    className="h-[90px] md:h-auto object-cover w-[90px]"
                    src="images/img_105220.png"
                    alt="105220"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[19px] w-[79%] md:w-full">
                  <Text
                    className="mb-[3px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterSemiBold40Black900"
                  >
                    Planet
                  </Text>
                  <Text
                    className="mb-1 md:ml-[0] ml-[340px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterSemiBold40Black900"
                  >
                    Kindness
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[364px] md:mt-0 mt-1 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterSemiBold40Black900"
                  >
                    Joy
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[15px] w-full">
                  <Text
                    className="mb-[3px] text-black-900 text-center text-xl"
                    size="txtInterSemiBold20"
                  >
                    We are committed to reducing our carbon footprint and
                    promoting a more sustainable food system. By sourcing fresh,
                    natural ingredients, we’re taking an active role in
                    preserving the planet for future generations
                  </Text>
                  <Text
                    className="sm:mt-0 mt-[3px] text-black-900 text-center text-xl"
                    size="txtInterSemiBold20"
                  >
                    Our plant-based products are 100% cruelty-free, promoting a
                    more compassionate food system that is kinder to animals and
                    the environment. We believe in treating all beings with
                    kindness and respect.
                  </Text>
                  <Text
                    className="sm:mt-0 mt-[3px] text-black-900 text-center text-xl"
                    size="txtInterSemiBold20"
                  >
                    We strive to make our plant-based products not only ethical
                    and sustainable, but also delicious and enjoyable for
                    everyone. Our goal is to make the plant-based lifestyle an
                    exciting accessible choice that brings joy to people’s
                    lives.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1384px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                <Text
                  className="sm:mt-0 mt-[59px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtInterSemiBold36"
                >
                  <span className="text-white-A700 font-inter text-left font-semibold">
                    <>
                      พืชผักแปลงร่างสู่เนื้อ
                      <br />
                    </>
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-white-A700 font-inter text-left text-2xl font-semibold">
                    พัฒนาสูตรกว่าร้อยครั้ง
                    จนได้รสชาติและสัมผัสเหมือนเนื้อสัตว์จริง
                    ตอบโจทย์ทุกมื้ออาหารไทยและเอเชีย
                  </span>
                </Text>
                <Img
                  className="h-[155px] md:h-auto object-cover"
                  src="images/img_ma2023whitel.png"
                  alt="ma2023whitel"
                />
              </div>
              <div className="flex md:flex-col flex-row gap-[37px] items-center justify-start mt-[5px] w-[96%] md:w-full">
                <Img
                  className="h-[551px] sm:h-auto object-cover w-[49%] md:w-full"
                  src="images/img_shutterstock1680790648.png"
                  alt="shutterstock168"
                />
                <Text
                  className="text-white-A700 text-xl"
                  size="txtInterSemiBold20WhiteA700"
                >
                  <span className="md:text-[29px] sm:text-[27px] text-white-A700 font-inter text-left text-[31px] font-semibold">
                    <>
                      ตัวอย่างผลิตภัณฑ์ต่างๆ
                      <br />
                    </>
                  </span>
                  <span className="md:text-3xl sm:text-[28px] text-white-A700 font-inter text-left text-[32px] font-semibold">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="text-white-A700 font-inter text-left text-[19px] font-semibold">
                    <>
                      หมูกรอบแพลนต์เบสด์
                      <br />
                      <br />
                      หมูกรอบแพลนต์เบสด์ของ Meat Avatar
                      โดดเด่นด้วยชั้นหนังกรอบเคี้ยวเพลิน
                      แตกต่างจากหมูกรอบที่ทำจากบุกทั่วไปที่ให้สีแดงดูไม่เป็นธรรมชาติ
                      โดย Meat Avatar ใช้ soy texture และ soy protein
                      ผสมกับเห็ดหอมและงา
                      เพื่อเลียนแบบชั้นหนังและไขมันของหมูกรอบจริง
                      <br />
                      <br />
                      <br />
                      หมูสับแพลนต์เบสด์
                      <br />
                      <br />
                      หมูสับแพลนต์เบสด์ของ Meat Avatar
                      ให้ความกรึบเด้งเหมือนเนื้อหมูสับจริง โดย Meat Avatar
                      ใช้เห็ดหอมเป็นหลัก ผสมกับถั่วเหลืองเล็กน้อย
                      เพื่อเพิ่มผิวสัมผัสและความยืดหยุ่น
                      <br />
                      <br />
                      <br />
                      ไข่ดาวแพลนต์เบสด์
                      <br />
                      <br />
                      ไข่ดาวแพลนต์เบสด์ของ Meat Avatar
                      โดดเด่นด้วยไข่แดงสีส้มอมแดงเหมือนไข่แดงจริง โดย Meat
                      Avatar ใช้แคร์รอต ฟักทอง และบีตรูต
                      ผสมกับเต้าหู้เพื่อเลียนแบบสีสันและรสชาติของไข่แดงจริง
                      <br />
                    </>
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-red-300 flex flex-col items-center justify-end mt-[30px] p-9 sm:px-5 rounded-[20px] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1269px] mt-[26px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtInterSemiBold24"
                >
                  <>
                    นิกส์ หนึ่งในผู้ก่อตั้ง Meat Avatar อธิบายว่า
                    สาเหตุที่เลือกพัฒนาหมูกรอบ หมูสับ
                    และไข่ดาวก่อนเป็นเพราะวัตถุดิบเหล่านี้สามารถนำไปประกอบอาหารได้หลากหลายเมนู
                    ตอบโจทย์ความต้องการของผู้บริโภคชาวไทยและชาวเอเชีย
                    <br />
                    “เราต้องการให้คนไทยสามารถเข้าถึงเนื้อสัตว์จำแลงได้ง่ายขึ้น
                    และเราเชื่อว่าหมูกรอบ หมูสับ
                    และไข่ดาวเป็นวัตถุดิบที่คนไทยคุ้นเคยและชื่นชอบอยู่แล้ว
                    เลยเริ่มพัฒนาจากสินค้าสามอย่างนี้ก่อน” นิกส์กล่าว
                    <br />
                    Meat Avatar ตั้งเป้าที่จะเป็นเจ้าตลาดเนื้อสัตว์จำแลงในเอเชีย
                    โดยอาศัยจุดแข็งด้านวัตถุดิบคุณภาพสูงจากประเทศไทย
                    และราคาที่ย่อมเยากว่าแบรนด์ต่างประเทศ
                    <br />
                    “เราเชื่อว่าตลาดเนื้อสัตว์จำแลงในเอเชียมีศักยภาพสูงมาก
                    โดยเฉพาะในจีนและอินเดีย
                    ซึ่งประชากรส่วนใหญ่เป็นมังสวิรัติหรือวีแกนอยู่แล้ว
                    เราจึงมั่นใจว่า Meat Avatar
                    จะสามารถเติบโตและประสบความสำเร็จในตลาดนี้ได้อย่างแน่นอน”
                    นิกส์กล่าวอย่างมุ่งมั่น
                  </>
                </Text>
                <div className="flex flex-col gap-6 items-center justify-start">
                  <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-full">
                    <Img
                      className="h-[219px] md:h-auto object-cover w-[219px]"
                      src="images/img_mar20w4.png"
                      alt="mar20wFour"
                    />
                    <Img
                      className="sm:flex-1 h-[219px] md:h-auto object-cover w-[218px] sm:w-full"
                      src="images/img_thebalancemeat.png"
                      alt="thebalancemeat"
                    />
                  </div>
                  <Img
                    className="h-[303px] md:h-auto object-cover w-full"
                    src="images/img_image10.png"
                    alt="imageTen"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1347px] mt-[47px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtInterSemiBold36"
              >
                RECOMMENDED MENU
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-7 w-full">
                <Img
                  className="h-[350px] md:h-auto object-cover w-[350px]"
                  src="images/img_mar20w3.png"
                  alt="mar20wThree"
                />
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-3.5 items-center justify-end md:ml-[0] ml-[174px] p-2.5 rounded-[10px] w-[21%] md:w-full">
                  <Img
                    className="h-[280px] md:h-auto mt-6 object-cover w-[72%] sm:w-full"
                    src="images/img_kapaowithshadow.png"
                    alt="kapaowithshadow"
                  />
                  <PagerIndicator
                    className="flex h-2.5 justify-center w-[122px]"
                    count={9}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray-900 w-2.5"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5"
                    selectedWrapperCss="inline-block md:ml-[0] mx-[1.75px] sm:ml-[0]"
                    unselectedWrapperCss="inline-block md:ml-[0] mx-[1.75px] sm:ml-[0]"
                  />
                </div>
                <Img
                  className="md:flex-1 h-[291px] sm:h-auto md:ml-[0] ml-[84px] object-cover w-[35%] md:w-full"
                  src="images/img_image11.png"
                  alt="imageEleven"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[23px] w-[96%] md:w-full">
                <Text
                  className="md:mt-0 mt-[7px] text-white-A700 text-xl"
                  size="txtInterSemiBold20WhiteA700"
                >
                  <span className="md:text-[22px] sm:text-xl text-white-A700 font-inter text-left text-2xl font-semibold">
                    <>
                      หมูกรอบแพลนต์เบสด์
                      <br />
                    </>
                  </span>
                  <span className="text-white-A700 font-inter text-left font-semibold">
                    <>
                      หมูกรอบแพลนต์เบสด์ของ Meat Avatar
                      โดดเด่นด้วยชั้นหนังกรอบเคี้ยวเพลิน
                      แตกต่างจากหมูกรอบที่ทำจากบุกทั่วไปที่ให้สีแดงดูไม่เป็นธรรมชาติ
                      โดย Meat Avatar ใช้ soy texture และ soy protein
                      ผสมกับเห็ดหอมและงา
                      เพื่อเลียนแบบชั้นหนังและไขมันของหมูกรอบจริง
                      <br />
                    </>
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-white-A700 font-inter text-left text-2xl font-semibold">
                    <>
                      เมนูแนะนำ:
                      <br />
                    </>
                  </span>
                  <span className="text-white-A700 font-inter text-left font-semibold">
                    <>
                      ข้าวหมูกรอบแพลนต์เบสด์
                      <br />
                      บะหมี่หมูกรอบแพลนต์เบสด์
                      <br />
                      หมูกรอบแพลนต์เบสด์ราดหน้า
                      <br />
                      หมูกรอบแพลนต์เบสด์ผัดไทย
                      <br />
                    </>
                  </span>
                </Text>
                <Text
                  className="md:ml-[0] ml-[123px] text-white-A700 text-xl"
                  size="txtInterSemiBold20WhiteA700"
                >
                  <span className="md:text-[22px] sm:text-xl text-white-A700 font-inter text-left text-2xl font-semibold">
                    <>
                      หมูสับแพลนต์เบสด์
                      <br />
                    </>
                  </span>
                  <span className="text-white-A700 font-inter text-left font-semibold">
                    <>
                      หมูสับแพลนต์เบสด์ของ Meat Avatar
                      ให้ความกรึบเด้งเหมือนเนื้อหมูสับจริง โดย Meat Avatar
                      ใช้เห็ดหอมเป็นหลัก ผสมกับถั่วเหลืองเล็กน้อย
                      เพื่อเพิ่มผิวสัมผัสและความยืดหยุ่น
                      <br />
                    </>
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-white-A700 font-inter text-left text-2xl font-semibold">
                    <>
                      เมนูแนะนำ:
                      <br />
                    </>
                  </span>
                  <span className="text-white-A700 font-inter text-left font-semibold">
                    <>
                      ข้าวผัดหมูสับแพลนต์เบสด์
                      <br />
                      แกงจืดหมูสับแพลนต์เบสด์
                      <br />
                      น้ำพริกหมูสับแพลนต์เบสด์
                      <br />
                      ยำหมูสับแพลนต์เบสด์
                      <br />
                    </>
                  </span>
                </Text>
                <Text
                  className="md:ml-[0] ml-[84px] md:mt-0 mt-[7px] text-white-A700 text-xl"
                  size="txtInterSemiBold20WhiteA700"
                >
                  <span className="md:text-[22px] sm:text-xl text-white-A700 font-inter text-left text-2xl font-semibold">
                    <>
                      ไข่ดาวแพลนต์เบสด์
                      <br />
                    </>
                  </span>
                  <span className="text-white-A700 font-inter text-left font-semibold">
                    <>
                      ไข่ดาวแพลนต์เบสด์ของ Meat Avatar
                      โดดเด่นด้วยไข่แดงสีส้มอมแดงเหมือนไข่แดงจริง โดย Meat
                      Avatar ใช้แคร์รอต ฟักทอง และบีตรูต
                      ผสมกับเต้าหู้เพื่อเลียนแบบสีสันและรสชาติของไข่แดงจริง
                      <br />
                    </>
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-white-A700 font-inter text-left text-2xl font-semibold">
                    <>
                      เมนูแนะนำ:
                      <br />
                    </>
                  </span>
                  <span className="text-white-A700 font-inter text-left font-semibold">
                    <>
                      ข้าวผัดไข่ดาวแพลนต์เบสด์
                      <br />
                      ไข่ดาวแพลนต์เบสด์ราดหน้า
                      <br />
                      ไข่ดาวแพลนต์เบสด์ผัดไทย
                      <br />
                      ไข่ดาวแพลนต์เบสด์คั่วกลิ้ง
                    </>
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-[43px] py-8 rounded-[20px] w-full">
            <div className="flex flex-col justify-start mb-[29px] w-full">
              <Text
                className="ml-10 md:ml-[0] sm:text-[40px] md:text-[46px] text-[50px] text-gray-900"
                size="txtInterSemiBold50"
              >
                Product
              </Text>
              <div className="h-[700px] md:h-[745px] max-w-[1100px] mt-[45px] mx-auto md:px-5 relative w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 1 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="m-auto w-full"
                  items={[...Array(8)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="bg-white-A700 flex flex-col items-center justify-start mx-2.5 p-2.5">
                        <Img
                          className="h-[640px] md:h-auto mb-10 object-cover w-[95%]"
                          src="images/img_crispyporkfac.png"
                          alt="crispyporkfac"
                        />
                      </div>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer rounded-[50%] h-5 bg-gray-900 w-5 relative" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-[50%] h-5 bg-blue_gray-100 w-5 relative"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
                <PagerIndicator
                  className="absolute bottom-[1%] flex h-5 inset-x-[0] justify-center mx-auto w-[230px]"
                  count={8}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-5 bg-gray-900 w-5 relative"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-5 bg-blue_gray-100 w-5 relative"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block mx-[5.00px]"
                  unselectedWrapperCss="inline-block mx-[5.00px]"
                />
              </div>
              <div className="flex flex-col mt-[58px] md:px-5 relative w-full">
                <Img
                  className="h-[330px] mx-auto object-cover w-full"
                  src="images/img_image5.png"
                  alt="imageFive"
                />
                <Text
                  className="mt-[-10.31px] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-gray-900 z-[1]"
                  size="txtInterMedium40"
                >
                  Online shopping
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[470px] mt-[51px] md:px-5 w-[35%] md:w-full">
                <Img
                  className="h-[120px] md:h-auto object-cover w-[120px]"
                  src="images/img_2021facebookicon.png"
                  alt="2021facebookico"
                />
                <Img
                  className="h-[125px] md:h-auto sm:ml-[0] ml-[68px] object-cover rounded-[61px] w-1/4 sm:w-full"
                  src="images/img_shopeeiconsymbolfreepng.png"
                  alt="shopeeiconsymbo"
                />
                <Img
                  className="h-[120px] md:h-auto sm:ml-[0] ml-[68px] rounded-[50%] w-[120px]"
                  src="images/img_39e97d2dad7.png"
                  alt="39e97d2dadSeven"
                />
              </div>
            </div>
          </div>
          <div className="h-[907px] md:px-5 relative w-full">
            <Img
              className="h-[155px] mb-[-11px] object-cover w-[26%] z-[1]"
              src="images/img_ma2023whitel.png"
              alt="ma2023whitel_One"
            />
            <div className="bg-gray-700 flex flex-col items-center justify-start mt-auto mx-auto p-[19px] rounded-[20px] w-full">
              <div className="flex flex-col gap-[25px] items-center justify-start mb-[37px] w-[71%] md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtInterSemiBold32"
                >
                  UPDATE ON OUR MISSION
                </Text>
                <Img
                  className="h-[519px] sm:h-auto object-cover w-[91%] md:w-full"
                  src="images/img_10thairestaurant.png"
                  alt="10thairestauran"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                  size="txtInterSemiBold32"
                >
                  <>
                    10 Thai restaurants
                    <br />
                    Introduce the special menu trend &quot;Deliciously Thai
                    Plant-based&quot;.
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-end md:ml-[0] ml-[120px] mt-[109px] md:px-5 w-[89%] md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-[14%] sm:w-full"
              size="txtInterSemiBold40"
            >
              Make It with Passion
            </Text>
            <div className="flex flex-col gap-[11px] items-center justify-start">
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                size="txtInterSemiBold24WhiteA700"
              >
                We believe that enjoying the process is the key when it comes to
                achieving a great goal.
              </Text>
              <Text
                className="text-center text-white-A700 text-xl w-[87%] sm:w-full"
                size="txtInterSemiBold20WhiteA700"
              >
                We are in it with you whether your goal is living a healthier
                lifestyle, standing for animal rights, or even changing the
                World. Let’s celebrate every accomplishment and tell stories to
                inspire others.
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1207px] mt-[45px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[348px] md:h-auto object-cover w-[23%] sm:w-full"
              src="images/img_screenshot202.png"
              alt="screenshot202"
            />
            <Img
              className="sm:flex-1 h-[348px] md:h-auto ml-7 sm:ml-[0] object-cover w-[23%] sm:w-full"
              src="images/img_screenshot202_348x274.png"
              alt="screenshot202_One"
            />
            <Img
              className="sm:flex-1 h-[353px] md:h-auto sm:ml-[0] ml-[35px] object-cover w-[24%] sm:w-full"
              src="images/img_screenshot202_353x278.png"
              alt="screenshot202_Two"
            />
            <Img
              className="sm:flex-1 h-[356px] md:h-auto ml-10 sm:ml-[0] object-cover w-[24%] sm:w-full"
              src="images/img_screenshot202_356x278.png"
              alt="screenshot202_Three"
            />
          </div>
          <DesktopOneFooter className="bg-white-A700 flex flex-col items-center justify-end mt-[97px] p-[7px] w-full" />
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
