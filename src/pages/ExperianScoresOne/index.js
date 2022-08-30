import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Line,
  PagerIndicator,
  Stack,
  List,
} from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ExperianScoresOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate8() {
    navigate("/creditcards");
  }

  return (
    <>
      <Column className="bg-white_A700 font-kd items-center justify-end mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Column className="bg-white_A700 items-center justify-end lg:p-[5px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[100%]">
            <Row className="items-center justify-between mt-[2px] w-[94%]">
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
            <Line className="bg-gradient3  h-[3px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] shadow-bs3 w-[96%]" />
            <Row className="justify-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[34%]">
              <Img
                src="images/img_arrow2.svg"
                className="lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] xl:h-[3px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[1px]"
                alt="ArrowTwo"
              />
              <Text className="font-normal lg:ml-[125px] xl:ml-[143px] 2xl:ml-[160px] 3xl:ml-[193px] not-italic lg:text-[30px] xl:text-[35px] 2xl:text-[39px] 3xl:text-[47px] text-black_900 w-[auto]">
                Experian
              </Text>
              <Img
                src="images/img_arrow2_black_900.svg"
                className="lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] xl:h-[3px] lg:ml-[125px] xl:ml-[143px] 2xl:ml-[160px] 3xl:ml-[193px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[1px]"
                alt="ArrowTwo One"
              />
            </Row>
            <PagerIndicator
              className="h-[7px] lg:mt-[6px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[max-content]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-radius50 w-[7px] h-[7px] bg-deep_orange_300"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer rounded-radius50 w-[7px] h-[7px] bg-gray_400"
              selectedWrapperCss="2xl:mx-[10px] 3xl:mx-[12px] inline-block lg:mx-[7px] xl:mx-[9px]"
              unselectedWrapperCss="2xl:mx-[10px] 3xl:mx-[12px] inline-block lg:mx-[7px] xl:mx-[9px]"
            />
          </Column>
        </header>
        <Stack className="3xl:h-[1043px] lg:h-[676px] xl:h-[773px] 2xl:h-[870px] w-[100%]">
          <Column className="absolute bg-bluegray_50 items-center left-[0] lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[25px] w-[100%]">
            <Row className="w-[82%]">
              <Column className="lg:mt-[42px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[57%]">
                <Column className="bg-white_A700 lg:p-[11px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius8 shadow-bs4 w-[83%]">
                  <Text className="font-extrabold font-kd lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 w-[auto]">
                    Points Difference
                  </Text>
                  <Line className="bg-black_900_19 h-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[90%]" />
                  <Text className="font-inter font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                    Hi James,
                  </Text>
                  <Text className="font-inter font-normal leading-[normal] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[90%]">
                    Lorem ipsum dolor sit amet, consectetur adispising elit, sed
                    do eiusmod tempor incididiunt ut.
                  </Text>
                  <Row className="mb-[4px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[93%]">
                    <Img
                      src="images/img_1471.png"
                      className="lg:h-[27px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] mb-[4px] lg:w-[26px] xl:w-[30px] 2xl:w-[33px] 3xl:w-[40px]"
                      alt="1471"
                    />
                    <Text className="font-medium font-redhatdisplay ml-[4px] mt-[4px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
                      160{" "}
                    </Text>
                    <Text className="font-medium font-redhatdisplay lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-gray_401 w-[auto]">
                      points
                    </Text>
                    <Text className="font-normal font-segoeui lg:ml-[181px] xl:ml-[207px] 2xl:ml-[233px] 3xl:ml-[279px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                      <span className="text-teal_A400 font-inter">+4 </span>
                      <span className="text-gray_401 font-inter">since</span>
                      <span className="text-black_900 font-inter">
                        {" "}
                        January 11
                      </span>
                    </Text>
                  </Row>
                </Column>
                <Column className="bg-white_A700 items-end justify-center lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:p-[10px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] rounded-radius8 shadow-bs4 w-[83%]">
                  <Row className="items-center lg:mr-[21px] xl:mr-[25px] 2xl:mr-[28px] 3xl:mr-[33px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[94%]">
                    <Column className="w-[4%]">
                      <Text className="font-normal ml-[1px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_400 w-[auto]">
                        100
                      </Text>
                      <Text className="font-normal ml-[1px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_400 w-[auto]">
                        80
                      </Text>
                      <Text className="font-normal lg:mt-[21px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_400 w-[auto]">
                        60
                      </Text>
                      <Text className="font-normal ml-[1px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_400 w-[auto]">
                        40
                      </Text>
                      <Text className="font-normal ml-[1px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_400 w-[auto]">
                        20
                      </Text>
                    </Column>
                    <Stack className="lg:h-[127px] xl:h-[146px] 2xl:h-[164px] 3xl:h-[196px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[3px] w-[92%]">
                      <Column className="absolute items-center top-[0] w-[100%]">
                        <Line className="bg-black_900_1e h-[1px] w-[100%]" />
                        <Line className="bg-black_900_0c h-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
                        <Line className="bg-black_900_1e h-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
                        <Line className="bg-black_900_0c h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]" />
                        <Line className="bg-black_900_1e h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                        <Line className="bg-black_900_0c h-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
                        <Line className="bg-black_900_1e h-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
                        <Line className="bg-black_900_0c h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                        <Line className="bg-black_900_1e h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                      </Column>
                      <Img
                        src="images/img_chartpoints.svg"
                        className="absolute lg:h-[127px] xl:h-[146px] 2xl:h-[164px] 3xl:h-[196px] left-[1%] w-[99%]"
                        alt="chartpoints"
                      />
                    </Stack>
                  </Row>
                  <Line className="bg-black_900_0c h-[1px] lg:mr-[21px] xl:mr-[25px] 2xl:mr-[28px] 3xl:mr-[33px] mt-[2px] w-[86%]" />
                  <Row className="items-center lg:mr-[32px] xl:mr-[37px] 2xl:mr-[41px] 3xl:mr-[49px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[81%]">
                    <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-blue_500_bc w-[auto]">
                      Sep 2019
                    </Text>
                    <Text className="font-normal lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-blue_500_bc w-[auto]">
                      Oct 2019
                    </Text>
                    <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-blue_500_bc w-[auto]">
                      Nov 2019
                    </Text>
                    <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-blue_500_bc w-[auto]">
                      Dec 2019
                    </Text>
                    <Text className="font-normal lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-blue_500_bc w-[auto]">
                      Jan 2020
                    </Text>
                    <Text className="font-normal lg:ml-[25px] xl:ml-[29px] 2xl:ml-[32px] 3xl:ml-[39px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-blue_500_bc w-[auto]">
                      Feb 2020
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius8 shadow-bs4 w-[43%]">
                <Row className="mt-[4px] w-[99%]">
                  <Text className="font-extrabold mb-[1px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 w-[auto]">
                    Business Intelliscore
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[17px] 3xl:h-[21px] lg:ml-[158px] xl:ml-[181px] 2xl:ml-[203px] 3xl:ml-[244px] my-[1px] w-[2%]"
                    alt="arrowdown"
                  />
                  <Text className="font-medium lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-deep_orange_300 w-[auto]">
                    Download
                  </Text>
                </Row>
                <Text className="font-extrabold lg:mt-[33px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-teal_A400_d8 w-[auto]">
                  50
                </Text>
                <Row className="justify-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] w-[79%]">
                  <Text className="font-extrabold lg:mt-[111px] xl:mt-[127px] 2xl:mt-[142px] 3xl:mt-[171px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-teal_A400_d8 w-[auto]">
                    25
                  </Text>
                  <Stack className="lg:h-[224px] xl:h-[256px] 2xl:h-[288px] 3xl:h-[345px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] w-[78%]">
                    <Column className="absolute bottom-[9%] items-center top-[7%] w-[100%]">
                      <Row className="font-kd items-center justify-between w-[100%]">
                        <Text className="font-extrabold lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-teal_A400_d8 w-[auto]">
                          40
                        </Text>
                        <Text className="font-extrabold lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-teal_A400_d8 w-[auto]">
                          60
                        </Text>
                      </Row>
                      <Column className="items-center lg:mt-[30px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[21%]">
                        <Text className="font-kd font-semibold lg:text-[36px] xl:text-[42px] 2xl:text-[47px] 3xl:text-[56px] text-teal_A400_d8 w-[auto]">
                          88
                        </Text>
                        <Text className="font-inter font-light mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_400 w-[auto]">
                          Low Risk
                        </Text>
                      </Column>
                      <Text className="font-inter font-light mt-[3px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-teal_A400 w-[auto]">
                        Excellent!
                      </Text>
                      <Row className="font-kd items-center justify-between lg:mt-[59px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[96%]">
                        <Text className="font-extrabold mt-[1px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-teal_A400_d8 w-[auto]">
                          5
                        </Text>
                        <Text className="font-extrabold mb-[1px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-teal_A400_d8 w-[auto]">
                          100
                        </Text>
                      </Row>
                    </Column>
                    <CircularProgressbar
                      className="absolute lg:h-[224px] xl:h-[256px] 2xl:h-[288px] 3xl:h-[345px] inset-x-[0] overflow-visible w-[99%]"
                      value="67"
                      name="Group102"
                      strokeWidth={5}
                      styles={{
                        trail: { strokeWidth: 5, stroke: "#24d0a0" },
                        path: {
                          strokeLinecap: "square",
                          height: "100%",
                          "transform-origin": "center",
                          transform: "rotate(146deg)",
                          stroke: "#c4c4c4",
                        },
                      }}
                    ></CircularProgressbar>
                  </Stack>
                  <Text className="font-extrabold lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[111px] xl:mt-[127px] 2xl:mt-[142px] 3xl:mt-[171px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-teal_A400_d8 w-[auto]">
                    85
                  </Text>
                </Row>
                <Row className="font-redhatdisplay justify-between lg:mt-[40px] xl:mt-[46px] 2xl:mt-[51px] 3xl:mt-[62px] w-[95%]">
                  <Text className="font-medium mt-[1px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900 w-[auto]">
                    Updated
                  </Text>
                  <Text className="font-medium mb-[1px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900 w-[auto]">
                    Next Update
                  </Text>
                </Row>
                <Line className="bg-gray_400 h-[1px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
                <Row className="font-inter items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] w-[96%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    Feb 21, 2020
                  </Text>
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    Mar 21, 2020
                  </Text>
                </Row>
                <Row className="justify-between mb-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] w-[95%]">
                  <Text className="font-light font-redhatdisplay lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                    Credit scores used by vendors may vary.
                  </Text>
                  <Text className="font-normal font-roboto mt-[2px] not-italic xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    <span className="text-black_900 font-inter">
                      Vantage Score
                    </span>
                    <span className="text-teal_A400 font-inter"> 3.0</span>
                  </Text>
                </Row>
              </Column>
            </Row>
            <Row className="items-center xl:mb-[112px] 2xl:mb-[126px] 3xl:mb-[151px] lg:mb-[98px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[59px] 3xl:mt-[71px] w-[90%]">
              <Column className="border-bw3 border-solid border-white_A700 items-center lg:p-[11px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 shadow-bs5 w-[15%]">
                <Text className="font-kd font-medium lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 w-[auto]">
                  $24,660
                </Text>
                <Text className="font-inter font-normal mb-[2px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_400 w-[auto]">
                  Available Credit
                </Text>
              </Column>
              <List
                className="lg:gap-[64px] xl:gap-[74px] 2xl:gap-[83px] 3xl:gap-[99px] grid grid-cols-4 min-h-[auto] lg:ml-[64px] xl:ml-[74px] 2xl:ml-[83px] 3xl:ml-[99px] w-[79%]"
                orientation="horizontal"
              >
                <Column className="border-bw3 border-solid border-white_A700 items-center lg:p-[10px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] rounded-radius5 shadow-bs5 w-[100%]">
                  <Text className="font-kd font-medium lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 w-[auto]">
                    4 Years
                  </Text>
                  <Text className="font-inter font-normal mb-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_400 w-[auto]">
                    Oldest Credit Line
                  </Text>
                </Column>
                <Column className="border-bw3 border-solid border-white_A700 items-center lg:p-[10px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] rounded-radius5 shadow-bs5 w-[100%]">
                  <Text className="font-kd font-medium lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 w-[auto]">
                    5%
                  </Text>
                  <Text className="font-inter font-normal mb-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_400 w-[auto]">
                    Credit Used
                  </Text>
                </Column>
                <Column className="border-bw3 border-solid border-white_A700 items-center lg:p-[10px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] rounded-radius5 shadow-bs5 w-[100%]">
                  <Text className="font-kd font-medium lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 w-[auto]">
                    8
                  </Text>
                  <Text className="font-inter font-normal mb-[2px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_400 w-[auto]">
                    Recent Inquiries
                  </Text>
                </Column>
                <Column className="border-bw3 border-solid border-white_A700 items-center lg:p-[10px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] rounded-radius5 shadow-bs5 w-[100%]">
                  <Text className="font-kd font-medium lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 w-[auto]">
                    14
                  </Text>
                  <Text className="font-inter font-normal mb-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_400 w-[auto]">
                    Open Accounts
                  </Text>
                </Column>
              </List>
            </Row>
          </Column>
          <Stack className="absolute lg:h-[452px] xl:h-[517px] 2xl:h-[581px] 3xl:h-[698px] left-[0] top-[4%] w-[7%]">
            <Column className="absolute bg-white_A700 items-center justify-end left-[0] 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-bl-[0] rounded-br-[20px] rounded-tl-[0] rounded-tr-[20px] w-[61%]">
              <Img
                src="images/img_27.png"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[108px] xl:mt-[124px] 2xl:mt-[139px] 3xl:mt-[167px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                alt="TwentySeven"
              />
              <Img
                src="images/img_idrestoration.png"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[57px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                alt="idrestoration"
              />
              <Img
                src="images/img_594.png"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[57px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                alt="FiveHundredNinetyFour"
              />
              <Img
                src="images/img_622.png"
                className="common-pointer lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] lg:mt-[57px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                onClick={handleNavigate8}
                alt="SixHundredTwentyTwo"
              />
            </Column>
            <Column className="absolute bg-bluegray_50 inset-x-[0] mx-[auto] lg:pb-[5px] 2xl:pb-[6px] xl:pb-[6px] 3xl:pb-[8px] lg:px-[5px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] rounded-radius20 top-[5%] w-[98%]">
              <Stack
                className="bg-cover bg-repeat lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] mb-[4px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                style={{ backgroundImage: "url('images/img_group5.png')" }}
              >
                <Img
                  src="images/img_scores1.png"
                  className="absolute lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  alt="scoresOne"
                />
              </Stack>
            </Column>
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default ExperianScoresOnePage;
