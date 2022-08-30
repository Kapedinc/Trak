import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Line, Stack, List, Switch } from "components";

const CapitalPage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/creditcards");
  }
  function handleNavigate13() {
    navigate("/businesscapital");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]">
        <Column className="bg-white_A700 justify-end p-[3px] w-[100%]">
          <Row className="font-kd items-center justify-between lg:ml-[27px] xl:ml-[31px] 2xl:ml-[34px] 3xl:ml-[41px] lg:mr-[43px] xl:mr-[50px] 2xl:mr-[56px] 3xl:mr-[67px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[93%]">
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
          <Line className="bg-gradient3  h-[3px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mx-[auto] shadow-bs3 w-[96%]" />
          <Text className="font-kd font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] mx-[auto] not-italic lg:text-[30px] xl:text-[35px] 2xl:text-[39px] 3xl:text-[47px] text-black_900 w-[auto]">
            Capital
          </Text>
          <Text className="font-inter font-light lg:ml-[316px] xl:ml-[362px] 2xl:ml-[407px] 3xl:ml-[488px] lg:mr-[252px] xl:mr-[289px] 2xl:mr-[325px] 3xl:mr-[390px] mt-[4px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_700_c4 w-[auto]">
            Get matched with business lenders based on your business credit
            without any damaging inquiries to your personal credit.
          </Text>
        </Column>
        <Stack className="lg:h-[1244px] xl:h-[1423px] 2xl:h-[1600px] 3xl:h-[1920px] w-[100%]">
          <Column className="absolute bg-bluegray_50 left-[0] lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[100%]">
            <Stack className="lg:h-[123px] xl:h-[141px] 2xl:h-[158px] 3xl:h-[190px] xl:ml-[109px] 2xl:ml-[122px] 3xl:ml-[147px] lg:ml-[95px] w-[88%]">
              <div className="absolute bg-gray_600 lg:h-[43px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] rounded-radius8 top-[0] w-[100%]"></div>
              <Column className="absolute bg-white_A700 justify-end xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius8 shadow-bs4 top-[3%] w-[100%]">
                <Text className="font-kd font-normal lg:ml-[13px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] mt-[4px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900_e0 w-[auto]">
                  A Capital Comparison
                </Text>
                <Line className="bg-black_900_19 h-[1px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
                <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900 w-[90%]">
                  The table below provides a comparison of different business
                  loans available to you. Use it to help you quickly determine
                  whether a specific option is suitable for your situation. The
                  minimum credit score and appromiate APR refelect industry
                  averages, but it can differ between institutions. Use these
                  values as a guide only- confirm the actual values with the
                  lenders you apply to.
                </Text>
                <Row
                  className="common-pointer font-kd justify-end 2xl:ml-[1000px] 3xl:ml-[1200px] lg:ml-[777px] xl:ml-[889px] mt-[4px] w-[15%]"
                  onClick={handleNavigate13}
                >
                  <Text className="font-light lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-blue_500_bc w-[auto]">
                    Learn more about capital
                  </Text>
                  <Img
                    src="images/img_arrow4.svg"
                    className="lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] xl:h-[2px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[4px] w-[1px]"
                    alt="ArrowFour"
                  />
                </Row>
              </Column>
            </Stack>
            <List
              className="gap-[0] min-h-[auto] xl:ml-[106px] 2xl:ml-[119px] 3xl:ml-[143px] lg:ml-[92px] lg:mt-[50px] xl:mt-[58px] 2xl:mt-[65px] 3xl:mt-[78px] w-[88%]"
              orientation="vertical"
            >
              <Row className="items-center justify-between 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:my-[33px] xl:my-[38px] 2xl:my-[42px] 3xl:my-[51px] w-[99%]">
                <Img
                  src="images/img_biz2creditlogo.svg"
                  className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] w-[21%]"
                  alt="Biz2creditlogo"
                />
                <Stack className="lg:h-[205px] xl:h-[235px] 2xl:h-[264px] 3xl:h-[317px] w-[76%]">
                  <div className="absolute bg-light_green_500 lg:h-[48px] xl:h-[55px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius8 top-[0] w-[100%]"></div>
                  <Column className="absolute bg-white_A700 justify-end lg:p-[17px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius8 shadow-bs6 top-[2%] w-[100%]">
                    <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_900 w-[auto]">
                      biz2credit
                    </Text>
                    <Text className="font-normal lg:leading-[13px] xl:leading-[15px] 2xl:leading-[16px] 3xl:leading-[20px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900 w-[89%]">
                      Biz2Credit was founded in 2007 with one goal: make
                      business finance work better. We’re backed by Nexus
                      Venture Partners and our 225,000 small business
                      customers.  Since we started, Biz2Credit has been the best
                      place for small businesses to get funding online.
                      <br />
                      <br />
                      We’ve provided over $7 billion in small business loans and
                      fiinancing for thousands of companies across the U.S.
                    </Text>
                    <Text className="bg-gradient4  font-normal lg:ml-[549px] xl:ml-[628px] 2xl:ml-[706px] 3xl:ml-[848px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] pb-[1px] lg:pt-[5px] 2xl:pt-[6px] xl:pt-[6px] 3xl:pt-[8px] lg:px-[25px] xl:px-[29px] 2xl:px-[32px] 3xl:px-[39px] rounded-radius8 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-shadow-ts text-white_A700 w-[auto]">
                      Apply Now!
                    </Text>
                  </Column>
                </Stack>
              </Row>
              <Line className="self-center w-[98%] h-[1.5px] bg-white_A700" />
              <Row className="items-center justify-between lg:my-[33px] xl:my-[38px] 2xl:my-[42px] 3xl:my-[51px] w-[100%]">
                <Img
                  src="images/img_seclogopurple.png"
                  className="lg:h-[38px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] w-[22%]"
                  alt="seclogopurple"
                />
                <Stack className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] w-[75%]">
                  <div className="absolute bg-gray_800 lg:h-[48px] xl:h-[55px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius8 top-[0] w-[100%]"></div>
                  <Column className="absolute bg-white_A700 justify-end xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius8 shadow-bs6 top-[2%] w-[100%]">
                    <Text className="font-bold lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-gray_800 w-[auto]">
                      <span className="text-gray_800 font-inter">
                        SOUTH END{" "}
                      </span>
                      <span className="text-gray_800 font-inter font-normal not-italic">
                        CAPITAL
                      </span>
                    </Text>
                    <Text className="font-normal lg:leading-[13px] xl:leading-[15px] 2xl:leading-[16px] 3xl:leading-[20px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900 w-[90%]">
                      BANKABLE TERMS FOR UN-BANKABLE BORROWERS
                      <br />
                      <br />
                      Founded in 2009 as a nationwide, non-conforming commercial
                      lender, South End Capital became a division of Stearns
                      Bank, N.A., a $2.2 billion financial institution, in June
                      of 2021.
                      <br />
                      We offer mortgages secured by commercial and investment
                      residential real estate, collateralized and
                      uncollateralized business loans, and equipment financing.
                      Our technology-enabled platform delivers a streamlined
                      loan process, and we are committed to providing excellent
                      service and innovative, affordable financing.{" "}
                    </Text>
                    <Text className="bg-gradient5  font-normal lg:ml-[558px] xl:ml-[638px] 2xl:ml-[718px] 3xl:ml-[861px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] lg:px-[25px] xl:px-[29px] 2xl:px-[32px] 3xl:px-[39px] py-[2px] rounded-radius8 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-shadow-ts text-white_A700 w-[auto]">
                      Apply Now!
                    </Text>
                  </Column>
                </Stack>
              </Row>
            </List>
            <Stack className="lg:h-[468px] xl:h-[535px] 2xl:h-[602px] 3xl:h-[722px] lg:mb-[28px] xl:mb-[32px] 2xl:mb-[36px] 3xl:mb-[43px] xl:ml-[106px] 2xl:ml-[119px] 3xl:ml-[143px] lg:ml-[92px] lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] 3xl:mt-[99px] w-[88%]">
              <Line className="absolute bg-white_A700 bottom-[48%] h-[1.5px] inset-x-[0] mx-[auto] w-[98%]" />
              <List
                className="absolute gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:my-[33px] xl:my-[38px] 2xl:my-[42px] 3xl:my-[51px] w-[99%]">
                  <Img
                    src="images/img_biz2creditlogo_40X224.svg"
                    className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] w-[21%]"
                    alt="Biz2creditlogo One"
                  />
                  <Stack className="lg:h-[205px] xl:h-[235px] 2xl:h-[264px] 3xl:h-[317px] w-[76%]">
                    <div className="absolute bg-light_green_500 lg:h-[48px] xl:h-[55px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius8 top-[0] w-[100%]"></div>
                    <Column className="absolute bg-white_A700 justify-end lg:p-[17px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius8 shadow-bs6 top-[2%] w-[100%]">
                      <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-black_900 w-[auto]">
                        biz2credit
                      </Text>
                      <Text className="font-normal lg:leading-[13px] xl:leading-[15px] 2xl:leading-[16px] 3xl:leading-[20px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[44px] xl:mt-[51px] 2xl:mt-[57px] 3xl:mt-[68px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900 w-[92%]">
                        Biz2Credit was founded in 2007 with one goal: make
                        business finance work better. We’re backed by Nexus
                        Venture Partners and our 225,000 small business
                        customers.  Since we started, Biz2Credit has been the
                        best place for small businesses to get funding online.
                        <br />
                        <br />
                        We’ve provided over $7 billion in small business loans
                        and fiinancing for thousands of companies across the
                        U.S.
                      </Text>
                      <Text className="bg-gradient4  font-normal lg:ml-[549px] xl:ml-[628px] 2xl:ml-[706px] 3xl:ml-[848px] lg:mt-[53px] xl:mt-[61px] 2xl:mt-[68px] 3xl:mt-[82px] lg:px-[25px] xl:px-[29px] 2xl:px-[32px] 3xl:px-[39px] py-[2px] rounded-radius8 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-shadow-ts text-white_A700 w-[auto]">
                        Apply Now!
                      </Text>
                    </Column>
                  </Stack>
                </Row>
                <Row className="items-center justify-between lg:my-[33px] xl:my-[38px] 2xl:my-[42px] 3xl:my-[51px] w-[100%]">
                  <Img
                    src="images/img_seclogopurple.png"
                    className="lg:h-[38px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] w-[22%]"
                    alt="seclogopurple One"
                  />
                  <Stack className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] w-[75%]">
                    <div className="absolute bg-gray_800 lg:h-[48px] xl:h-[55px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius8 top-[0] w-[100%]"></div>
                    <Column className="absolute bg-white_A700 justify-end xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius8 shadow-bs6 top-[2%] w-[100%]">
                      <Text className="font-bold lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-gray_800 w-[auto]">
                        <span className="text-gray_800 font-inter">
                          SOUTH END{" "}
                        </span>
                        <span className="text-gray_800 font-inter font-normal not-italic">
                          CAPITAL
                        </span>
                      </Text>
                      <Text className="font-normal lg:leading-[13px] xl:leading-[15px] 2xl:leading-[16px] 3xl:leading-[20px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[53px] xl:mt-[61px] 2xl:mt-[68px] 3xl:mt-[82px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900 w-[90%]">
                        BANKABLE TERMS FOR UN-BANKABLE BORROWERS
                        <br />
                        <br />
                        Founded in 2009 as a nationwide, non-conforming
                        commercial lender, South End Capital became a division
                        of Stearns Bank, N.A., a $2.2 billion financial
                        institution, in June of 2021.
                        <br />
                        We offer mortgages secured by commercial and investment
                        residential real estate, collateralized and
                        uncollateralized business loans, and equipment
                        financing. Our technology-enabled platform delivers a
                        streamlined loan process, and we are committed to
                        providing excellent service and innovative, affordable
                        financing.{" "}
                      </Text>
                      <Text className="bg-gradient5  font-normal lg:ml-[558px] xl:ml-[638px] 2xl:ml-[718px] 3xl:ml-[861px] lg:mt-[44px] xl:mt-[51px] 2xl:mt-[57px] 3xl:mt-[68px] lg:px-[25px] xl:px-[29px] 2xl:px-[32px] 3xl:px-[39px] py-[2px] rounded-radius8 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-shadow-ts text-white_A700 w-[auto]">
                        Apply Now!
                      </Text>
                    </Column>
                  </Stack>
                </Row>
              </List>
            </Stack>
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
                src="images/img_622.png"
                className="common-pointer lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] lg:mt-[150px] xl:mt-[172px] 2xl:mt-[193px] 3xl:mt-[232px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                onClick={handleNavigate5}
                alt="SixHundredTwentyTwo"
              />
            </Column>
            <Switch
              onColor=""
              offColor=""
              onHandleColor=""
              offHandleColor=""
              value={false}
              className="absolute bottom-[25%] w-[100%]"
            />
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default CapitalPage;
