import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Line,
  Input,
  List,
  Button,
  Switch,
} from "components";

const IdentityPage = () => {
  const navigate = useNavigate();

  function handleNavigate12() {
    navigate("/creditcards");
  }

  return (
    <>
      <Column className="bg-white_A700 font-kd items-center justify-end mx-[auto] w-[100%]">
        <Stack className="lg:h-[133px] xl:h-[152px] 2xl:h-[170px] 3xl:h-[204px] w-[100%]">
          <Column className="absolute bg-white_A700 bottom-[1%] font-kd items-center 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
            <Row className="items-center justify-between w-[94%]">
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
            <Text className="font-normal mb-[4px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] not-italic lg:text-[30px] xl:text-[35px] 2xl:text-[39px] 3xl:text-[47px] text-black_900 w-[auto]">
              Identity
            </Text>
          </Column>
          <Text className="absolute bottom-[0] font-inter font-light inset-x-[0] mx-[auto] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_700_c4 w-[max-content]">
            Monitoring info from your Watchlist to protect you from identity
            thieft
          </Text>
        </Stack>
        <Stack className="3xl:h-[1043px] lg:h-[676px] xl:h-[773px] 2xl:h-[870px] lg:mt-[6px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
          <Column className="absolute bg-bluegray_50 left-[0] lg:p-[15px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Column className="bg-white_A700 justify-end lg:ml-[100px] xl:ml-[115px] 2xl:ml-[129px] 3xl:ml-[155px] lg:pr-[12px] xl:pr-[14px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[12px] xl:py-[14px] 2xl:py-[15px] 3xl:py-[18px] rounded-radius8 shadow-bs4 w-[87%]">
              <Row className="font-kd justify-between lg:mr-[18px] xl:mr-[21px] 2xl:mr-[23px] 3xl:mr-[28px] mt-[1px] w-[98%]">
                <Line className="bg-bluegray_900_e0 lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] mb-[2px] w-[5px]" />
                <Column className="mt-[4px] w-[98%]">
                  <Text className="font-medium ml-[4px] lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-bluegray_900_e0 w-[auto]">
                    Watchlist
                  </Text>
                  <Line className="bg-black_900_19 h-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                </Column>
              </Row>
              <Text className="font-inter font-normal lg:ml-[25px] xl:ml-[29px] 2xl:ml-[32px] 3xl:ml-[39px] lg:mr-[381px] xl:mr-[436px] 2xl:mr-[490px] 3xl:mr-[588px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900 w-[auto]">
                We monitor this information to keep your identity safe. Please
                keep it updated for the best protection.
              </Text>
            </Column>
            <Row className="justify-end lg:mb-[118px] xl:mb-[135px] 2xl:mb-[151px] 3xl:mb-[182px] ml-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[87%]">
              <Stack className="lg:h-[431px] xl:h-[493px] 2xl:h-[554px] 3xl:h-[665px] w-[47%]">
                <Column className="absolute bg-white_A700 justify-end left-[0] lg:p-[10px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] rounded-radius8 shadow-bs6 w-[100%]">
                  <Input
                    className="font-semibold p-[0] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-blue_500 text-blue_500 uppercase w-[100%]"
                    wrapClassName="2xl:ml-[14px] 2xl:mt-[12px] 3xl:ml-[17px] 3xl:mt-[14px] lg:ml-[11px] lg:mt-[9px] w-[94%] xl:ml-[13px] xl:mt-[11px]"
                    name="GroupNinetyFive"
                    placeholder="General"
                  ></Input>
                  <List
                    className="font-inter gap-[0] min-h-[auto] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[63%]"
                    orientation="vertical"
                  >
                    <Row className="xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] pr-[1px] py-[1px] w-[100%]">
                      <Img
                        src="images/img_untitleddesign_40X40.png"
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] mt-[2px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="Untitleddesign One"
                      />
                      <Column className="mb-[4px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] w-[53%]">
                        <Text className="font-normal not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-blue_500 w-[auto]">
                          Vashon Gonzales
                        </Text>
                        <Text className="font-normal ml-[2px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600_96 uppercase w-[auto]">
                          Legal name
                        </Text>
                      </Column>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-black_900_19" />
                    <Row className="xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] pr-[1px] py-[1px] w-[100%]">
                      <Img
                        src="images/img_ssnicon1.png"
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] mt-[2px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="SSNICONOne"
                      />
                      <Column className="mb-[4px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] w-[63%]">
                        <Text className="font-normal not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-blue_500 w-[auto]">
                          *** ** 0000
                        </Text>
                        <Text className="font-normal ml-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600_96 uppercase w-[auto]">
                          sOCIAL SECURITY NUMBER
                        </Text>
                      </Column>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-black_900_19" />
                    <Row className="xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] pr-[2px] py-[2px] w-[100%]">
                      <Img
                        src="images/img_untitleddesign_1.png"
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] mt-[1px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="Untitleddesign Two"
                      />
                      <Column className="items-center mb-[2px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] w-[35%]">
                        <Text className="font-normal not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-blue_500 w-[auto]">
                          Jan 1, 2000
                        </Text>
                        <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600_96 uppercase w-[auto]">
                          Date of birth
                        </Text>
                      </Column>
                    </Row>
                  </List>
                  <List
                    className="font-inter gap-[0] min-h-[auto] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[63%]"
                    orientation="vertical"
                  >
                    <Row className="xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] lg:pb-[4px] 2xl:pb-[5px] xl:pb-[5px] 3xl:pb-[6px] lg:pr-[4px] 2xl:pr-[5px] xl:pr-[5px] 3xl:pr-[6px] w-[100%]">
                      <Img
                        src="images/img_untitleddesign_2.png"
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] mt-[3px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="Untitleddesign Three"
                      />
                      <Column className="lg:ml-[13px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] w-[57%]">
                        <Text className="font-normal not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-blue_500 w-[auto]">
                          Vashon@Kaped.io
                        </Text>
                        <Text className="font-normal ml-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600_96 uppercase w-[auto]">
                          Email address
                        </Text>
                      </Column>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-black_900_19" />
                    <Row className="xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] lg:pb-[4px] 2xl:pb-[5px] xl:pb-[5px] 3xl:pb-[6px] lg:pr-[4px] 2xl:pr-[5px] xl:pr-[5px] 3xl:pr-[6px] w-[100%]">
                      <Img
                        src="images/img_untitleddesign_3.png"
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] mt-[3px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        alt="Untitleddesign Four"
                      />
                      <Column className="lg:ml-[13px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] w-[51%]">
                        <Text className="font-normal not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-blue_500 w-[auto]">
                          (000) 000-0000
                        </Text>
                        <Text className="font-normal ml-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-gray_600_96 uppercase w-[auto]">
                          Phone number
                        </Text>
                      </Column>
                    </Row>
                  </List>
                  <Button
                    className="flex lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center mb-[1px] lg:ml-[390px] xl:ml-[446px] 2xl:ml-[502px] 3xl:ml-[602px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius50 lg:w-[30px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                    variant="icbOutlineBlack90019"
                  >
                    <Img
                      src="images/img_grid.svg"
                      className="flex items-center justify-center lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px]"
                      alt="grid"
                    />
                  </Button>
                </Column>
                <Line className="absolute bg-blue_500_bc lg:h-[112px] xl:h-[128px] 2xl:h-[143px] 3xl:h-[172px] left-[0] top-[5%] w-[5px]" />
              </Stack>
              <Stack className="lg:h-[298px] xl:h-[341px] 2xl:h-[383px] 3xl:h-[460px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] mt-[1px] w-[50%]">
                <Stack className="absolute lg:h-[298px] xl:h-[341px] 2xl:h-[383px] 3xl:h-[460px] left-[0] w-[100%]">
                  <Line className="absolute bg-black_900_19 h-[1px] inset-x-[0] mx-[auto] top-[47%] w-[83%]" />
                  <Column className="absolute bg-white_A700 items-center justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius8 shadow-bs4 w-[100%]">
                    <Input
                      className="font-semibold p-[0] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-teal_A400 text-teal_A400 uppercase w-[100%]"
                      wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[94%] xl:mt-[9px]"
                      name="price"
                      placeholder="ID RESTORATION & CASE SUPPORT"
                    ></Input>
                    <Column className="font-inter mb-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[96%]">
                      <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900_af w-[auto]">
                        No Active Cases
                      </Text>
                      <Text className="font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[28px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[92%]">
                        <span className="text-black_900 font-inter">
                          Your TRAK membership includes our ID Restoration
                          Service where a dedicated agent will help members
                          resolve any identity fraud incidents. At this time,
                          this member does not have any active cases for
                          identity theft incidents.
                          <br />
                          <br />
                        </span>
                        <span className="text-black_900 font-inter font-bold">
                          If you believe you have been a victim of an identity
                          theft
                        </span>
                        <span className="text-black_900 font-inter">
                          , please contact our Member Services and Support at
                          1-800-000-0000.
                        </span>
                      </Text>
                      <Button
                        className="flex lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center lg:ml-[404px] xl:ml-[462px] 2xl:ml-[520px] 3xl:ml-[624px] lg:mt-[28px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] rounded-radius50 lg:w-[30px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                        variant="icbOutlineBlack900191_2"
                      >
                        <Img
                          src="images/img_grid.svg"
                          className="flex items-center justify-center lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px]"
                          alt="grid One"
                        />
                      </Button>
                    </Column>
                  </Column>
                </Stack>
                <Line className="absolute bg-teal_A400 lg:h-[112px] xl:h-[128px] 2xl:h-[143px] 3xl:h-[172px] left-[0] top-[7%] w-[5px]" />
              </Stack>
            </Row>
          </Column>
          <Stack className="absolute lg:h-[452px] xl:h-[517px] 2xl:h-[581px] 3xl:h-[698px] left-[0] top-[2%] w-[7%]">
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
                src="images/img_594.png"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[150px] xl:mt-[172px] 2xl:mt-[193px] 3xl:mt-[232px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                alt="FiveHundredNinetyFour"
              />
              <Img
                src="images/img_622.png"
                className="common-pointer lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] lg:mt-[57px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                onClick={handleNavigate12}
                alt="SixHundredTwentyTwo"
              />
            </Column>
            <Switch
              onColor=""
              offColor=""
              onHandleColor=""
              offHandleColor=""
              value={false}
              className="absolute inset-y-[45%] w-[100%]"
            />
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default IdentityPage;
