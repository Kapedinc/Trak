import React from "react";

import { Column, Text, List, Stack, Row, Line } from "components";

const CcmarketplacePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-hahmlet mx-[auto] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
        <Text className="font-normal lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] xl:mr-[1142px] 2xl:mr-[1285px] 3xl:mr-[1542px] lg:mr-[998px] not-italic lg:text-[4px] 2xl:text-[5px] xl:text-[5px] 3xl:text-[7px] text-black_900 w-[auto]">
          Credit Card Marketplace Components
        </Text>
        <Column className="lg:mb-[135px] xl:mb-[154px] 2xl:mb-[173px] 3xl:mb-[208px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[6%]">
          <Text className="font-extrabold lg:text-[2px] 2xl:text-[3px] xl:text-[3px] 3xl:text-[4px] text-deep_purple_A200 w-[auto]">
            Extra Credit Card Information bl
          </Text>
          <List
            className="font-inter gap-[0] min-h-[auto] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] w-[100%]"
            orientation="vertical"
          >
            <Column className="border border-deep_purple_A200 border-solid justify-end 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] p-[1px] rounded-radius5 w-[100%]">
              <Stack className="xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] 2xl:ml-[2px] xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] mt-[1px] w-[72%]">
                <Column className="absolute bg-blue_500_33 items-center justify-end left-[0] p-[1px] rounded-bl-[2.5px] rounded-br-[0] rounded-tl-[2.5px] rounded-tr-[0] w-[33%]">
                  <Text className="font-medium mt-[1px] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-blue_500 w-[auto]">
                    Rates & Fees
                  </Text>
                </Column>
                <Row className="absolute h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[5%] w-[51%]">
                  <Text className="font-normal mb-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Benefits
                  </Text>
                  <Text className="font-normal mt-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Traks Valuation
                  </Text>
                </Row>
                <Row className="absolute border border-blue_500 border-solid items-center justify-end lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] rounded-radius25 w-[100%]">
                  <Line className="bg-blue_500_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] w-[1px]" />
                  <Line className="bg-blue_500_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[1px]" />
                </Row>
              </Stack>
              <Stack className="bg-white_A700 border-blue_500_bc border-bw08 border-solid lg:h-[27px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] 2xl:ml-[2px] xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] px-[2px] rounded-radius5 w-[72%]">
                <Text className="absolute font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 top-[4%] w-[auto]">
                  Intro APR
                </Text>
                <Stack className="absolute lg:h-[26px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] inset-[0] justify-center m-[auto] w-[97%]">
                  <Line className="absolute bg-gray_700_c4 lg:h-[26px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] left-[41%] w-[1px]" />
                  <Column className="absolute font-kd top-[4%] w-[100%]">
                    <Text className="font-light lg:ml-[18px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                      N/A
                    </Text>
                    <Line className="bg-gray_700_c4 h-[0.5px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] w-[100%]" />
                  </Column>
                  <Text className="absolute font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 top-[38%] w-[auto]">
                    Annual Fee
                  </Text>
                  <Line className="absolute bg-gray_700_c4 bottom-[51%] h-[0.5px] top-[49%] w-[100%]" />
                  <Text className="absolute font-kd font-light left-[44%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 top-[38%] w-[auto]">
                    $551
                  </Text>
                  <Text className="absolute bottom-[22%] font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    Rewards Rate
                  </Text>
                  <Line className="absolute bg-gray_700_c4 bottom-[17%] h-[0.5px] w-[100%]" />
                  <Text className="absolute bottom-[21%] font-kd font-light right-[18%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    3% on all ad spend, no caps
                  </Text>
                  <Text className="absolute font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 top-[21%] w-[auto]">
                    Purchase APR
                  </Text>
                  <Line className="absolute bg-gray_700_c4 h-[0.5px] top-[31%] w-[100%]" />
                  <Text className="absolute font-kd font-light leading-[normal] right-[2%] text-[1px] text-black_900 top-[20%] w-[54%]">
                    All charges made on this card are due and payable when you
                    recieve your periodic statement.
                  </Text>
                  <Text className="absolute bottom-[38%] font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    Foreign Transaction Fee
                  </Text>
                  <Line className="absolute bg-gray_700_c4 bottom-[34%] h-[0.5px] w-[100%]" />
                  <Text className="absolute bottom-[39%] font-kd font-light left-[44%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    N/A
                  </Text>
                  <Text className="absolute bottom-[5%] font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    Welcome Offer
                  </Text>
                  <Text className="absolute bottom-[5%] font-kd font-light left-[44%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    N/A
                  </Text>
                </Stack>
              </Stack>
              <Stack className="xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] 2xl:ml-[2px] xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[72%]">
                <Column className="absolute bg-blue_500_33 inset-x-[33%] items-center justify-end p-[1px] w-[33%]">
                  <Text className="font-medium mt-[1px] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-blue_500 w-[auto]">
                    Benefits
                  </Text>
                </Column>
                <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[5%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                  Traks Valuation
                </Text>
                <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[7%] my-[auto] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                  Rates & Fees
                </Text>
                <Row className="absolute border border-blue_500 border-solid items-center justify-end lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] rounded-radius25 w-[100%]">
                  <Line className="bg-blue_500_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] w-[1px]" />
                  <Line className="bg-blue_500_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[1px]" />
                </Row>
              </Stack>
              <Column className="bg-white_A700 border-blue_500_bc border-bw08 border-solid 2xl:ml-[2px] xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] lg:p-[1px] 3xl:p-[2px] 2xl:p-[2px] xl:p-[2px] rounded-radius5 w-[72%]">
                <Text className="font-normal leading-[normal] xl:my-[2px] lg:my-[2px] 2xl:my-[3px] 3xl:my-[4px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[59%]">
                  3% CashBack Rewards
                  <br />
                  <br />
                  Diamond Embedded Metal Card
                </Text>
              </Column>
              <Stack className="xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] 2xl:ml-[2px] xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[72%]">
                <Column className="absolute bg-blue_500_33 items-center justify-end p-[1px] right-[0] rounded-bl-[0] rounded-br-[2.5px] rounded-tl-[0] rounded-tr-[2.5px] w-[33%]">
                  <Text className="font-medium mt-[1px] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-blue_500 w-[auto]">
                    Traks Valuation
                  </Text>
                </Column>
                <Row className="absolute h-[max-content] inset-y-[0] items-center justify-between left-[7%] my-[auto] w-[49%]">
                  <Text className="font-normal mt-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Rates & Fees
                  </Text>
                  <Text className="font-normal mb-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Benefits
                  </Text>
                </Row>
                <Row className="absolute border-blue_500_bc border-bw05 border-solid items-center justify-end lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] rounded-radius25 w-[100%]">
                  <Line className="bg-blue_500_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] w-[1px]" />
                  <Line className="bg-blue_500_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[1px]" />
                </Row>
              </Stack>
              <Column className="bg-white_A700 border-blue_500_bc border-bw08 border-solid items-center 2xl:ml-[2px] xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] p-[4px] rounded-radius5 w-[72%]">
                <Text className="font-normal leading-[normal] my-[1px] not-italic text-[1px] text-black_900 w-[100%]">
                  The AdCard may be an interesting concept that provides
                  cardholders with 3% cashback rewards on their ad spend and
                  rewarding its most devout user base with a physical card
                  embedded with diamonds but falls behind on nearly everything
                  else. This card is defintely designed for a targeting group of
                  enterprise businesses with it’s insanely high proce tag and
                  non startup friendly milestone bonuses. AdCard’s most
                  troubling feeature is its lack of customer support and sales
                  team, you will soon forget you applied for this card just
                  minutes after applying as all emails go straight to your spam
                  folder.
                </Text>
              </Column>
              <Stack className="xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] 2xl:ml-[2px] xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:mt-[2px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] w-[72%]">
                <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[88%]">
                  <Text className="font-normal mt-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Rates & Fees
                  </Text>
                  <Text className="font-normal mb-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Benefits
                  </Text>
                  <Text className="font-normal my-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Traks Valuation
                  </Text>
                </Row>
                <Row className="absolute border-blue_500_bc border-bw05 border-solid items-center justify-end lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] rounded-radius25 w-[100%]">
                  <Line className="bg-blue_500_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] w-[1px]" />
                  <Line className="bg-blue_500_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[1px]" />
                </Row>
              </Stack>
            </Column>
            <Column className="border border-deep_purple_A200 border-solid 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius5 w-[100%]">
              <Stack className="xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] w-[74%]">
                <Column className="absolute bg-black_900 items-center justify-end left-[0] p-[1px] rounded-bl-[2.5px] rounded-br-[0] rounded-tl-[2.5px] rounded-tr-[0] w-[33%]">
                  <Text className="font-medium mt-[1px] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-white_A700 w-[auto]">
                    Rates & Fees
                  </Text>
                </Column>
                <Row className="absolute h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[5%] w-[51%]">
                  <Text className="font-normal mb-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Benefits
                  </Text>
                  <Text className="font-normal mt-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Traks Valuation
                  </Text>
                </Row>
                <Row className="absolute border border-lime_600 border-solid items-center justify-end lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] rounded-radius25 w-[100%]">
                  <Line className="bg-lime_600_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] w-[1px]" />
                  <Line className="bg-lime_600_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[1px]" />
                </Row>
              </Stack>
              <Stack className="bg-white_A700 border-bw08 border-lime_600 border-solid lg:h-[27px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] px-[2px] rounded-radius5 w-[74%]">
                <Text className="absolute font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 top-[4%] w-[auto]">
                  Intro APR
                </Text>
                <Stack className="absolute lg:h-[26px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] inset-[0] justify-center m-[auto] w-[97%]">
                  <Line className="absolute bg-gray_601 lg:h-[26px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] left-[41%] w-[1px]" />
                  <Column className="absolute font-kd top-[4%] w-[100%]">
                    <Text className="font-light lg:ml-[18px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                      N/A
                    </Text>
                    <Line className="bg-gray_601 h-[0.5px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] w-[100%]" />
                  </Column>
                  <Text className="absolute font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 top-[38%] w-[auto]">
                    Annual Fee
                  </Text>
                  <Line className="absolute bg-gray_601 bottom-[51%] h-[0.5px] top-[49%] w-[100%]" />
                  <Text className="absolute font-kd font-light left-[44%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 top-[38%] w-[auto]">
                    $0
                  </Text>
                  <Text className="absolute bottom-[22%] font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    Rewards Rate
                  </Text>
                  <Line className="absolute bg-gray_601 bottom-[17%] h-[0.5px] w-[100%]" />
                  <Text className="absolute bottom-[18%] font-kd font-light leading-[normal] right-[8%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[48%]">
                    Up to 7% points, based on payment settings.
                  </Text>
                  <Text className="absolute font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 top-[21%] w-[auto]">
                    Purchase APR
                  </Text>
                  <Line className="absolute bg-gray_601 h-[0.5px] top-[31%] w-[100%]" />
                  <Text className="absolute font-kd font-light leading-[normal] right-[2%] text-[1px] text-black_900 top-[20%] w-[54%]">
                    All charges made on this card are due and payable when you
                    recieve your periodic statement.
                  </Text>
                  <Text className="absolute bottom-[38%] font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    Foreign Transaction Fee
                  </Text>
                  <Line className="absolute bg-gray_601 bottom-[34%] h-[0.5px] w-[100%]" />
                  <Text className="absolute bottom-[39%] font-kd font-light right-[32%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    1% of transaction
                  </Text>
                  <Text className="absolute bottom-[5%] font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    Welcome Offer
                  </Text>
                  <Text className="absolute bottom-[5%] font-kd font-light left-[44%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    N/A
                  </Text>
                </Stack>
              </Stack>
              <Stack className="xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[74%]">
                <Column className="absolute bg-black_900 inset-x-[33%] items-center justify-end p-[1px] w-[33%]">
                  <Text className="font-medium mt-[1px] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-white_A700 w-[auto]">
                    Benefits
                  </Text>
                </Column>
                <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[5%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                  Traks Valuation
                </Text>
                <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[7%] my-[auto] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                  Rates & Fees
                </Text>
                <Row className="absolute border border-lime_600 border-solid items-center justify-end lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] rounded-radius25 w-[100%]">
                  <Line className="bg-lime_600_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] w-[1px]" />
                  <Line className="bg-lime_600_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[1px]" />
                </Row>
              </Stack>
              <Column className="bg-white_A700 border-bw08 border-lime_600 border-solid items-center 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] p-[1px] rounded-radius5 w-[74%]">
                <Text className="font-normal leading-[normal] mb-[2px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[99%]">
                  Divvy streamlines spend management by combinging corporate
                  cards with free expense management software.
                  <br />
                  The Divvy smart card offers up to 7x rewards points, plus
                  physical and virtual cards for every employee- with no fees
                  and no contracts.
                  <br />
                  Dibby gives admins complete control over employee spending
                  with enforceable budgets (that can be adjusted in seconds).
                  <br />
                  On Divvy’s mobile app or desktop platform, you’ll see every
                  transaction as it happens, bringing all your spend into one
                  place.
                  <br />
                  Divvy is truly no cost; stop spending extra for annual fees,
                  expense management software, and vendor overages.
                  <br />
                  With Divvy, you’ll eliminate expense reports, build your
                  business credit and never go over budget again.
                </Text>
              </Column>
              <Stack className="xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[74%]">
                <Column className="absolute bg-black_900 items-center justify-end p-[1px] right-[0] rounded-bl-[0] rounded-br-[2.5px] rounded-tl-[0] rounded-tr-[2.5px] w-[33%]">
                  <Text className="font-medium mt-[1px] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-white_A700 w-[auto]">
                    Traks Valuation
                  </Text>
                </Column>
                <Row className="absolute h-[max-content] inset-y-[0] items-center justify-between left-[7%] my-[auto] w-[49%]">
                  <Text className="font-normal mt-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Rates & Fees
                  </Text>
                  <Text className="font-normal mb-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Benefits
                  </Text>
                </Row>
                <Row className="absolute border-bw05 border-lime_600 border-solid items-center justify-end lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] rounded-radius25 w-[100%]">
                  <Line className="bg-lime_600_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] w-[1px]" />
                  <Line className="bg-lime_600_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[1px]" />
                </Row>
              </Stack>
              <Row className="bg-white_A700 border-bw08 border-lime_600 border-solid font-hahmlet items-center 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] 2xl:p-[1px] xl:p-[1px] lg:p-[1px] 3xl:p-[2px] rounded-radius5 w-[74%]">
                <Text className="font-bold leading-[normal] mb-[3px] lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] text-[1px] text-gray_801 w-[13%]">
                  PROS
                  <br />
                  PRO.
                  <br />
                  2PRO
                  <br />
                  PRO
                </Text>
                <Text className="font-bold leading-[normal] mb-[3px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] text-[1px] text-gray_801 w-[13%]">
                  CONS
                  <br />
                  CONS
                  <br />
                  CONS
                  <br />
                  CONS
                </Text>
              </Row>
              <Stack className="font-inter xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[74%]">
                <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[88%]">
                  <Text className="font-normal mt-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Rates & Fees
                  </Text>
                  <Text className="font-normal mb-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Benefits
                  </Text>
                  <Text className="font-normal my-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Traks Valuation
                  </Text>
                </Row>
                <Row className="absolute border-bw05 border-lime_600 border-solid items-center justify-end lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] rounded-radius25 w-[100%]">
                  <Line className="bg-lime_600_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] w-[1px]" />
                  <Line className="bg-lime_600_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[1px]" />
                </Row>
              </Stack>
            </Column>
            <Column className="border border-deep_purple_A200 border-solid 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius5 w-[100%]">
              <Stack className="xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] w-[74%]">
                <Column className="absolute bg-bluegray_900 items-center justify-end left-[0] p-[1px] rounded-bl-[2.5px] rounded-br-[0] rounded-tl-[2.5px] rounded-tr-[0] w-[33%]">
                  <Text className="font-medium mt-[1px] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-bluegray_100 w-[auto]">
                    Rates & Fees
                  </Text>
                </Column>
                <Row className="absolute h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[5%] w-[51%]">
                  <Text className="font-normal mb-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Benefits
                  </Text>
                  <Text className="font-normal mt-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Traks Valuation
                  </Text>
                </Row>
                <Row className="absolute border border-amber_A200 border-solid items-center justify-end lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] rounded-radius25 w-[100%]">
                  <Line className="bg-amber_A200_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] w-[1px]" />
                  <Line className="bg-amber_A200_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[1px]" />
                </Row>
              </Stack>
              <Stack className="bg-white_A700 border-amber_A200 border-bw08 border-solid lg:h-[27px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] px-[2px] rounded-radius5 w-[74%]">
                <Text className="absolute font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 top-[4%] w-[auto]">
                  Intro APR
                </Text>
                <Stack className="absolute lg:h-[26px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] inset-[0] justify-center m-[auto] w-[97%]">
                  <Line className="absolute bg-gray_601 lg:h-[26px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] left-[41%] w-[1px]" />
                  <Column className="absolute font-kd top-[4%] w-[100%]">
                    <Text className="font-light lg:ml-[18px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                      N/A
                    </Text>
                    <Line className="bg-gray_601 h-[0.5px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] w-[100%]" />
                  </Column>
                  <Text className="absolute font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 top-[38%] w-[auto]">
                    Annual Fee
                  </Text>
                  <Line className="absolute bg-gray_601 bottom-[51%] h-[0.5px] top-[49%] w-[100%]" />
                  <Text className="absolute font-kd font-light left-[44%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 top-[38%] w-[auto]">
                    $0
                  </Text>
                  <Text className="absolute bottom-[22%] font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    Rewards Rate
                  </Text>
                  <Line className="absolute bg-gray_601 bottom-[17%] h-[0.5px] w-[100%]" />
                  <Text className="absolute bottom-[18%] font-kd font-light leading-[normal] right-[8%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[48%]">
                    Up to 7% points, based on payment settings.
                  </Text>
                  <Text className="absolute font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 top-[21%] w-[auto]">
                    Purchase APR
                  </Text>
                  <Line className="absolute bg-gray_601 h-[0.5px] top-[31%] w-[100%]" />
                  <Text className="absolute font-kd font-light leading-[normal] right-[2%] text-[1px] text-black_900 top-[20%] w-[54%]">
                    All charges made on this card are due and payable when you
                    recieve your periodic statement.
                  </Text>
                  <Text className="absolute bottom-[38%] font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    Foreign Transaction Fee
                  </Text>
                  <Line className="absolute bg-gray_601 bottom-[34%] h-[0.5px] w-[100%]" />
                  <Text className="absolute bottom-[39%] font-kd font-light right-[32%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    1% of transaction
                  </Text>
                  <Text className="absolute bottom-[5%] font-inter font-medium left-[3%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    Welcome Offer
                  </Text>
                  <Text className="absolute bottom-[5%] font-kd font-light left-[44%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[auto]">
                    N/A
                  </Text>
                </Stack>
              </Stack>
              <Stack className="xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[74%]">
                <Column className="absolute bg-bluegray_900 inset-x-[33%] items-center justify-end p-[1px] w-[33%]">
                  <Text className="font-medium mt-[1px] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-bluegray_100 w-[auto]">
                    Benefits
                  </Text>
                </Column>
                <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[5%] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                  Traks Valuation
                </Text>
                <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[7%] my-[auto] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                  Rates & Fees
                </Text>
                <Row className="absolute border border-amber_A200 border-solid items-center justify-end lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] rounded-radius25 w-[100%]">
                  <Line className="bg-amber_A200_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] w-[1px]" />
                  <Line className="bg-amber_A200_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[1px]" />
                </Row>
              </Stack>
              <Column className="bg-white_A700 border-amber_A200 border-bw08 border-solid items-center 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] p-[1px] rounded-radius5 w-[74%]">
                <Text className="font-normal leading-[normal] mb-[2px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900 w-[99%]">
                  Divvy streamlines spend management by combinging corporate
                  cards with free expense management software.
                  <br />
                  The Divvy smart card offers up to 7x rewards points, plus
                  physical and virtual cards for every employee- with no fees
                  and no contracts.
                  <br />
                  Dibby gives admins complete control over employee spending
                  with enforceable budgets (that can be adjusted in seconds).
                  <br />
                  On Divvy’s mobile app or desktop platform, you’ll see every
                  transaction as it happens, bringing all your spend into one
                  place.
                  <br />
                  Divvy is truly no cost; stop spending extra for annual fees,
                  expense management software, and vendor overages.
                  <br />
                  With Divvy, you’ll eliminate expense reports, build your
                  business credit and never go over budget again.
                </Text>
              </Column>
              <Stack className="xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[74%]">
                <Column className="absolute bg-bluegray_900 items-center justify-end p-[1px] right-[0] rounded-bl-[0] rounded-br-[2.5px] rounded-tl-[0] rounded-tr-[2.5px] w-[33%]">
                  <Text className="font-medium mt-[1px] 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-bluegray_100 w-[auto]">
                    Traks Valuation
                  </Text>
                </Column>
                <Row className="absolute h-[max-content] inset-y-[0] items-center justify-between left-[7%] my-[auto] w-[49%]">
                  <Text className="font-normal mt-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Rates & Fees
                  </Text>
                  <Text className="font-normal mb-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Benefits
                  </Text>
                </Row>
                <Row className="absolute border-amber_A200 border-bw05 border-solid items-center justify-end lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] rounded-radius25 w-[100%]">
                  <Line className="bg-amber_A200_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] w-[1px]" />
                  <Line className="bg-amber_A200_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[1px]" />
                </Row>
              </Stack>
              <Row className="bg-white_A700 border-amber_A200 border-bw08 border-solid font-hahmlet items-center 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] 2xl:p-[1px] xl:p-[1px] lg:p-[1px] 3xl:p-[2px] rounded-radius5 w-[74%]">
                <Text className="font-bold leading-[normal] mb-[3px] lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] text-[1px] text-gray_801 w-[13%]">
                  PROS
                  <br />
                  PRO.
                  <br />
                  2PRO
                  <br />
                  PRO
                </Text>
                <Text className="font-bold leading-[normal] mb-[3px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] text-[1px] text-gray_801 w-[13%]">
                  CONS
                  <br />
                  CONS
                  <br />
                  CONS
                  <br />
                  CONS
                </Text>
              </Row>
              <Stack className="font-inter xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[74%]">
                <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[88%]">
                  <Text className="font-normal mt-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Rates & Fees
                  </Text>
                  <Text className="font-normal mb-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Benefits
                  </Text>
                  <Text className="font-normal my-[1px] not-italic 2xl:text-[1px] xl:text-[1px] lg:text-[1px] 3xl:text-[2px] text-black_900_99 w-[auto]">
                    Traks Valuation
                  </Text>
                </Row>
                <Row className="absolute border-amber_A200 border-bw05 border-solid items-center justify-end lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] rounded-radius25 w-[100%]">
                  <Line className="bg-amber_A200_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] w-[1px]" />
                  <Line className="bg-amber_A200_7f xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[1px]" />
                </Row>
              </Stack>
            </Column>
          </List>
        </Column>
      </Column>
    </>
  );
};

export default CcmarketplacePage;
