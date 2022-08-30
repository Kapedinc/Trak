import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Line, Button, Stack } from "components";

const BusinesscapitalPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/capital");
  }

  return (
    <>
      <Column className="bg-white_A700 font-hahmlet items-center justify-end mx-[auto] lg:pt-[13px] xl:pt-[15px] 2xl:pt-[16px] 3xl:pt-[20px] w-[100%]">
        <Row className="items-end w-[95%]">
          <Img
            src="images/img_untitleddesign.png"
            className="lg:h-[27px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] w-[12%]"
            alt="Untitleddesign"
          />
          <Text className="font-normal mb-[2px] lg:ml-[168px] xl:ml-[193px] 2xl:ml-[217px] 3xl:ml-[260px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 uppercase w-[auto]">
            Technology
          </Text>
          <Text className="font-normal mb-[2px] 3xl:ml-[101px] lg:ml-[65px] xl:ml-[75px] 2xl:ml-[84px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 uppercase w-[auto]">
            Business Credit Cards
          </Text>
          <Text className="font-normal mb-[2px] lg:ml-[64px] xl:ml-[74px] 2xl:ml-[83px] 3xl:ml-[99px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 uppercase w-[auto]">
            Business Capital
          </Text>
          <Text className="bg-blue_500_bc font-semibold 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[82px] xl:ml-[94px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:px-[11px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] py-[2px] rounded-radius3 lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 uppercase w-[66px]">
            Login
          </Text>
          <Text className="font-medium mb-[2px] lg:ml-[40px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-blue_500 underline uppercase w-[auto]">
            Sign Up/ Book Demo
          </Text>
        </Row>
        <Column className="items-center justify-end lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
          <Line className="bg-black_900 h-[5px] w-[100%]" />
          <Row className="font-kd items-center mr-[auto] lg:mt-[21px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[53%]">
            <Img
              src="images/img_arrow5.svg"
              className="lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] xl:h-[2px] w-[2%]"
              alt="ArrowFive"
            />
            <Text className="font-light lg:ml-[6px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 underline w-[auto]">
              Go Back
            </Text>
            <Img
              src="images/img_moneycloudico.png"
              className="3xl:h-[102px] lg:h-[66px] xl:h-[76px] 2xl:h-[85px] lg:ml-[396px] xl:ml-[453px] 2xl:ml-[509px] 3xl:ml-[611px] w-[23%]"
              alt="moneycloudico"
            />
          </Row>
          <Text className="font-hahmlet font-light mt-[2px] lg:text-[31px] xl:text-[36px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 uppercase w-[auto]">
            Business Capital
          </Text>
          <Text className="font-hahmlet font-normal lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
            Get matched with business lenders based on your business credit
            without any damaginging inquries to your personal credit.
          </Text>
          <Row className="font-inter items-center justify-between 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] w-[88%]">
            <Text className="font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[74%]">
              Weather you are just starting your buisness or have been in
              oprtation for years, it is likely that your business will need
              money for initiative to thrive.
              <br />
              For more information on business capital and what options are best
              suited for your needs, please read our guide below.
            </Text>
            <Button
              className="font-black lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-center tracking-ls1 w-[17%]"
              shape="RoundedBorder21"
              size="md"
            >
              Apply Now!
            </Button>
          </Row>
          <Stack className="font-hahmlet lg:h-[230px] xl:h-[263px] 2xl:h-[295px] 3xl:h-[354px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] w-[100%]">
            <Stack className="absolute lg:h-[158px] xl:h-[181px] 2xl:h-[203px] 3xl:h-[244px] top-[0] w-[100%]">
              <Line className="absolute bg-bluegray_50 h-[180px] w-[100%]" />
              <Column className="absolute bottom-[24%] left-[5%] w-[13%]">
                <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 underline w-[auto]">
                  Business Capital Topics
                </Text>
                <Text className="font-semibold lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-blue_500 w-[71%]">
                  What is Business Capital?
                </Text>
              </Column>
            </Stack>
            <Column className="absolute bottom-[11%] right-[5%] w-[72%]">
              <Text className="font-hahmlet font-semibold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-blue_500 w-[auto]">
                What is Business Capital?
              </Text>
              <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[100%]">
                Business capital refers to money used by a business to pay for
                assets and day-to-day expenses. This money is also used to pay
                for expansion in the future. Sometimes, a business doesn’t have
                sufficient capital of its own and needs to get funds
                elsewhere—this is where financing comes in. The business could
                approach a financial institution for a loan or look into other
                options such as venture capital.
                <br />
                <br />
                You’ve probably come across the concept before and have a good
                idea of how credit works. It’s possible that you already have
                personal or business credit and understand its benefits and
                drawbacks. In the perfect world, no one would ever need to
                borrow money to cover their business costs. Unfortunately, it’s
                unlikely that any company can grow without additional funding;
                this is why capital is so important.
              </Text>
            </Column>
            <Text className="absolute bottom-[27%] font-semibold lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] left-[5%] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-blue_500 w-[9%]">
              Types of Business Loans
            </Text>
            <Text className="absolute bottom-[0] font-semibold lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] left-[5%] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-blue_500 w-[9%]">
              Obtaining Credit for Your Business
            </Text>
          </Stack>
          <Row className="font-hahmlet justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[90%]">
            <Text className="font-semibold lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-blue_500 w-[10%]">
              Qualifying for Business Credit
            </Text>
            <Column className="w-[80%]">
              <Text className="font-hahmlet font-medium lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
                Why Financing Is Necessary
              </Text>
              <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[21px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[100%]">
                You don’t want to use your day-to-day funds to cover the costs
                of expensive machinery or large projects since you need that
                money to pay for daily expenses. Capital allows you to obtain
                tangible assets and invest in bigger projects without worrying
                about paying the normal bills at the end of the month.
                <br />
                <br />
                An opportunity could come your way where your income will be
                boosted greatly, but to take on the project, you need to do
                additional research and development; purchase large quantities
                of raw materials; or hire extra employees. These circumstances
                necessitate an increase in working capital until you get paid
                for the work—finance can help in this case, too.
                <br />
                <br />
                <br />
                At some time, your business might go through a slow period, like
                when shops closed during the pandemic. It’s reasonable to look
                for credit during such times to ensure your business can remain
                open despite its financial constraints.
                <br />
              </Text>
            </Column>
          </Row>
          <Text className="font-hahmlet font-medium lg:mt-[127px] xl:mt-[146px] 2xl:mt-[164px] 3xl:mt-[197px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
            How Credit Works
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[21px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            Once you determine that you need some financial help, you will need
            to apply for credit. Before you do that, you should understand the
            basic idea behind credit.
            <br />
            <br />
            <br />A financial institution will lend you a sum of money known as
            the principal amount. In turn, you need to repay the principal
            amount plus interest or an annual percentage rate (APR) on it over a
            specific period of time. In some cases, the financial institution
            may ask you for collateral to secure the loan. Collateral is some
            kind of guarantee that you will be able to repay the loan. For
            example, you might have a vehicle, building, or expensive equipment
            in your business. If you do not pay the loan, then the institution
            can seize the collateral mentioned and sell it off to cover the loan
          </Text>
          <Stack className="font-hahmlet lg:h-[193px] xl:h-[221px] 2xl:h-[248px] 3xl:h-[298px] lg:mt-[100px] xl:mt-[115px] 2xl:mt-[129px] 3xl:mt-[155px] w-[71%]">
            <Row className="absolute bg-gray_400_33 left-[0] lg:p-[28px] xl:p-[33px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius15 w-[88%]">
              <Img
                src="images/img_piggybankicon.png"
                className="lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[79px] 3xl:mt-[95px] lg:w-[52px] xl:w-[60px] 2xl:w-[67px] 3xl:w-[81px]"
                alt="piggybankicon"
              />
              <Text className="font-redhatdisplay font-semibold leading-[normal] lg:mb-[19px] xl:mb-[22px] 2xl:mb-[24px] 3xl:mb-[29px] lg:ml-[48px] xl:ml-[55px] 2xl:ml-[61px] 3xl:ml-[74px] lg:mt-[60px] xl:mt-[69px] 2xl:mt-[77px] 3xl:mt-[93px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[31%]">
                No Personal Guarantee!
                <br />
                No Security Deposit!
                <br />
                No Personal Credit Check!
              </Text>
              <Button
                className="font-black font-inter lg:ml-[138px] xl:ml-[158px] 2xl:ml-[177px] 3xl:ml-[213px] xl:mt-[111px] 2xl:mt-[124px] 3xl:mt-[149px] lg:mt-[97px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-center tracking-ls1 w-[26%]"
                shape="RoundedBorder21"
                size="md"
              >
                Sign Up Now!
              </Button>
            </Row>
            <Text className="absolute font-medium inset-x-[0] leading-[normal] mx-[auto] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-teal_A400 top-[19%] w-[96%]">
              <span className="text-blue_500 font-hahmlet">
                Save The Secuirty Deposit For Yourself
              </span>
              <span className="text-teal_A400 font-hahmlet">
                {" "}
                <br />
              </span>
              <span className="text-black_900 font-hahmlet">
                And Use TRAKs Curated Business Credit Market Place, Which
                Offers:
                <br />
              </span>
              <span className="text-teal_A400 font-hahmlet">
                <br />
              </span>
            </Text>
          </Stack>
          <Text className="font-hahmlet font-semibold lg:mt-[100px] xl:mt-[115px] 2xl:mt-[129px] 3xl:mt-[155px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-blue_500 w-[auto]">
            Types of Business Loans
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            When you need credit for your business, there are several options
            available to you. It helps to understand the different types of
            capital available so that you can choose the one most suitable to
            your needs. It doesn’t help to go with the first option available to
            you. You have to consider alternatives, which is something Trak can
            help you with.
          </Text>
          <Row className="font-hahmlet items-center mr-[auto] lg:mt-[21px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[30%]">
            <Img
              src="images/img_6211bc1e7048183.png"
              className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
              alt="6211bc1e7048183"
            />
            <Text className="font-medium lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
              Merchant Cash Advance (MCA)
            </Text>
          </Row>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            A Merchant Cash Advance (MCA) provides you with an up-front cash
            lump sum (up to $250,000 or even more) when you cannot get credit
            from the bank. Repayments are not made in installments; instead,
            payments are made through your sales. As such, you have to use your
            monthly revenue to demonstrate that you can afford repayments.
            <br />
            <br />
            <br />
            <br />
            You can choose to have a percentage of your daily debit or credit
            card sales go toward repaying the MCA. The financial institution
            will withhold this percentage automatically. Alternatively, you can
            opt for a fixed daily or weekly withdrawal amount directly from your
            bank account.
          </Text>
          <Text className="font-hahmlet font-semibold lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-teal_A400 uppercase w-[auto]">
            Pros
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            Quickly accessible Cash
            <br />
            Accessible to those with lower credit scores
            <br />
            Collateral is not required
          </Text>
          <Text className="font-hahmlet font-semibold lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-deep_orange_300 uppercase w-[auto]">
            Cons
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            Extremely high APR
            <br />
            Cash flow problems can arise from frequent payments
            <br />
            Does not affect credit score
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            An MCA is best suited for businesses that experience a high volume
            of card sales in order to make constant repayments without affecting
            their day-to-day cash flow. It also works well for companies that
            have a short time span in which to get capital and don’t have a
            decent credit profile to qualify at another bank.
          </Text>
          <Row className="font-hahmlet items-center mr-[auto] lg:mt-[21px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[25%]">
            <Img
              src="images/img_6211bc4f0f482f6.png"
              className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
              alt="6211bc4f0f482fSix"
            />
            <Text className="font-medium lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
              Business Lines of Credit
            </Text>
          </Row>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            A business line of credit is a predetermined credit limit that you
            can borrow against time and again. Interest is payable only on the
            amount you have drawn which provides greater credit flexibility.
            <br />
            <br />
            <br />
            <br />
            After applying and getting approval, you can withdraw money whenever
            you need it. The revenue and credit profile of the business are
            crucial for lines of credit which makes qualifying for them
            challenging. If you do get approved, your business may qualify for
            up to $100,000.
          </Text>
          <Text className="font-hahmlet font-semibold lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-teal_A400 uppercase w-[auto]">
            Pros
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            Flexible borrowing
            <br />
            Instant access to money
            <br />
            Collateral is usually not required
          </Text>
          <Text className="font-hahmlet font-semibold lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-deep_orange_300 uppercase w-[auto]">
            Cons
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            Strong credit record is needed
            <br />
            May have high fees
            <br />
            Must have good annual revenue
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            Businesses that have sudden, unanticipated cash flow problems or
            need money for a short-term solution may benefit from a line of
            credit. Seasonal businesses with strong revenue can also use this
            option during their off-peak seasons.
          </Text>
          <Row className="font-hahmlet items-center mr-[auto] lg:mt-[21px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[48%]">
            <Img
              src="images/img_6211bc73674f675.png"
              className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
              alt="6211bc73674f675"
            />
            <Text className="font-medium lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
              Term Loans
            </Text>
          </Row>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            A term loan provides a lump sum amount to be repaid over an
            agreed-upon period. Interest is applicable to the entire loan
            amount, and most financial institutions require collateral,
            especially for larger loans. Some lenders offer loans up to $1
            million.
            <br />
            <br />
            <br />
            <br />
            The term for these loans depends on whether the focus is short,
            medium, or long term and ranges from a couple of months up to 20
            years. Banks usually take some time to approve term loans, so many
            business people prefer to make use of online lending services.
          </Text>
          <Text className="font-hahmlet font-semibold lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-teal_A400 uppercase w-[auto]">
            Pros
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            Can borrow higher amounts
            <br />
            Upfront cash available for investments
            <br />
            Reasonable interest rates
          </Text>
          <Text className="font-hahmlet font-semibold lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-deep_orange_300 uppercase w-[auto]">
            Cons
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            Long waiting periods if using a bank
            <br />
            Online lenders may charge higher fees
            <br />
            Typically requires collateral or a personal guarantee
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            Term loans are ideal for businesses that have a history of good
            performance and want to expand their operations. If you are planning
            to open another outlet, branch out into another country, or are busy
            prototyping a new product, then it is worth looking into a term loan
            that can be paid off over several years.
          </Text>
          <Row className="font-hahmlet items-center mr-[auto] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] w-[48%]">
            <Img
              src="images/img_6211bcb93ab1f97.png"
              className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
              alt="6211bcb93ab1fNinetySeven"
            />
            <Text className="font-medium lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
              Business Credit Cards
            </Text>
          </Row>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            A business credit card allows you to access a revolving line of
            credit whenever you need it. Credit card limits vary between $1,000
            and $25,000. Financial institutions require a minimum monthly
            repayment for the business to maintain the facility.
          </Text>
          <Text className="font-hahmlet font-semibold lg:mt-[21px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-teal_A400 uppercase w-[auto]">
            Pros
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            Doesn’t require collateral
            <br />
            Could be part of a a rewards program
            <br />
            Easier to get than a line of credit or term loan
          </Text>
          <Text className="font-hahmlet font-semibold lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-deep_orange_300 uppercase w-[auto]">
            Cons
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            High fees
            <br />
            Interest may vary depending on spending and repayment
            <br />
            Potentially longer waiting time for approval
          </Text>
          <Text className="font-inter font-normal lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[90%]">
            Business credit cards are the perfect solution if you need some
            extra cash for ongoing expenses during the month. It also works well
            to give them to reliable employees who need to make purchases on
            your behalf, to pay for travel costs, and for accommodation
            expenses.
          </Text>
        </Column>
      </Column>
    </>
  );
};

export default BusinesscapitalPage;
