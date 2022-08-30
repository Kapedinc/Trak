import React from "react";

import {
  Column,
  Stack,
  Line,
  Row,
  Img,
  Text,
  Button,
  List,
  Switch,
} from "components";

const CreditcardsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]">
        <Stack className="lg:h-[140px] xl:h-[160px] 2xl:h-[179px] 3xl:h-[215px] w-[100%]">
          <Line className="absolute bg-white_A700 bottom-[8%] h-[1.5px] right-[6%] w-[83%]" />
          <Column className="absolute bg-white_A700 items-center justify-end lg:p-[6px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] w-[100%]">
            <Row className="font-kd items-center justify-between mt-[1px] w-[94%]">
              <Img
                src="images/img_untitleddesign.png"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] w-[14%]"
                alt="Untitleddesign"
              />
              <Row className="items-center justify-evenly w-[15%]">
                <Img
                  src="images/img_personicon1.png"
                  className="lg:h-[49px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] w-[31%]"
                  alt="personiconOne"
                />
                <Column className="w-[69%]">
                  <Text className="font-medium lg:leading-[15px] xl:leading-[18px] 2xl:leading-[20px] 3xl:leading-[24px] lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_900_e0 w-[80%]">
                    <span className="text-bluegray_900_e0 font-kd font-normal not-italic">
                      Trak Technologies
                      <br />
                    </span>
                    <span className="text-bluegray_900_e0 font-kd font-bold">
                      Vashon Gonzales
                    </span>
                  </Text>
                  <Line className="bg-black_900_35 h-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                </Column>
              </Row>
            </Row>
            <Line className="bg-gradient3  h-[3px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] shadow-bs3 w-[97%]" />
            <Text className="font-kd font-normal lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[30px] xl:text-[35px] 2xl:text-[39px] 3xl:text-[47px] text-black_900 w-[auto]">
              Credit Cards
            </Text>
            <Text className="font-inter font-light mt-[4px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_700_c4 w-[auto]">
              Business Credit Cards - Marketplace
            </Text>
          </Column>
        </Stack>
        <Stack className="lg:h-[1437px] xl:h-[1644px] 2xl:h-[1849px] 3xl:h-[2218px] w-[100%]">
          <Stack className="absolute bg-bluegray_50 lg:h-[1437px] xl:h-[1644px] 2xl:h-[1849px] 3xl:h-[2218px] left-[0] lg:px-[21px] xl:px-[24px] 2xl:px-[27px] 3xl:px-[32px] w-[100%]">
            <div className="absolute bg-gray_600 lg:h-[43px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] right-[3%] rounded-radius8 top-[0] w-[85%]"></div>
            <Column className="absolute bg-white_A700 justify-end xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] right-[3%] rounded-radius8 shadow-bs4 top-[0] w-[85%]">
              <Text className="font-kd font-normal lg:ml-[13px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] mt-[4px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900_e0 w-[auto]">
                Choosing Your Credit Card
              </Text>
              <Line className="bg-black_900_19 h-[1px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900 w-[92%]">
                Remember that you are able to change card companies at a later
                stage. If you’re dissatisfied with the credit card company
                you’ve chosen, it doesn’t mean you have to stick with them. It’s
                useful to change or upgrade your credit card as your business
                develops over time. You may find that your credit card work for
                now, but as you grow, it may lose it’s value to your business.
                Keep your credit card updated with your buisness.
              </Text>
              <Row className="font-kd justify-end lg:ml-[552px] xl:ml-[631px] 2xl:ml-[710px] 3xl:ml-[852px] mt-[4px] w-[40%]">
                <Text className="font-light lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-blue_500_bc w-[auto]">
                  Learn more about choosing the best credit card for your
                  business
                </Text>
                <Img
                  src="images/img_arrow4.svg"
                  className="lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] xl:h-[2px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] mt-[4px] w-[1px]"
                  alt="ArrowFour"
                />
              </Row>
            </Column>
          </Stack>
          <Column className="absolute h-[max-content] inset-y-[0] my-[auto] lg:pb-[186px] xl:pb-[213px] 2xl:pb-[239px] 3xl:pb-[287px] lg:pr-[186px] xl:pr-[213px] 2xl:pr-[239px] 3xl:pr-[287px] right-[0] w-[90%]">
            <Row className="items-center w-[100%]">
              <Stack className="lg:h-[349px] xl:h-[399px] 2xl:h-[449px] 3xl:h-[538px] w-[39%]">
                <Stack className="absolute font-kd lg:h-[349px] xl:h-[399px] 2xl:h-[449px] 3xl:h-[538px] right-[2%] w-[98%]">
                  <Stack className="absolute bottom-[0] lg:h-[232px] xl:h-[266px] 2xl:h-[299px] 3xl:h-[358px] w-[100%]">
                    <div className="absolute bg-orange_A200 lg:h-[49px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] rounded-radius8 top-[0] w-[100%]"></div>
                    <Column
                      className="absolute bg-cover bg-repeat items-center justify-end xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius8 top-[2%] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group50.svg')",
                      }}
                    >
                      <Text className="font-bold font-hahmlet lg:mt-[119px] xl:mt-[136px] 2xl:mt-[153px] 3xl:mt-[183px] 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-light_blue_A700_bc uppercase w-[auto]">
                        <span className="text-light_blue_A700_bc underline">
                          Terms
                        </span>
                        <span className="text-light_blue_A700_bc">, </span>
                        <span className="text-light_blue_A700_bc underline">
                          rates & Fees
                        </span>
                      </Text>
                      <Button
                        className="font-inter font-normal lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[45%]"
                        shape="RoundedBorder8"
                        size="sm"
                        variant="OutlineBlack9003f"
                      >
                        Apply Now!
                      </Button>
                      <Text className="font-inter font-medium lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-blue_500 underline w-[auto]">
                        Learn More
                      </Text>
                      <Text className="font-inter font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_700_c4 w-[auto]">
                        Expand
                      </Text>
                      <Img
                        src="images/img_arrowdown_6X17.svg"
                        className="lg:h-[6px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] mt-[2px] w-[5%]"
                        alt="arrowdown"
                      />
                    </Column>
                  </Stack>
                  <Column
                    className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-end mx-[auto] lg:p-[11px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] top-[0] w-[74%]"
                    style={{ backgroundImage: "url('images/img_group49.png')" }}
                  >
                    <Text className="font-medium lg:mt-[194px] xl:mt-[222px] 2xl:mt-[249px] 3xl:mt-[299px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-gray_801 w-[auto]">
                      Flex AdCard
                    </Text>
                  </Column>
                </Stack>
                <Text className="absolute bottom-[30%] font-bold font-hahmlet inset-x-[0] mx-[auto] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_500 uppercase w-[max-content]">
                  Dash.fi is a trak partner
                </Text>
                <Column
                  className="absolute bg-cover bg-repeat font-kd items-end justify-end lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] right-[0] top-[38%] w-[16%]"
                  style={{ backgroundImage: "url('images/img_group94.png')" }}
                >
                  <Text className="font-bold lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[6px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
                    Note
                  </Text>
                </Column>
              </Stack>
              <Stack className="lg:h-[349px] xl:h-[399px] 2xl:h-[449px] 3xl:h-[538px] lg:ml-[177px] xl:ml-[203px] 2xl:ml-[228px] 3xl:ml-[274px] w-[39%]">
                <Stack className="absolute bottom-[0] lg:h-[232px] xl:h-[266px] 2xl:h-[299px] 3xl:h-[358px] w-[100%]">
                  <Stack className="absolute lg:h-[232px] xl:h-[266px] 2xl:h-[299px] 3xl:h-[358px] right-[2%] w-[98%]">
                    <div className="absolute bg-orange_200 lg:h-[49px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] rounded-radius8 top-[0] w-[100%]"></div>
                    <Column
                      className="absolute bg-cover bg-repeat items-center justify-end xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius8 top-[2%] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group50.svg')",
                      }}
                    >
                      <Text className="font-medium lg:mt-[168px] xl:mt-[193px] 2xl:mt-[217px] 3xl:mt-[260px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-blue_500 underline w-[auto]">
                        Learn More
                      </Text>
                      <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_700_c4 w-[auto]">
                        Expand
                      </Text>
                      <Img
                        src="images/img_arrowdown_6X17.svg"
                        className="lg:h-[6px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] mt-[2px] w-[5%]"
                        alt="arrowdown One"
                      />
                    </Column>
                  </Stack>
                  <Column
                    className="absolute bg-cover bg-repeat font-kd items-end justify-end lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] right-[0] top-[6%] w-[16%]"
                    style={{ backgroundImage: "url('images/img_group94.png')" }}
                  >
                    <Text className="font-bold lg:mr-[4px] 2xl:mr-[5px] xl:mr-[5px] 3xl:mr-[6px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
                      Note
                    </Text>
                  </Column>
                </Stack>
                <Column className="absolute items-center left-[8%] top-[0] w-[79%]">
                  <Stack className="font-kd lg:h-[231px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] w-[100%]">
                    <Text className="absolute bottom-[0] font-medium inset-x-[0] mx-[auto] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-gray_801 w-[max-content]">
                      Divvy Smart Credit Card
                    </Text>
                    <Img
                      src="images/img_frame1432.png"
                      className="absolute lg:h-[216px] xl:h-[247px] 2xl:h-[277px] 3xl:h-[333px] top-[0] w-[100%]"
                      alt="Frame1432"
                    />
                  </Stack>
                  <Text className="font-bold font-hahmlet xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-light_blue_A700_96 uppercase w-[auto]">
                    <span className="text-light_blue_A700 underline">
                      Terms
                    </span>
                    <span className="text-light_blue_A700">, </span>
                    <span className="text-light_blue_A700 underline">
                      rates & Fees
                    </span>
                  </Text>
                  <Button
                    className="font-inter font-normal lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[52%]"
                    shape="RoundedBorder8"
                    size="sm"
                    variant="OutlineBlack9003f1_2"
                  >
                    Apply Now!
                  </Button>
                </Column>
              </Stack>
            </Row>
            <List
              className="lg:gap-[178px] xl:gap-[204px] 2xl:gap-[229px] 3xl:gap-[275px] grid grid-cols-2 lg:mb-[124px] xl:mb-[142px] 2xl:mb-[159px] 3xl:mb-[191px] min-h-[auto] lg:mt-[131px] xl:mt-[150px] 2xl:mt-[168px] 3xl:mt-[202px] w-[100%]"
              orientation="horizontal"
            >
              <Stack className="lg:h-[318px] xl:h-[364px] 2xl:h-[409px] 3xl:h-[491px] w-[100%]">
                <Stack className="absolute lg:h-[318px] xl:h-[364px] 2xl:h-[409px] 3xl:h-[491px] right-[2%] w-[98%]">
                  <Stack className="absolute bottom-[0] lg:h-[232px] xl:h-[266px] 2xl:h-[299px] 3xl:h-[358px] w-[100%]">
                    <div className="absolute bg-amber_A200 lg:h-[49px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] rounded-radius8 top-[0] w-[100%]"></div>
                    <Column
                      className="absolute bg-cover bg-repeat items-center justify-end xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius8 top-[2%] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group50.svg')",
                      }}
                    >
                      <Text className="font-medium lg:mt-[168px] xl:mt-[193px] 2xl:mt-[217px] 3xl:mt-[260px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-blue_500 underline w-[auto]">
                        Learn More
                      </Text>
                      <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_700_c4 w-[auto]">
                        Expand
                      </Text>
                      <Img
                        src="images/img_arrowdown_6X17.svg"
                        className="lg:h-[6px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] mt-[2px] w-[5%]"
                        alt="arrowdown Two"
                      />
                    </Column>
                  </Stack>
                  <Column className="absolute items-center top-[0] w-[100%]">
                    <Stack className="font-kd lg:h-[199px] xl:h-[228px] 2xl:h-[256px] 3xl:h-[307px] w-[96%]">
                      <Text className="absolute bottom-[0] font-medium lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-gray_801 w-[auto]">
                        Capital On Tap
                      </Text>
                      <Img
                        src="images/img_163.png"
                        className="absolute lg:h-[182px] xl:h-[208px] 2xl:h-[234px] 3xl:h-[280px] right-[5%] top-[0] w-[85%]"
                        alt="OneHundredSixtyThree"
                      />
                    </Stack>
                    <Text className="font-bold font-hahmlet mt-[3px] 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-light_blue_A700_bc uppercase w-[auto]">
                      <span className="text-light_blue_A700_bc underline">
                        Terms
                      </span>
                      <span className="text-light_blue_A700_bc">, </span>
                      <span className="text-light_blue_A700_bc underline">
                        rates & Fees
                      </span>
                    </Text>
                    <Text className="bg-gradient6  font-inter font-normal lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:px-[27px] xl:px-[31px] 2xl:px-[34px] 3xl:px-[41px] py-[3px] rounded-radius8 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_402 text-shadow-ts w-[auto]">
                      Apply Now!
                    </Text>
                  </Column>
                </Stack>
                <Column
                  className="absolute bg-cover bg-repeat font-kd items-end justify-end lg:p-[5px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] right-[0] top-[32%] w-[16%]"
                  style={{ backgroundImage: "url('images/img_group94.png')" }}
                >
                  <Text className="font-bold mr-[4px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
                    Note
                  </Text>
                </Column>
              </Stack>
              <Stack className="lg:h-[318px] xl:h-[364px] 2xl:h-[409px] 3xl:h-[491px] w-[100%]">
                <Stack className="absolute lg:h-[318px] xl:h-[364px] 2xl:h-[409px] 3xl:h-[491px] right-[2%] w-[98%]">
                  <Stack className="absolute bottom-[0] lg:h-[232px] xl:h-[266px] 2xl:h-[299px] 3xl:h-[358px] w-[100%]">
                    <div className="absolute bg-amber_A200 lg:h-[49px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] rounded-radius8 top-[0] w-[100%]"></div>
                    <Column
                      className="absolute bg-cover bg-repeat items-center justify-end xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius8 top-[2%] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group50.svg')",
                      }}
                    >
                      <Text className="font-medium lg:mt-[168px] xl:mt-[193px] 2xl:mt-[217px] 3xl:mt-[260px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-blue_500 underline w-[auto]">
                        Learn More
                      </Text>
                      <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_700_c4 w-[auto]">
                        Expand
                      </Text>
                      <Img
                        src="images/img_arrowdown_6X17.svg"
                        className="lg:h-[6px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] mt-[2px] w-[5%]"
                        alt="arrowdown Three"
                      />
                    </Column>
                  </Stack>
                  <Column className="absolute items-center top-[0] w-[100%]">
                    <Stack className="font-kd lg:h-[199px] xl:h-[228px] 2xl:h-[256px] 3xl:h-[307px] w-[96%]">
                      <Text className="absolute bottom-[0] font-medium lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-gray_801 w-[auto]">
                        Capital On Tap
                      </Text>
                      <Img
                        src="images/img_163.png"
                        className="absolute lg:h-[182px] xl:h-[208px] 2xl:h-[234px] 3xl:h-[280px] right-[5%] top-[0] w-[85%]"
                        alt="OneHundredSixtyThree One"
                      />
                    </Stack>
                    <Text className="font-bold font-hahmlet mt-[3px] 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-light_blue_A700_bc uppercase w-[auto]">
                      <span className="text-light_blue_A700_bc underline">
                        Terms
                      </span>
                      <span className="text-light_blue_A700_bc">, </span>
                      <span className="text-light_blue_A700_bc underline">
                        rates & Fees
                      </span>
                    </Text>
                    <Text className="bg-gradient6  font-inter font-normal lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:px-[27px] xl:px-[31px] 2xl:px-[34px] 3xl:px-[41px] py-[3px] rounded-radius8 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_402 text-shadow-ts w-[auto]">
                      Apply Now!
                    </Text>
                  </Column>
                </Stack>
                <Column
                  className="absolute bg-cover bg-repeat font-kd items-end justify-end lg:p-[5px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] right-[0] top-[32%] w-[16%]"
                  style={{ backgroundImage: "url('images/img_group94.png')" }}
                >
                  <Text className="font-bold mr-[4px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
                    Note
                  </Text>
                </Column>
              </Stack>
            </List>
          </Column>
          <Stack className="absolute lg:h-[452px] xl:h-[517px] 2xl:h-[581px] 3xl:h-[698px] left-[0] top-[1%] w-[7%]">
            <Column className="absolute bg-white_A700 left-[0] lg:p-[5px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-bl-[0] rounded-br-[20px] rounded-tl-[0] rounded-tr-[20px] w-[60%]">
              <Img
                src="images/img_group5.png"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                alt="OneHundredSixtyTwo"
              />
              <Img
                src="images/img_27.png"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[57px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                alt="TwentySeven"
              />
              <Img
                src="images/img_idrestoration.png"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[57px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                alt="idrestoration"
              />
              <Img
                src="images/img_594.png"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mb-[110px] xl:mb-[126px] 2xl:mb-[141px] 3xl:mb-[170px] lg:mt-[57px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                alt="FiveHundredNinetyFour"
              />
            </Column>
            <Switch
              onColor=""
              offColor=""
              onHandleColor=""
              offHandleColor=""
              value={false}
              className="absolute bottom-[4%] w-[100%]"
            />
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default CreditcardsPage;
