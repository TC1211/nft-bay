import { useContractKit } from "@celo-tools/use-contractkit";

import AuctionModal from "../Base/AuctionModal";

// Types
import { ContractKit } from "@celo/contractkit";
import { AuctionFactory } from "../../contracts/typings/AuctionFactory";

const MINUTE = 60; // seconds
const BLOCK_TIME = 5; // seconds

export type TransactionResult = Awaited<
  ReturnType<ContractKit["sendTransaction"]>
>;


const CreateAuctionModal = ({
  auctionFactoryContract,
}: {
  auctionFactoryContract: AuctionFactory;
}) => {
 const { performActions } = useContractKit()

 const createAuction = async (imageUrl: string, bidTime = 5) => {
    return (await performActions(async (kit) => {
      if (!kit.defaultAccount) return;

      const bidIncrement = 1;
      const auctionDurationInBlocks = Math.ceil(
        (bidTime * MINUTE)
      );

      const createActionTx = auctionFactoryContract.methods.createAuction(
        bidIncrement,
        auctionDurationInBlocks,
        imageUrl
      );

      const args = {
        from: kit.defaultAccount,
        data: createActionTx.encodeABI(),
      };

      const gas = await createActionTx.estimateGas(args);

      return await kit.sendTransaction({ ...args, gas });
    })) as TransactionResult[];
  };

  return <AuctionModal createAuction={createAuction} />;
};

export default CreateAuctionModal;
