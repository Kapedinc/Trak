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
  Switch,
} from "components";

const ReportsExperianPage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/creditcards");
  }
  function handleNavigate7() {
    navigate("/scoresequifax");
  }

  return (
    <>
      <Column className="bg-white_A700 font-kd items-center justify-end mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Column className="bg-white_A700 items-center justify-end p-[1px] w-[100%]">
            <Row className="items-center justify-between lg:mt-[6px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[93%]">
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
            <Row className="justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[33%]">
              <Img
                src="images/img_arrow2.svg"
                className="lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] xl:h-[3px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] w-[1px]"
                alt="ArrowTwo"
              />
              <Text className="font-normal lg:ml-[125px] xl:ml-[143px] 2xl:ml-[160px] 3xl:ml-[193px] not-italic lg:text-[30px] xl:text-[35px] 2xl:text-[39px] 3xl:text-[47px] text-black_900 w-[auto]">
                Experian
              </Text>
              <Img
                src="images/img_arrow2_black_900.svg"
                className="lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] xl:h-[3px] lg:ml-[125px] xl:ml-[143px] 2xl:ml-[160px] 3xl:ml-[193px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] w-[1px]"
                alt="ArrowTwo One"
              />
            </Row>
            <PagerIndicator
              className="h-[7px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[max-content]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-radius50 w-[7px] h-[7px] bg-deep_orange_300"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer rounded-radius50 w-[7px] h-[7px] bg-gray_400"
              selectedWrapperCss="2xl:mx-[10px] 3xl:mx-[12px] inline-block lg:mx-[7px] xl:mx-[9px]"
              unselectedWrapperCss="2xl:mx-[10px] 3xl:mx-[12px] inline-block lg:mx-[7px] xl:mx-[9px]"
            />
          </Column>
        </header>
        <Stack className="3xl:h-[1043px] lg:h-[676px] xl:h-[773px] 2xl:h-[870px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
          <Column className="absolute bg-bluegray_50 left-[0] lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[25px] w-[100%]">
            <Row className="bg-white_A700 justify-end ml-[auto] lg:pr-[14px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[21px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] rounded-radius8 shadow-bs4 w-[87%]">
              <Line className="bg-gray_700_c4 xl:h-[100px] 2xl:h-[112px] 3xl:h-[134px] lg:h-[87px] w-[5px]" />
              <Column className="xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mr-[30px] xl:mr-[35px] 2xl:mr-[39px] 3xl:mr-[47px] lg:mt-[6px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[94%]">
                <Text className="font-kd font-medium ml-[3px] lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-gray_700_c4 w-[auto]">
                  Report Summary
                </Text>
                <Text className="font-inter font-normal ml-[4px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900 w-[auto]">
                  Review this summary for a quick view of key information
                  maintained in your Equifax credit report, as well as your
                  resulting Equifax Credit Score and rating.
                </Text>
                <Line className="bg-black_900_19 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]" />
                <Row className="items-center lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[76%]">
                  <Column className="mb-[1px] w-[34%]">
                    <Text className="font-bold font-inter lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_700_c4 uppercase w-[auto]">
                      Report Date
                    </Text>
                    <Text className="font-normal font-redhatdisplay xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      3/1/2018
                    </Text>
                  </Column>
                  <Column className="w-[38%]">
                    <Text className="font-bold font-inter lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_700_c4 uppercase w-[auto]">
                      Average Account Age
                    </Text>
                    <Text className="font-normal font-redhatdisplay xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      10 Years, 6 Months
                    </Text>
                  </Column>
                  <Column className="mt-[1px] w-[28%]">
                    <Text className="font-bold font-inter lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_700_c4 uppercase w-[auto]">
                      Oldest Account
                    </Text>
                    <Text className="font-normal font-redhatdisplay xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      KITSAT CREDIT UNION / 3/1/2000
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Row>
            <Row className="items-center justify-end ml-[auto] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[87%]">
              <Stack className="lg:h-[168px] xl:h-[193px] 2xl:h-[217px] 3xl:h-[260px] 3xl:pr-[10px] lg:pr-[7px] xl:pr-[8px] 2xl:pr-[9px] w-[37%]">
                <div className="absolute bg-white_A700 lg:h-[168px] xl:h-[193px] 2xl:h-[217px] 3xl:h-[260px] rounded-radius8 shadow-bs4 w-[98%]"></div>
                <Column className="absolute inset-x-[0] mx-[auto] top-[12%] w-[86%]">
                  <Text className="font-kd font-medium ml-[2px] lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-teal_A400 w-[auto]">
                    Credit Score & Rating
                  </Text>
                  <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] ml-[4px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900 w-[96%]">
                    Your credit score & rating are not part of your credit
                    report, but are derived from the information in your file.
                  </Text>
                  <Line className="bg-black_900_19 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]" />
                  <Row className="items-center lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[79%]">
                    <Column className="w-[68%]">
                      <Text className="font-bold font-inter lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-teal_A400 uppercase w-[auto]">
                        Credit score
                      </Text>
                      <Text className="font-normal font-redhatdisplay 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                        88
                      </Text>
                    </Column>
                    <Column className="mb-[1px] w-[32%]">
                      <Text className="font-bold font-inter lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-teal_A400 uppercase w-[auto]">
                        Score rating
                      </Text>
                      <Text className="font-normal font-redhatdisplay 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                        Excellent
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Line className="absolute bg-teal_A400 xl:h-[100px] 2xl:h-[112px] 3xl:h-[134px] lg:h-[87px] left-[0] top-[8%] w-[5px]" />
              </Stack>
              <Row className="bg-white_A700 justify-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] lg:pr-[14px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[21px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] rounded-radius8 shadow-bs4 w-[62%]">
                <Line className="bg-blue_500_bc xl:h-[100px] 2xl:h-[112px] 3xl:h-[134px] lg:h-[87px] w-[5px]" />
                <Column className="lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mr-[6px] 2xl:mr-[7px] xl:mr-[7px] 3xl:mr-[9px] mt-[4px] w-[95%]">
                  <Text className="font-kd font-medium ml-[2px] lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-blue_500_bc w-[auto]">
                    Other Credit Items
                  </Text>
                  <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] ml-[4px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900 w-[97%]">
                    Your credit report includes information about use instances
                    of non-account items that may affect your credit score &
                    rating. The table below is a summary of non-account related
                    items on your report.
                  </Text>
                  <Line className="bg-black_900_19 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]" />
                  <Row className="font-inter items-center ml-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[93%]">
                    <Text className="font-bold mb-[1px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-blue_500_bc uppercase w-[auto]">
                      Consumer Statements
                    </Text>
                    <Text className="font-bold mb-[1px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-blue_500_bc uppercase w-[auto]">
                      Personal Information
                    </Text>
                    <Text className="font-bold lg:ml-[20px] xl:ml-[23px] 2xl:ml-[25px] 3xl:ml-[31px] mt-[1px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-blue_500_bc uppercase w-[auto]">
                      Inquiries
                    </Text>
                    <Text className="font-bold mb-[1px] lg:ml-[42px] xl:ml-[49px] 2xl:ml-[55px] 3xl:ml-[66px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-blue_500_bc uppercase w-[auto]">
                      Public Records
                    </Text>
                    <Text className="font-bold mb-[1px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-blue_500_bc uppercase w-[auto]">
                      Collections
                    </Text>
                  </Row>
                  <Row className="font-redhatdisplay ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] w-[99%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      <span className="text-black_900 font-redhatdisplay font-bold">
                        5
                      </span>
                      <span className="text-black_900 font-redhatdisplay">
                        {" "}
                        Statements Found
                      </span>
                    </Text>
                    <Text className="font-normal lg:ml-[35px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      <span className="text-black_900 font-redhatdisplay font-bold">
                        3
                      </span>
                      <span className="text-black_900 font-redhatdisplay">
                        {" "}
                        Items Found
                      </span>
                    </Text>
                    <Text className="font-normal 3xl:ml-[101px] lg:ml-[65px] xl:ml-[75px] 2xl:ml-[84px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      <span className="text-black_900 font-redhatdisplay font-bold">
                        1
                      </span>
                      <span className="text-black_900 font-redhatdisplay">
                        {" "}
                        Inquiry Found
                      </span>
                    </Text>
                    <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      <span className="text-black_900 font-redhatdisplay font-bold">
                        3
                      </span>
                      <span className="text-black_900 font-redhatdisplay">
                        {" "}
                        Records Found
                      </span>
                    </Text>
                    <Text className="font-normal lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      <span className="text-black_900 font-redhatdisplay font-bold">
                        7
                      </span>
                      <span className="text-black_900 font-redhatdisplay">
                        {" "}
                        Collections Found
                      </span>
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Row>
            <Row className="bg-white_A700 justify-end mb-[1px] ml-[auto] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] lg:pr-[14px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[21px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] rounded-radius8 shadow-bs4 w-[87%]">
              <Line className="bg-deep_orange_300 xl:h-[100px] 2xl:h-[112px] 3xl:h-[134px] lg:h-[87px] w-[5px]" />
              <Column className="xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mt-[4px] w-[97%]">
                <Text className="font-kd font-medium ml-[1px] lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-deep_orange_300 w-[auto]">
                  Credit Accounts
                </Text>
                <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] ml-[2px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900 w-[99%]">
                  Your credit report includes information about activity on your
                  credit accounts that affects your credit score & rating. The
                  table below is an overview of your credit axxount & status
                </Text>
                <Line className="bg-black_900_19 h-[1px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
                <Row className="font-inter items-center justify-between lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[92%]">
                  <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-deep_orange_300 uppercase w-[auto]">
                    Account Type
                  </Text>
                  <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-deep_orange_300 uppercase w-[auto]">
                    Open
                  </Text>
                  <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-deep_orange_300 uppercase w-[auto]">
                    With Balance
                  </Text>
                  <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-deep_orange_300 uppercase w-[auto]">
                    intel Balance
                  </Text>
                  <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-deep_orange_300 uppercase w-[auto]">
                    Available
                  </Text>
                  <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-deep_orange_300 uppercase w-[auto]">
                    Check Limit
                  </Text>
                  <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-deep_orange_300 uppercase w-[auto]">
                    Debt-to-credit
                  </Text>
                  <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-deep_orange_300 uppercase w-[auto]">
                    Payment
                  </Text>
                </Row>
                <Stack className="font-redhatdisplay lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[93%]">
                  <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[97%]">
                    <Text className="font-normal mb-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      Installment
                    </Text>
                    <Text className="font-normal 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[88px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      5
                    </Text>
                    <Text className="font-normal xl:ml-[106px] 2xl:ml-[119px] 3xl:ml-[143px] lg:ml-[92px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      1
                    </Text>
                    <Text className="font-normal lg:ml-[104px] xl:ml-[119px] 2xl:ml-[133px] 3xl:ml-[160px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      $14,187
                    </Text>
                    <Text className="font-normal 3xl:ml-[113px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[94px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      $21,413
                    </Text>
                    <Text className="font-normal lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      $35,600
                    </Text>
                    <Text className="font-normal xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] lg:ml-[87px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      40%
                    </Text>
                    <Text className="font-normal xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] lg:ml-[87px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      $277
                    </Text>
                  </Row>
                  <div className="absolute bg-gray_400_1e lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[100%]"></div>
                </Stack>
                <Row className="font-redhatdisplay items-center lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[90%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    Installment
                  </Text>
                  <Text className="font-normal 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[88px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    5
                  </Text>
                  <Text className="font-normal xl:ml-[106px] 2xl:ml-[119px] 3xl:ml-[143px] lg:ml-[92px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    1
                  </Text>
                  <Text className="font-normal lg:ml-[104px] xl:ml-[119px] 2xl:ml-[133px] 3xl:ml-[160px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    $14,187
                  </Text>
                  <Text className="font-normal 3xl:ml-[113px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[94px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    $21,413
                  </Text>
                  <Text className="font-normal lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    $35,600
                  </Text>
                  <Text className="font-normal xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] lg:ml-[87px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    40%
                  </Text>
                  <Text className="font-normal xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] lg:ml-[87px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    $277
                  </Text>
                </Row>
                <Stack className="font-redhatdisplay lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[93%]">
                  <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[97%]">
                    <Text className="font-normal mb-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      Installment
                    </Text>
                    <Text className="font-normal 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[88px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      5
                    </Text>
                    <Text className="font-normal xl:ml-[106px] 2xl:ml-[119px] 3xl:ml-[143px] lg:ml-[92px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      1
                    </Text>
                    <Text className="font-normal lg:ml-[104px] xl:ml-[119px] 2xl:ml-[133px] 3xl:ml-[160px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      $14,187
                    </Text>
                    <Text className="font-normal 3xl:ml-[113px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[94px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      $21,413
                    </Text>
                    <Text className="font-normal lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      $35,600
                    </Text>
                    <Text className="font-normal xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] lg:ml-[87px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      40%
                    </Text>
                    <Text className="font-normal xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] lg:ml-[87px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      $277
                    </Text>
                  </Row>
                  <div className="absolute bg-gray_400_1e lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[100%]"></div>
                </Stack>
                <Row className="font-redhatdisplay items-center lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[90%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    Installment
                  </Text>
                  <Text className="font-normal 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[88px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    5
                  </Text>
                  <Text className="font-normal xl:ml-[106px] 2xl:ml-[119px] 3xl:ml-[143px] lg:ml-[92px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    1
                  </Text>
                  <Text className="font-normal lg:ml-[104px] xl:ml-[119px] 2xl:ml-[133px] 3xl:ml-[160px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    $14,187
                  </Text>
                  <Text className="font-normal 3xl:ml-[113px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[94px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    $21,413
                  </Text>
                  <Text className="font-normal lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    $35,600
                  </Text>
                  <Text className="font-normal xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] lg:ml-[87px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    40%
                  </Text>
                  <Text className="font-normal xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] lg:ml-[87px] my-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                    $277
                  </Text>
                </Row>
                <Stack className="font-redhatdisplay lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[93%]">
                  <Row className="absolute bottom-[8%] items-center justify-between w-[100%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      Installment
                    </Text>
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      5
                    </Text>
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      1
                    </Text>
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      $14,187
                    </Text>
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      $21,413
                    </Text>
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      $35,600
                    </Text>
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      40%
                    </Text>
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      $277
                    </Text>
                  </Row>
                  <div className="absolute bg-gray_400_1e lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[100%]"></div>
                </Stack>
              </Column>
            </Row>
          </Column>
          <Stack className="absolute lg:h-[452px] xl:h-[517px] 2xl:h-[581px] 3xl:h-[698px] left-[0] top-[4%] w-[7%]">
            <Column className="absolute bg-white_A700 items-center left-[0] 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-bl-[0] rounded-br-[20px] rounded-tl-[0] rounded-tr-[20px] w-[61%]">
              <Img
                src="images/img_group5.png"
                className="common-pointer lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                onClick={handleNavigate7}
                alt="OneHundredSixtyTwo"
              />
              <Img
                src="images/img_idrestoration.png"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[150px] xl:mt-[172px] 2xl:mt-[193px] 3xl:mt-[232px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
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
                onClick={handleNavigate6}
                alt="SixHundredTwentyTwo"
              />
            </Column>
            <Switch
              onColor=""
              offColor=""
              onHandleColor=""
              offHandleColor=""
              value={false}
              className="absolute inset-x-[0] mx-[auto] top-[24%] w-[98%]"
            />
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default ReportsExperianPage;
