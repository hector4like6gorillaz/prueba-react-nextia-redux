import React, { useEffect, useState } from "react";
import GlobalButton from "../../../GlobalComponents/GlobalButton";
import SkeletonArticle from "../../../GlobalComponents/PreloaderContent/SkeletonArticle";
import {
  BenevitsContainer,
  CardContainer,
  LockedDiv,
  LockedImg,
  UnlockedDiv,
  UnlockedImg,
  UnlockParagraph,
} from "../../../styles/styledGlobalComponents";
import { BenevitsModel, LandingBenevitsModel } from "../models/Benevits";
import { WalletModel } from "../models/Wallets";

const WalletsBenebits = (props: {
  wallets: Array<WalletModel>;
  landingBenevits: LandingBenevitsModel;
}) => {
  const { wallets, landingBenevits } = props;
  const { locked, unlocked } = landingBenevits;
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, [landingBenevits]);

  return (
    <>
      {wallets.map((itemWallet: WalletModel, index: number) => {
        return (
          <>
            <div
              style={{ marginBottom: "10px" }}
              key={`${itemWallet.name}${index}`}
            >
              {itemWallet.name}
            </div>
            <BenevitsContainer key={itemWallet.name}>
              {unlocked.map((itemBene: BenevitsModel) => {
                return (
                  <>
                    {itemWallet.name === itemBene.wallet.name && (
                      <CardContainer key={`${itemBene.vector_full_path}`}>
                        {!loading ? (
                          <>
                            <UnlockedDiv>
                              <UnlockedImg
                                src={itemBene.ally.mini_logo_full_path}
                                alt={itemBene.ally.mini_logo_file_name}
                              />
                            </UnlockedDiv>
                            <UnlockParagraph>
                              {itemBene.ally.name}
                            </UnlockParagraph>

                            <UnlockParagraph>{itemBene.title}</UnlockParagraph>
                          </>
                        ) : (
                          <SkeletonArticle ColorTheme="light" />
                        )}
                      </CardContainer>
                    )}
                  </>
                );
              })}
              {locked.map((itemBene: BenevitsModel) => {
                return (
                  <>
                    {itemWallet.name === itemBene.wallet.name && (
                      <CardContainer key={`${itemBene.description}`}>
                        {!loading ? (
                          <>
                            <LockedDiv>
                              <LockedImg
                                src={itemBene.vector_full_path}
                                alt={itemBene.ally.mini_logo_file_name}
                              />
                            </LockedDiv>
                            <GlobalButton
                              name="Lo quiero"
                              handleFunction={() => {}}
                              disabled={false}
                              borderRadius={5}
                            />
                          </>
                        ) : (
                          <SkeletonArticle ColorTheme="light" />
                        )}
                      </CardContainer>
                    )}
                  </>
                );
              })}
            </BenevitsContainer>
          </>
        );
      })}
    </>
  );
};

export default WalletsBenebits;
